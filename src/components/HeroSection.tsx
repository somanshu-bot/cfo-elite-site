import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/cfo-boardroom.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-8 leading-tight animate-fade-in text-foreground">
            India's Most Trusted Partner in CFO and Finance Leadership Hiring
          </h1>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-secondary mb-12 leading-relaxed animate-fade-in max-w-3xl">
            From first-time CFOs to listed-company finance heads — Ishwa Consulting has helped organizations find and retain transformative finance leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in mb-16">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary-dark text-lg px-8 py-6"
              onClick={() => scrollToSection('#insights')}
            >
              See Our Insights
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
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
