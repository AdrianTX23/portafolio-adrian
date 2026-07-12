"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealTextProps {
  text: string;
  highlight?: string;
  className?: string;
}

export function ScrollRevealText({ text, highlight, className }: ScrollRevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.5, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);
  const parts = highlight ? text.split(highlight) : [text];

  if (shouldReduceMotion) {
    return (
      <p className={cn("text-h1 max-w-4xl text-center leading-tight font-semibold text-balance", className)}>
        {parts[0]}
        {highlight && <span className="text-brand-accent">{highlight}</span>}
        {parts[1]}
      </p>
    );
  }

  return (
    <motion.p
      ref={ref}
      style={{ opacity, filter: blurFilter }}
      className={cn(
        "text-h1 mx-auto max-w-4xl text-center leading-tight font-semibold text-balance",
        className,
      )}
    >
      {parts[0]}
      {highlight && <span className="gradient-text">{highlight}</span>}
      {parts[1]}
    </motion.p>
  );
}
