import Cta from "@/features/landing/components/cta";
import Features from "@/features/landing/components/features";
import Footer from "@/features/landing/components/footer";
import Header from "@/features/landing/components/header";
import Hero from "@/features/landing/components/hero/hero";

export const metadata = {
  title: "App Router",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background grid-bg">
      <Header />
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </div>
  );
}
