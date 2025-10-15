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
        { src: timesOfIndiaLogo, alt: "Times of India", url: "https://timesofindia.indiatimes.com/business/india-business/cfo-churn-most-finance-bosses-exit-in-2-years/articleshow/123128576.cms" },
        { src: economicTimesLogo, alt: "Economic Times", url: "https://economictimes.indiatimes.com/jobs/c-suite/cfos-are-quitting-indian-firms-before-finishing-2-years/articleshow/123140494.cms" },
        { src: storyboard18Logo, alt: "Storyboard18", url: "https://www.storyboard18.com/how-it-works/wave-of-cfo-exits-hits-india-inc-over-100-departures-in-h1-fy2026-81897.htm" }
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Experience & Network
          </h2>
        </div>
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
                  <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
                    {stat.publicationLogos.map((logo, idx) => (
                      <a 
                        key={idx}
                        href={logo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-opacity hover:opacity-70"
                      >
                        <img 
                          src={logo.src}
                          alt={logo.alt}
                          className="h-10 w-auto object-contain"
                        />
                      </a>
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
