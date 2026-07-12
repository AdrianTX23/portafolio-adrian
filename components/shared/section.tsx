import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container, type ContainerSize } from "./container";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerSize?: ContainerSize;
  spacing?: "default" | "sm";
  variant?: "default" | "elevated" | "muted";
}

export function Section({
  id,
  children,
  className,
  containerSize = "default",
  spacing = "default",
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        spacing === "sm" ? "py-section-sm" : "py-section",
        variant === "elevated" && "bg-secondary/30",
        variant === "muted" && "relative",
        className,
      )}
    >
      {variant === "muted" && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 ambient-glow opacity-50"
        />
      )}
      <Container size={containerSize} className="relative">
        {children}
      </Container>
    </section>
  );
}
