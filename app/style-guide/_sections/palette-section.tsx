"use client";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const swatches = [
  { label: "background", className: "bg-background border-border border" },
  { label: "foreground", className: "bg-foreground" },
  { label: "card", className: "bg-card border-border border" },
  { label: "muted", className: "bg-muted" },
  { label: "border", className: "bg-border" },
  { label: "brand", className: "bg-brand" },
  { label: "brand-muted", className: "bg-brand-muted border-brand-border border" },
  { label: "destructive", className: "bg-destructive" },
];

export function PaletteSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-section-sm">
      <SectionHeading eyebrow="Color" title="Paleta semántica" />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {swatches.map((swatch, i) => (
          <Reveal key={swatch.label} delay={i * 0.05}>
            <div className={`h-20 rounded-xl ${swatch.className}`} />
            <p className="text-caption text-muted-foreground mt-2 font-mono">
              {swatch.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
