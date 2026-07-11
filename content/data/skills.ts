import type { Skill } from "@/types/skill";

export const skills: Skill[] = [
  { name: "HTML", category: "frontend", icon: "html5", level: "advanced" },
  { name: "CSS", category: "frontend", icon: "css3", level: "advanced" },
  { name: "JavaScript", category: "frontend", icon: "javascript", level: "advanced" },
  { name: "TypeScript", category: "frontend", icon: "typescript", level: "advanced" },
  { name: "React", category: "frontend", icon: "react", level: "advanced" },
  { name: "Next.js", category: "frontend", icon: "nextjs", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss", level: "advanced" },
  { name: "PHP", category: "backend", icon: "php", level: "proficient" },
  { name: ".NET", category: "backend", icon: "dotnet", level: "proficient" },
  { name: "Node.js", category: "backend", icon: "nodejs", level: "proficient" },
  { name: "Supabase", category: "database", icon: "supabase", level: "proficient" },
  { name: "PostgreSQL", category: "database", icon: "postgresql", level: "proficient" },
  { name: "MySQL", category: "database", icon: "mysql", level: "advanced" },
  { name: "Git", category: "tools", icon: "git", level: "advanced" },
  { name: "GitHub", category: "tools", icon: "github", level: "advanced" },
  { name: "Power BI", category: "data", icon: "powerbi", level: "advanced" },
];

export const categoryLabels: Record<Skill["category"], string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Bases de datos",
  tools: "Herramientas",
  data: "Datos & BI",
};
