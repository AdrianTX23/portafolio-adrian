import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
}

export function AuroraBackground({ className }: AuroraBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden mask-fade-edges",
        className,
      )}
    >
      <div
        className="aurora-blob top-[-10%] left-[10%] h-[45%] w-[45%]"
        style={{ background: "var(--aurora-1)", animationDelay: "0s" }}
      />
      <div
        className="aurora-blob top-[10%] right-[5%] h-[40%] w-[40%]"
        style={{ background: "var(--aurora-2)", animationDelay: "-7s" }}
      />
      <div
        className="aurora-blob bottom-[-15%] left-[25%] h-[50%] w-[50%]"
        style={{ background: "var(--aurora-3)", animationDelay: "-14s" }}
      />
    </div>
  );
}
