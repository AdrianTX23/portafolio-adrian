"use client";

import { Briefcase, FileDown, FolderGit2, Languages, Mail, User } from "lucide-react";
import Link from "next/link";
import { CountUp } from "@/components/motion/count-up";
import { HeroParallax } from "@/components/motion/hero-parallax";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { ScrollIndicator } from "@/components/motion/scroll-indicator";
import { Spotlight } from "@/components/motion/spotlight";
import { Typewriter } from "@/components/motion/typewriter";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { HeroScrollFade } from "./hero-scroll-fade";

const EMAIL = "adrian-pico-28@hotmail.com";

export function Hero() {
  const { t } = useLocale();

  const stats = [
    { label: t.hero.stats.experience, value: "3+", icon: Briefcase },
    { label: t.hero.stats.projects, value: "6", icon: FolderGit2 },
    { label: t.hero.stats.english, value: "B2", icon: Languages },
  ];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden">
      <Spotlight />

      <HeroScrollFade>
        <HeroParallax>
          <Reveal>
            <h1 className="font-heading text-display font-bold tracking-tight text-balance">
              Adrián Pico Martínez
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="font-heading text-brand mt-3 text-h2 font-semibold tracking-tight text-balance">
              {t.hero.headline}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="text-muted-foreground mt-5 font-mono text-sm">
              <span className="text-brand">&gt;</span>{" "}
              <Typewriter phrases={t.hero.taglines} key={t.hero.taglines.join()} />
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-base text-balance sm:text-lg">
              {t.hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.38}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Button
                  asChild
                  className="shadow-glow bg-brand text-brand-foreground h-11 gap-2 rounded-full px-6 text-sm font-medium hover:opacity-90"
                >
                  <a href="/cv.pdf" download>
                    <FileDown className="size-4" />
                    {t.hero.downloadCv}
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button
                  asChild
                  variant="outline"
                  className="glass h-11 gap-2 rounded-full border-black/5 px-6 text-sm font-medium backdrop-blur-xl dark:border-white/10"
                >
                  <Link href="#sobre-mi">
                    <User className="size-4" />
                    {t.hero.aboutMe}
                  </Link>
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.46}>
            <a
              href={`mailto:${EMAIL}`}
              className="text-muted-foreground hover:text-foreground mt-8 inline-flex items-center gap-2 text-sm transition-colors"
            >
              <Mail className="text-brand size-4" />
              {EMAIL}
            </a>
          </Reveal>

          <Reveal delay={0.54}>
            <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4 sm:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-2">
                  <span className="border-glass bg-brand-muted text-brand flex size-10 items-center justify-center rounded-xl border">
                    <stat.icon className="size-4.5" />
                  </span>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                    <CountUp value={stat.value} />
                  </dd>
                  <p className="text-caption text-muted-foreground -mt-1 font-medium tracking-wider uppercase">
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
