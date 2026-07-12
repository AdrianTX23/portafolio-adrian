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
      <div className="space-y-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <Link
              href={`/blog/${post.slug}`}
              className="glass-card group block rounded-2xl p-5 transition-all duration-300 hover:border-white/15"
            >
              <p className="text-caption text-muted-foreground font-mono tracking-wide">
                {new Date(post.date).toLocaleDateString("es", {
                  year: "numeric",
                  month: "long",
                })}
              </p>
              <h3 className="font-heading mt-1.5 text-lg font-semibold tracking-tight transition-colors group-hover:text-brand">
                {post.title}
              </h3>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.16}>
        <div className="mt-8">
          <Link
            href="/blog"
            className="text-brand inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
          >
            Ver todos los artículos
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
