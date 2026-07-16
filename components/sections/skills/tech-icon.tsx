import {
  SiDotnet,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

const ICONS: Record<string, ComponentType<{ className?: string; color?: string }>> = {
  html5: SiHtml5,
  javascript: SiJavascript,
  typescript: SiTypescript,
  react: SiReact,
  nextjs: SiNextdotjs,
  tailwindcss: SiTailwindcss,
  php: SiPhp,
  dotnet: SiDotnet,
  aspnet: SiDotnet,
  nodejs: SiNodedotjs,
  supabase: SiSupabase,
  postgresql: SiPostgresql,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  swift: SiSwift,
};

// Brand marks that are near-black/white and would vanish against a dark
// background — render these with currentColor instead of their true brand hex.
const MONOCHROME_ICONS = new Set(["nextjs", "github"]);

interface TechIconProps {
  icon: string;
  label: string;
  className?: string;
}

export function TechIcon({ icon, label, className }: TechIconProps) {
  const Icon = ICONS[icon];

  if (!Icon) {
    return (
      <span
        className={cn(
          "bg-muted text-muted-foreground inline-flex items-center justify-center rounded-md text-[0.6rem] font-bold",
          className,
        )}
        aria-hidden="true"
      >
        {label.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    <Icon
      className={className}
      aria-hidden="true"
      color={MONOCHROME_ICONS.has(icon) ? "currentColor" : "default"}
    />
  );
}
