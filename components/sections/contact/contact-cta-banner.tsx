"use client";

import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { AmbientMesh } from "@/components/motion/ambient-mesh";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export function ContactCtaBanner() {
  const { t } = useLocale();

  return (
    <div className="relative overflow-hidden py-section-sm text-center">
      <AmbientMesh />
      <Container size="narrow" className="relative">
        <Reveal>
          <TextReveal
            as="p"
            text={t.footer.heading}
            className="font-heading text-h1 font-semibold tracking-tight text-balance"
            wordClassName="gradient-text"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-muted-foreground mx-auto mt-5 max-w-md text-lead">
            {t.footer.description}
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex justify-center">
            <Magnetic>
              <Button
                asChild
                className="shadow-glow bg-brand text-brand-foreground h-12 gap-2 rounded-full px-8 text-sm font-medium hover:opacity-90"
              >
                <Link href="#contacto">
                  {t.footer.writeToMe}
                  <ArrowDown className="size-4" />
                </Link>
              </Button>
            </Magnetic>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
