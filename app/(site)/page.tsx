import { About } from "@/components/sections/about/about";
import { BlogTeaserSection } from "@/components/sections/blog/blog-teaser-section";
import { ContactCtaBanner } from "@/components/sections/contact/contact-cta-banner";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { ExperienceSection } from "@/components/sections/experience/experience-section";
import { Hero } from "@/components/sections/hero/hero";
import { ProjectsSection } from "@/components/sections/projects/projects-section";
import { ResumeSection } from "@/components/sections/resume/resume-section";
import { SkillsSection } from "@/components/sections/skills/skills-section";
import { BigStatement } from "@/components/sections/statement/big-statement";
import { TechnologiesSection } from "@/components/sections/technologies/technologies-section";
import { TimelineSection } from "@/components/sections/timeline/timeline-section";
import { SOCIAL_LINKS } from "@/lib/nav-links";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adrián Pico Martínez",
  jobTitle: "Ingeniero de Sistemas · Frontend Software Engineer",
  url: siteUrl,
  email: `mailto:${SOCIAL_LINKS.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barranquilla",
    addressCountry: "CO",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Simón Bolívar",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Power BI",
    "Desarrollo Full Stack",
  ],
  sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <ExperienceSection />
      <ResumeSection />
      <SkillsSection />
      <BigStatement />
      <TechnologiesSection />
      <ProjectsSection />
      <TimelineSection />
      <BlogTeaserSection />
      <ContactCtaBanner />
      <ContactSection />
    </>
  );
}
