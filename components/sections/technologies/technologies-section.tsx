"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechMarquee } from "./tech-marquee";

export function TechnologiesSection() {
  const { t } = useLocale();

  return (
    <Section id="tecnologias" spacing="sm" containerSize="wide">
      <SectionHeading eyebrow={t.technologies.eyebrow} title={t.technologies.title} align="center" />
      <Reveal>
        <TechMarquee />
      </Reveal>
    </Section>
  );
}
