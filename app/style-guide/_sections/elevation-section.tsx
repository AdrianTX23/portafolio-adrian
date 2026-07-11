"use client";

import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";

const levels = [
  { label: "elevation-1", className: "shadow-elevation-1" },
  { label: "elevation-2", className: "shadow-elevation-2" },
  { label: "elevation-3", className: "shadow-elevation-3" },
];

export function ElevationSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-section-sm">
      <SectionHeading eyebrow="Profundidad" title="Elevación y spotlight" />

      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {levels.map((level, i) => (
          <Reveal key={level.label} delay={i * 0.08}>
            <div
              className={`bg-card border-border flex h-28 items-center justify-center rounded-2xl border ${level.className}`}
            >
              <span className="text-caption text-muted-foreground font-mono">
                {level.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.16}>
        <SpotlightCard className="p-8">
          <p className="text-h3 mb-2 font-semibold">Spotlight card</p>
          <p className="text-muted-foreground max-w-md">
            El brillo sigue al cursor con un gradiente radial en el color de marca —
            patrón usado en las tarjetas de proyecto.
          </p>
        </SpotlightCard>
      </Reveal>

      <Reveal delay={0.24}>
        <div className="mt-8 flex justify-center">
          <Magnetic>
            <Button className="shadow-glow bg-brand text-brand-foreground hover:bg-brand h-11 gap-2 rounded-full px-6 hover:opacity-90">
              Ver proyectos
              <ArrowUpRight className="size-4" />
            </Button>
          </Magnetic>
        </div>
      </Reveal>
    </section>
  );
}
