import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Why CFO Elite', href: '#why-cfo-elite' },
    { label: 'Services', href: '#services' },
    { label: 'Insights', href: '#insights' },
    { label: 'Community', href: '#community' },
  ];

  const services = [
    'CFO Executive Search',
    'Leadership Insights',
    'Strategic Advisory',
    'Succession Planning',
    'Retention Strategy',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold text-accent">CFO Elite</div>
              <div className="text-sm text-primary-foreground/70">by Ishwa</div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              India's premier CFO leadership partner, delivering precision in executive search, 
              strategic insights, and exclusive community for finance leaders.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-accent mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-accent mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-primary-foreground/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-accent mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-primary-foreground/90 text-sm">hello@cfoelite.in</div>
                  <div className="text-primary-foreground/70 text-xs">Response within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-primary-foreground/90 text-sm">+91 98765 43210</div>
                  <div className="text-primary-foreground/70 text-xs">Mon-Fri, 9 AM - 6 PM IST</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-primary-foreground/90 text-sm">Mumbai | Delhi | Bangalore</div>
                  <div className="text-primary-foreground/70 text-xs">Meet us at your convenience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/70 text-sm">
            © {currentYear} CFO Elite by Ishwa Consulting. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <button className="text-primary-foreground/70 hover:text-accent transition-colors">
              Privacy Policy
            </button>
            <button className="text-primary-foreground/70 hover:text-accent transition-colors">
              Terms of Service
            </button>
            <div className="text-primary-foreground/50">
              Made with precision for CFO excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;