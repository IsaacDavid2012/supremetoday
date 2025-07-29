import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PenTool, FileText, Download, Sparkles, Clock, CheckCircle, Lightbulb } from "lucide-react";

const documentTemplates = [
  {
    id: "contract",
    name: "Employment Contract",
    description: "Comprehensive employment agreements with AI-optimized clauses",
    icon: "📄",
    features: ["Salary negotiation clauses", "Benefit specifications", "Termination terms", "IP assignments"]
  },
  {
    id: "nda",
    name: "Non-Disclosure Agreement",
    description: "Confidentiality agreements for various business scenarios",
    icon: "🔒",
    features: ["Multi-party support", "Jurisdiction selection", "Duration customization", "Scope definition"]
  },
  {
    id: "lease",
    name: "Lease Agreement",
    description: "Residential and commercial lease templates",
    icon: "🏠",
    features: ["Rent escalation clauses", "Maintenance responsibilities", "Security deposits", "Renewal options"]
  },
  {
    id: "service",
    name: "Service Agreement",
    description: "Professional services contracts with payment terms",
    icon: "🤝",
    features: ["SOW integration", "Payment schedules", "Deliverable tracking", "Change orders"]
  }
];

const draftingBenefits = [
  {
    icon: Clock,
    title: "10x Faster Drafting",
    description: "Create professional legal documents in minutes, not hours"
  },
  {
    icon: CheckCircle,
    title: "Error-Free Documents",
    description: "AI ensures consistency and catches potential drafting mistakes"
  },
  {
    icon: Lightbulb,
    title: "Smart Suggestions",
    description: "Get intelligent clause recommendations based on your specific situation"
  }
];

const DraftingSection = () => {
  return (
    <section id="drafting" className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Intelligent Legal Document Drafting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Create professional legal documents in minutes with AI-powered templates and intelligent clause suggestions. Never start from scratch again.
          </p>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">Transform Your Document Creation Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {draftingBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-legal-red group-hover:text-legal-red-dark transition-colors" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Template Showcase */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Professional Templates Library</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentTemplates.map((template) => (
              <Card key={template.id} className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{template.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-legal-red-dark transition-colors">
                        {template.name}
                      </CardTitle>
                      <CardDescription className="text-base mb-4">
                        {template.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {template.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Demo */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border rounded-lg p-8 shadow-elevated">
            <h3 className="text-xl font-semibold mb-8 text-center">How AI Drafting Works</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-legal-red text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-3">Choose Template</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Select from our library of professional legal document templates
                </p>
                <div className="bg-background rounded-lg p-4 border">
                  <div className="text-xs text-muted-foreground mb-2">Template Selected:</div>
                  <div className="text-sm font-medium">Employment Contract</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-legal-red text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-3">Input Details</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Fill in key information - AI guides you through required fields
                </p>
                <div className="bg-background rounded-lg p-4 border space-y-2">
                  <div className="text-xs text-left">
                    <span className="text-muted-foreground">Employee:</span>
                    <span className="ml-2">John Smith</span>
                  </div>
                  <div className="text-xs text-left">
                    <span className="text-muted-foreground">Salary:</span>
                    <span className="ml-2">$120,000</span>
                  </div>
                  <div className="text-xs text-left">
                    <span className="text-muted-foreground">Start Date:</span>
                    <span className="ml-2">Jan 15, 2024</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-legal-red text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-3">AI Generation</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  AI creates a complete, professional document in seconds
                </p>
                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-legal-red-dark" />
                    <span className="text-xs">Document Generated</span>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    15 pages • Ready for review
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-gradient-to-r from-legal-red to-legal-red-light hover:from-legal-red-dark hover:to-legal-red text-white transition-colors">
                <Sparkles className="h-4 w-4 mr-2 text-white" />
                Try AI Drafting
              </Button>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-legal-red mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Document templates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-legal-red mb-2">30s</div>
              <div className="text-sm text-muted-foreground">Average generation time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-legal-red mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Legal accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-legal-red mb-2">10x</div>
              <div className="text-sm text-muted-foreground">Faster than manual drafting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DraftingSection;