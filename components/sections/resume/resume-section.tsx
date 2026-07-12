import { Download } from "lucide-react";
import { BlurImage } from "@/components/motion/blur-image";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { TiltCard } from "@/components/motion/tilt-card";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
  return (
    <Section id="cv" spacing="sm" containerSize="narrow">
      <SectionHeading
        eyebrow="Hoja de vida"
        title="Mi CV"
        description="Vista previa completa — descárgala si prefieres tenerla en tu equipo."
        align="center"
      />

      <Reveal>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir CV en una pestaña nueva"
          className="mx-auto block max-w-xs"
        >
          <TiltCard className="glass-card shadow-elevation-2 overflow-hidden rounded-3xl">
            <div className="bg-muted relative aspect-[707/1000]">
              <BlurImage
                src="/cv-preview.png"
                alt="Vista previa del CV de Adrián Pico Martínez"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 80vw, 20rem"
              />
            </div>
          </TiltCard>
        </a>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-8 flex justify-center">
          <Magnetic>
            <Button
              asChild
              className="shadow-glow bg-brand text-brand-foreground h-12 gap-2 rounded-full px-7 text-sm font-medium hover:opacity-90"
            >
              <a href="/cv.pdf" download>
                Descargar CV
                <Download className="size-4" />
              </a>
            </Button>
          </Magnetic>
        </div>
      </Reveal>
    </Section>
  );
}
