import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Users, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Legal Professionals" },
  { icon: Clock, value: "80%", label: "Time Saved" },
  { icon: Shield, value: "99.9%", label: "Accuracy Rate" },
];

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-legal-red">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 text-white">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of legal professionals who are already using AI to streamline their workflows and deliver better results for their clients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
            href="https://www.youtube.com/watch?v=E47q2fbsoTM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Learn More video on YouTube"
          >
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-legal-red hover:bg-white/90 shadow-lg"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 text-legal-red-dark" />
            </Button>
          </a>

          <a
            href="https://forms.gle/EF1J2QhS9yF1EKLWA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Google Form to schedule a demo"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white bg-white/10 hover:bg-white/20"
            >
              Schedule Demo
            </Button>
          </a>

          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <Icon className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features List */}
        <Card className="max-w-4xl mx-auto bg-legal-red-dark/10 backdrop-blur border-legal-red/20">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">
              Everything you need to supercharge your legal practice:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Advanced AI-powered legal research",
                "Instant document analysis and summaries",
                "Smart legal drafting templates",
                "Natural language search capabilities",
                "Precedent identification and citation",
                "Automated compliance checking",
                "Secure document management",
                "24/7 customer support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;