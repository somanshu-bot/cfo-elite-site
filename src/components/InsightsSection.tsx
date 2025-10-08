import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const InsightsSection = () => {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleReportRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('report_requests')
        .insert([{
          email: email,
          report_name: 'CFO Retention Study'
        }]);

      if (error) throw error;

      toast({
        title: "Request Submitted",
        description: "The report will be sent to your email shortly.",
      });

      setEmail("");
      setIsDialogOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="insights" className="py-16 lg:py-24 bg-background">
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

          <div className="flex justify-center mb-12">
            <Card 
              className="card-premium cursor-pointer hover:scale-[1.02] transition-all duration-300 max-w-2xl w-full"
              onClick={() => setIsDialogOpen(true)}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-10 h-10 text-accent" />
                  <Badge variant="outline" className="text-xs">
                    Research Report
                  </Badge>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                  CFO Retention Study
                </h3>
                <p className="text-muted-foreground text-sm">
                  Analysis of CFO tenure patterns across Indian markets
                </p>
              </CardContent>
            </Card>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Request CFO Retention Study</DialogTitle>
                <DialogDescription>
                  Enter your email address and we'll send the report to you shortly.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleReportRequest} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Request Report'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
