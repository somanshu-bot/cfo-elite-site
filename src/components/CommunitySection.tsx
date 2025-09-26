import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MessageCircle, Trophy, Star, ArrowRight } from "lucide-react";

const CommunitySection = () => {
  const events = [
    {
      title: "CFO Roundtable: Digital Transformation in Finance",
      date: "April 15, 2024",
      location: "Mumbai",
      attendees: "25 CFOs",
      type: "Exclusive",
      description: "Intimate discussion on leveraging technology for finance function transformation."
    },
    {
      title: "PE/VC CFO Forum: Portfolio Value Creation",
      date: "March 28, 2024",
      location: "Bangalore",
      attendees: "30 CFOs",
      type: "Invite-Only",
      description: "Strategic insights on value creation and exit preparation in portfolio companies."
    },
    {
      title: "Listed Company CFO Summit",
      date: "February 20, 2024",
      location: "Delhi",
      attendees: "40 CFOs",
      type: "Premium",
      description: "Governance, compliance, and strategic finance in public markets."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "CFO, TechCorp India",
      company: "Listed Technology",
      quote: "The CFO Elite community has been invaluable for benchmarking and learning from peers. The quality of discussions is exceptional.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      title: "CFO, GrowthCo",
      company: "PE-Backed Manufacturing",
      quote: "Ishwa's insights and network have transformed how I approach strategic finance. The thought leadership is world-class.",
      rating: 5
    }
  ];

  return (
    <section id="community" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Exclusive Community
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Connect with India's <span className="text-gradient-primary">Elite CFOs</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join an exclusive network of top CFOs, thought leaders, and finance executives 
            driving strategic conversations and sharing best practices.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Users, number: "200+", label: "Elite CFOs", description: "Active community members" },
            { icon: Calendar, number: "12+", label: "Annual Events", description: "Exclusive roundtables & summits" },
            { icon: MessageCircle, number: "500+", label: "Discussions", description: "Strategic conversations" },
            { icon: Trophy, number: "50+", label: "Industry Leaders", description: "Speakers & thought leaders" }
          ].map((stat, index) => (
            <Card key={index} className="card-premium text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-accent mb-1">{stat.number}</div>
                <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Exclusive Events & Roundtables</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="card-premium">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={event.type === 'Exclusive' ? 'bg-accent/10 text-accent border-accent/20' : 
                                    event.type === 'Invite-Only' ? 'bg-rust/10 text-rust border-rust/20' : 
                                    'bg-primary/10 text-primary border-primary/20'}>
                      {event.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{event.attendees}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{event.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Community Says</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-accent">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Benefits */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Community Benefits</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Exclusive access to resources, networks, and insights that drive your finance leadership forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Peer Benchmarking", desc: "Compare strategies, compensation, and best practices with industry peers" },
              { title: "Market Intelligence", desc: "First access to research, trends, and market insights" },
              { title: "Expert Network", desc: "Connect with advisors, consultants, and service providers" },
              { title: "Career Opportunities", desc: "Exclusive access to premium CFO roles and mandates" },
              { title: "Thought Leadership", desc: "Platform to share insights and build professional brand" },
              { title: "Strategic Partnerships", desc: "Collaborate on deals, investments, and strategic initiatives" }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-4">
                <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Join CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Join the CFO Elite Community</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Application-based membership for senior finance leaders. Connect, learn, and grow with India's most influential CFOs.
          </p>
          <Button 
            size="lg" 
            className="btn-accent text-lg px-8 py-6"
          >
            Apply for Membership
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;