"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { Spotlight } from "@/components/motion/spotlight";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function NotFoundContent() {
  const { t } = useLocale();

  return (
    <section className="relative flex min-h-[70svh] flex-col items-center justify-center overflow-hidden text-center">
      <Spotlight />
      <Container size="narrow" className="relative">
        <Reveal>
          <p className="font-heading text-brand text-display font-bold tracking-tight">
            404
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-heading text-h2 mt-4 font-semibold tracking-tight text-balance">
            {t.notFound.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance">
            {t.notFound.description}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-8 flex justify-center">
            <Magnetic>
              <Button
                asChild
                className="shadow-glow bg-brand text-brand-foreground h-12 gap-2 rounded-full px-7 text-sm font-medium hover:opacity-90"
              >
                <Link href="/">
                  <Home className="size-4" />
                  {t.notFound.cta}
                </Link>
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
