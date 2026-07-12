"use client";

import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { AmbientMesh } from "@/components/motion/ambient-mesh";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/shared/container";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/nav-links";

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLocale();

  const socials = [
    { label: "GitHub", href: SOCIAL_LINKS.github, icon: GithubIcon },
    { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon },
    { label: t.contact.emailLabel, href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail },
  ];

  return (
    <footer className="relative overflow-hidden">
      <div className="relative py-section-sm text-center">
        <AmbientMesh />
        <Container size="narrow" className="relative">
          <Reveal>
            <TextReveal
              as="p"
              text={t.footer.heading}
              className="font-heading text-h1 font-semibold tracking-tight text-balance"
              wordClassName="gradient-text"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground mx-auto mt-5 max-w-md text-lead">
              {t.footer.description}
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10 flex justify-center">
              <Magnetic>
                <Button
                  asChild
                  className="shadow-glow bg-brand text-brand-foreground h-12 gap-2 rounded-full px-8 text-sm font-medium hover:opacity-90"
                >
                  <Link href="#contacto">
                    {t.footer.writeToMe}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </Container>
      </div>

      <div className="section-divider" />

      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2 lg:max-w-sm">
          <Logo />
          <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-caption text-muted-foreground mb-4 font-medium tracking-[0.12em] uppercase">
            {t.footer.quickLinksTitle}
          </h3>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-caption text-muted-foreground mb-4 font-medium tracking-[0.12em] uppercase">
            {t.footer.contactTitle}
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 break-all transition-colors"
              >
                <Mail className="text-brand size-3.5 shrink-0" />
                {SOCIAL_LINKS.email}
              </a>
            </li>
            <li className="text-muted-foreground inline-flex items-center gap-2">
              <MapPin className="text-brand size-3.5 shrink-0" />
              {t.contact.location}
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {socials.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className="glass size-9 rounded-full border border-white/10"
              >
                <a
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="size-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </Container>

      <div className="section-divider" />

      <Container className="flex flex-col items-center gap-4 py-7 sm:flex-row sm:justify-between">
        <p className="text-muted-foreground text-caption tracking-wide">
          © {year} Adrián Pico Martínez. {t.footer.rights}
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="glass gap-1.5 rounded-full border border-white/10 px-4"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {t.footer.backToTop}
          <ArrowUp className="size-3.5" />
        </Button>
      </Container>
    </footer>
  );
}
