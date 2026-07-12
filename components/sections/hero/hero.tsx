"use client";

import { ArrowDownRight, MapPin } from "lucide-react";
import Link from "next/link";
import { AmbientMesh } from "@/components/motion/ambient-mesh";
import { CountUp } from "@/components/motion/count-up";
import { HeroParallax } from "@/components/motion/hero-parallax";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { ScrollIndicator } from "@/components/motion/scroll-indicator";
import { Typewriter } from "@/components/motion/typewriter";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { HeroScrollFade } from "./hero-scroll-fade";

export function Hero() {
  const { t } = useLocale();

  const stats = [
    { label: t.hero.stats.experience, value: "3+" },
    { label: t.hero.stats.projects, value: "6" },
    { label: t.hero.stats.english, value: "B2" },
  ];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
      <AmbientMesh intensity="hero" />

      <HeroScrollFade>
        <HeroParallax>
          <Reveal>
            <span className="glass text-muted-foreground mb-8 inline-flex items-center gap-2 rounded-full border border-black/5 px-4 py-1.5 text-xs font-medium tracking-wide dark:border-white/10">
              <MapPin className="text-brand size-3.5" />
              {t.hero.location}
              <span className="bg-border mx-1 h-3 w-px" />
              {t.hero.role}
            </span>
          </Reveal>

          <h1 className="font-heading text-display font-semibold tracking-tight text-balance">
            <Typewriter phrases={[t.hero.headline]} key={t.hero.headline} />
          </h1>

          <Reveal delay={0.26}>
            <p className="text-muted-foreground mt-6 font-mono text-sm">
              <span className="text-brand">&gt;</span>{" "}
              <Typewriter phrases={t.hero.taglines} key={t.hero.taglines.join()} />
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <p className="text-lead text-muted-foreground mx-auto mt-5 max-w-2xl text-balance">
              {t.hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Button
                  asChild
                  className="shadow-glow bg-brand text-brand-foreground h-12 gap-2 rounded-full px-7 text-sm font-medium hover:opacity-90"
                >
                  <Link href="#proyectos">
                    {t.hero.ctaProjects}
                    <ArrowDownRight className="size-4" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  asChild
                  variant="outline"
                  className="glass h-12 rounded-full border-black/5 px-7 text-sm font-medium backdrop-blur-xl dark:border-white/10"
                >
                  <Link href="#contacto">{t.hero.ctaContact}</Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <dl className="glass-card mt-16 grid grid-cols-3 overflow-hidden rounded-2xl border">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background/40 px-4 py-6 backdrop-blur-sm sm:px-8 sm:py-8 [&:not(:last-child)]:border-r [&:not(:last-child)]:border-black/5 dark:[&:not(:last-child)]:border-white/5"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-h2 font-semibold tracking-tight">
                    <CountUp value={stat.value} />
                  </dd>
                  <p className="text-caption text-muted-foreground mt-2 font-medium tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </HeroParallax>
      </HeroScrollFade>

      <ScrollIndicator />
    </section>
  );
}
