import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/cfo-elite-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-gradient-to-br from-muted-dark via-primary/40 to-muted-dark">
      {/* Background Image with Rich Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Rich gradient overlay for luxurious depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted-dark/80 via-primary/60 to-muted-dark/90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-8 leading-tight animate-fade-in text-white drop-shadow-lg">
            India's Most Trusted Partner in CFO and Finance Leadership Hiring
          </h1>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in max-w-3xl drop-shadow-md">
            From first-time CFOs to listed-company finance heads — Ishwa Consulting has helped organizations find and retain transformative finance leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in mb-16">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg px-8 py-6"
              onClick={() => scrollToSection('#insights')}
            >
              See Our Insights
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 backdrop-blur-sm"
              onClick={() => scrollToSection('#contact')}
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
