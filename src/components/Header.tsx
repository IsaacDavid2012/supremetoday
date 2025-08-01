import { Button } from "@/components/ui/button";
import { Scale, Search, FileText, Users } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center">
        <div className="flex items-center space-x-2">
          <Scale className="h-6 w-6 text-legal-red" />
          <span className="font-bold text-xl text-legal-red-dark">Supreme Today AI</span>
        </div>
        
        <nav className="ml-auto flex items-center space-x-6">
          <a href="#research" className="text-sm font-medium hover:text-legal-red transition-colors">
            Research
          </a>
          <a href="#analysis" className="text-sm font-medium hover:text-legal-red transition-colors">
            Analysis
          </a>
          <a href="#drafting" className="text-sm font-medium hover:text-legal-red transition-colors">
            Drafting
          </a>
          <a href="https://www.youtube.com/watch?v=kzo20Ba6ts8&t=501s" className="text-sm font-medium hover:text-legal-red transition-colors">
            Demo Video
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;