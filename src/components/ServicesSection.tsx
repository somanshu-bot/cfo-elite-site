import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, FileText, Users, ArrowRight, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Executive Search for CFOs",
      description: "Retained search services for boards, promoters, and PE/VC-backed firms seeking exceptional finance leadership.",
      features: [
        "Comprehensive candidate assessment",
        "Cultural fit evaluation",
        "Reference and background verification",
        "Onboarding support and integration"
      ],
      clientTypes: ["Public Companies", "PE/VC Portfolio", "Family Businesses", "Startups"]
    },
    {
      icon: FileText,
      title: "Leadership Insights",
      description: "Exclusive research, whitepapers, and market intelligence driving CFO leadership conversations.",
      features: [
        "CFO compensation benchmarking",
        "Market trend analysis",
        "Succession planning guides",
        "Industry-specific insights"
      ],
      clientTypes: ["Board Members", "HR Leaders", "Investors", "CFOs"]
    },
    {
      icon: Users,
      title: "Strategic Advisory",
      description: "Comprehensive advisory services for CFO succession planning, retention strategies, and leadership development.",
      features: [
        "Succession planning framework",
        "Retention strategy design",
        "Leadership assessment",
        "Organizational restructuring"
      ],
      clientTypes: ["Board of Directors", "CEO & Founders", "HR Teams", "Investors"]
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive <span className="text-gradient-primary">CFO Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From executive search to strategic advisory, we provide end-to-end solutions 
            for all your CFO leadership needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-premium group h-full">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Types */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Ideal For</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.clientTypes.map((type, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Overview */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Proven Process</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring the right CFO for your organization's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs, culture, and strategic objectives" },
              { step: "02", title: "Search & Assessment", desc: "Comprehensive candidate identification and evaluation" },
              { step: "03", title: "Stakeholder Alignment", desc: "Ensuring cultural fit and strategic alignment" },
              { step: "04", title: "Integration Support", desc: "Onboarding and long-term success partnership" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="btn-hero text-lg px-8 py-6"
            onClick={scrollToContact}
          >
            Discuss Your CFO Needs
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;