"use client";

import { motion, useReducedMotion } from "framer-motion";
import { DURATION, EASE_OUT_EXPO } from "@/lib/motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

const tracks = [
  { label: "fast", duration: DURATION.fast },
  { label: "base", duration: DURATION.base },
  { label: "slow", duration: DURATION.slow },
];

export function MotionSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="mx-auto max-w-5xl px-6 py-section-sm">
      <SectionHeading eyebrow="Movimiento" title="Curva ease-out-expo" />
      <div className="space-y-6">
        {tracks.map((track, i) => (
          <Reveal key={track.label} delay={i * 0.06}>
            <div className="flex items-center gap-4">
              <span className="text-caption text-muted-foreground w-16 font-mono">
                {track.label}
              </span>
              <div className="bg-muted relative h-2 flex-1 overflow-hidden rounded-full">
                <motion.div
                  className="bg-brand absolute top-0 left-0 size-2 rounded-full"
                  animate={
                    shouldReduceMotion
                      ? { left: "50%" }
                      : { left: ["0%", "calc(100% - 0.5rem)", "0%"] }
                  }
                  transition={{
                    duration: track.duration * 2.5,
                    ease: EASE_OUT_EXPO,
                    repeat: shouldReduceMotion ? 0 : Infinity,
                    repeatDelay: 0.4,
                  }}
                />
              </div>
              <span className="text-caption text-muted-foreground w-12 font-mono">
                {track.duration}s
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
