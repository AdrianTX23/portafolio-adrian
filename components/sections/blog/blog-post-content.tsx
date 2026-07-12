"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { useLocale } from "@/components/providers/locale-provider";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/types/blog";

interface BlogPostContentProps {
  meta: BlogPostMeta;
  children: ReactNode;
}

export function BlogPostContent({ meta, children }: BlogPostContentProps) {
  const { t, locale } = useLocale();

  return (
    <>
      <Reveal>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft className="size-4" />
          {t.blog.backToArticles}
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-muted-foreground text-caption font-mono">
          {new Date(meta.date).toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {meta.readingTime[locale]}
        </p>
      </Reveal>

      <TextReveal
        as="h1"
        text={meta.title[locale]}
        key={meta.title[locale]}
        className="text-h1 mt-2 mb-4 font-semibold"
      />

      <Reveal delay={0.1}>
        <div className="mb-8 flex flex-wrap gap-1.5">
          {meta.tags[locale].map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </Reveal>

      {locale === "en" && (
        <Reveal delay={0.12}>
          <p className="text-muted-foreground mb-6 text-sm italic">{t.blog.notAvailableNote}</p>
        </Reveal>
      )}

      <Reveal delay={0.15}>
        <div className="prose prose-neutral dark:prose-invert max-w-none">{children}</div>
      </Reveal>
    </>
  );
}
