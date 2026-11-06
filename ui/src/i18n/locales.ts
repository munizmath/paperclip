import type { Resource } from "i18next";

import { assertValidLocaleMessages } from "./locale-validation";
import { productLocaleMessages } from "./product-messages";

// The PT-BR fork is intentionally Portuguese-first. English remains the
// fallback while the rest of the Paperclip surface is migrated to message
// keys instead of hard-coded copy.
export const DEFAULT_LOCALE = "pt-BR" as const;

const localeModules = import.meta.glob("./locales/*.json", {
  eager: true,
  import: "default",
}) as Record<string, unknown>;

export const localeMessages = Object.fromEntries(
  Object.entries(localeModules).map(([path, messages]) => {
    const locale = path.match(/\/([A-Za-z0-9_-]+)\.json$/)?.[1];
    if (!locale) {
      throw new Error(`Invalid locale file path: ${path}`);
    }
    return [locale, messages];
  }),
);

if (!(DEFAULT_LOCALE in localeMessages)) {
  throw new Error(`Missing default locale messages for ${DEFAULT_LOCALE}`);
}

for (const [locale, messages] of Object.entries(localeMessages)) {
  try {
    assertValidLocaleMessages(messages);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid ${locale} locale messages: ${message}`);
  }
}

export type SupportedLocale = Extract<keyof typeof localeMessages, string>;

export const supportedLocales = Object.keys(localeMessages) as SupportedLocale[];

export function isSupportedLocale(value: string | null | undefined): value is SupportedLocale {
  return Boolean(value && supportedLocales.includes(value as SupportedLocale));
}

export const i18nextResources: Resource = Object.fromEntries(
  Object.entries(localeMessages).map(([locale, messages]) => {
    const productMessages = productLocaleMessages[locale as keyof typeof productLocaleMessages];
    return [
      locale,
      {
        translation: productMessages
          ? { ...(messages as Record<string, unknown>), ...productMessages }
          : messages,
      },
    ];
  }),
) as Resource;
