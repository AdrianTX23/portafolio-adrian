import type { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect width="32" height="32" rx="9" fill="currentColor" />
      <path
        d="M11 10.5 L17 16 L11 21.5"
        stroke="var(--background)"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect x="18.5" y="19.5" width="6.5" height="2.75" rx="1.375" fill="var(--background)" />
    </svg>
  );
}
