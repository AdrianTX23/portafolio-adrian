import { Section } from "@/components/shared/section";
import { getAllPosts } from "@/lib/blog";
import { BlogTeaserContent } from "./blog-teaser-content";

export function BlogTeaserSection() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <Section id="blog" spacing="sm" containerSize="narrow">
      <BlogTeaserContent posts={posts} />
    </Section>
  );
}
