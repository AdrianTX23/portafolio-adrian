"use client";

import {
  Award,
  Briefcase,
  Download,
  GraduationCap,
  Languages,
  Mail,
  MapPin,
  Wrench,
} from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { experience } from "@/content/data/experience";
import { skills } from "@/content/data/skills";
import { formatMonthYear } from "@/lib/format-date";
import { SOCIAL_LINKS } from "@/lib/nav-links";

/** Título de bloque dentro de la columna principal del CV. */
function SheetHeading({
  icon: Icon,
  children,
}: {
  icon: typeof Briefcase;
  children: React.ReactNode;
}) {
  return (
    <h4 className="flex items-center gap-2 text-sm font-bold tracking-wide text-blue-700 uppercase">
      <Icon className="size-4" />
      {children}
    </h4>
  );
}

export function ResumeSection() {
  const { t, locale } = useLocale();

  return (
    <Section id="cv" spacing="sm">
      <SectionHeading
        eyebrow={t.resume.eyebrow}
        title={t.resume.title}
        description={t.resume.description}
      />

      <Reveal>
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <Button
              asChild
              variant="outline"
              className="glass h-10 gap-2 rounded-full border-black/10 px-5 text-xs font-semibold tracking-wider uppercase backdrop-blur-xl dark:border-white/15"
            >
              <a href="/cv.pdf" download>
                <Download className="size-4" />
                {t.resume.download}
                <span className="text-muted-foreground">.PDF</span>
              </a>
            </Button>
          </Magnetic>
          <p className="text-muted-foreground text-caption">{t.resume.note}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        {/* Hoja del CV: colores fijos tipo papel, independientes del tema */}
        <div className="shadow-elevation-3 grid grid-cols-1 overflow-hidden rounded-2xl md:grid-cols-[17rem_1fr]">
          {/* Sidebar azul */}
          <aside className="bg-gradient-to-b from-blue-700 to-blue-900 p-7 text-white">
            <h3 className="font-heading text-2xl leading-tight font-bold tracking-tight">
              Adrián Pico Martínez
            </h3>
            <p className="mt-1.5 text-sm font-medium text-blue-100">{t.hero.role}</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-xs text-blue-200">
              <MapPin className="size-3.5" />
              {t.hero.location}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-blue-50/90">
              {t.hero.description}
            </p>

            <ul className="mt-7 space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="flex items-center gap-2.5 break-all text-blue-50 transition-opacity hover:opacity-80"
                >
                  <Mail className="size-4 shrink-0 text-blue-200" />
                  {SOCIAL_LINKS.email}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-blue-50 transition-opacity hover:opacity-80"
                >
                  <GithubIcon className="size-4 shrink-0 text-blue-200" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-blue-50 transition-opacity hover:opacity-80"
                >
                  <LinkedinIcon className="size-4 shrink-0 text-blue-200" />
                  LinkedIn
                </a>
              </li>
            </ul>

            <div className="mt-8 border-t border-white/15 pt-6">
              <h4 className="flex items-center gap-2 text-xs font-bold tracking-wider text-blue-200 uppercase">
                <Languages className="size-4" />
                {t.resume.languagesTitle}
              </h4>
              <ul className="mt-3 space-y-1.5 text-sm text-blue-50">
                <li>{t.resume.spanishLevel}</li>
                <li>{t.resume.englishLevel}</li>
              </ul>
            </div>

            <div className="mt-7 border-t border-white/15 pt-6">
              <h4 className="flex items-center gap-2 text-xs font-bold tracking-wider text-blue-200 uppercase">
                <Award className="size-4" />
                {t.resume.certificationsTitle}
              </h4>
              <ul className="mt-3 space-y-1.5 text-sm text-blue-50">
                {t.about.certifications.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Columna principal blanca */}
          <div className="space-y-9 bg-white p-7 text-neutral-800 sm:p-9">
            <section>
              <SheetHeading icon={Briefcase}>{t.experience.title}</SheetHeading>
              <div className="mt-4 space-y-6">
                {experience.map((item) => (
                  <article key={item.company}>
                    <h5 className="text-base font-semibold text-neutral-900">
                      {item.role[locale]}
                    </h5>
                    <p className="text-sm font-medium text-blue-700">
                      {item.company} · {item.location[locale]}
                    </p>
                    <p className="mt-0.5 text-xs text-neutral-500">
                      {formatMonthYear(item.startDate, locale)} —{" "}
                      {formatMonthYear(item.endDate, locale)}
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-600">
                      {item.highlights[locale].map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <SheetHeading icon={GraduationCap}>{t.resume.educationTitle}</SheetHeading>
              <div className="mt-4">
                <h5 className="text-base font-semibold text-neutral-900">
                  {t.resume.degree}
                </h5>
                <p className="text-sm font-medium text-blue-700">{t.resume.university}</p>
                <p className="mt-0.5 text-xs text-neutral-500">{t.resume.degreeDates}</p>
              </div>
            </section>

            <section>
              <SheetHeading icon={Wrench}>{t.skills.eyebrow}</SheetHeading>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="rounded-md border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-xs font-medium text-neutral-700"
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
