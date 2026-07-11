import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", align === "center" && "text-center")}>
      <Reveal as="p" className="text-brand text-caption mb-2 font-mono uppercase">
        {eyebrow}
      </Reveal>
      <TextReveal as="h2" text={title} className="text-h2 font-semibold" />
      {description && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "text-muted-foreground text-lead mt-4 max-w-2xl",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
