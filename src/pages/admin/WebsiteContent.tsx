import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

interface WebsiteSection {
  id: string;
  section_key: string;
  section_name: string;
  content: any;
}

const WebsiteContent = () => {
  const [sections, setSections] = useState<WebsiteSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [editingSection, setEditingSection] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      const { data, error } = await supabase
        .from("website_content")
        .select("*")
        .order("section_name");

      if (error) throw error;
      setSections(data || []);
    } catch (error) {
      console.error("Error fetching sections:", error);
      toast.error("Failed to load website content");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (section: WebsiteSection) => {
    setEditingSection(section.id);
    setFormData(section.content);
  };

  const handleCancel = () => {
    setEditingSection(null);
    setFormData({});
  };

  const handleSave = async (sectionId: string) => {
    setSaving(sectionId);
    try {
      const { error } = await supabase
        .from("website_content")
        .update({ content: formData })
        .eq("id", sectionId);

      if (error) throw error;

      toast.success("Content updated successfully");
      setEditingSection(null);
      fetchSections();
    } catch (error) {
      console.error("Error updating content:", error);
      toast.error("Failed to update content");
    } finally {
      setSaving(null);
    }
  };

  const updateFormField = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const updateArrayItem = (arrayKey: string, index: number, field: string, value: any) => {
    const newArray = [...formData[arrayKey]];
    newArray[index] = { ...newArray[index], [field]: value };
    setFormData({ ...formData, [arrayKey]: newArray });
  };

  const renderEditor = (section: WebsiteSection) => {
    const content = section.content;

    switch (section.section_key) {
      case "hero":
        return (
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={formData.title || ""}
                onChange={(e) => updateFormField("title", e.target.value)}
              />
            </div>
            <div>
              <Label>Subtitle</Label>
              <Textarea
                value={formData.subtitle || ""}
                onChange={(e) => updateFormField("subtitle", e.target.value)}
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>CTA 1 Text</Label>
                <Input
                  value={formData.cta1_text || ""}
                  onChange={(e) => updateFormField("cta1_text", e.target.value)}
                />
              </div>
              <div>
                <Label>CTA 2 Text</Label>
                <Input
                  value={formData.cta2_text || ""}
                  onChange={(e) => updateFormField("cta2_text", e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case "stats":
        return (
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={formData.title || ""}
                onChange={(e) => updateFormField("title", e.target.value)}
              />
            </div>
            {formData.stats?.map((stat: any, index: number) => (
              <Card key={index}>
                <CardContent className="pt-6 space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Value</Label>
                      <Input
                        value={stat.value || ""}
                        onChange={(e) => updateArrayItem("stats", index, "value", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Label</Label>
                      <Input
                        value={stat.label || ""}
                        onChange={(e) => updateArrayItem("stats", index, "label", e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case "about":
        return (
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={formData.title || ""}
                onChange={(e) => updateFormField("title", e.target.value)}
              />
            </div>
            <div>
              <Label>Description 1</Label>
              <Textarea
                value={formData.description1 || ""}
                onChange={(e) => updateFormField("description1", e.target.value)}
                rows={3}
              />
            </div>
            <div>
              <Label>Description 2</Label>
              <Textarea
                value={formData.description2 || ""}
                onChange={(e) => updateFormField("description2", e.target.value)}
                rows={3}
              />
            </div>
            <div>
              <Label>Approach Title</Label>
              <Input
                value={formData.approach_title || ""}
                onChange={(e) => updateFormField("approach_title", e.target.value)}
              />
            </div>
            {formData.approach_items?.map((item: string, index: number) => (
              <div key={index}>
                <Label>Approach Item {index + 1}</Label>
                <Input
                  value={item || ""}
                  onChange={(e) => {
                    const newItems = [...formData.approach_items];
                    newItems[index] = e.target.value;
                    updateFormField("approach_items", newItems);
                  }}
                />
              </div>
            ))}
          </div>
        );

      case "differentiators":
        return (
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={formData.title || ""}
                onChange={(e) => updateFormField("title", e.target.value)}
              />
            </div>
            {formData.items?.map((item: any, index: number) => (
              <Card key={index}>
                <CardContent className="pt-6 space-y-2">
                  <div>
                    <Label>Title {index + 1}</Label>
                    <Input
                      value={item.title || ""}
                      onChange={(e) => updateArrayItem("items", index, "title", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Description {index + 1}</Label>
                    <Textarea
                      value={item.description || ""}
                      onChange={(e) => updateArrayItem("items", index, "description", e.target.value)}
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case "insights":
        return (
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={formData.title || ""}
                onChange={(e) => updateFormField("title", e.target.value)}
              />
            </div>
            <div>
              <Label>Subtitle</Label>
              <Input
                value={formData.subtitle || ""}
                onChange={(e) => updateFormField("subtitle", e.target.value)}
              />
            </div>
            <div>
              <Label>CTA Text</Label>
              <Input
                value={formData.cta_text || ""}
                onChange={(e) => updateFormField("cta_text", e.target.value)}
              />
            </div>
            {formData.items?.map((item: any, index: number) => (
              <Card key={index}>
                <CardContent className="pt-6 space-y-2">
                  <div>
                    <Label>Title {index + 1}</Label>
                    <Input
                      value={item.title || ""}
                      onChange={(e) => updateArrayItem("items", index, "title", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Type {index + 1}</Label>
                    <Input
                      value={item.type || ""}
                      onChange={(e) => updateArrayItem("items", index, "type", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Description {index + 1}</Label>
                    <Textarea
                      value={item.description || ""}
                      onChange={(e) => updateArrayItem("items", index, "description", e.target.value)}
                      rows={2}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case "contact":
        return (
          <div className="space-y-4">
            <div>
              <Label>Title</Label>
              <Input
                value={formData.title || ""}
                onChange={(e) => updateFormField("title", e.target.value)}
              />
            </div>
            <div>
              <Label>Subtitle</Label>
              <Textarea
                value={formData.subtitle || ""}
                onChange={(e) => updateFormField("subtitle", e.target.value)}
                rows={2}
              />
            </div>
            <div>
              <Label>Button Text</Label>
              <Input
                value={formData.button_text || ""}
                onChange={(e) => updateFormField("button_text", e.target.value)}
              />
            </div>
          </div>
        );

      case "footer":
        return (
          <div className="space-y-4">
            <div>
              <Label>Description</Label>
              <Textarea
                value={formData.description || ""}
                onChange={(e) => updateFormField("description", e.target.value)}
                rows={2}
              />
            </div>
            <div>
              <Label>Email</Label>
              <Input
                value={formData.email || ""}
                onChange={(e) => updateFormField("email", e.target.value)}
              />
            </div>
            <div>
              <Label>Phone</Label>
              <Input
                value={formData.phone || ""}
                onChange={(e) => updateFormField("phone", e.target.value)}
              />
            </div>
          </div>
        );

      default:
        return (
          <div>
            <Label>Content (JSON)</Label>
            <Textarea
              value={JSON.stringify(formData, null, 2)}
              onChange={(e) => {
                try {
                  setFormData(JSON.parse(e.target.value));
                } catch (err) {
                  // Invalid JSON, don't update
                }
              }}
              rows={10}
              className="font-mono text-sm"
            />
          </div>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">Website Content</h1>
        <p className="text-muted-foreground">
          Edit content for each section of the website
        </p>
      </div>

      <div className="grid gap-6">
        {sections.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{section.section_name}</span>
                {editingSection === section.id ? (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCancel}
                      disabled={saving === section.id}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleSave(section.id)}
                      disabled={saving === section.id}
                    >
                      {saving === section.id ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        "Save Changes"
                      )}
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(section)}
                  >
                    Edit
                  </Button>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {editingSection === section.id ? (
                renderEditor(section)
              ) : (
                <pre className="text-sm text-muted-foreground overflow-auto max-h-60">
                  {JSON.stringify(section.content, null, 2)}
                </pre>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WebsiteContent;
