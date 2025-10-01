import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, FolderOpen, Mail, Users } from "lucide-react";

const Dashboard = () => {
  const [stats, setStats] = useState({
    posts: 0,
    categories: 0,
    contacts: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    const [postsData, categoriesData, contactsData] = await Promise.all([
      supabase.from("blog_posts").select("id", { count: "exact", head: true }),
      supabase.from("categories").select("id", { count: "exact", head: true }),
      supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
    ]);

    setStats({
      posts: postsData.count || 0,
      categories: categoriesData.count || 0,
      contacts: contactsData.count || 0,
    });
  };

  const statCards = [
    { title: "Blog Posts", value: stats.posts, icon: FileText, color: "text-blue-600" },
    { title: "Categories", value: stats.categories, icon: FolderOpen, color: "text-green-600" },
    { title: "Contact Forms", value: stats.contacts, icon: Mail, color: "text-orange-600" },
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
