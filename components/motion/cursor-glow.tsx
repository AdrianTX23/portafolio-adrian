"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useEffect, useState } from "react";

/** Halo suave que sigue al cursor en pantallas con mouse; se omite en touch y con reduced-motion. */
export function CursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.5 });
  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, oklch(var(--brand-lch) / 7%), transparent 70%)`;

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- detects pointer capability, unavailable during SSR
    setEnabled(true);

    function handleMouseMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, x, y]);

  if (shouldReduceMotion || !enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[1]"
      style={{ background }}
    />
  );
}
