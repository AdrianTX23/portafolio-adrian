"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { LanguageToggle } from "@/components/shared/language-toggle";
import { Logo } from "@/components/shared/logo";
import { MobileNav } from "@/components/shared/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { NAV_LINKS } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLocale();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={shouldReduceMotion ? false : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={cn(
          "flex h-12 w-full max-w-4xl items-center justify-between rounded-full px-2 transition-all duration-500",
          scrolled
            ? "glass border border-white/10 shadow-elevation-2 backdrop-blur-2xl"
            : "border border-transparent bg-transparent",
        )}
      >
        <div className="pl-3">
          <Logo />
        </div>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground rounded-full px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 hover:bg-white/5"
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-0.5 pr-1">
          <LanguageToggle />
          <ThemeToggle />
          <MobileNav />
        </div>
      </motion.nav>
    </header>
  );
}
