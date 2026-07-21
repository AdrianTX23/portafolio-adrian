"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useState } from "react";
import { BlurImage } from "@/components/motion/blur-image";
import { Reveal } from "@/components/motion/reveal";
import { useLocale } from "@/components/providers/locale-provider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
  title: string;
  images: string[];
  summary: string;
  liveUrl?: string;
}

function CaseHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-h3 flex items-center gap-3 font-semibold tracking-tight">
      <span aria-hidden="true" className="bg-brand h-px w-8 shrink-0" />
      {children}
    </h2>
  );
}

export function ProjectGallery({ title, images, summary, liveUrl }: ProjectGalleryProps) {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;
  const activeImage = openIndex !== null ? images[openIndex] : undefined;

  const go = useCallback(
    (dir: 1 | -1) => {
      setOpenIndex((prev) => {
        if (prev === null) return prev;
        return (prev + dir + images.length) % images.length;
      });
    },
    [images.length],
  );

  return (
    <section aria-label={t.projects.galleryTitle}>
      <Reveal>
        <div className="mb-6">
          <CaseHeading>{t.projects.galleryTitle}</CaseHeading>
          <p className="text-muted-foreground mt-3 text-sm">{t.projects.galleryHint}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={`${t.projects.imageCounter} ${i + 1}`}
              className="group border-glass focus-visible:ring-ring bg-muted relative aspect-[16/10] overflow-hidden rounded-2xl border outline-none transition-colors duration-300 hover:border-white/20 focus-visible:ring-2"
            >
              <BlurImage
                src={src}
                alt={`${title} — ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="glass inline-flex size-10 items-center justify-center rounded-full text-white backdrop-blur-xl">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </Reveal>

      <Dialog open={isOpen} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          className="max-w-[calc(100%-1.5rem)] gap-0 overflow-hidden p-0 sm:max-w-3xl lg:max-w-4xl"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
          }}
        >
          <DialogTitle className="sr-only">{title}</DialogTitle>

          <div className="bg-muted relative aspect-[16/10]">
            {activeImage && (
              <BlurImage
                key={activeImage}
                src={activeImage}
                alt={`${title} — ${(openIndex ?? 0) + 1}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            )}

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={t.projects.prevImage}
                  className="glass hover:text-brand absolute top-1/2 left-3 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-white backdrop-blur-xl transition-colors"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={t.projects.nextImage}
                  className="glass hover:text-brand absolute top-1/2 right-3 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-white backdrop-blur-xl transition-colors"
                >
                  <ChevronRight className="size-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {images.map((src, i) => (
                    <span
                      key={src}
                      aria-hidden="true"
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === openIndex ? "bg-brand w-5" : "w-1.5 bg-white/40",
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="font-heading text-h3 font-semibold tracking-tight">{title}</p>
              <DialogDescription className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {summary}
              </DialogDescription>
            </div>
            {liveUrl && (
              <Button asChild className="shadow-glow shrink-0 gap-1.5">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  {t.projects.visitWebsite}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
