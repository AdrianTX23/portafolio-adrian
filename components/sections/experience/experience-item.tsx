"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { formatMonthYear } from "@/lib/format-date";
import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  item: Experience;
  delay: number;
}

export function ExperienceItem({ item, delay }: ExperienceItemProps) {
  const { locale } = useLocale();

  return (
    <Reveal delay={delay}>
      <div className="group relative grid grid-cols-1 gap-4 py-10 sm:grid-cols-[10rem_1fr] sm:gap-8">
        <div className="relative flex items-start gap-4 sm:block">
          <div className="bg-brand ring-background relative z-10 mt-1 size-2.5 shrink-0 rounded-full ring-4 sm:absolute sm:top-2 sm:-left-[calc(10rem+0.375rem)] sm:mt-0" />
          <p className="text-caption text-muted-foreground font-mono tracking-wide">
            {formatMonthYear(item.startDate, locale)} —{" "}
            {formatMonthYear(item.endDate, locale)}
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 transition-all duration-300 group-hover:border-white/15">
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-heading text-h3 font-semibold tracking-tight">
              {item.role[locale]}
            </h3>
            <p className="text-muted-foreground text-sm">
              {item.company} · {item.location[locale]}
            </p>
          </div>
          <ul className="text-muted-foreground mt-4 list-none space-y-2 text-sm leading-relaxed">
            {item.highlights[locale].map((highlight) => (
              <li key={highlight} className="flex gap-2.5">
                <span className="text-brand mt-1.5 size-1 shrink-0 rounded-full bg-current" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {item.stack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-full border-white/10 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
