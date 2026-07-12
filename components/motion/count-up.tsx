"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number;
}

function parseValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  if (!match?.[2]) return { prefix: value, number: 0, suffix: "" };
  return { prefix: match[1] ?? "", number: parseInt(match[2], 10), suffix: match[3] ?? "" };
}

export function CountUp({ value, className, duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const shouldReduceMotion = useReducedMotion();
  const { prefix, number, suffix } = parseValue(value);
  const [display, setDisplay] = useState(shouldReduceMotion ? number : 0);

  useEffect(() => {
    if (shouldReduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncs to a11y preference, not a mount-timing workaround
      setDisplay(number);
      return;
    }
    if (!isInView) return;

    let startTime: number;
    let frame: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(eased * number));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    }

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isInView, number, duration, shouldReduceMotion]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {prefix}
      {display}
      {suffix}
    </motion.span>
  );
}
