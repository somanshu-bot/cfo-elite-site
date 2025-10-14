import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    context: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: `Role: ${formData.role}\nPhone: ${formData.phone || 'Not provided'}\n\nContext:\n${formData.context}`
        }]);

      if (error) throw error;

      toast({
        title: "Message Sent",
        description: "We'll be in touch shortly.",
      });

      setFormData({ name: '', email: '', company: '', phone: '', role: '', context: '' });
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
    <section id="contact" className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
              Start the conversation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell us about your CFO need and we'll get back to you within one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Role you're hiring for</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="bg-background"
                  placeholder="e.g., CFO, Finance Director"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="context">Context (2–3 lines)</Label>
                <Textarea
                  id="context"
                  value={formData.context}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="bg-background"
                  placeholder="Brief context about your company and the CFO need"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary-dark"
              >
                {isSubmitting ? 'Submitting...' : 'Request a 20-min consult'}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                We reply within one business day. Confidential, no obligation.
              </p>

            </form>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Our Offices</div>
                  <div className="text-muted-foreground space-y-1">
                    <div>Delhi NCR</div>
                    <div>Bangalore</div>
                    <div>Hyderabad</div>
                    <div>Chennai</div>
                    <div>Dubai</div>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">Meet us at your convenience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
