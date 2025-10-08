-- Create table for report requests
CREATE TABLE public.report_requests (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  report_name text NOT NULL,
  status text DEFAULT 'pending'::text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.report_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit report requests
CREATE POLICY "Anyone can request reports"
ON public.report_requests
FOR INSERT
WITH CHECK (true);

-- Only admins can view report requests
CREATE POLICY "Only admins can view report requests"
ON public.report_requests
FOR SELECT
USING (EXISTS (
  SELECT 1 FROM profiles
  WHERE profiles.user_id = auth.uid()
  AND profiles.role = 'admin'
));

-- Only admins can update report requests
CREATE POLICY "Only admins can update report requests"
ON public.report_requests
FOR UPDATE
USING (EXISTS (
  SELECT 1 FROM profiles
  WHERE profiles.user_id = auth.uid()
  AND profiles.role = 'admin'
));

-- Add trigger for updated_at
CREATE TRIGGER update_report_requests_updated_at
BEFORE UPDATE ON public.report_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();