import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react"; // Only import the Check icon since we're using one plan
import React from 'react';

const plans = [
  {
    name: "Annual Plan",
    price: "RM 2500",
    period: "/year",
    description: "Ideal for individual users looking for a cost-effective solution.",
    features: [
      "Unlimited searches",
      "Unlimited document analyses",
      "Unlimited document generations",
      "Access to all templates",
      "Email support",
      "Latest AI models"
    ],
    buttonText: "Get Started",
    buttonVariant: "default",
    popular: true
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
            Choose the plan that fits your practice. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-white ${
                plan.popular ? 'ring-2 ring-legal-red scale-105' : ''
              }`}
            >
              <CardHeader className="text-center pb-8">
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
                      <Check className="h-5 w-5 text-legal-white mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://forms.gle/EF1J2QhS9yF1EKLWA"
                  className="block w-full"  // <-- make link block and full width
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full bg-legal-red text-white hover:bg-legal-red-dark shadow-lg"
                  >
                    Subscribe
                  </Button>
                </a>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
