import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    status: "draft",
  });

  useEffect(() => {
    if (id) loadPost();
  }, [id]);

  const loadPost = async () => {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      toast({
        title: "Error loading post",
        description: error.message,
        variant: "destructive",
      });
    } else if (data) {
      setPost(data);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setPost({ ...post, title, slug: generateSlug(title) });
  };

  const handleSave = async () => {
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const postData = {
      ...post,
      author_id: user.id,
      published_at: post.status === "published" ? new Date().toISOString() : null,
    };

    let error;
    if (id) {
      const result = await supabase
        .from("blog_posts")
        .update(postData)
        .eq("id", id);
      error = result.error;
    } else {
      const result = await supabase
        .from("blog_posts")
        .insert([postData]);
      error = result.error;
    }

    if (error) {
      toast({
        title: "Error saving post",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({ title: "Post saved successfully" });
      navigate("/admin/posts");
    }

    setLoading(false);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate("/admin/posts")}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold">{id ? "Edit Post" : "New Post"}</h1>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={post.title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="Post title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            value={post.slug}
            onChange={(e) => setPost({ ...post, slug: e.target.value })}
            placeholder="post-slug"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={post.excerpt}
            onChange={(e) => setPost({ ...post, excerpt: e.target.value })}
            placeholder="Brief description"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            placeholder="Post content"
            rows={15}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select value={post.status} onValueChange={(value) => setPost({ ...post, status: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4">
          <Button onClick={handleSave} disabled={loading}>
            {loading ? "Saving..." : "Save Post"}
          </Button>
          <Button variant="outline" onClick={() => navigate("/admin/posts")}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostEditor;
