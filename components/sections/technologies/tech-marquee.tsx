import { skills } from "@/content/data/skills";
import { TechIcon } from "@/components/sections/skills/tech-icon";

export function TechMarquee() {
  const track = [...skills, ...skills];

  return (
    <div className="mask-fade-edges relative overflow-hidden py-6">
      <div
        className="marquee-track flex w-max items-center gap-4"
        style={{ "--marquee-duration": "40s" } as React.CSSProperties}
      >
        {track.map((skill, i) => (
          <div
            key={`${skill.name}-${i}`}
            className="glass-card flex shrink-0 items-center gap-3 rounded-full px-5 py-2.5"
          >
            <TechIcon icon={skill.icon} label={skill.name} className="size-5" />
            <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
