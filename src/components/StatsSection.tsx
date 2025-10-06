import { Card, CardContent } from "@/components/ui/card";
import { Target, Briefcase, Award } from "lucide-react";
import timesOfIndiaLogo from "@/assets/times-of-india-logo.png";
import economicTimesLogo from "@/assets/economic-times-logo.png";
import storyboard18Logo from "@/assets/storyboard18-logo.png";

const StatsSection = () => {
  const stats = [
    {
      icon: Target,
      number: "300+",
      label: "CFO & Finance Leadership Assessments",
      description: "Deep evaluation across listed and unlisted firms"
    },
    {
      icon: Briefcase,
      number: "50+",
      label: "CFO Mandates Across PE, Listed, and Family-Owned Firms",
      description: "Proven track record of successful placements"
    },
    {
      icon: Award,
      number: "Featured",
      label: "Top Media Coverage",
      description: "Recognized thought leadership in CFO hiring",
      publicationLogos: [
        { src: timesOfIndiaLogo, alt: "Times of India" },
        { src: economicTimesLogo, alt: "Economic Times" },
        { src: storyboard18Logo, alt: "Storyboard18" }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-heading font-bold text-accent mb-3">{stat.number}</div>
                <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground mb-4">{stat.description}</div>
                
                {stat.publicationLogos && (
                  <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
                    {stat.publicationLogos.map((logo, idx) => (
                      <img 
                        key={idx}
                        src={logo.src}
                        alt={logo.alt}
                        className={`w-auto object-contain ${idx === 0 ? 'h-12' : idx === 2 ? 'h-10' : 'h-8'}`}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
