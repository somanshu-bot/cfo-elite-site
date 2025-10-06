import { Card, CardContent } from "@/components/ui/card";
import { Target, Briefcase, Award } from "lucide-react";

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
      publications: ["Economic Times", "Storyboard18", "Business Standard"]
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
                
                {stat.publications && (
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {stat.publications.map((pub, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-3 py-1.5 bg-accent/10 text-accent-foreground rounded-full font-medium border border-accent/20"
                      >
                        {pub}
                      </span>
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
