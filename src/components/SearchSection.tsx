import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, FileText, Calendar, User, ArrowRight, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Natural Language Search",
    description: "Search using plain English queries like 'employment discrimination cases in California' instead of complex legal syntax."
  },
  {
    icon: Filter,
    title: "Smart Filtering",
    description: "Automatically categorize and filter results by document type, jurisdiction, date, and relevance to your case."
  },
  {
    icon: Target,
    title: "Precision Results",
    description: "AI-powered relevance scoring ensures the most pertinent cases and statutes appear first in your results."
  }
];

const searchExamples = [
  {
    query: "employment discrimination cases",
    results: "2,847 cases found",
    topResult: "Miranda v. Arizona - Supreme Court landmark decision"
  },
  {
    query: "contract law precedents California",
    results: "1,523 statutes found", 
    topResult: "CA Civil Code §1549 - Contract formation requirements"
  },
  {
    query: "personal injury statute limitations",
    results: "945 regulations found",
    topResult: "Code of Civil Procedure §335.1 - Two-year limitation"
  }
];

const SearchSection = () => {
  return (
    <section id="research" className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Revolutionary Legal Research Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Supreme Today AI transforms how legal professionals conduct research by making millions of legal documents searchable through natural language queries, delivering precise results in seconds.
          </p>
        </div>

        {/* Search Demo Interface */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border rounded-lg p-8 shadow-elevated">
            <h3 className="text-xl font-semibold mb-6 text-center">See How Easy Legal Research Becomes</h3>
            
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Try: 'employment discrimination cases in California since 2020'"
                className="pl-12 h-14 text-lg shadow-lg border-2"
                disabled
              />
              <Button className="absolute right-2 top-2 h-10 bg-gradient-to-r from-legal-red to-legal-red-light text-white">
                Search
              </Button>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {searchExamples.map((example, index) => (
              <Card key={index} className="border-0 shadow-card">
                <CardContent className="p-4">
                  <div className="text-sm font-medium mb-2">"{example.query}"</div>
                  <div className="text-xs text-muted-foreground mb-2">{example.results}</div>
                  <div className="text-xs text-legal-red">{example.topResult}</div>
                </CardContent>
              </Card>
            ))}
          </div>

            <div className="text-center">
              <Badge variant="secondary" className="px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Average search time: 0.3 seconds
              </Badge>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-card hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-legal-red/10 to-legal-red-light/5 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-legal-red" />
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

        {/* Coverage Stats */}
        <div className="bg-white rounded-lg p-8 text-legal-red">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Comprehensive Legal Database Coverage</h3>
            <p className="text-white/90">Access the most extensive collection of legal documents and precedents</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50M+</div>
              <div className="text-white/90">Legal Documents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-white/90">Court Cases</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-white/90">Statutes & Regulations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/90">Jurisdictions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;