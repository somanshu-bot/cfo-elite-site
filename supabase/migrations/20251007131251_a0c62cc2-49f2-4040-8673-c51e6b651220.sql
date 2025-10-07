-- Create table for managing website content sections
CREATE TABLE public.website_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_key TEXT NOT NULL UNIQUE,
  section_name TEXT NOT NULL,
  content JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.website_content ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Website content is viewable by everyone"
ON public.website_content
FOR SELECT
USING (true);

CREATE POLICY "Only admins can manage website content"
ON public.website_content
FOR ALL
USING (EXISTS (
  SELECT 1 FROM profiles
  WHERE profiles.user_id = auth.uid()
  AND profiles.role = 'admin'
));

-- Add trigger for updated_at
CREATE TRIGGER update_website_content_updated_at
BEFORE UPDATE ON public.website_content
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default content for all sections
INSERT INTO public.website_content (section_key, section_name, content) VALUES
('hero', 'Hero Section', '{
  "title": "Trusted Partner in CFO and Finance Leadership Hiring",
  "subtitle": "From first-time CFOs to listed-company finance heads — Ishwa Consulting has helped organizations find and retain transformative finance leaders.",
  "cta1_text": "See Our Insights",
  "cta2_text": "Partner With Us"
}'),
('stats', 'Statistics Section', '{
  "title": "Featured in Leading Publications",
  "stats": [
    {"value": "80+", "label": "Trusted Clients"},
    {"value": "500+", "label": "Executive Searches"},
    {"value": "90%", "label": "Client Retention"}
  ]
}'),
('about', 'About Section', '{
  "title": "Our Expertise in CFO Hiring",
  "description1": "CFO Elite is Ishwa Consulting''s specialized platform that showcases our unmatched expertise in identifying and placing senior finance leaders across India''s fastest-growing organizations.",
  "description2": "Our work spans industries — from digital-first ventures to diversified conglomerates — with a single goal: building resilient financial leadership.",
  "approach_title": "Our Approach",
  "approach_items": [
    "Precision-led search powered by data and human insight",
    "Assessment depth across business acumen, governance, and cultural alignment",
    "Proven success in high-stakes CFO transitions"
  ]
}'),
('differentiators', 'Differentiators Section', '{
  "title": "What Sets Us Apart",
  "items": [
    {
      "title": "Deep Evaluation Beyond Finance Skills",
      "description": "We assess leadership capability, business acumen, and cultural alignment — not just technical expertise."
    },
    {
      "title": "Proven Search Methodology",
      "description": "Backed by proprietary data on CFO compensation, retention patterns, and succession planning."
    },
    {
      "title": "India-Wide CFO Network",
      "description": "Strong promoter trust and exclusive access to top-tier finance leaders across all sectors."
    }
  ]
}'),
('insights', 'Insights Section', '{
  "title": "Insights & Research",
  "subtitle": "Thought leadership driving CFO hiring conversations",
  "cta_text": "View All Insights",
  "items": [
    {
      "title": "CFO Retention Study",
      "type": "Research Report",
      "description": "Analysis of CFO tenure patterns across Indian markets"
    },
    {
      "title": "CFO Exits Analysis",
      "type": "Market Intelligence",
      "description": "Understanding transition trends in finance leadership"
    }
  ]
}'),
('contact', 'Contact Section', '{
  "title": "Get in Touch",
  "subtitle": "Ready to find your next finance leader? Let''s start a conversation.",
  "button_text": "Send Message"
}'),
('footer', 'Footer Section', '{
  "description": "Specialized in CFO and finance leadership hiring across India",
  "email": "contact@ishwaconsulting.com",
  "phone": "+91 XXX XXX XXXX"
}');