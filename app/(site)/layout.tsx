import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";
import { ResumeTab } from "@/components/shared/resume-tab";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
      <ResumeTab />
    </SmoothScrollProvider>
  );
}
