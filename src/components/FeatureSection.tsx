import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, PenTool, Brain, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Advanced Legal Research",
    description: "Search through millions of cases, statutes, and legal documents with AI-powered natural language queries.",
    color: "text-legal-red"
  },
  {
    icon: Brain,
    title: "AI Document Analysis",
    description: "Get instant summaries, key insights, and relevant citations from complex legal documents.",
    color: "text-legal-red"
  },
  {
    icon: PenTool,
    title: "Smart Legal Drafting",
    description: "Create professional legal documents using AI-powered templates and intelligent clause suggestions.",
    color: "text-legal-red"
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Reduce research time by up to 80% with automated case law analysis and precedent identification.",
    color: "text-legal-red"
  },
  {
    icon: Shield,
    title: "Accuracy & Compliance",
    description: "Ensure accuracy with AI that's trained on verified legal sources and updated regulations.",
    color: "text-legal-red"
  },
  {
    icon: FileText,
    title: "Document Intelligence",
    description: "Extract key information, compare documents, and identify potential issues automatically.",
    color: "text-legal-red"
  }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Powerful AI Tools for Legal Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your legal workflow with comprehensive AI-powered tools designed specifically for legal research and practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-card hover:shadow-elevated group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 transition-all duration-300">
                    <Icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;