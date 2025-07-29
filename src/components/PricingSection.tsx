import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Star, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for solo practitioners and small firms getting started with AI",
    icon: Zap,
    badge: null,
    features: [
      "50 searches per month",
      "10 document analyses",
      "5 document generations",
      "Basic templates library",
      "Email support",
      "Standard AI models"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "Most popular choice for growing law firms and legal departments",
    icon: Star,
    badge: "Most Popular",
    features: [
      "500 searches per month",
      "100 document analyses",
      "50 document generations",
      "Premium templates library",
      "Priority support",
      "Advanced AI models",
      "Custom clause library",
      "Team collaboration tools"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "/month",
    description: "Tailored solutions for large firms with advanced needs",
    icon: Crown,
    badge: "Best Value",
    features: [
      "Unlimited searches",
      "Unlimited analyses",
      "Unlimited generations",
      "Custom templates",
      "Dedicated support",
      "Latest AI models",
      "API access",
      "SSO integration",
      "Custom training",
      "SLA guarantee"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your practice. All plans include a 14-day free trial with no credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={index} 
                className={`relative border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-white ${
                  plan.popular ? 'ring-2 ring-legal-red scale-105' : ''
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-legal-red text-white px-4 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-legal-red" />
                  </div>
                  <CardTitle className="text-2xl mb-2 text-legal-red-dark">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-legal-red">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-legal-red mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.buttonVariant} 
                    className={`w-full ${plan.buttonText === 'Start Free Trial' ? 'bg-legal-red text-white hover:bg-legal-red-dark' : ''}`}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-legal-red-light/20 text-legal-red px-6 py-3 rounded-full border border-legal-red">
            <Check className="h-5 w-5 text-legal-red" />
            <span className="font-medium">30-day money-back guarantee</span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-md mx-auto">
            Not satisfied? Get a full refund within 30 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;