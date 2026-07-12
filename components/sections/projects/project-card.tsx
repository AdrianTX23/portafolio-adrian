import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { BlurImage } from "@/components/motion/blur-image";
import { TiltCard } from "@/components/motion/tilt-card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const imageContent = (
    <TiltCard className="overflow-hidden rounded-t-2xl">
      <div className="bg-muted relative aspect-video">
        <BlurImage
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black">
            Ver proyecto
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </TiltCard>
  );

  return (
    <article className="border-border bg-card shadow-elevation-1 hover:shadow-elevation-3 group rounded-2xl border transition-shadow duration-300">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver proyecto ${project.title} en vivo`}
        >
          {imageContent}
        </a>
      ) : (
        <Link href={`/proyectos/${project.slug}`} aria-label={`Ver proyecto ${project.title}`}>
          {imageContent}
        </Link>
      )}

      <div className="p-6">
        <div className="mb-2 flex items-center justify-between gap-4">
          <h3 className="text-h3 flex items-center gap-2 font-semibold">
            {typeof index === "number" && (
              <span className="text-brand font-mono text-sm font-normal">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            {project.title}
          </h3>
          <span className="text-muted-foreground text-caption font-mono">
            {project.year}
          </span>
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
