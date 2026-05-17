import Benefits from "@/components/Benefits";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LandingBackground from "@/components/LandingBackground";
import Process from "@/components/Process";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <LandingBackground />
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <DemoSection />
      <Process />
      <Footer />
    </main>
  );
}
