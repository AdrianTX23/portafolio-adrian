import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/motion/reveal";
import { TextReveal } from "@/components/motion/text-reveal";
import { Container } from "@/components/shared/container";
import { Badge } from "@/components/ui/badge";
import { getAllPosts, getPost } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { Content, meta } = post;

  return (
    <Container as="article" size="narrow" className="py-section-sm">
      <Reveal>
        <Link
          href="/blog"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft className="size-4" />
          Todos los artículos
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <p className="text-muted-foreground text-caption font-mono">
          {new Date(meta.date).toLocaleDateString("es", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {meta.readingTime}
        </p>
      </Reveal>

      <TextReveal as="h1" text={meta.title} className="text-h1 mt-2 mb-4 font-semibold" />

      <Reveal delay={0.1}>
        <div className="mb-8 flex flex-wrap gap-1.5">
          {meta.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <Content />
        </div>
      </Reveal>
    </Container>
  );
}
