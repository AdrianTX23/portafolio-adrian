import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { timeline } from "@/content/data/timeline";
import type { TimelineEvent } from "@/types/experience";

const typeLabels: Record<TimelineEvent["type"], string> = {
  work: "Experiencia laboral",
  education: "Educación",
  milestone: "Hito",
};

export function TimelineSection() {
  return (
    <Section id="timeline" spacing="sm" containerSize="narrow">
      <SectionHeading eyebrow="Recorrido" title="Timeline profesional" />
      <div>
        {timeline.map((event, i) => (
          <Reveal key={event.title} delay={i * 0.08}>
            <div className="border-border grid grid-cols-[1fr_auto] items-start gap-6 border-b py-8 first:pt-0 last:border-0">
              <div>
                <h3 className="text-h3 font-semibold">{event.title}</h3>
                <p className="text-brand mt-1 text-sm font-medium">
                  {typeLabels[event.type]}
                </p>
                <p className="text-muted-foreground mt-3 max-w-md text-sm">
                  {event.description}
                </p>
              </div>
              <p className="text-h1 text-muted-foreground/25 font-bold tabular-nums">
                {event.date.slice(0, 4)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
