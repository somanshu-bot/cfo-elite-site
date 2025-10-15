import { Card, CardContent } from "@/components/ui/card";

const WhenToCallSection = () => {
  const scenarios = [
    {
      title: "Scale-up to Series C / IPO readiness",
      context: "Growth transition"
    },
    {
      title: "Cash-flow stress or margin dilution",
      context: "Financial discipline"
    },
    {
      title: "ERP/controls revamp; audit findings",
      context: "Governance upgrade"
    },
    {
      title: "Founder CFO succession or PE entry",
      context: "Leadership transition"
    },
    {
      title: "Multi-country, multi-entity consolidation",
      context: "Complex structure"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-heading font-bold mb-12 text-center text-foreground">
            When to call us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario, index) => (
              <Card 
                key={index}
                className="group relative overflow-hidden bg-card hover:shadow-premium transition-all duration-300 border-l-4 border-l-primary/0 hover:border-l-primary"
              >
                <CardContent className="p-6">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
                  <div className="relative">
                    <div className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide">
                      {scenario.context}
                    </div>
                    <h4 className="text-base font-semibold text-foreground leading-snug">
                      {scenario.title}
                    </h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenToCallSection;
