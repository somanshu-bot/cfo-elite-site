import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Eye, ArrowRight, TrendingUp, Users, Target, Building2 } from "lucide-react";

const InsightsSection = () => {
  const insights = [
    {
      category: "Market Research",
      title: "CFO Compensation Trends 2024: Listed vs Unlisted Companies",
      description: "Comprehensive analysis of CFO compensation patterns across Indian markets, revealing key insights into package structures and retention strategies.",
      readTime: "12 min read",
      publishDate: "March 2024",
      views: "2.1k",
      featured: true
    },
    {
      category: "Succession Planning",
      title: "Building CFO Succession Pipelines in High-Growth Companies",
      description: "Strategic framework for developing internal CFO talent and creating robust succession plans in rapidly scaling organizations.",
      readTime: "8 min read",
      publishDate: "February 2024",
      views: "1.8k",
      featured: false
    },
    {
      category: "Leadership",
      title: "The Modern CFO: Strategic Partner vs Financial Steward",
      description: "Evolution of the CFO role in India's corporate landscape and the skills required for next-generation finance leadership.",
      readTime: "10 min read",
      publishDate: "January 2024",
      views: "3.2k",
      featured: true
    },
    {
      category: "Industry Analysis",
      title: "CFO Hiring Patterns in PE/VC-Backed Firms",
      description: "Deep dive into hiring preferences, compensation structures, and success factors for CFOs in private equity backed companies.",
      readTime: "15 min read",
      publishDate: "December 2023",
      views: "1.5k",
      featured: false
    }
  ];

  return (
    <section id="insights" className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Insights & Research
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Thought Leadership in <span className="text-gradient-primary">CFO Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Exclusive research, market intelligence, and strategic insights driving 
            conversations around CFO leadership and finance excellence.
          </p>
        </div>

        {/* Featured Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {insights.filter(insight => insight.featured).map((insight, index) => (
            <Card key={index} className="card-premium group cursor-pointer hover:scale-[1.02] transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {insight.category}
                  </Badge>
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    Featured
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {insight.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {insight.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {insight.publishDate}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {insight.views}
                    </span>
                  </div>
                  <span className="flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    {insight.readTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {insights.filter(insight => !insight.featured).map((insight, index) => (
            <Card key={index} className="card-premium group cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs">
                    {insight.category}
                  </Badge>
                </div>
                
                <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors leading-tight">
                  {insight.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {insight.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {insight.publishDate}
                  </span>
                  <span className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {insight.views}
                  </span>
                  <span>{insight.readTime}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Areas */}
        <div className="bg-primary/5 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Research Focus Areas</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep research driving actionable insights for CFO leadership and finance excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Compensation Benchmarking", desc: "Market data on CFO packages" },
              { icon: Users, title: "Succession Planning", desc: "Leadership transition strategies" },
              { icon: Target, title: "Retention Strategies", desc: "Keeping top CFO talent" },
              { icon: Building2, title: "Industry Analysis", desc: "Sector-specific insights" }
            ].map((area, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{area.title}</h4>
                <p className="text-sm text-muted-foreground">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Ahead with CFO Elite Insights</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get exclusive research, market intelligence, and leadership insights delivered to your inbox.
          </p>
          <Button 
            size="lg" 
            className="btn-accent text-lg px-8 py-6"
          >
            Subscribe to Insights
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;