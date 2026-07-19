"use client";

import { BarChart3, Database, MonitorSmartphone, Server, Wrench } from "lucide-react";
import type { ComponentType } from "react";
import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { Stagger, StaggerItem } from "@/components/motion/stagger";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { skills } from "@/content/data/skills";
import { cn } from "@/lib/utils";
import type { Skill } from "@/types/skill";
import { TechIcon } from "./tech-icon";

const levelDots: Record<Skill["level"], string> = {
  advanced: "bg-brand",
  proficient: "bg-foreground/40",
  learning: "bg-muted-foreground/40",
};

const levelBars: Record<Skill["level"], number> = {
  learning: 1,
  proficient: 2,
  advanced: 3,
};

function LevelMeter({ level }: { level: Skill["level"] }) {
  return (
    <span aria-hidden="true" className="ml-0.5 flex items-end gap-0.5">
      {[1, 2, 3].map((bar) => (
        <span
          key={bar}
          className={cn(
            "w-1 rounded-full transition-colors duration-300",
            bar <= levelBars[level] ? "bg-brand" : "bg-muted-foreground/20",
          )}
          style={{ height: `${bar * 3 + 3}px` }}
        />
      ))}
    </span>
  );
}

const categoryOrder: Skill["category"][] = ["frontend", "backend", "database", "tools", "data"];

const categoryIcons: Record<Skill["category"], ComponentType<{ className?: string }>> = {
  frontend: MonitorSmartphone,
  backend: Server,
  database: Database,
  tools: Wrench,
  data: BarChart3,
};

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
          const CategoryIcon = categoryIcons[category];

          return (
            <Reveal key={category} delay={i * 0.06}>
              <SpotlightCard className="glass-card hover-lift h-full rounded-2xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="border-glass bg-brand-muted text-brand flex size-9 items-center justify-center rounded-xl border">
                    <CategoryIcon className="size-4" />
                  </span>
                  <h3 className="font-heading text-base font-semibold tracking-tight">
                    {t.skills.categories[category]}
                  </h3>
                </div>
                <Stagger as="ul" className="flex flex-wrap gap-2" stagger={0.04}>
                  {items.map((skill) => (
                    <StaggerItem key={skill.name} as="li">
                      <span
                        title={t.skills.levels[skill.level]}
                        className="group border-glass bg-background/40 hover-lift inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors hover:border-brand-border"
                      >
                        <TechIcon
                          icon={skill.icon}
                          label={skill.name}
                          className="size-3.5 transition-transform duration-300 ease-out group-hover:scale-110"
                        />
                        {skill.name}
                        <LevelMeter level={skill.level} />
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </div>
      <div className="text-caption text-muted-foreground mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
        {(Object.keys(levelDots) as Skill["level"][]).map((level) => (
          <span key={level} className="inline-flex items-center gap-2">
            <span className={`size-1.5 rounded-full ${levelDots[level]}`} />
            {t.skills.levels[level]}
          </span>
        ))}
      </div>
    </Section>
  );
}
