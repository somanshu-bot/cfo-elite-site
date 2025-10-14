import { Card, CardContent } from "@/components/ui/card";

const ApproachSection = () => {
  const steps = [
    {
      number: "1",
      title: "Brief & scorecard (48 hrs)",
      description: "Success criteria, must-haves, derailers."
    },
    {
      number: "2",
      title: "Research & longlist (5–7 days)",
      description: "Mapped by industry, capital structure, scale."
    },
    {
      number: "3",
      title: "Structured interviews",
      description: "Business cases on cash, controls, and growth."
    },
    {
      number: "4",
      title: "Shortlist & references",
      description: "Three finalists with reference packs."
    },
    {
      number: "5",
      title: "Offer & onboarding",
      description: "Compensation, joining plan, first-90-day roadmap."
    }
  ];

  const serviceLevels = [
    "First shortlist in 10 business days",
    "Three finalists within 3–4 weeks",
    "Weekly progress update, one owner"
  ];

  const deRisking = [
    "Replacement guarantee: 6 months (can tailor)",
    "Fit risks flagged early; reference notes shared"
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
              Our approach
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Steps - Left Side */}
            <div className="lg:col-span-2 space-y-6">
              {steps.map((step) => (
                <Card key={step.number} className="card-premium">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <span className="text-primary-foreground font-bold">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Service Levels & De-risking - Right Side */}
            <div className="space-y-6">
              <Card className="bg-muted/50 border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-bold mb-4 text-foreground">
                    Service levels
                  </h3>
                  <ul className="space-y-3">
                    {serviceLevels.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-muted/50 border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-heading font-bold mb-4 text-foreground">
                    De-risking
                  </h3>
                  <ul className="space-y-3">
                    {deRisking.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
