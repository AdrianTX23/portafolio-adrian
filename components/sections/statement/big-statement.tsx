"use client";

import { ScrollRevealText } from "@/components/motion/scroll-reveal-text";
import { useLocale } from "@/components/providers/locale-provider";
import { Section } from "@/components/shared/section";

export function BigStatement() {
  const { t } = useLocale();
  const fullText = `${t.statement.before}${t.statement.highlight}${t.statement.after}`;

  return (
    <Section spacing="sm" variant="muted">
      <ScrollRevealText
        text={fullText}
        highlight={t.statement.highlight}
        className="font-heading"
      />
    </Section>
  );
}
