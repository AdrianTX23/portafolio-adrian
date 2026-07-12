import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/content/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured);

  return (
    <Section id="proyectos">
      <SectionHeading
        eyebrow="Portafolio"
        title="Proyectos destacados"
        description="Una muestra de productos que he construido de principio a fin — de la interfaz a la base de datos."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2}>
        <div className="mt-10 text-center">
          <Link
            href="/proyectos"
            className="text-brand inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
          >
            Ver todos los proyectos
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
