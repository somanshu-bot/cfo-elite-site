import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Trophy, TrendingUp, CheckCircle, Star } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { number: "500+", label: "CXO Placements", description: "Across all functions" },
    { number: "15+", label: "Years Experience", description: "In executive search" },
    { number: "100+", label: "Client Partners", description: "Across industries" },
    { number: "95%", label: "Success Rate", description: "Long-term retention" }
  ];

  const expertise = [
    {
      icon: Building2,
      title: "Industry Coverage",
      description: "Deep expertise across technology, manufacturing, financial services, healthcare, and emerging sectors.",
      highlights: ["Listed Companies", "PE/VC Portfolio", "Family Businesses", "Startups to Unicorns"]
    },
    {
      icon: Users,
      title: "Leadership Focus",
      description: "Specialized in C-suite appointments with particular strength in finance leadership roles.",
      highlights: ["CFO Mandates", "CEO Searches", "CTO Placements", "Board Advisory"]
    },
    {
      icon: Trophy,
      title: "Track Record",
      description: "Proven success in placing leaders who drive transformation and deliver sustainable results.",
      highlights: ["IPO-Ready CFOs", "Turnaround Leaders", "Growth Architects", "Strategic Partners"]
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Research-driven approach with deep insights into compensation, retention, and succession trends.",
      highlights: ["Compensation Data", "Market Trends", "Succession Planning", "Leadership Assessment"]
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Ishwa Consulting
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The Powerhouse Behind <span className="text-gradient-primary">CFO Elite</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4">
            <span className="font-semibold text-foreground">Ishwa</span> — meaning "leader" in Sanskrit — 
            embodies our commitment to leadership excellence. As India's premier boutique executive search firm 
            and proud member of <span className="font-semibold">IMD International Search Group</span>, we bring 
            bull's-eye precision and personalized attention to every CFO mandate.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            CFO Elite is born from decades of deep expertise in finance leadership placement, 
            combining big-firm quality with boutique agility.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-accent mb-2 animate-count-up">{stat.number}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Core Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {expertise.map((item, index) => (
            <Card key={index} className="card-premium">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                
                <div className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Ishwa */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Why Choose Ishwa Consulting</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in India's executive search landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-3">Boutique Excellence</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Bull's-eye precision meets personalized service. Big-firm quality, boutique agility. Every mandate receives partner-level attention from our leadership-focused team.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-3">Data-Driven Insights</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Research-backed approach with proprietary market intelligence, compensation data, and industry trend analysis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-3">Global Network, Local Expertise</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leverage IMD International Search Group's global reach with Ishwa's deep India expertise. Exclusive access to top-tier CFOs, extensive connections, and cultural intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;