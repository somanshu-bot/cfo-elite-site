import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

interface CaseStudy {
  id: number;
  icon: React.ReactNode;
  company: string;
  industry: string;
  challenge: string;
  summary: string;
  fullStory: {
    background: string;
    approach: string;
    outcome: string;
    metrics: string[];
  };
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    company: "Global Tech Solutions",
    industry: "SaaS",
    challenge: "IPO-track CFO with public-company readiness",
    summary: "First shortlist in 9 business days; 3 board-ready finalists within 5–6 weeks.",
    fullStory: {
      background: "Mandate: IPO-track CFO with public-company readiness.",
      approach: "Outcome (pre-joining):",
      outcome: "",
      metrics: [
        "First shortlist in 9 business days; 3 board-ready finalists within 5–6 weeks.",
        "Deep references completed (6 per finalist) and background checks cleared.",
        "Offer closed at market-median with equity aligned to milestones; joining date secured within 60 days."
      ]
    }
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-primary" />,
    company: "Heritage Manufacturing Ltd.",
    industry: "Industrial",
    challenge: "Controls-focused CFO for multi-plant operations",
    summary: "27-profile longlist across listed/PE peers; 5 capex-seasoned finalists.",
    fullStory: {
      background: "Mandate: Controls-focused CFO for multi-plant operations.",
      approach: "Outcome (pre-joining):",
      outcome: "",
      metrics: [
        "27-profile longlist across listed/PE peers; 5 capex-seasoned finalists.",
        "Plant-case interview enabled apples-to-apples evaluation; board aligned in two reviews.",
        "Offer acceptance in 11 days from finalist selection; relocation support locked."
      ]
    }
  },
  {
    id: 3,
    icon: <Target className="w-8 h-8 text-primary" />,
    company: "Retail Innovation Group",
    industry: "Omnichannel/D2C",
    challenge: "Growth CFO with unit-economics discipline",
    summary: "34 profiles mapped; 4 finalists with marketplace + offline exposure.",
    fullStory: {
      background: "Mandate: Growth CFO with unit-economics discipline.",
      approach: "Outcome (pre-joining):",
      outcome: "",
      metrics: [
        "34 profiles mapped; 4 finalists with marketplace + offline exposure.",
        "Compensation benchmark shared to avoid overpaying; closed within target band.",
        "90-day onboarding plan drafted with CEO/CHRO pre-notice; confidentiality maintained with coded outreach."
      ]
    }
  },
  {
    id: 4,
    icon: <Users className="w-8 h-8 text-primary" />,
    company: "Healthcare Services Network",
    industry: "Healthcare",
    challenge: "PE-backed CFO with strong governance",
    summary: "Finalists blended Big-4 + operator backgrounds; audit/governance case used.",
    fullStory: {
      background: "Mandate: PE-backed CFO with strong governance.",
      approach: "Outcome (pre-joining):",
      outcome: "",
      metrics: [
        "Finalists blended Big-4 + operator backgrounds; audit/governance case used.",
        "Reference triangulation surfaced a red flag; finalist replaced without delay.",
        "Term sheet agreed in 7 days; ESOP and clawback aligned with fund; board sign-off in first review."
      ]
    }
  },
  {
    id: 5,
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    company: "Digital Infrastructure Player",
    industry: "Infrastructure",
    challenge: "Project-finance CFO for multi-entity structure",
    summary: "3 finalists with structured-finance depth; lender references done pre-offer.",
    fullStory: {
      background: "Mandate: Project-finance CFO for multi-entity structure.",
      approach: "Outcome (pre-joining):",
      outcome: "",
      metrics: [
        "3 finalists with structured-finance depth; lender references done pre-offer.",
        "Offer closed within 4 weeks of kick-off; notice-period buyout negotiated.",
        "Role charter and reporting cadence agreed between Founder/PE/CEO pre-acceptance."
      ]
    }
  }
];

const CaseStudiesSection = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  return (
    <>
      <section id="case-studies" className="section-padding bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-gradient-primary">
              Success stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Card 
                key={caseStudy.id} 
                className="card-premium hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCase(caseStudy)}
              >
                <CardContent className="p-8">
                  <div className="mb-6">{caseStudy.icon}</div>
                  <h3 className="text-2xl font-heading font-bold mb-2 text-foreground">
                    {caseStudy.company}
                  </h3>
                  <div className="text-sm text-primary font-semibold mb-4">
                    {caseStudy.industry}
                  </div>
                  <div className="text-sm text-muted-foreground font-semibold mb-4">
                    Mandate:
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {caseStudy.challenge}
                  </p>
                  <div className="text-sm text-muted-foreground font-semibold mb-2">
                    Outcome:
                  </div>
                  <p className="text-foreground mb-6">
                    {caseStudy.summary}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => setSelectedCase(caseStudy)}
                  >
                    Read story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedCase && (
            <>
              <DialogHeader>
                <div className="mb-4">{selectedCase.icon}</div>
                <DialogTitle className="text-3xl font-heading">
                  {selectedCase.company}
                </DialogTitle>
                <DialogDescription className="text-lg text-primary font-semibold">
                  {selectedCase.industry}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                <div>
                  <p className="text-muted-foreground leading-relaxed font-semibold">
                    {selectedCase.fullStory.background}
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="text-xl font-heading font-bold mb-4 text-foreground">
                    {selectedCase.fullStory.approach}
                  </h4>
                  <ul className="space-y-3">
                    {selectedCase.fullStory.metrics.map((metric, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-foreground">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseStudiesSection;
