import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, TrendingUp, Award, Building2, Briefcase } from "lucide-react";

const WhyCFOElite = () => {
  const achievements = [
    {
      icon: Target,
      title: "Precision Focus",
      description: "Exclusively dedicated to CFO mandates with deep sector expertise across listed and unlisted companies.",
      stat: "100%",
      statLabel: "CFO Focused"
    },
    {
      icon: Users,
      title: "Proven Track Record",
      description: "Successfully placed CFOs across diverse industries with a track record of long-term retention.",
      stat: "20+",
      statLabel: "Successful Placements"
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Deep insights into CFO compensation, retention patterns, and succession planning across markets.",
      stat: "80%",
      statLabel: "From Unlisted Firms"
    },
    {
      icon: Award,
      title: "Thought Leadership",
      description: "Published research on CFO retention, succession, and leadership driving industry conversations.",
      stat: "50+",
      statLabel: "Published Insights"
    },
    {
      icon: Building2,
      title: "Sector Coverage",
      description: "Comprehensive coverage across technology, manufacturing, financial services, and emerging sectors.",
      stat: "10+",
      statLabel: "Industries"
    },
    {
      icon: Briefcase,
      title: "Board Partnership",
      description: "Trusted advisor to boards and promoters for finance leadership strategy and succession planning.",
      stat: "95%",
      statLabel: "Client Satisfaction"
    }
  ];

  return (
    <section id="why-cfo-elite" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Why Choose CFO Elite
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your <span className="text-gradient-primary">Strategic Partner</span> for CFO Excellence
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Built on Ishwa Consulting's proven expertise in executive search, CFO Elite brings together 
            deep market knowledge, extensive networks, and data-driven insights to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <Card key={index} className="card-premium group hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{item.stat}</div>
                    <div className="text-sm text-muted-foreground">{item.statLabel}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="mt-20 p-8 bg-primary/5 rounded-2xl border border-primary/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">The CFO Elite Advantage</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the executive search landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-lg font-semibold text-primary mb-2">Boutique Focus</div>
              <p className="text-sm text-muted-foreground">Big-4 polish with agile, personalized service</p>
            </div>
            <div className="text-center p-4">
              <div className="text-lg font-semibold text-primary mb-2">Data-Driven</div>
              <p className="text-sm text-muted-foreground">Research-backed insights and market intelligence</p>
            </div>
            <div className="text-center p-4">
              <div className="text-lg font-semibold text-primary mb-2">Network Effect</div>
              <p className="text-sm text-muted-foreground">Exclusive access to top-tier finance leaders</p>
            </div>
            <div className="text-center p-4">
              <div className="text-lg font-semibold text-primary mb-2">Long-term View</div>
              <p className="text-sm text-muted-foreground">Focus on cultural fit and sustainable success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCFOElite;