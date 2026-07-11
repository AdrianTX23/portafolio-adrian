import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechMarquee } from "./tech-marquee";

export function TechnologiesSection() {
  return (
    <Section id="tecnologias" spacing="sm" containerSize="wide">
      <SectionHeading eyebrow="Stack" title="Tecnologías con las que trabajo" align="center" />
      <Reveal>
        <TechMarquee />
      </Reveal>
    </Section>
  );
}
