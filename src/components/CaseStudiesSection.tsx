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
    industry: "Technology & SaaS",
    challenge: "Rapid growth required a CFO with international expansion experience",
    summary: "Successfully placed a CFO with 15+ years of experience scaling SaaS companies from Series B to IPO, resulting in 3x revenue growth in 18 months.",
    fullStory: {
      background: "A fast-growing SaaS company was preparing for international expansion and needed a CFO who could navigate multi-currency operations, international tax implications, and investor relations for their Series C round.",
      approach: "We conducted a comprehensive search across our network of finance leaders with proven track records in SaaS scaling. Our assessment focused on candidates who had successfully led companies through hypergrowth phases and international expansion.",
      outcome: "The appointed CFO successfully led a $50M Series C funding round, established operations in 3 new countries, and implemented financial systems that supported 200% YoY growth. The company achieved profitability 6 months ahead of projections.",
      metrics: [
        "Series C funding closed within 4 months",
        "3x revenue growth in 18 months",
        "Successful expansion into 3 international markets",
        "Profitability achieved 6 months early"
      ]
    }
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-primary" />,
    company: "Heritage Manufacturing Ltd.",
    industry: "Manufacturing & Industrial",
    challenge: "Legacy company needed digital transformation leadership from finance",
    summary: "Identified and onboarded a transformational CFO who modernized financial operations, implementing ERP systems and data analytics that improved margins by 15%.",
    fullStory: {
      background: "A 50-year-old manufacturing company was facing declining margins and operational inefficiencies. They needed a CFO who could bridge traditional manufacturing finance with modern digital capabilities.",
      approach: "We focused on candidates who had successfully led digital transformation initiatives in traditional industries. Our selection process emphasized change management skills alongside technical finance expertise.",
      outcome: "The new CFO implemented a cloud-based ERP system, established real-time reporting dashboards, and restructured the finance team to focus on strategic analysis. These changes led to improved decision-making and significant cost savings.",
      metrics: [
        "15% improvement in operating margins",
        "40% reduction in month-end close time",
        "Real-time financial dashboards implemented",
        "€8M in operational cost savings identified"
      ]
    }
  },
  {
    id: 3,
    icon: <Target className="w-8 h-8 text-primary" />,
    company: "Retail Innovation Group",
    industry: "Retail & E-commerce",
    challenge: "Post-merger integration required a CFO with M&A and integration expertise",
    summary: "Placed a CFO who successfully integrated 3 acquisitions, harmonized financial systems across 12 countries, and delivered synergies 20% above target.",
    fullStory: {
      background: "Following an aggressive acquisition strategy, this retail group needed a CFO capable of integrating multiple businesses while maintaining operational excellence and preparing for a potential exit.",
      approach: "Our search prioritized candidates with extensive M&A experience, particularly those who had led successful post-merger integrations in retail or consumer sectors. We assessed for both technical integration skills and stakeholder management capabilities.",
      outcome: "The appointed CFO successfully integrated three acquisitions, standardized financial processes across all entities, and identified significant synergies. Within two years, the company achieved a successful exit at a valuation 30% above initial projections.",
      metrics: [
        "3 acquisitions successfully integrated",
        "Synergies achieved 20% above target",
        "Standardized financial operations across 12 countries",
        "Successful exit at 30% premium valuation"
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
