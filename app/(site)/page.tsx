import { About } from "@/components/sections/about/about";
import { BlogTeaserSection } from "@/components/sections/blog/blog-teaser-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { Hero } from "@/components/sections/hero/hero";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { ResumeSection } from "@/components/sections/resume/resume-section";
import { SkillsSection } from "@/components/sections/skills/skills-section";
import { BigStatement } from "@/components/sections/statement/big-statement";
import { TechnologiesSection } from "@/components/sections/technologies/technologies-section";
import { TimelineSection } from "@/components/sections/timeline/timeline-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceSection />
      <ResumeSection />
      <SkillsSection />
      <BigStatement
        parts={[
          "Tengo una obsesión real por los ",
          { text: "detalles", strong: true },
          " que nadie más nota.",
        ]}
      />
      <TechnologiesSection />
      <ProjectsSection />
      <TimelineSection />
      <BlogTeaserSection />
      <ContactSection />
    </>
  );
}
