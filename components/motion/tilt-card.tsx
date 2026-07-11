"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

const SPRING = { stiffness: 150, damping: 20, mass: 0.5 };

export function TiltCard({
  children,
  className,
  maxTilt = 10,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const spx = useSpring(px, SPRING);
  const spy = useSpring(py, SPRING);

  const rotateX = useTransform(spy, [0, 100], [maxTilt, -maxTilt]);
  const rotateY = useTransform(spx, [0, 100], [-maxTilt, maxTilt]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${spx}% ${spy}%, oklch(1 0 0 / 25%), transparent 60%)`;

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set(((e.clientX - rect.left) / rect.width) * 100);
    py.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  function handleMouseLeave() {
    px.set(50);
    py.set(50);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn("relative", className)}
      style={{ perspective: 800 }}
    >
      <motion.div
        style={
          shouldReduceMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="relative rounded-[inherit] will-change-transform"
      >
        {children}
        {glare && !shouldReduceMotion && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{ background: glareBackground }}
          />
        )}
      </motion.div>
    </div>
  );
}
