"use client";

import { AuroraBackground } from "@/components/motion/aurora-background";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export function HeroIntro() {
  return (
    <header className="relative flex min-h-[70svh] flex-col justify-between overflow-hidden px-6 pt-6 pb-16">
      <AuroraBackground />

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-caption text-muted-foreground font-mono">
          adrianpico.dev
        </span>
        <ThemeToggle />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="text-brand text-caption mb-4 font-mono uppercase">
            Fase 3 · Sistema visual
          </p>
        </Reveal>
        <TextReveal
          as="h1"
          text="Un lenguaje visual con precisión de producto."
          className="text-display font-semibold text-balance"
        />
        <Reveal delay={0.3}>
          <p className="text-lead text-muted-foreground mx-auto mt-6 max-w-xl text-balance">
            Color, tipografía, elevación y movimiento — la misma gramática que
            usarán todas las secciones del portafolio.
          </p>
        </Reveal>
      </div>

      <div />
    </header>
  );
}
