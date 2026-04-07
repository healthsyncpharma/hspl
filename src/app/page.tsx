import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import StatsBar from "@/components/stats-bar";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ManufacturersSection from "@/components/manufacturers-section";
import PresenceSection from "@/components/presence-section";
import CareersSection from "@/components/careers-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md">
        Skip to main content
      </a>
      <Navbar />
      <div id="main-content">
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ServicesSection />
        <ManufacturersSection />
        <PresenceSection />
        <CareersSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
