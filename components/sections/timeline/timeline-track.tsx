"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";

export function TimelineTrack({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const line = lineRef.current;
    if (!container || !line) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative pl-8">
      <div className="bg-border absolute top-1 bottom-1 left-[0.6875rem] w-px" />
      <div
        ref={lineRef}
        className="bg-brand absolute top-1 bottom-1 left-[0.6875rem] w-px origin-top"
      />
      {children}
    </div>
  );
}
