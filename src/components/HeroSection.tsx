import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/cfo-elite-hero.jpg";
import economicTimesLogo from "@/assets/economic-times-logo.png";
import timesOfIndiaLogo from "@/assets/times-of-india-logo.png";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-muted-dark">
      {/* Background Image - More visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Dark grey overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,18%,15%)] via-[hsl(210,15%,20%)] to-[hsl(210,18%,15%)] opacity-85"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-12 leading-tight animate-fade-in text-white drop-shadow-lg">
            CFO & Finance Leadership Search
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-scale-in mb-8">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-accent text-lg px-8 py-6"
              onClick={() => scrollToSection('#contact')}
            >
              Book a 20-min consult
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-secondary text-lg px-8 py-6 backdrop-blur-sm"
              onClick={() => scrollToSection('#case-studies')}
            >
              See recent mandates
            </Button>
          </div>

          {/* Proof Bar */}
          <div className="animate-fade-in space-y-4">
            {/* Two compact badges */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                <p className="text-white/90 text-sm font-semibold">First shortlist in 10 business days</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                <p className="text-white/90 text-sm font-semibold">Board-ready finalists in 6–8 weeks</p>
              </div>
            </div>
            
            {/* Recent Mandates ticker */}
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10 overflow-hidden">
              <div className="flex animate-marquee">
                <span className="text-white/70 text-xs whitespace-nowrap pr-8">
                  CFO — Real Estate (Mumbai) | Shortlist in 10 days; board sign-off in first review • Group CFO — Financial Services (Delhi NCR) | Comp within target band; deep references pre-offer • CFO — Automotive/Industrial (Chennai) | Lender references completed; notice-period buyout negotiated • CFO — Hospitality/Executive Living (Bengaluru) | Zero market leakage; joining date secured • CFO — Industrial Conglomerate (Ahmedabad) | Role charter agreed; relocation finalised
                </span>
                <span className="text-white/70 text-xs whitespace-nowrap pr-8">
                  CFO — Real Estate (Mumbai) | Shortlist in 10 days; board sign-off in first review • Group CFO — Financial Services (Delhi NCR) | Comp within target band; deep references pre-offer • CFO — Automotive/Industrial (Chennai) | Lender references completed; notice-period buyout negotiated • CFO — Hospitality/Executive Living (Bengaluru) | Zero market leakage; joining date secured • CFO — Industrial Conglomerate (Ahmedabad) | Role charter agreed; relocation finalised
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
