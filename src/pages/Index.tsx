import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import InsightsSection from "@/components/InsightsSection";
import AboutSection from "@/components/AboutSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <DifferentiatorsSection />
        <InsightsSection />
        <AboutSection />
        <FinalCTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
