import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { cn } from "@/lib/utils";

interface StatementPart {
  text: string;
  strong?: boolean;
}

interface BigStatementProps {
  parts: (string | StatementPart)[];
}

export function BigStatement({ parts }: BigStatementProps) {
  return (
    <Section spacing="sm">
      <Reveal>
        <p className="text-h1 mx-auto max-w-4xl text-center leading-tight font-semibold text-balance">
          {parts.map((part, i) => {
            const isString = typeof part === "string";
            const text = isString ? part : part.text;
            const strong = !isString && part.strong;
            return (
              <span key={i} className={cn(strong && "text-gradient-brand")}>
                {text}
              </span>
            );
          })}
        </p>
      </Reveal>
    </Section>
  );
}
