"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { blurIn, revealTransition } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: ElementType;
  className?: string;
  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as as "div"];

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={blurIn}
      transition={revealTransition(delay)}
    >
      {children}
    </MotionTag>
  );
}
