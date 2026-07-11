"use client";

import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const scale = [
  { token: "text-display", sample: "Diseño con precisión", size: "clamp 44–88px" },
  { token: "text-h1", sample: "Ingeniería y estética", size: "clamp 36–60px" },
  { token: "text-h2", sample: "Cada detalle cuenta", size: "clamp 28–44px" },
  { token: "text-h3", sample: "Componentes reutilizables", size: "clamp 22–30px" },
  { token: "text-lead", sample: "Texto introductorio de apoyo.", size: "clamp 18–22px" },
];

export function TypographySection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-section-sm">
      <SectionHeading eyebrow="Tipografía" title="Escala fluida" />
      <div className="space-y-8">
        {scale.map((item, i) => (
          <Reveal key={item.token} delay={i * 0.06}>
            <div className="border-border flex flex-col gap-1 border-b pb-6">
              <p className={`${item.token} font-semibold`}>{item.sample}</p>
              <p className="text-caption text-muted-foreground font-mono">
                {item.token} — {item.size}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
