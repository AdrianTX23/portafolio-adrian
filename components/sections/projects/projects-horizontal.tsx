"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "@/components/providers/locale-provider";
import { gsap } from "@/lib/gsap";
import { ProjectCard } from "./project-card";
import type { Project } from "@/types/project";

interface ProjectsHorizontalProps {
  projects: Project[];
}

export function ProjectsHorizontal({ projects }: ProjectsHorizontalProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const getScrollDistance = () => track.scrollWidth - window.innerWidth + 160;

      const tween = gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => tween.scrollTrigger?.kill();
    });

    return () => mm.revert();
  }, [projects.length]);

  return (
    <section
      ref={sectionRef}
      className="relative hidden overflow-hidden lg:block"
      aria-label="Proyectos en scroll horizontal"
    >
      <div className="flex h-[85svh] items-center">
        <div ref={trackRef} className="flex items-stretch gap-8 px-8 will-change-transform">
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
        </div>
      </div>
    </section>
  );
}
