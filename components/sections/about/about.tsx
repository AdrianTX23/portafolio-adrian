import { GraduationCap, Languages, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const facts = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Barranquilla, Colombia",
  },
  {
    icon: GraduationCap,
    label: "Educación",
    value: "Ingeniería de Sistemas · Universidad Simón Bolívar (2023)",
  },
  {
    icon: Languages,
    label: "Inglés",
    value: "Nivel B2 — equipos y documentación internacional",
  },
];

const certifications = ["Power BI Avanzado · Udemy", "Excel Avanzado · Grupo Ninja"];

export function About() {
  return (
    <Section id="sobre-mi">
      <SectionHeading eyebrow="Sobre mí" title="La persona detrás del código" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[auto_1fr]">
        <Reveal>
          <Avatar size="lg" className="size-28">
            <AvatarFallback className="bg-brand text-brand-foreground text-3xl font-semibold">
              AP
            </AvatarFallback>
          </Avatar>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.1}>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed">
              <p>
                Ingeniero de Sistemas graduado de la Universidad Simón Bolívar con
                experiencia en desarrollo de aplicaciones web utilizando React,
                JavaScript, TypeScript, HTML5, CSS3 y .NET. He participado en
                proyectos empresariales para SIGPE Consultores y BIG SAS,
                desarrollando soluciones de software, administrando bases de datos
                MySQL y construyendo reportes analíticos con Power BI.
              </p>
              <p>
                Me apasiona desarrollar aplicaciones modernas, intuitivas y
                escalables, enfocadas en ofrecer una excelente experiencia de
                usuario. Aprendo rápidamente nuevas tecnologías, disfruto trabajar
                en equipos multidisciplinarios y busco aportar soluciones que
                generen valor al negocio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <dl className="border-border grid grid-cols-1 gap-6 border-t pt-6 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label} className="flex gap-3">
                  <fact.icon className="text-brand mt-0.5 size-4 shrink-0" />
                  <div>
                    <dt className="text-caption text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium">{fact.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <Badge key={cert} variant="secondary">
                  {cert}
                </Badge>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
