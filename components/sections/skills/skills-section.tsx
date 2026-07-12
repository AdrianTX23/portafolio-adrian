"use client";

import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills } from "@/content/data/skills";
import type { Skill } from "@/types/skill";
import { TechIcon } from "./tech-icon";

const levelColors: Record<Skill["level"], string> = {
  advanced: "text-brand",
  proficient: "text-foreground/70",
  learning: "text-muted-foreground",
};

const categoryOrder: Skill["category"][] = ["frontend", "backend", "database", "tools", "data"];

export function SkillsSection() {
  const { t } = useLocale();

  return (
    <Section id="habilidades" spacing="sm" variant="elevated">
      <SectionHeading
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        description={t.skills.description}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categoryOrder.map((category, i) => {
          const items = skills.filter((skill) => skill.category === category);
          if (items.length === 0) return null;

          return (
            <Reveal key={category} delay={i * 0.06}>
              <SpotlightCard className="glass-card h-full rounded-2xl p-6">
                <h3 className="text-caption text-muted-foreground mb-5 font-medium tracking-[0.12em] uppercase">
                  {t.skills.categories[category]}
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
                        {t.skills.levels[skill.level]}
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
