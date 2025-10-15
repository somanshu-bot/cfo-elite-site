import financeLeadershipImage from "@/assets/finance-leadership.jpg";

const AboutSection = () => {
  const approach = [
    "Precision-led search powered by data and human insight",
    "Assessment depth across business acumen, governance, and cultural alignment",
    "Proven success in high-stakes CFO transitions"
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <div 
              className="aspect-[4/3] bg-cover bg-center rounded-lg shadow-premium"
              style={{ backgroundImage: `url(${financeLeadershipImage})` }}
            ></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6 text-foreground">
              Our expertise in CFO hiring
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              CFO Elite is Ishwa Consulting's specialized platform that showcases our unmatched expertise in identifying and placing senior finance leaders across India's fastest-growing organizations.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our work spans industries — from digital-first ventures to diversified conglomerates — with a single goal: building resilient financial leadership.
            </p>

            <div className="mb-8">
              <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">
                Our approach
              </h3>
              <ul className="space-y-4">
                {approach.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-4 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
