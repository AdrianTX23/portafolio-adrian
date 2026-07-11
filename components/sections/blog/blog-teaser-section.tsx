import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/shared/section";
import { SectionHeading } from "@/components/shared/section-heading";
import { getAllPosts } from "@/lib/blog";

export function BlogTeaserSection() {
  const posts = getAllPosts().slice(0, 2);

  return (
    <Section id="blog" spacing="sm" containerSize="narrow">
      <SectionHeading eyebrow="Blog técnico" title="Últimos escritos" />
      <div className="divide-border divide-y">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <Link href={`/blog/${post.slug}`} className="group block py-5">
              <p className="text-muted-foreground text-caption font-mono">
                {new Date(post.date).toLocaleDateString("es", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
              <h3 className="group-hover:text-brand mt-1 font-semibold transition-colors">
                {post.title}
              </h3>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.16}>
        <div className="mt-6">
          <Link
            href="/blog"
            className="text-brand inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
          >
            Ver todos los artículos
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
