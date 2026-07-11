export interface Project {
  slug: string;
  title: string;
  description: string;
  role: string;
  year: number;
  tags: string[];
  coverImage: string;
  previewVideo?: string;
  gallery: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}
