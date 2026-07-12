"use client";

import { ArrowRight, Building2, Calendar, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
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
      <SpotlightCard className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-white/15 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="border-glass bg-brand-muted text-brand mt-1 flex size-11 shrink-0 items-center justify-center rounded-xl border">
            <Building2 className="size-5" />
          </span>
          <div>
            <h3 className="font-heading text-h3 font-semibold tracking-tight">
              {item.role[locale]}
            </h3>
            <p className="text-brand mt-0.5 text-sm font-medium">{item.company}</p>
          </div>
        </div>

        <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" />
            {item.location[locale]}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {formatMonthYear(item.startDate, locale)} — {formatMonthYear(item.endDate, locale)}
          </span>
        </div>

        <ul className="text-muted-foreground mt-5 list-none space-y-2.5 text-sm leading-relaxed">
          {item.highlights[locale].map((highlight) => (
            <li key={highlight} className="flex gap-2.5">
              <ArrowRight className="text-brand mt-0.5 size-4 shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {item.stack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="border-glass bg-background/40 rounded-lg text-xs"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </SpotlightCard>
    </Reveal>
  );
}
