"use client";

import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { AmbientMesh } from "@/components/motion/ambient-mesh";
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
    <footer className="relative overflow-hidden">
      <div className="relative py-section-sm text-center">
        <AmbientMesh />
        <Container size="narrow" className="relative">
          <Reveal>
            <TextReveal
              as="p"
              text="¿Construimos algo juntos?"
              className="font-heading text-h1 font-semibold tracking-tight text-balance"
              wordClassName="gradient-text"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-muted-foreground mx-auto mt-5 max-w-md text-lead">
              Siempre abierto a hablar de nuevos proyectos, roles o ideas.
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
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="glass size-10 rounded-full border border-white/10"
                >
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

      <div className="section-divider" />

      <Container className="flex flex-col items-center gap-4 py-8 sm:flex-row sm:justify-between">
        <Logo />
        <p className="text-muted-foreground text-caption tracking-wide">
          © {year} Adrián Pico Martínez. Todos los derechos reservados.
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="glass gap-1.5 rounded-full border border-white/10 px-4"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Volver arriba
          <ArrowUp className="size-3.5" />
        </Button>
      </Container>
    </footer>
  );
}
