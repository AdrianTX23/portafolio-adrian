"use client";

import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { AuroraBackground } from "@/components/motion/aurora-background";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Container } from "@/components/shared/container";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/nav-links";

const socials = [
  { label: "GitHub", href: SOCIAL_LINKS.github, icon: GithubIcon },
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon },
  { label: "Correo", href: `mailto:${SOCIAL_LINKS.email}`, icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="relative overflow-hidden py-section-sm text-center">
        <AuroraBackground className="opacity-60" />
        <Container size="narrow" className="relative z-10">
          <Reveal>
            <TextReveal
              as="p"
              text="¿Construimos algo juntos?"
              className="text-h1 font-semibold text-balance"
              wordClassName="text-gradient-brand"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground mx-auto mt-4 max-w-md">
              Siempre abierto a hablar de nuevos proyectos, roles o ideas.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex justify-center">
              <Magnetic>
                <Button
                  asChild
                  className="shadow-glow bg-brand text-brand-foreground h-11 gap-2 rounded-full px-6 hover:opacity-90"
                >
                  <Link href="#contacto">
                    Escríbeme
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-8 flex justify-center gap-2">
              {socials.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild>
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="size-4.5" />
                  </a>
                </Button>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>

      <Container className="border-border flex flex-col items-center gap-4 border-t py-6 sm:flex-row sm:justify-between">
        <Logo />
        <p className="text-muted-foreground text-caption">
          © {year} Adrián Pico Martínez. Todos los derechos reservados.
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Volver arriba
          <ArrowUp className="size-3.5" />
        </Button>
      </Container>
    </footer>
  );
}
