"use client";

import Link from "next/link";
import { useLocale } from "@/components/providers/locale-provider";
import { LogoMark } from "./logo-mark";

export function Logo() {
  const { t } = useLocale();

  return (
    <Link
      href="/"
      className="focus-visible:ring-ring group inline-flex items-center gap-2 rounded-md text-sm font-semibold tracking-tight outline-none focus-visible:ring-2"
      aria-label={t.logo.ariaLabel}
    >
      <LogoMark className="text-brand size-7 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6" />
      {t.logo.label}
    </Link>
  );
}
