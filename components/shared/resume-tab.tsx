import { FileText } from "lucide-react";
import Link from "next/link";

export function ResumeTab() {
  return (
    <Link
      href="/#cv"
      aria-label="Ir a mi CV"
      className="border-border bg-card text-muted-foreground shadow-elevation-2 hover:text-brand hover:border-brand-border fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-l-lg border border-r-0 px-2.5 py-4 text-caption font-mono tracking-widest uppercase transition-colors sm:flex"
    >
      <FileText className="size-3.5" />
      <span style={{ writingMode: "vertical-rl" }}>CV</span>
    </Link>
  );
}
