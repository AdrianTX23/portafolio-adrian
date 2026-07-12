import { ScrollRevealText } from "@/components/motion/scroll-reveal-text";
import { Section } from "@/components/shared/section";

interface StatementPart {
  text: string;
  strong?: boolean;
}

interface BigStatementProps {
  parts: (string | StatementPart)[];
}

export function BigStatement({ parts }: BigStatementProps) {
  const fullText = parts
    .map((part) => (typeof part === "string" ? part : part.text))
    .join("");

  const highlightPart = parts.find(
    (part): part is StatementPart => typeof part !== "string" && !!part.strong,
  );

  return (
    <Section spacing="sm" variant="muted">
      <ScrollRevealText
        text={fullText}
        highlight={highlightPart?.text}
        className="font-heading"
      />
    </Section>
  );
}
