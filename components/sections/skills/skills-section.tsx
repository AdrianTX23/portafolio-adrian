import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
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

const levelColors: Record<Skill["level"], string> = {
  advanced: "text-brand",
  proficient: "text-foreground/70",
  learning: "text-muted-foreground",
};

const categories = Object.keys(categoryLabels) as Skill["category"][];

export function SkillsSection() {
  return (
    <Section id="habilidades" spacing="sm" variant="elevated">
      <SectionHeading
        eyebrow="Habilidades"
        title="Dónde aporto más valor"
        description="Organizadas por área — el nivel refleja experiencia profesional real, no autoevaluación genérica."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, i) => {
          const items = skills.filter((skill) => skill.category === category);
          if (items.length === 0) return null;

          return (
            <Reveal key={category} delay={i * 0.06}>
              <SpotlightCard className="glass-card h-full rounded-2xl p-6">
                <h3 className="text-caption text-muted-foreground mb-5 font-medium tracking-[0.12em] uppercase">
                  {categoryLabels[category]}
                </h3>
                <ul className="space-y-3.5">
                  {items.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-brand-muted flex size-8 items-center justify-center rounded-lg">
                          <TechIcon icon={skill.icon} label={skill.name} className="size-4" />
                        </div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span
                        className={`text-caption font-medium ${levelColors[skill.level]}`}
                      >
                        {levelLabels[skill.level]}
                      </span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
