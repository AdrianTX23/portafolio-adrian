import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { categoryLabels, skills } from "@/content/data/skills";
import type { Skill } from "@/types/skill";
import { TechIcon } from "./tech-icon";

const levelLabels: Record<Skill["level"], string> = {
  advanced: "Avanzado",
  proficient: "Competente",
  learning: "Aprendiendo",
};

const categories = Object.keys(categoryLabels) as Skill["category"][];

export function SkillsSection() {
  return (
    <Section id="habilidades" spacing="sm">
      <SectionHeading
        eyebrow="Habilidades"
        title="Dónde aporto más valor"
        description="Organizadas por área — el nivel refleja experiencia profesional real, no autoevaluación genérica."
      />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => {
          const items = skills.filter((skill) => skill.category === category);
          if (items.length === 0) return null;

          return (
            <Reveal key={category} delay={i * 0.06}>
              <div className="border-border bg-card rounded-2xl border p-6">
                <h3 className="text-muted-foreground text-caption mb-4 font-mono uppercase">
                  {categoryLabels[category]}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <TechIcon icon={skill.icon} label={skill.name} className="size-4" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-muted-foreground text-caption">
                        {levelLabels[skill.level]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
