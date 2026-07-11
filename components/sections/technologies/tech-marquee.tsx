import { skills } from "@/content/data/skills";
import { TechIcon } from "@/components/sections/skills/tech-icon";

export function TechMarquee() {
  const track = [...skills, ...skills];

  return (
    <div className="mask-fade-edges relative overflow-hidden py-4">
      <div
        className="marquee-track flex w-max items-center gap-10"
        style={{ "--marquee-duration": "36s" } as React.CSSProperties}
      >
        {track.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="text-muted-foreground flex shrink-0 items-center gap-2.5"
          >
            <TechIcon icon={skill.icon} label={skill.name} className="size-6" />
            <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
