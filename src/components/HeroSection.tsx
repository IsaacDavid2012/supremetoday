import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-legal-red-light/20 to-background">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-8 bg-background/50 backdrop-blur">
            <Sparkles className="h-4 w-4 mr-2 text-legal-red" />
            Powered by Advanced AI Technology
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Enhance the Power of{" "}
            <span className="bg-gradient-to-r from-legal-red to-legal-red-light bg-clip-text text-transparent">
              AI for Legal Research
            </span>{" "}
            and Practice
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Automate legal research, drafting, and document analysis with cutting-edge AI. 
            Reduce time spent on routine tasks and increase efficiency across your legal practice.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="https://heyzine.com/flip-book/cb0f2151b5.html">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-legal-red to-legal-red-light hover:shadow-lg hover:shadow-legal-red/25 transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 text-legal-red-dark" />
              </Button>
            </a>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="hover:bg-legal-red-light transition-colors"
                >
                <a
                  href="https://forms.gle/EF1J2QhS9yF1EKLWA"
                  aria-label="Send an email to request a demo"
                  className="flex items-center justify-center"
                >
                  Request a Demo
                </a>
              </Button>
          </div>
          
          {/* Quick Search Demo */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Try searching: 'contract law precedents' or 'employment discrimination cases'"
                className="pl-12 h-14 text-lg shadow-lg border-2 hover:border-primary/50 focus:border-primary transition-colors"
              />
              <Button className="absolute right-2 top-2 h-10 bg-gradient-to-r from-legal-red to-legal-red-light text-white">
                Search
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Search millions of legal documents, cases, and statutes instantly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
