import i18n, { type InitOptions, type TOptions } from "i18next";
import { initReactI18next, useTranslation as useReactI18nextTranslation } from "react-i18next";

import {
  DEFAULT_LOCALE,
  i18nextResources,
  isSupportedLocale,
  supportedLocales,
  type SupportedLocale,
} from "./locales";

export const LOCALE_STORAGE_KEY = "paperclip.locale";

function getInitialLocale(): SupportedLocale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const persisted = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  if (isSupportedLocale(persisted)) return persisted;

  const browserLocale = window.navigator.language;
  const initialLocale = browserLocale.toLowerCase().startsWith("pt-") ? "pt-BR" : DEFAULT_LOCALE;
  window.localStorage.setItem(LOCALE_STORAGE_KEY, initialLocale);
  return initialLocale;
}

const i18nextOptions: InitOptions = {
  resources: i18nextResources,
  lng: getInitialLocale(),
  fallbackLng: "en",
  supportedLngs: supportedLocales,
  defaultNS: "translation",
  interpolation: { escapeValue: false },
  returnObjects: false,
  initAsync: false,
};

void i18n.use(initReactI18next).init(i18nextOptions).catch((error: unknown) => {
  console.error("Failed to initialize i18next", error);
});

export function t(key: string, options: TOptions = {}) {
  return i18n.t(key, options);
}

export function setLocale(locale: SupportedLocale) {
  if (!isSupportedLocale(locale)) return;
  void i18n.changeLanguage(locale);
  if (typeof window !== "undefined") {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }
}

export const useTranslation = useReactI18nextTranslation;
export { supportedLocales } from "./locales";
export type { SupportedLocale } from "./locales";
export { i18n };
