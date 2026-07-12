"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import type { BlogPostMeta } from "@/types/blog";

interface BlogTeaserContentProps {
  posts: BlogPostMeta[];
}

export function BlogTeaserContent({ posts }: BlogTeaserContentProps) {
  const { t, locale } = useLocale();

  return (
    <>
      <SectionHeading eyebrow={t.blog.teaserEyebrow} title={t.blog.teaserTitle} />
      <div className="space-y-3">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.08}>
            <Link
              href={`/blog/${post.slug}`}
              className="glass-card group block rounded-2xl p-5 transition-all duration-300 hover:border-white/15"
            >
              <p className="text-caption text-muted-foreground font-mono tracking-wide">
                {new Date(post.date).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "long",
                })}
              </p>
              <h3 className="font-heading mt-1.5 text-lg font-semibold tracking-tight transition-colors group-hover:text-brand">
                {post.title[locale]}
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
            {t.blog.viewAllArticles}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </Reveal>
    </>
  );
}
