"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectsHorizontal } from "./projects-horizontal";

export function ProjectsSection() {
  const { t } = useLocale();
  const featured = projects.filter((project) => project.featured);
  const list = featured.length > 0 ? featured : projects;

  return (
    <Section id="proyectos" variant="muted" containerSize="wide" className="!px-0 lg:!px-0">
      <div className="px-6 sm:px-8 lg:mx-auto lg:max-w-7xl">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />
      </div>

      <ProjectsHorizontal projects={list} />

      <div className="grid grid-cols-1 gap-6 px-6 sm:px-8 lg:hidden lg:max-w-7xl">
        {list.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 px-6 text-center sm:px-8">
          <Magnetic>
            <Button
              asChild
              variant="outline"
              className="glass h-11 gap-2 rounded-full border-white/10 px-6 text-sm font-medium"
            >
              <Link href="/proyectos">
                {t.projects.viewAllProjects}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Magnetic>
        </div>
      </Reveal>
    </Section>
  );
}
