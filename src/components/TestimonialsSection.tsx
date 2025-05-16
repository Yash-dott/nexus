
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const testimonials = [
  {
    quote: "This platform completely transformed how I approach intellectual property law. The interactive case studies were particularly enlightening.",
    name: "Sarah Johnson",
    title: "Senior Legal Counsel, Tech Innovations Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop"
  },
  {
    quote: "The compliance courses helped our firm reduce regulatory risks by 40%. The practical examples and templates are invaluable resources.",
    name: "Michael Chen",
    title: "Compliance Director, Global Financial Group",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop"
  },
  {
    quote: "As a law student, this platform has given me an edge in understanding data privacy frameworks that my university curriculum doesn't cover.",
    name: "Priya Sharma",
    title: "Law Student, National Law University",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&auto=format&fit=crop"
  },
];

const caseStudies = [
  {
    title: "Corporate Legal Department Transformation",
    stats: "37% increase in efficiency",
    description: "A Fortune 500 company implemented our Legal Tech courses across their legal department, resulting in significant productivity gains.",
    icon: "🏆"
  },
  {
    title: "Law School Curriculum Enhancement",
    stats: "93% student satisfaction",
    description: "Top law schools integrated our platform into their curriculum, providing students with practical skills that employers demand.",
    icon: "🎓"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See how legal professionals and organizations are transforming with our learning platform
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((item, index) => (
            <Card key={index} className="bg-muted/50 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <MessageCircle className="text-primary h-8 w-8" />
                </div>
                <blockquote className="text-lg italic mb-4">"{item.quote}"</blockquote>
              </CardContent>
              <CardFooter className="flex items-center gap-4 border-t pt-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover" 
                />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.title}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-primary/5 rounded-lg p-6 hover:bg-primary/10 transition-all">
              <div className="text-4xl mb-4">{study.icon}</div>
              <h3 className="text-xl font-bold mb-2">{study.title}</h3>
              <div className="text-lg font-semibold text-primary mb-3">{study.stats}</div>
              <p className="text-muted-foreground">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
