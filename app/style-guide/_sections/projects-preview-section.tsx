import { ProjectCard } from "@/components/sections/projects/project-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { projects } from "@/content/data/projects";

export function ProjectsPreviewSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-section-sm">
      <SectionHeading
        eyebrow="Componente base"
        title="Project card"
        description="Combina TiltCard + BlurImage + Badge — la misma tarjeta se usará en la sección de Proyectos (Fase 5)."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
