import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlurImage } from "@/components/motion/blur-image";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Container } from "@/components/shared/container";
import { GithubIcon } from "@/components/shared/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <Container as="article" className="py-section-sm">
      <Reveal>
        <Link
          href="/proyectos"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft className="size-4" />
          Todos los proyectos
        </Link>
      </Reveal>

      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <TextReveal as="h1" text={project.title} className="text-h1 font-semibold" />
          <Reveal delay={0.1}>
            <p className="text-muted-foreground mt-2 text-sm">
              {project.role} · {project.year}
            </p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button asChild size="sm" className="gap-1.5">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Ver en vivo
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
            )}
            {project.repoUrl && (
              <Button asChild size="sm" variant="outline" className="gap-1.5">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="size-3.5" />
                  Repositorio
                </a>
              </Button>
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
            {project.description}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div>
            <p className="text-caption text-muted-foreground mb-3 font-mono uppercase">
              Stack técnico
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
    </Container>
  );
}
