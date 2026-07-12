/**
 * Haz de luz teatral que cae desde arriba sobre el contenido del hero.
 * Estilos inline a propósito: Lightning CSS descarta estos conic-gradient
 * si se definen en globals.css.
 */
export function Spotlight() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg at 50% -12%, transparent 150deg, oklch(0.92 0.03 258 / 7%) 168deg, oklch(0.96 0.02 258 / 16%) 180deg, oklch(0.92 0.03 258 / 7%) 192deg, transparent 210deg)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg at 38% -14%, transparent 160deg, oklch(var(--brand-lch) / 9%) 176deg, transparent 194deg)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `conic-gradient(from 0deg at 62% -14%, transparent 166deg, oklch(var(--brand-lch) / 9%) 184deg, transparent 200deg)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 40% at 50% -8%, oklch(var(--brand-lch) / 24%), transparent 70%)`,
        }}
      />
    </div>
  );
}
