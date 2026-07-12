"use client";

import { Clock, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { GithubIcon, LinkedinIcon } from "@/components/shared/icons";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { SOCIAL_LINKS } from "@/lib/nav-links";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  const { t } = useLocale();

  const infoItems = [
    {
      icon: Mail,
      label: t.contact.emailLabel,
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
    },
    { icon: MapPin, label: t.contact.locationLabel, value: t.contact.location },
    { icon: Clock, label: t.contact.timezoneLabel, value: t.contact.timezoneValue },
  ];

  const socials = [
    { label: "GitHub", href: SOCIAL_LINKS.github, icon: GithubIcon },
    { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, icon: LinkedinIcon },
  ];

  return (
    <Section id="contacto">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,20rem)_1fr]">
        <div className="space-y-5">
          <Reveal>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading mb-5 text-base font-semibold tracking-tight">
                {t.contact.infoTitle}
              </h3>
              <ul className="space-y-4">
                {infoItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="border-glass bg-brand-muted text-brand mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border">
                      <item.icon className="size-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-caption text-muted-foreground tracking-wide uppercase">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="hover:text-brand text-sm font-medium break-all transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-heading mb-5 text-base font-semibold tracking-tight">
                {t.contact.connectTitle}
              </h3>
              <div className="flex flex-wrap gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-glass bg-background/40 hover:border-brand-border hover:text-brand inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors"
                  >
                    <social.icon className="size-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
