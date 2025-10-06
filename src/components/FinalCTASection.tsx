import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[hsl(210,18%,12%)] via-[hsl(210,15%,18%)] to-[hsl(210,18%,12%)] relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-8 text-white">
            Partner with India's most respected CFO search specialists
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            >
              Talk to Our Team
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
              onClick={() => window.open('https://ishwaconsulting.com', '_blank')}
            >
              Explore Ishwa Consulting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
