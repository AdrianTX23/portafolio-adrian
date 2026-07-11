import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerSize = "default" | "narrow" | "wide";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: ContainerSize;
}

const sizeClasses = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 sm:px-8", sizeClasses[size], className)}>
      {children}
    </Tag>
  );
}
