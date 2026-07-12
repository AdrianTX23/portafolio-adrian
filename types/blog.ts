import type { Localized } from "@/lib/i18n/types";

export interface BlogPostMeta {
  slug: string;
  title: Localized<string>;
  description: Localized<string>;
  date: string;
  tags: Localized<string[]>;
  coverImage?: string;
  readingTime: Localized<string>;
}
