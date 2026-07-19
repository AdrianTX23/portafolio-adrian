"use client";

import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BlurImage } from "@/components/motion/blur-image";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { useLocale } from "@/components/providers/locale-provider";
import { GithubIcon } from "@/components/shared/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/project";

interface ProjectDetailContentProps {
  project: Project;
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { t, locale } = useLocale();

  return (
    <>
      <Reveal>
        <Link
          href="/proyectos"
          className="text-muted-foreground hover:text-foreground group mb-8 inline-flex items-center gap-1.5 text-sm transition-colors"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 ease-out group-hover:-translate-x-1" />
          {t.projects.backToProjects}
        </Link>
      </Reveal>

      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <TextReveal as="h1" text={project.title} className="text-h1 font-semibold" />
          <Reveal delay={0.1}>
            <p className="text-muted-foreground mt-2 text-sm">
              {project.role[locale]} · {project.year}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="flex gap-2">
            {project.liveUrl && (
              <Magnetic>
                <Button asChild size="sm" className="shadow-glow gap-1.5">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    {t.projects.viewLive}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              </Magnetic>
            )}
            {project.repoUrl && (
              <Magnetic>
                <Button asChild size="sm" variant="outline" className="gap-1.5">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="size-3.5" />
                    {t.projects.repository}
                  </a>
                </Button>
              </Magnetic>
            )}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2}>
        <TiltCard className="shadow-elevation-2 mb-10 overflow-hidden rounded-2xl">
          <div className="bg-muted relative aspect-video">
            <BlurImage
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </TiltCard>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_16rem]">
        <Reveal delay={0.25}>
          <p className="text-lead text-muted-foreground max-w-2xl">
            {project.description[locale]}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div>
            <p className="text-caption text-muted-foreground mb-3 font-mono uppercase">
              {t.projects.stackLabel}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
