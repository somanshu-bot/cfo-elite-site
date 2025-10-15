import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhenToCallSection from "@/components/WhenToCallSection";
import StatsSection from "@/components/StatsSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import ApproachSection from "@/components/ApproachSection";
import InsightsSection from "@/components/InsightsSection";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhenToCallSection />
        <StatsSection />
        <CaseStudiesSection />
        <DifferentiatorsSection />
        <ApproachSection />
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
