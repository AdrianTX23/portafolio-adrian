"use client";

import { ArrowUp, Mail } from "lucide-react";
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
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-muted-foreground max-w-sm text-sm">
            Ingeniero de Sistemas construyendo productos digitales rápidos, escalables
            y con interfaces cuidadas.
          </p>
        </div>

        <div className="flex items-center gap-2">
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
      </Container>

      <Container className="border-border flex flex-col items-center gap-4 border-t py-6 sm:flex-row sm:justify-between">
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
