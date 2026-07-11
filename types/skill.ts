export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "data";
  icon: string;
  level: "learning" | "proficient" | "advanced";
}
