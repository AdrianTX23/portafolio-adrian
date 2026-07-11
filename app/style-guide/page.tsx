import type { Metadata } from "next";
import { ElevationSection } from "./_sections/elevation-section";
import { HeroIntro } from "./_sections/hero-intro";
import { InteractiveSection } from "./_sections/interactive-section";
import { MotionSection } from "./_sections/motion-section";
import { PaletteSection } from "./_sections/palette-section";
import { TypographySection } from "./_sections/typography-section";

export const metadata: Metadata = {
  title: "Style Guide",
  robots: { index: false, follow: false },
};

export default function StyleGuidePage() {
  return (
    <main>
      <HeroIntro />
      <PaletteSection />
      <TypographySection />
      <ElevationSection />
      <InteractiveSection />
      <MotionSection />
    </main>
  );
}
