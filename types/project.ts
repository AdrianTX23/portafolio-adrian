import type { Localized } from "@/lib/i18n/types";

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
}
