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
    challenge: "IPO-track CFO after rapid ARR growth",
    summary: "Close-rate +19%, DSO −14 days, monthly flash in 30 days.",
    fullStory: {
      background: "A fast-growing SaaS company needed a CFO capable of taking them through IPO readiness while maintaining operational excellence during hypergrowth.",
      approach: "We focused on candidates with proven track records in IPO preparation, cash management discipline, and building scalable finance operations.",
      outcome: "The appointed CFO implemented robust financial controls, accelerated the close process, and established investor-grade reporting systems.",
      metrics: [
        "Close-rate improved by 19%",
        "Days Sales Outstanding reduced by 14 days",
        "Monthly flash reporting implemented in 30 days",
        "IPO-ready financial infrastructure established"
      ]
    }
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-primary" />,
    company: "Heritage Manufacturing Ltd.",
    industry: "Industrial",
    challenge: "Controls and cost discipline",
    summary: "Opex −3.9%, vendor terms improved, SAP controls tightened.",
    fullStory: {
      background: "A 50-year-old manufacturing company needed to modernize financial controls and implement cost discipline without disrupting operations.",
      approach: "We searched for candidates with deep experience in manufacturing finance, ERP implementations, and change management in traditional industries.",
      outcome: "The new CFO successfully tightened controls, negotiated better vendor terms, and implemented SAP-based financial discipline across operations.",
      metrics: [
        "Operating expenses reduced by 3.9%",
        "Vendor payment terms improved by 15 days",
        "SAP financial controls tightened and standardized",
        "Monthly variance analysis implemented"
      ]
    }
  },
  {
    id: 3,
    icon: <Target className="w-8 h-8 text-primary" />,
    company: "Retail Innovation Group",
    industry: "D2C/Omni",
    challenge: "Unit-economics recovery; PE reporting",
    summary: "GM% +3.2 pts, markdown loss −18%, 4-1-4 cash rhythm introduced.",
    fullStory: {
      background: "A retail group backed by PE needed to improve unit economics and implement institutional-grade financial reporting and cash management.",
      approach: "Our search prioritized CFOs with retail experience, PE reporting expertise, and a track record of turning around unit economics.",
      outcome: "The CFO improved gross margins, reduced inventory losses, and established disciplined cash management practices aligned with PE expectations.",
      metrics: [
        "Gross margin improved by 3.2 percentage points",
        "Markdown losses reduced by 18%",
        "4-1-4 cash rhythm and reporting introduced",
        "PE-grade financial reporting implemented"
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
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real results from our CFO placements across industries and growth stages
            </p>
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
                    Challenge:
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {caseStudy.challenge}
                  </p>
                  <div className="text-sm text-muted-foreground font-semibold mb-2">
                    Result:
                  </div>
                  <p className="text-foreground mb-6">
                    {caseStudy.summary}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    onClick={() => setSelectedCase(caseStudy)}
                  >
                    Read Full Story
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
                  <h4 className="text-xl font-heading font-bold mb-3 text-foreground">
                    Background
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCase.fullStory.background}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold mb-3 text-foreground">
                    Our Approach
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedCase.fullStory.approach}
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-heading font-bold mb-3 text-foreground">
                    Outcome
                  </h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {selectedCase.fullStory.outcome}
                  </p>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="text-xl font-heading font-bold mb-4 text-foreground">
                    Key Metrics
                  </h4>
                  <ul className="space-y-2">
                    {selectedCase.fullStory.metrics.map((metric, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
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
