import { Card, CardContent } from "@/components/ui/card";
import { Target, Database, Network } from "lucide-react";

const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Business-first evaluation",
      description: "We assess leadership, cash discipline, governance, and culture fit — not just resumes."
    },
    {
      icon: Database,
      title: "Disciplined search method",
      description: "Research-led longlists, structured interviews, and reference triangulation you can trust."
    },
    {
      icon: Network,
      title: "India-wide CFO network",
      description: "Fast access to proven operators across PE-backed, listed, and high-growth firms."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted via-muted/80 to-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
            What sets us apart
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <Card key={index} className="card-premium">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-lg bg-primary/5 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
