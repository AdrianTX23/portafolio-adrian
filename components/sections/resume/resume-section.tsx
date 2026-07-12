"use client";

import { Download } from "lucide-react";
import { BlurImage } from "@/components/motion/blur-image";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  const { t, locale } = useLocale();

  return (
    <Section id="cv" spacing="sm" containerSize="narrow">
      <SectionHeading
        eyebrow={t.resume.eyebrow}
        title={t.resume.title}
        description={t.resume.description}
        align="center"
      />

      <Reveal>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.resume.openAriaLabel}
          className="mx-auto block max-w-xs"
        >
          <TiltCard className="glass-card shadow-elevation-2 overflow-hidden rounded-3xl">
            <div className="bg-muted relative aspect-[707/1000]">
              <BlurImage
                src="/cv-preview.png"
                alt={t.resume.previewAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, 20rem"
              />
            </div>
          </TiltCard>
        </a>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex flex-col items-center gap-3">
          <Magnetic>
            <Button
              asChild
              className="shadow-glow bg-brand text-brand-foreground h-12 gap-2 rounded-full px-7 text-sm font-medium hover:opacity-90"
            >
              <a href="/cv.pdf" download>
                {t.resume.download}
                <Download className="size-4" />
              </a>
            </Button>
          </Magnetic>
          {locale === "en" && (
            <p className="text-muted-foreground text-caption">{t.resume.note}</p>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
