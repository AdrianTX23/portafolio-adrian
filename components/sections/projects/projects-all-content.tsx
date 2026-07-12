"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import type { Project } from "@/types/project";
import { ProjectCard } from "./project-card";

interface ProjectsAllContentProps {
  projects: Project[];
}

export function ProjectsAllContent({ projects }: ProjectsAllContentProps) {
  const { t } = useLocale();

  return (
    <>
      <SectionHeading
        eyebrow={t.projects.allEyebrow}
        title={t.projects.allTitle}
        description={t.projects.allDescription}
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
