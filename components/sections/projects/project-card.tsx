"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BlurImage } from "@/components/motion/blur-image";
import { TiltCard } from "@/components/motion/tilt-card";
import { useLocale } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "default" | "horizontal";
}

export function ProjectCard({ project, index, variant = "default" }: ProjectCardProps) {
  const { t, locale } = useLocale();
  const isHorizontal = variant === "horizontal";

  const imageContent = (
    <TiltCard
      className={cn(
        "overflow-hidden",
        isHorizontal ? "h-full rounded-l-3xl rounded-r-none" : "rounded-t-3xl",
      )}
    >
      <div
        className={cn(
          "bg-muted relative overflow-hidden",
          isHorizontal ? "h-full min-h-[320px]" : "aspect-[16/10]",
        )}
      >
        <BlurImage
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes={
            isHorizontal
              ? "680px"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium text-white backdrop-blur-xl">
            {t.projects.viewProject}
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </TiltCard>
  );

  const linkWrapper = project.liveUrl ? (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t.projects.viewProject} ${project.title}`}
      className={cn(isHorizontal && "block h-full")}
    >
      {imageContent}
    </a>
  ) : (
    <Link
      href={`/proyectos/${project.slug}`}
      aria-label={`${t.projects.viewProject} ${project.title}`}
      className={cn(isHorizontal && "block h-full")}
    >
      {imageContent}
    </Link>
  );

  const body = (
    <div className={cn("p-7", isHorizontal && "flex flex-col justify-center")}>
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="font-heading text-h3 flex items-center gap-2.5 font-semibold tracking-tight">
          {typeof index === "number" && (
            <span className="text-brand font-mono text-xs font-normal opacity-70">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          {project.title}
        </h3>
        <span className="text-muted-foreground text-caption font-mono tabular-nums">
          {project.year}
        </span>
      </div>
      <p
        className={cn(
          "text-muted-foreground mb-5 text-sm leading-relaxed",
          isHorizontal ? "line-clamp-4" : "line-clamp-2",
        )}
      >
        {project.description[locale]}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, isHorizontal ? 6 : 4).map((tag) => (
          <Badge key={tag} variant="outline" className="rounded-full border-white/10 text-xs">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <article
      className={cn(
        "glass-card hover-lift group overflow-hidden rounded-3xl transition-colors duration-500 hover:border-white/15",
        isHorizontal && "grid h-full min-h-[320px] grid-cols-2",
      )}
    >
      {linkWrapper}
      {body}
    </article>
  );
}
