import type { Locale } from "@/lib/i18n/types";

export function formatMonthYear(value: string, locale: Locale = "es"): string {
  if (value === "present") return locale === "es" ? "Actualidad" : "Present";
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  if (!match) return value;

  const [, year, month] = match;
  const date = new Date(Number(year), Number(month) - 1);
  const formatted = new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(date);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}
