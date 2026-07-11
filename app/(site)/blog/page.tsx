import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notas técnicas sobre desarrollo frontend, arquitectura y diseño de producto.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Section containerSize="narrow">
      <SectionHeading eyebrow="Blog técnico" title="Escritos y notas" />
      <div className="divide-border divide-y">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06} as="article">
            <Link href={`/blog/${post.slug}`} className="group block py-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-muted-foreground text-caption font-mono">
                  {new Date(post.date).toLocaleDateString("es", {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
                <span className="text-muted-foreground text-caption">
                  · {post.readingTime}
                </span>
              </div>
              <h2 className="group-hover:text-brand mt-1 text-xl font-semibold transition-colors">
                {post.title}
              </h2>
              <p className="text-muted-foreground mt-1.5 text-sm">{post.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
