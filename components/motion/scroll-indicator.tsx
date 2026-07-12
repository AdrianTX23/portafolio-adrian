"use client";

import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function ScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={
          shouldReduceMotion
            ? undefined
            : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
        className="text-muted-foreground flex flex-col items-center gap-1"
      >
        <span className="text-caption font-medium tracking-widest uppercase opacity-60">
          Scroll
        </span>
        <ChevronDown className="size-4 opacity-50" />
      </motion.div>
    </motion.div>
  );
}
