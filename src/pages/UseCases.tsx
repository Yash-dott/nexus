
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Header } from "@/components/global";

const UseCases = () => {
  const industries = [
    {
      name: "Law Firms",
      description: "Streamline internal training and stay updated on regulations",
      metrics: "35% reduction in training costs",
      image: "https://images.unsplash.com/photo-1588454831272-797a9c97a48d"
    },
    {
      name: "Corporate Legal Departments",
      description: "Enhance compliance efforts and reduce regulatory risks",
      metrics: "40% fewer compliance violations",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
    },
    {
      name: "Law Schools",
      description: "Supplement curriculum with practical, tech-forward training",
      metrics: "93% student satisfaction rate",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
    },
    {
      name: "Legal Tech Startups",
      description: "Build expertise at the intersection of law and technology",
      metrics: "85% faster skill acquisition",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  ];
  
  const caseStudies = [
    {
      title: "Global Law Firm Transformation",
      company: "Morrison & Sterling LLP",
      challenge: "Training 500+ attorneys across 12 countries on new data privacy regulations",
      solution: "Implemented LegalNexus's personalized learning paths with localized content",
      results: [
        "93% compliance certification rate",
        "8 weeks faster implementation",
        "42% reduction in training costs"
      ],
      quote: "LegalNexus transformed our approach to regulatory training, making it more efficient and engaging for our global team."
    },
    {
      title: "Corporate Compliance Revolution",
      company: "TechGiant Industries",
      challenge: "Managing compliance requirements across multiple jurisdictions",
      solution: "Deployed LegalNexus's AI-powered compliance monitoring system",
      results: [
        "Zero compliance violations in first year",
        "65% reduction in manual document review",
        "28% increase in team productivity"
      ],
      quote: "The real-time updates and intelligent monitoring have completely transformed our compliance processes."
    }
  ];
  
  const progressMetrics = [
    { label: "Training Efficiency", value: 85 },
    { label: "Knowledge Retention", value: 92 },
    { label: "Regulatory Compliance", value: 98 },
    { label: "User Satisfaction", value: 94 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 pb-16">
        <section className="py-16 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">How Legal Teams Succeed with LegalNexus</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how organizations leverage our platform to transform their legal operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => (
                <Card key={industry.name} className="overflow-hidden card-hover border-none shadow-lg">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{industry.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{industry.description}</p>
                    <div className="bg-primary/10 text-primary font-medium rounded-full px-3 py-1 text-sm inline-block">
                      {industry.metrics}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-[#FF851B] hover:bg-[#FF851B]/90 text-white btn-hover-scale btn-hover-glow">
                Find Your Industry Solution
              </Button>
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            
            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={study.title} className="border-none shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-5 gap-6">
                    <div className="md:col-span-3 p-8">
                      <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                      <p className="text-primary font-medium mb-6">{study.company}</p>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold mb-1">Challenge</h4>
                          <p>{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Solution</h4>
                          <p>{study.solution}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-1">Results</h4>
                        <ul className="list-disc pl-5 space-y-1">
                          {study.results.map((result) => (
                            <li key={result}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="md:col-span-2 bg-primary/5 p-8 flex flex-col justify-center">
                      <blockquote className="text-lg italic mb-6">"{study.quote}"</blockquote>
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary/20"></div>
                        <div>
                          <div className="font-medium">Legal Director</div>
                          <div className="text-sm text-muted-foreground">{study.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Progress Metrics */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Platform Impact</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {progressMetrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="relative h-40 w-40 mx-auto">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle 
                        className="text-muted stroke-current" 
                        strokeWidth="10" 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="transparent"
                      />
                      <circle 
                        className="text-primary stroke-current" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        cx="50" 
                        cy="50" 
                        r="40" 
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - metric.value / 100)}`}
                        transform="rotate(-90 50 50)"
                      />
                      <text 
                        x="50" 
                        y="50" 
                        className="text-2xl font-bold" 
                        dominantBaseline="middle" 
                        textAnchor="middle"
                      >
                        {metric.value}%
                      </text>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mt-4">{metric.label}</h3>
                  <div className="h-2 bg-muted rounded-full mt-2 mb-6 overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full animate-progress" 
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </div>
    </div>
  );
};

export default UseCases;
