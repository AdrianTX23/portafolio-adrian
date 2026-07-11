import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SOCIAL_LINKS } from "@/lib/nav-links";
import { ContactChat } from "./contact-chat";

export function ContactSection() {
  return (
    <Section id="contacto" containerSize="narrow">
      <SectionHeading
        eyebrow="Contacto"
        title="Hablemos de tu próximo proyecto"
        description="Respondo personalmente cada mensaje — cuéntame qué necesitas y te contacto a la brevedad."
      />
      <Reveal>
        <ContactChat />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="text-muted-foreground mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="hover:text-foreground flex items-center gap-1.5"
          >
            <Mail className="size-4" />
            {SOCIAL_LINKS.email}
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-4" />
            Barranquilla, Colombia
          </span>
        </div>
      </Reveal>
    </Section>
  );
}
