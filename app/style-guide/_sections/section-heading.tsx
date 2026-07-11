import { TextReveal } from "@/components/motion/text-reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <p className="text-brand text-caption mb-2 font-mono uppercase">{eyebrow}</p>
      <TextReveal as="h2" text={title} className="text-h2 font-semibold" />
    </div>
  );
}
