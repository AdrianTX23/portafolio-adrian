import Link from "next/link";
import { LogoMark } from "./logo-mark";

export function Logo() {
  return (
    <Link
      href="/"
      className="focus-visible:ring-ring inline-flex items-center gap-2 rounded-md text-sm font-semibold tracking-tight outline-none focus-visible:ring-2"
      aria-label="Adrián Pico Martínez — inicio"
    >
      <LogoMark className="text-brand size-7" />
      Adrián Pico
    </Link>
  );
}
