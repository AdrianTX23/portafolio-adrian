"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { timeline } from "@/content/data/timeline";

export function TimelineSection() {
  const { t, locale } = useLocale();

  return (
    <Section id="timeline" spacing="sm" containerSize="narrow" variant="elevated">
      <SectionHeading eyebrow={t.timeline.eyebrow} title={t.timeline.title} />
      <div>
        {timeline.map((event, i) => (
          <Reveal key={event.title.es} delay={i * 0.08}>
            <div className="group grid grid-cols-[1fr_auto] items-start gap-6 border-b border-white/5 py-10 first:pt-0 last:border-0">
              <div>
                <h3 className="font-heading text-h3 font-semibold tracking-tight">
                  {event.title[locale]}
                </h3>
                <p className="text-brand mt-1.5 text-sm font-medium">
                  {t.timeline.typeLabels[event.type]}
                </p>
                <p className="text-muted-foreground mt-3 max-w-md text-sm leading-relaxed">
                  {event.description[locale]}
                </p>
              </div>
              <p className="font-heading text-h1 text-muted-foreground/20 font-bold tabular-nums transition-colors duration-300 group-hover:text-brand/30">
                {event.date.slice(0, 4)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
