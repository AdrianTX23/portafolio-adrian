import { NotFoundContent } from "@/components/shared/not-found-content";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <NotFoundContent />
      </main>
      <Footer />
    </>
  );
}
