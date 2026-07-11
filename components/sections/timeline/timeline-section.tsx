import { GraduationCap, Milestone, Briefcase } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { timeline } from "@/content/data/timeline";
import type { TimelineEvent } from "@/types/experience";
import { TimelineTrack } from "./timeline-track";

const typeIcons: Record<TimelineEvent["type"], typeof Briefcase> = {
  work: Briefcase,
  education: GraduationCap,
  milestone: Milestone,
};

export function TimelineSection() {
  return (
    <Section id="timeline" spacing="sm" containerSize="narrow">
      <SectionHeading eyebrow="Recorrido" title="Timeline profesional" />
      <TimelineTrack>
        <ul className="space-y-10">
          {timeline.map((event, i) => {
            const Icon = typeIcons[event.type];
            return (
              <Reveal key={event.title} delay={i * 0.08} as="li">
                <div className="relative">
                  <span className="bg-brand text-brand-foreground absolute top-0.5 -left-8 flex size-6 items-center justify-center rounded-full">
                    <Icon className="size-3.5" />
                  </span>
                  <p className="text-caption text-muted-foreground font-mono uppercase">
                    {event.date}
                  </p>
                  <h3 className="mt-1 font-semibold">{event.title}</h3>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {event.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </TimelineTrack>
    </Section>
  );
}
