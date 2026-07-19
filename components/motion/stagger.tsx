"use client";

import { motion, useReducedMotion } from "framer-motion";
import { createElement, type ElementType, type ReactNode } from "react";
import { staggerContainer } from "@/lib/motion";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
}

/** Contenedor que revela a sus hijos en cascada cuando entra en el viewport. */
export function Stagger({
  children,
  className,
  as = "div",
  stagger = 0.06,
  delayChildren = 0,
  once = true,
}: StaggerProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as as "div"];

  if (shouldReduceMotion) {
    return createElement(as, { className }, children);
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      variants={staggerContainer(stagger, delayChildren)}
    >
      {children}
    </MotionTag>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

/** Hijo individual de <Stagger>; hereda el timing del contenedor padre. */
export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const MotionTag = motion[as as "div"];

  return (
    <MotionTag
      className={className}
      variants={itemVariants}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
