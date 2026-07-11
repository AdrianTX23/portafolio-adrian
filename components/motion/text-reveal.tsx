"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement, type ElementType } from "react";
import { EASE_OUT_EXPO, staggerContainer } from "@/lib/motion";

interface TextRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
}

const word = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

export function TextReveal({
  text,
  as = "h2",
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return createElement(as, { className }, text);
  }

  return createElement(
    as,
    { className, "aria-label": text },
    <motion.span
      aria-hidden="true"
      className="inline"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={staggerContainer(stagger, delay)}
    >
      {words.map((w, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.15em]">
            <motion.span
              variants={word}
              className={`inline-block will-change-transform ${wordClassName ?? ""}`}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.span>,
  );
}
