import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, Building, User } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Partner",
    company: "Chen & Associates",
    image: "👩‍💼",
    rating: 5,
    quote: "Supreme Today AI has transformed our research process. What used to take hours now takes minutes. The accuracy is incredible and it's become an essential tool for our practice.",
    metric: "Reduced research time by 75%"
  },
  {
    name: "Michael Rodriguez",
    role: "Legal Counsel",
    company: "TechCorp Inc.",
    image: "👨‍💼",
    rating: 5,
    quote: "The document analysis feature is a game-changer. We can review contracts and identify potential issues instantly. It's like having a senior associate working 24/7.",
    metric: "Caught 40+ contract issues"
  },
  {
    name: "Emily Thompson",
    role: "Solo Practitioner",
    company: "Thompson Law",
    image: "👩‍⚖️",
    rating: 5,
    quote: "As a solo practitioner, Supreme Today AI gives me the power of a large firm's resources. The drafting templates are professional and save me incredible amounts of time.",
    metric: "Generated 100+ documents"
  }
];

const clientLogos = [
  { name: "BigLaw Firm", icon: "🏛️" },
  { name: "TechCorp", icon: "💻" },
  { name: "FinanceGroup", icon: "🏦" },
  { name: "HealthcareLLC", icon: "🏥" },
  { name: "StartupInc", icon: "🚀" },
  { name: "RealEstate Co", icon: "🏠" }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Trusted by Legal Professionals Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of lawyers, firms, and legal departments using Supreme Today AI to enhance their practice.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center gap-2 text-2xl">
                <span>{client.icon}</span>
                <span className="text-sm font-medium text-muted-foreground">{client.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl text-legal-red">{testimonial.image}</div>
                  <div>
                    <CardTitle className="text-lg text-legal-red-dark">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm">
                      {testimonial.role} • {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <Quote className="h-6 w-6 text-legal-red mb-3 opacity-50" />
                <p className="text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <Badge variant="secondary" className="mt-auto">
                  {testimonial.metric}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg p-8 text-legal-red">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-legal-red/90">Legal Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-legal-red/90">Documents Analyzed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-legal-red/90">Documents Drafted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-legal-red/90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;