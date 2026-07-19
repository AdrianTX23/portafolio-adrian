"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { ProjectCard } from "./project-card";
import type { Project } from "@/types/project";

interface ProjectsHorizontalProps {
  projects: Project[];
}

export function ProjectsHorizontal({ projects }: ProjectsHorizontalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();
  const shouldReduceMotion = useReducedMotion();
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function measure() {
      if (!track) return;
      setScrollDistance(Math.max(0, track.scrollWidth - window.innerWidth + 160));
    }

    measure();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [projects.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section
      ref={containerRef}
      className="relative hidden lg:block"
      style={{ height: shouldReduceMotion ? undefined : `calc(100svh + ${scrollDistance}px)` }}
      aria-label="Proyectos en scroll horizontal"
    >
      <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex items-stretch gap-8 px-8"
          style={shouldReduceMotion ? undefined : { x }}
        >
          {projects.map((project, i) => (
            <div key={project.slug} className="w-[min(72vw,680px)] shrink-0">
              <ProjectCard project={project} index={i} variant="horizontal" />
            </div>
          ))}
          <div className="flex w-[min(40vw,400px)] shrink-0 items-center justify-center">
            <p className="text-muted-foreground text-lead max-w-xs text-center leading-relaxed">
              {t.projects.swipeHint}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
