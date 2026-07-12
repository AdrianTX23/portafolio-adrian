"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type SyntheticEvent } from "react";
import { cn } from "@/lib/utils";

export function BlurImage({ className, alt, onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  function handleLoad(event: SyntheticEvent<HTMLImageElement>) {
    setLoaded(true);
    onLoad?.(event);
  }

  return (
    <Image
      alt={alt}
      className={cn(
        "transition-all duration-700 ease-out",
        loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-lg",
        className,
      )}
      onLoad={handleLoad}
      ref={(img) => {
        if (img?.complete) setLoaded(true);
      }}
      {...props}
    />
  );
}
