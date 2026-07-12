import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostContent } from "@/components/sections/blog/blog-post-content";
import { Container } from "@/components/shared/container";
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
    title: post.meta.title.es,
    description: post.meta.description.es,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const { Content, meta } = post;

  return (
    <Container as="article" size="narrow" className="py-section-sm">
      <BlogPostContent meta={meta}>
        <Content />
      </BlogPostContent>
    </Container>
  );
}
