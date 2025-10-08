import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, FileEdit, FileText } from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    contacts: 0,
    contentSections: 0,
    reportRequests: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const [contactsData, contentData, reportsData] = await Promise.all([
      supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
      supabase.from("website_content").select("id", { count: "exact", head: true }),
      supabase.from("report_requests").select("id", { count: "exact", head: true }),
    ]);

    setStats({
      contacts: contactsData.count || 0,
      contentSections: contentData.count || 0,
      reportRequests: reportsData.count || 0,
    });
  };

  const statCards = [
    { title: "Contact Forms", value: stats.contacts, icon: Mail, color: "text-orange-600" },
    { title: "Content Sections", value: stats.contentSections, icon: FileEdit, color: "text-blue-600" },
    { title: "Report Requests", value: stats.reportRequests, icon: FileText, color: "text-green-600" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your admin panel</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
