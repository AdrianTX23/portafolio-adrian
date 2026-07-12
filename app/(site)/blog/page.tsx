import type { Metadata } from "next";
import { BlogListContent } from "@/components/sections/blog/blog-list-content";
import { Section } from "@/components/shared/section";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas técnicas sobre desarrollo frontend, arquitectura y diseño de producto.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section containerSize="narrow">
      <BlogListContent posts={posts} />
    </Section>
  );
}
