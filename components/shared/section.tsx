import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerSize } from "./container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerSize?: ContainerSize;
  spacing?: "default" | "sm";
}

export function Section({
  id,
  children,
  className,
  containerSize = "default",
  spacing = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(spacing === "sm" ? "py-section-sm" : "py-section", className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
