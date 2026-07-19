"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { timeline } from "@/content/data/timeline";

export function TimelineSection() {
  const { t, locale } = useLocale();
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 55%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="timeline" spacing="sm" containerSize="narrow" variant="elevated">
      <SectionHeading eyebrow={t.timeline.eyebrow} title={t.timeline.title} />
      <div ref={containerRef} className="relative pl-6 sm:pl-8">
        <div
          aria-hidden="true"
          className="bg-border absolute top-0 bottom-0 left-0 w-px"
        />
        {!shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            className="bg-brand absolute top-0 left-0 w-px origin-top"
            style={{ scaleY: lineScale, height: "100%" }}
          />
        )}
        {timeline.map((event, i) => (
          <Reveal key={event.title.es} delay={i * 0.08}>
            <div className="group relative grid grid-cols-[1fr_auto] items-start gap-6 border-b border-white/5 py-10 first:pt-0 last:border-0">
              <span
                aria-hidden="true"
                className="bg-brand ring-background absolute top-1.5 -left-6 size-2.5 -translate-x-1/2 rounded-full ring-4 transition-transform duration-300 group-hover:scale-125 sm:-left-8"
              />
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
