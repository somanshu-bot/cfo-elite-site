import { Separator } from "@/components/ui/separator";
import { MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Insights', href: '#insights' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'CFO Executive Search',
    'Leadership Assessment',
    'Market Intelligence',
    'Succession Planning',
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <div className="text-2xl font-bold text-primary">CFO Elite</div>
                <div className="text-sm text-white/70">by Ishwa</div>
              </div>
              <a 
                href="https://www.ishwaconsulting.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-white/60 hover:text-primary transition-colors inline-flex items-center"
              >
                Visit Ishwa Consulting →
              </a>
            </div>
            <p className="text-white/80 leading-relaxed mb-4 text-sm">
              India's premier CFO leadership partner, delivering bull's-eye precision in executive search, 
              strategic insights, and exclusive community for finance leaders.
            </p>
            <p className="text-white/60 text-xs leading-relaxed mb-6 italic">
              "Ishwa" — Sanskrit for "leader" — reflects our singular focus on leadership excellence 
              and our commitment to personalized, precision-driven service.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/ishwa-consulting" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-white/80 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-6">Our Offices</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-white/90 text-sm space-y-1">
                    <div>Delhi NCR</div>
                    <div>Bangalore</div>
                    <div>Hyderabad</div>
                    <div>Chennai</div>
                    <div>Dubai</div>
                  </div>
                  <div className="text-white/70 text-xs mt-2">Meet us at your convenience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-white/70 text-sm">
            © {currentYear} CFO Elite by <a href="https://www.ishwaconsulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Ishwa Consulting</a>. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm flex-wrap justify-center">
            <button className="text-white/70 hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button className="text-white/70 hover:text-primary transition-colors">
              Terms of Service
            </button>
            <div className="text-white/50 text-xs">
              Member of IMD International Search Group
            </div>
          </div>
        </div>

        {/* Privacy Note */}
        <div className="mt-6 text-center">
          <p className="text-white/60 text-xs">
            All searches are run confidentially under NDA.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
