import { setLocale, supportedLocales, useTranslation, type SupportedLocale } from "@/i18n";

const LOCALE_LABELS: Record<string, string> = {
  "pt-BR": "Português (Brasil)",
  en: "English",
};

export function LocaleSwitcher() {
  const { t, i18n } = useTranslation();
  const currentLocale = (i18n.resolvedLanguage ?? "pt-BR") as SupportedLocale;

  return (
    <label className="flex min-h-9 items-center justify-between gap-3 rounded-lg px-2.5 text-(length:--text-compact) font-medium text-foreground">
      <span>{t("common.language")}</span>
      <select
        value={currentLocale}
        onChange={(event) => setLocale(event.target.value as SupportedLocale)}
        className="min-w-28 rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label={t("common.language")}
      >
        {supportedLocales
          .filter((locale) => locale in LOCALE_LABELS)
          .map((locale) => (
            <option key={locale} value={locale}>
              {LOCALE_LABELS[locale]}
            </option>
          ))}
      </select>
    </label>
  );
}
