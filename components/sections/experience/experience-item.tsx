import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { formatMonthYear } from "@/lib/format-date";
import type { Experience } from "@/types/experience";

interface ExperienceItemProps {
  item: Experience;
  delay: number;
}

export function ExperienceItem({ item, delay }: ExperienceItemProps) {
  return (
    <Reveal delay={delay}>
      <div className="border-border grid grid-cols-1 gap-2 border-b py-8 last:border-b-0 sm:grid-cols-[10rem_1fr]">
        <p className="text-muted-foreground text-caption font-mono">
          {formatMonthYear(item.startDate)} — {formatMonthYear(item.endDate)}
        </p>

        <div>
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-h3 font-semibold">{item.role}</h3>
            <p className="text-muted-foreground text-sm">
              {item.company} · {item.location}
            </p>
          </div>
          <ul className="text-muted-foreground mt-3 list-disc space-y-1.5 pl-4 text-sm">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
