import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyCFOElite from "@/components/WhyCFOElite";
import ServicesSection from "@/components/ServicesSection";
import InsightsSection from "@/components/InsightsSection";
import CommunitySection from "@/components/CommunitySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyCFOElite />
        <ServicesSection />
        <InsightsSection />
        <CommunitySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
