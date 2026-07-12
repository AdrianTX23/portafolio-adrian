"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/types/blog";

interface BlogListContentProps {
  posts: BlogPostMeta[];
}

export function BlogListContent({ posts }: BlogListContentProps) {
  const { t, locale } = useLocale();

  return (
    <>
      <SectionHeading eyebrow={t.blog.listEyebrow} title={t.blog.listTitle} />
      <div className="divide-border divide-y">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.06} as="article">
            <Link href={`/blog/${post.slug}`} className="group block py-6">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-muted-foreground text-caption font-mono">
                  {new Date(post.date).toLocaleDateString(locale, {
                    year: "numeric",
                    month: "long",
                  })}
                </p>
                <span className="text-muted-foreground text-caption">
                  · {post.readingTime[locale]}
                </span>
              </div>
              <h2 className="group-hover:text-brand mt-1 text-xl font-semibold transition-colors">
                {post.title[locale]}
              </h2>
              <p className="text-muted-foreground mt-1.5 text-sm">{post.description[locale]}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.tags[locale].map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </>
  );
}
