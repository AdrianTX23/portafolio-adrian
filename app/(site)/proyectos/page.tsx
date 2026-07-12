import type { Metadata } from "next";
import { ProjectsAllContent } from "@/components/sections/projects/projects-all-content";
import { Section } from "@/components/shared/section";
import { projects } from "@/content/data/projects";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos de desarrollo web y aplicaciones full stack construidos por Adrián Pico Martínez.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <ProjectsAllContent projects={projects} />
    </Section>
  );
}
