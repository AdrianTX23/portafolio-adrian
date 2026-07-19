import { CursorGlow } from "@/components/motion/cursor-glow";
import { ScrollProgress } from "@/components/motion/scroll-progress";
import { PageTransition } from "@/components/providers/page-transition";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { ResumeTab } from "@/components/shared/resume-tab";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main className="pt-24">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <ResumeTab />
    </SmoothScrollProvider>
  );
}
