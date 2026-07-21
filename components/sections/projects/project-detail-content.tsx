"use client";

import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { BlurImage } from "@/components/motion/blur-image";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { SpotlightCard } from "@/components/motion/spotlight-card";
import { ProjectGallery } from "@/components/sections/projects/project-gallery";
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

function CaseHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-heading text-h3 mb-4 flex items-center gap-3 font-semibold tracking-tight">
      <span aria-hidden="true" className="bg-brand h-px w-8 shrink-0" />
      {children}
    </h2>
  );
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const { t, locale } = useLocale();
  const cs = project.caseStudy;

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
          <div>
            <p className="text-caption text-muted-foreground mb-3 font-mono uppercase">
              {t.projects.overviewLabel}
            </p>
            <p className="text-lead text-muted-foreground max-w-2xl">
              {project.description[locale]}
            </p>
          </div>
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

      {project.gallery.length > 1 && (
        <div className="mt-16 sm:mt-20">
          <ProjectGallery
            title={project.title}
            images={project.gallery}
            summary={project.description[locale]}
            liveUrl={project.liveUrl}
          />
        </div>
      )}

      {cs && (
        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
          {/* Métricas de impacto */}
          <Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {cs.metrics.map((metric) => (
                <div
                  key={metric.label[locale]}
                  className="glass-card hover-lift rounded-2xl p-6 transition-colors duration-300 hover:border-white/15"
                >
                  <p className="font-heading text-brand text-h1 font-bold tabular-nums">
                    {metric.value}
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {metric.label[locale]}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* El reto + El enfoque */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <div>
                <CaseHeading>{t.projects.contextTitle}</CaseHeading>
                <p className="text-muted-foreground leading-relaxed">{cs.context[locale]}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <CaseHeading>{t.projects.approachTitle}</CaseHeading>
                <p className="text-muted-foreground leading-relaxed">{cs.approach[locale]}</p>
              </div>
            </Reveal>
          </div>

          {/* Qué construí + Decisiones técnicas */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal>
              <SpotlightCard className="glass-card hover-lift h-full rounded-2xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-8">
                <CaseHeading>{t.projects.featuresTitle}</CaseHeading>
                <ul className="text-muted-foreground list-none space-y-3 text-sm leading-relaxed">
                  {cs.features[locale].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <ArrowUpRight className="text-brand mt-0.5 size-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
            <Reveal delay={0.1}>
              <SpotlightCard className="glass-card hover-lift h-full rounded-2xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-8">
                <CaseHeading>{t.projects.architectureTitle}</CaseHeading>
                <ul className="text-muted-foreground list-none space-y-3 text-sm leading-relaxed">
                  {cs.architecture[locale].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check className="text-brand mt-0.5 size-4 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Resultados y aprendizajes */}
          <Reveal>
            <div className="border-brand-border bg-brand-muted/40 rounded-2xl border p-8 sm:p-10">
              <CaseHeading>{t.projects.outcomeTitle}</CaseHeading>
              <p className="text-foreground/90 text-lead max-w-3xl leading-relaxed">
                {cs.outcome[locale]}
              </p>
            </div>
          </Reveal>

          {/* CTA de cierre */}
          {(project.liveUrl || project.repoUrl) && (
            <Reveal>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                {project.liveUrl && (
                  <Magnetic>
                    <Button asChild className="shadow-glow gap-1.5">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {t.projects.viewLive}
                        <ArrowUpRight className="size-4" />
                      </a>
                    </Button>
                  </Magnetic>
                )}
                {project.repoUrl && (
                  <Magnetic>
                    <Button asChild variant="outline" className="gap-1.5">
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="size-4" />
                        {t.projects.repository}
                      </a>
                    </Button>
                  </Magnetic>
                )}
              </div>
            </Reveal>
          )}
        </div>
      )}
    </>
  );
}
