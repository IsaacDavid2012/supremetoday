import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, AlertTriangle, CheckCircle, FileText, Clock, Target, Zap } from "lucide-react";

const analysisFeatures = [
  {
    icon: Brain,
    title: "Instant Summaries",
    description: "AI reads and summarizes complex legal documents in seconds, extracting key points and clauses.",
    stat: "90% faster than manual review"
  },
  {
    icon: Lightbulb,
    title: "Key Insights",
    description: "Automatically identifies critical information, deadlines, obligations, and potential risks.",
    stat: "99.7% accuracy rate"
  },
  {
    icon: AlertTriangle,
    title: "Risk Assessment",
    description: "Flags potential legal issues, compliance concerns, and areas requiring attorney attention.",
    stat: "85% of issues caught early"
  }
];

const mockAnalysisExample = {
  documentType: "Employment Contract",
  processingTime: "2.3 seconds",
  summary: "This employment contract contains standard terms for a software engineer position. Key provisions include a 6-month probationary period, standard confidentiality clauses, and a non-compete agreement limited to 12 months within a 50-mile radius.",
  keyPoints: [
    "Salary: $120,000 annually with potential for performance bonuses",
    "Benefits include health insurance, 401(k) matching, and 4 weeks PTO",
    "Standard intellectual property assignment clauses",
    "Non-compete restriction: 12 months, 50-mile radius"
  ],
  risks: [
    "Non-compete clause may be overly broad for this jurisdiction",
    "Termination clause lacks clarity on severance terms"
  ]
};

const AnalysisSection = () => {
  return (
    <section id="analysis" className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            AI-Powered Document Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform hours of document review into seconds of AI-powered analysis. Supreme Today AI reads, understands, and analyzes legal documents with unprecedented speed and accuracy.
          </p>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">How Document Analysis Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {analysisFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-card">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-legal-red/10 to-legal-red-light/5 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-legal-red" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <Badge variant="secondary" className="mb-4">{feature.stat}</Badge>
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

        {/* Example Analysis */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border rounded-lg p-8 shadow-elevated">
            <h3 className="text-xl font-semibold mb-6 text-center">Example: Employment Contract Analysis</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mock Document Input */}
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-legal-red" />
                  Document Input
                </h4>
                <div className="bg-white rounded-lg p-4 border-2 border-dashed border-border">
                  <div className="text-sm text-muted-foreground mb-2">employment_contract_v2.pdf</div>
                  <div className="text-xs text-muted-foreground mb-4">15 pages • Uploaded 3 seconds ago</div>
                  <div className="space-y-2">
                    <div className="h-2 bg-legal-red rounded-full w-full"></div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-legal-red-dark" />
                      <span>Analysis Complete in {mockAnalysisExample.processingTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Analysis Results */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-legal-red" />
                    AI Analysis Results
                  </h4>
                </div>

                <Card className="border-0 shadow-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Document Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mockAnalysisExample.summary}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-legal-red-dark" />
                      Key Terms Identified
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockAnalysisExample.keyPoints.slice(0, 2).map((point, index) => (
                        <li key={index} className="text-sm text-muted-foreground">• {point}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-card">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-legal-red" />
                      Potential Issues
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {mockAnalysisExample.risks.slice(0, 1).map((risk, index) => (
                        <li key={index} className="text-sm text-muted-foreground">• {risk}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-legal-red mb-2">2.3s</div>
              <div className="text-sm text-muted-foreground">Average analysis time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-legal-red mb-2">99.7%</div>
              <div className="text-sm text-muted-foreground">Accuracy rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-legal-red mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Document types supported</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnalysisSection;