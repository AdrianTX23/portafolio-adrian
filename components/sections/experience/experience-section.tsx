"use client";

import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { experience } from "@/content/data/experience";
import { ExperienceItem } from "./experience-item";

export function ExperienceSection() {
  const { t } = useLocale();

  return (
    <Section id="experiencia" variant="muted">
      <SectionHeading
        eyebrow={t.experience.eyebrow}
        title={t.experience.title}
        description={t.experience.description}
      />
      <div className="relative">
        <div
          aria-hidden="true"
          className="bg-border absolute top-0 bottom-0 left-[4.5rem] hidden w-px sm:block"
        />
        {experience.map((item, i) => (
          <ExperienceItem key={item.company} item={item} delay={i * 0.08} />
        ))}
      </div>
    </Section>
  );
}
