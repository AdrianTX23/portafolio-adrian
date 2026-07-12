"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface AmbientMeshProps {
  intensity?: "default" | "hero";
}

export function AmbientMesh({ intensity = "default" }: AmbientMeshProps) {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduceMotion || intensity !== "hero") return;

    const container = containerRef.current;
    const orb1 = orb1Ref.current;
    const orb2 = orb2Ref.current;
    if (!container || !orb1 || !orb2) return;

    const ctx = gsap.context(() => {
      gsap.to(orb1, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });
      gsap.to(orb2, {
        y: -80,
        x: 40,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, container);

    return () => ctx.revert();
  }, [shouldReduceMotion, intensity]);

  const orbOpacity = intensity === "hero" ? 0.75 : 0.5;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="ambient-glow absolute inset-0" />

      <motion.div
        ref={orb1Ref}
        className="absolute -top-[30%] left-1/2 h-[70vh] w-[90vw] -translate-x-1/2 rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, oklch(var(--brand-lch) / 22%) 0%, transparent 70%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 1.1, 1],
                opacity: [orbOpacity * 0.7, orbOpacity, orbOpacity * 0.7],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 8, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <motion.div
        ref={orb2Ref}
        className="absolute top-[20%] -right-[10%] h-[50vh] w-[50vw] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.15 280 / 12%) 0%, transparent 70%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, -40, 0],
                y: [0, 25, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 12, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <motion.div
        className="absolute -bottom-[10%] -left-[5%] h-[40vh] w-[40vw] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.12 220 / 10%) 0%, transparent 70%)",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: [0, 30, 0],
                y: [0, -20, 0],
              }
        }
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <div className="noise-overlay absolute inset-0" />
    </div>
  );
}
