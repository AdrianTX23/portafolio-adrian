"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();
  const next = locale === "es" ? "en" : "es";

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={t.languageToggle.ariaLabel}
      onClick={() => setLocale(next)}
      className="px-2.5 text-xs font-semibold tracking-wide uppercase"
    >
      {locale}
    </Button>
  );
}
