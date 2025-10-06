import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const InsightsSection = () => {
  const insights = [
    {
      title: "CFO Retention Study",
      type: "Research Report",
      description: "Analysis of CFO tenure patterns across Indian markets"
    },
    {
      title: "CFO Exits Analysis",
      type: "Market Intelligence",
      description: "Understanding transition trends in finance leadership"
    }
  ];

  return (
    <section id="insights" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
              Insights & Research
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thought leadership driving CFO hiring conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {insights.map((insight, index) => (
              <Card key={index} className="card-premium cursor-pointer hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <FileText className="w-10 h-10 text-accent" />
                    <Badge variant="outline" className="text-xs">
                      {insight.type}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {insight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            >
              View All Insights
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
