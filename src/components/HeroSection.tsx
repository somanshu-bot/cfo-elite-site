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
            Hire a CFO Who Moves the Business
          </h1>

          {/* Subtext */}
          <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in max-w-3xl drop-shadow-md">
            We help founders and CHROs hire CFOs who improve controls, unlock growth capital, and steady execution.
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
          <div className="animate-fade-in bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <p className="text-white/90 text-sm lg:text-base mb-4 text-center">
              300+ finance leadership assessments • 50+ CFO mandates • Featured in The Economic Times, Times of India
            </p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <img src={economicTimesLogo} alt="The Economic Times" className="h-6 opacity-90" />
              <img src={timesOfIndiaLogo} alt="Times of India" className="h-6 opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
