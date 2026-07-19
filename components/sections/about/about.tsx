"use client";

import { GraduationCap, Languages, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function About() {
  const { t } = useLocale();

  const facts = [
    { icon: MapPin, ...t.about.facts.location },
    { icon: GraduationCap, ...t.about.facts.education },
    { icon: Languages, ...t.about.facts.english },
  ];

  return (
    <Section id="sobre-mi">
      <div className="section-divider mb-section-sm" />
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <SpotlightCard className="glass-card rounded-3xl p-8 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr]">
          <Reveal>
            <Avatar size="lg" className="ring-brand/20 size-32 ring-2">
              <AvatarFallback className="bg-brand text-brand-foreground font-heading text-4xl font-semibold">
                AP
              </AvatarFallback>
            </Avatar>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.1}>
              <div className="text-muted-foreground space-y-5 text-base leading-relaxed">
                {t.about.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="group bg-background/50 hover-lift rounded-2xl border border-white/5 p-4 transition-colors duration-300 hover:border-white/15"
                  >
                    <fact.icon className="text-brand mb-2 size-4 transition-transform duration-300 ease-out group-hover:scale-110" />
                    <dt className="text-caption text-muted-foreground font-medium tracking-wider uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-medium leading-snug">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-2">
                {t.about.certifications.map((cert) => (
                  <Badge
                    key={cert}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </SpotlightCard>
    </Section>
  );
}
