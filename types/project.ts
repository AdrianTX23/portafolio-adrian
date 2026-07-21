import type { Localized } from "@/lib/i18n/types";

export interface ProjectMetric {
  value: string;
  label: Localized<string>;
}

export interface ProjectCaseStudy {
  /** Cifras de impacto mostradas como tarjetas destacadas. */
  metrics: ProjectMetric[];
  /** El reto / contexto del proyecto (párrafo). */
  context: Localized<string>;
  /** El enfoque / solución adoptada (párrafo). */
  approach: Localized<string>;
  /** Qué se construyó — características clave (viñetas). */
  features: Localized<string[]>;
  /** Decisiones técnicas / de arquitectura (viñetas). */
  architecture: Localized<string[]>;
  /** Resultados y aprendizajes (párrafo). */
  outcome: Localized<string>;
}

export interface Project {
  slug: string;
  title: string;
  description: Localized<string>;
  role: Localized<string>;
  year: number;
  tags: string[];
  coverImage: string;
  previewVideo?: string;
  gallery: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  caseStudy?: ProjectCaseStudy;
}
