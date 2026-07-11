"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/shared/container";
import { Logo } from "@/components/shared/logo";
import { MobileNav } from "@/components/shared/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { NAV_LINKS } from "@/lib/nav-links";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/70 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
