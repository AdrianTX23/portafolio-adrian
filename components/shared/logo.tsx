import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="focus-visible:ring-ring rounded-md text-sm font-semibold tracking-tight outline-none focus-visible:ring-2"
      aria-label="Adrián Pico Martínez — inicio"
    >
      <span className="bg-brand text-brand-foreground mr-2 inline-flex size-7 items-center justify-center rounded-full text-xs">
        AP
      </span>
      Adrián Pico
    </Link>
  );
}
