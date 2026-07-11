"use client";

import { BlurImage } from "@/components/motion/blur-image";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { SectionHeading } from "./section-heading";

export function InteractiveSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-section-sm">
      <SectionHeading eyebrow="Imagen interactiva" title="Tilt + blur-up" />
      <Reveal>
        <TiltCard className="shadow-elevation-2 mx-auto max-w-2xl overflow-hidden rounded-2xl">
          <div className="relative aspect-video">
            <BlurImage
              src="/style-guide/demo-cover.svg"
              alt="Vista previa interactiva de proyecto"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          </div>
        </TiltCard>
        <p className="text-caption text-muted-foreground mt-4 text-center font-mono">
          Mueve el cursor sobre la imagen — este mismo componente envolverá las
          capturas reales de proyecto en la Fase 5.
        </p>
      </Reveal>
    </section>
  );
}
