
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Free",
    description: "Basic access to legal learning resources",
    price: "₹0",
    duration: "forever",
    features: [
      "Access to 5 free courses",
      "Basic legal templates",
      "Community forum access",
      "Limited document analysis",
    ],
    limitations: [
      "No custom learning paths",
      "No certification",
      "Limited practice questions",
    ]
  },
  {
    name: "Pro",
    description: "For legal professionals and students",
    price: "₹1,999",
    duration: "per month",
    popular: true,
    discount: "Save 20% with annual billing",
    features: [
      "Unlimited course access",
      "Advanced practice questions",
      "Personalized learning paths",
      "Professional certification",
      "Document analysis with AI insights",
      "Mentor support",
      "Mock trials and simulations",
    ],
    limitations: []
  },
  {
    name: "Enterprise",
    description: "For law firms and organizations",
    price: "Custom",
    duration: "",
    features: [
      "Everything in Pro",
      "Custom course development",
      "Branded learning portal",
      "Advanced analytics dashboard",
      "API access for integrations",
      "Dedicated account manager",
      "Training workshops",
      "Team collaboration tools",
    ],
    limitations: []
  }
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for your legal learning journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.duration && <span className="text-muted-foreground"> {plan.duration}</span>}
                  {plan.discount && (
                    <div className="mt-2 text-sm text-primary font-medium">{plan.discount}</div>
                  )}
                </div>
                
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex-shrink-0 h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation) => (
                    <div key={limitation} className="flex items-center gap-3 text-muted-foreground">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center">
                        ✕
                      </div>
                      <span className="text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.name === 'Enterprise' ? 'bg-secondary hover:bg-secondary/90' : ''} hover:scale-105 transition-transform`}
                  variant={plan.name === 'Free' ? 'outline' : 'default'}
                >
                  {plan.name === 'Enterprise' ? 'Request a Quote' : 'Get Started'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Need a custom solution for your organization?</p>
          <Button variant="outline" size="lg">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
