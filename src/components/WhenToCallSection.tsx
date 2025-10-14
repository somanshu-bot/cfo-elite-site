import { Check } from "lucide-react";

const WhenToCallSection = () => {
  const scenarios = [
    "Scale-up to Series C / IPO readiness",
    "Cash-flow stress or margin dilution",
    "ERP/controls revamp; audit findings",
    "Founder CFO succession or PE entry",
    "Multi-country, multi-entity consolidation"
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-muted via-background to-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-8 text-center text-foreground">
            When to call us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {scenarios.map((scenario, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors"
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-snug">{scenario}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhenToCallSection;
