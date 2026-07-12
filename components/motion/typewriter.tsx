"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface TypewriterProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function Typewriter({
  phrases,
  className,
  typingSpeed = 55,
  deletingSpeed = 30,
  pauseTime = 1800,
}: TypewriterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    if (shouldReduceMotion) return;
    const current = phrases[index % phrases.length] ?? "";

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), pauseTime);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), pauseTime);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
      return () => clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- timer-driven state machine, not a sync-on-mount pattern
    setIndex((i) => (i + 1) % phrases.length);
    setPhase("typing");
  }, [text, phase, index, phrases, typingSpeed, deletingSpeed, pauseTime, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className={className}>{phrases[0]}</span>;
  }

  return (
    <span className={className} aria-label={phrases[index % phrases.length]}>
      <span aria-hidden="true">
        {text}
        <span className="animate-pulse">_</span>
      </span>
    </span>
  );
}
