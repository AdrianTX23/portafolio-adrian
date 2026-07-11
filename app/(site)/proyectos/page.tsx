import type { Metadata } from "next";
import { ProjectCard } from "@/components/sections/projects/project-card";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/content/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de desarrollo web y aplicaciones full stack construidos por Adrián Pico Martínez.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Portafolio completo"
        title="Todos los proyectos"
        description="Cada tarjeta lleva a una vista detallada con capturas, stack técnico y enlaces."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
