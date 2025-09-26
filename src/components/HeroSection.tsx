import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/cfo-elite-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="section-padding bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <TrendingUp size={16} className="text-accent" />
            <span className="text-accent font-medium">India's Premier CFO Leadership Partner</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-gradient-accent">Precision</span> in<br />
            CFO Leadership
          </h1>

          {/* Subline */}
          <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-4 animate-fade-in font-light">
            Executive Search | Insights | Community
          </p>

          {/* Description */}
          <p className="text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Born out of Ishwa Consulting's deep experience in CXO hiring, CFO Elite is your trusted partner for high-impact finance leadership across industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
            <Button 
              size="lg" 
              className="btn-accent text-lg px-8 py-6"
              onClick={() => scrollToSection('#why-cfo-elite')}
            >
              Explore CFO Elite
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="btn-outline-premium text-lg px-8 py-6"
              onClick={() => scrollToSection('#contact')}
            >
              Looking for your next CFO?
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">20+</div>
              <div className="text-primary-foreground/70">Successful CFO Mandates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">80%</div>
              <div className="text-primary-foreground/70">From Unlisted Firms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-primary-foreground/70">Industries Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;