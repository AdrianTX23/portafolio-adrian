import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { experience } from "@/content/data/experience";
import { ExperienceItem } from "./experience-item";

export function ExperienceSection() {
  return (
    <Section id="experiencia">
      <SectionHeading
        eyebrow="Trayectoria"
        title="Experiencia"
        description="Del desarrollo interno a soluciones empresariales — así ha evolucionado mi trabajo."
      />
      <div>
        {experience.map((item, i) => (
          <ExperienceItem key={item.company + item.role} item={item} delay={i * 0.08} />
        ))}
      </div>
    </Section>
  );
}
