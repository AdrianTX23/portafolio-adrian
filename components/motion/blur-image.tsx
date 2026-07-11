"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function BlurImage({ className, alt, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      alt={alt}
      className={cn(
        "transition-all duration-700 ease-out",
        loaded ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-lg",
        className,
      )}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}
