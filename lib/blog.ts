import fs from "node:fs";
import path from "node:path";
import readingTime from "reading-time";
import * as designSystemsTailwindV4 from "@/content/blog/design-systems-tailwind-v4.mdx";
import * as nextjs16AppRouter from "@/content/blog/nextjs-16-app-router.mdx";
import type { BlogPostMeta } from "@/types/blog";

const modules = {
  "nextjs-16-app-router": nextjs16AppRouter,
  "design-systems-tailwind-v4": designSystemsTailwindV4,
};

function computeReadingTime(slug: string): { es: string; en: string } {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const en = readingTime(raw).text;
  return { en, es: en.replace("min read", "min de lectura") };
}

export function getAllPosts(): BlogPostMeta[] {
  return Object.entries(modules)
    .map(([slug, mod]) => ({
      slug,
      ...mod.meta,
      readingTime: computeReadingTime(slug),
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const mod = modules[slug as keyof typeof modules];
  if (!mod) return null;

  return {
    Content: mod.default,
    meta: {
      slug,
      ...mod.meta,
      readingTime: computeReadingTime(slug),
    } satisfies BlogPostMeta,
  };
}
