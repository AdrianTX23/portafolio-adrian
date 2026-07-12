import { MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Typewriter } from "@/components/motion/typewriter";
import { HeroCanvas } from "./hero-canvas";
import { HeroScrollFade } from "./hero-scroll-fade";

const stats = [
  { label: "Años de experiencia", value: "3+" },
  { label: "Proyectos entregados", value: "6" },
  { label: "Nivel de inglés", value: "B2" },
];

const taglines = [
  "construyendo interfaces rápidas.",
  "optimizando cada carga de página.",
  "cuidando el detalle en cada pixel.",
  "aprendiendo algo nuevo cada semana.",
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden">
      <HeroCanvas />

      <HeroScrollFade>
        <Reveal>
          <span className="border-border text-muted-foreground mb-6 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium">
            <MapPin className="size-3.5" />
            Barranquilla, Colombia · Frontend Software Engineer
          </span>
        </Reveal>

        <TextReveal
          as="h1"
          text="Construyo productos digitales rápidos, escalables y cuidados al detalle."
          className="text-display font-semibold text-balance"
        />

        <Reveal delay={0.26}>
          <p className="text-muted-foreground mt-5 font-mono text-sm">
            <span className="text-brand">&gt;</span> <Typewriter phrases={taglines} />
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <p className="text-lead text-muted-foreground mx-auto mt-4 max-w-2xl text-balance">
            Ingeniero de Sistemas especializado en Next.js, React, TypeScript y
            PostgreSQL — con experiencia real en soluciones empresariales, Power BI y
            desarrollo frontend.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <dl className="mt-14 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-h3 font-semibold">{stat.value}</dd>
                <p className="text-caption text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </HeroScrollFade>
    </section>
  );
}
