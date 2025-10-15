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
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-8 leading-tight animate-fade-in text-white drop-shadow-lg">
            CFO & Finance Leadership Search — Built for Outcomes
          </h1>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in max-w-3xl drop-shadow-md">
            Hire a CFO who steadies controls and enables growth. Built for founders and CHROs who want a disciplined, confidential search.
          </p>

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
            {/* Three compact badges */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                <p className="text-white/90 text-sm font-semibold">First shortlist in 10 business days</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                <p className="text-white/90 text-sm font-semibold">Board-ready finalists in 3–4 weeks</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
                <p className="text-white/90 text-sm font-semibold">Deep references completed pre-offer</p>
              </div>
            </div>
            
            {/* Secondary proof line */}
            <p className="text-white/80 text-sm text-center">
              300+ finance leadership assessments • 50+ CFO mandates • Pan-India CFO network
            </p>
            
            {/* Micro trust line */}
            <p className="text-white/60 text-xs text-center">
              Trusted by PE-backed, listed and high-growth companies (anonymised).
            </p>
            
            {/* Recent Mandates ticker */}
            <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10 overflow-hidden">
              <div className="flex animate-marquee">
                <span className="text-white/70 text-xs whitespace-nowrap pr-8">
                  CFO — PE Consumer | Closed in 5 weeks (Mumbai) • Group CFO — Listed Industrial | Closed in 6 weeks (Pune) • CFO Succession — Tech Services | Closed in 4 weeks (Bengaluru)
                </span>
                <span className="text-white/70 text-xs whitespace-nowrap pr-8">
                  CFO — PE Consumer | Closed in 5 weeks (Mumbai) • Group CFO — Listed Industrial | Closed in 6 weeks (Pune) • CFO Succession — Tech Services | Closed in 4 weeks (Bengaluru)
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
