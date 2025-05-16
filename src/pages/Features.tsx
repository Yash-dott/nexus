
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, BookText, Gavel, Book } from "lucide-react";
import CTASection from "@/components/CTASection";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Header } from "@/components/global";

const Features = () => {
  const features = [
    {
      icon: BookText,
      title: "AI-Powered Learning Paths",
      description: "Personalized learning experiences tailored to your specific needs and goals.",
      details: "Our AI algorithms analyze your learning style, strengths, and areas for improvement to create a customized path that optimizes your learning experience and outcomes."
    },
    {
      icon: Shield,
      title: "Real-Time Compliance Updates",
      description: "Stay up-to-date with the latest legal regulations and compliance requirements.",
      details: "Our platform constantly monitors regulatory changes across jurisdictions and updates course materials in real-time, ensuring you're always working with the most current information."
    },
    {
      icon: Gavel,
      title: "Interactive Case Studies",
      description: "Apply your knowledge to real-world scenarios through interactive case studies.",
      details: "Engage with lifelike legal scenarios that test your understanding and decision-making abilities in a risk-free environment before facing similar situations in your practice."
    },
    {
      icon: Book,
      title: "Certification Programs",
      description: "Earn industry-recognized certifications to validate your expertise.",
      details: "Our certification programs are recognized by leading legal institutions and organizations, providing you with credentials that enhance your professional profile and career prospects."
    }
  ];

  const visualStory = {
    before: {
      title: "Before LegalNexus",
      points: [
        "Hours spent manually researching cases",
        "Overwhelming volume of legal documents",
        "Risk of missing critical compliance updates",
        "Fragmented learning resources",
        "Limited practical application opportunities"
      ]
    },
    after: {
      title: "After LegalNexus",
      points: [
        "AI-powered research assistance in minutes",
        "Intelligent document organization and analysis",
        "Automatic compliance monitoring and alerts",
        "Centralized, personalized learning platform",
        "Immersive practical training environments"
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 pb-16">
        <section className="py-16 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6">Powerful Features for Legal Excellence</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Discover how our platform transforms legal education and practice
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <HoverCard key={feature.title}>
                  <HoverCardTrigger asChild>
                    <Card className="bg-muted/50 border-none shadow-md hover:shadow-xl transition-all duration-300 h-full card-hover">
                      <CardHeader>
                        <feature.icon className="h-10 w-10 text-primary mb-2" />
                        <CardTitle>{feature.title}</CardTitle>
                        <CardDescription>{feature.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{feature.title}</h4>
                      <p className="text-sm">{feature.details}</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
            
            <Button className="mt-12 bg-[#FF851B] hover:bg-[#FF851B]/90 text-white btn-hover-scale btn-hover-glow">
              Explore All Features
            </Button>
          </div>
        </section>
        
        {/* Visual Storytelling Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Transform Your Legal Practice</h2>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="bg-background p-8 rounded-lg shadow-lg border border-neutral-border relative">
                <div className="absolute -top-3 -left-3 bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {visualStory.before.title}
                </div>
                <ul className="space-y-4 mt-6">
                  {visualStory.before.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-destructive/20 flex items-center justify-center text-destructive text-sm">
                        {index + 1}
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-background p-8 rounded-lg shadow-lg border border-neutral-border relative animate-float">
                <div className="absolute -top-3 -left-3 bg-[#2ECC40] text-white px-4 py-1 rounded-full text-sm font-medium">
                  {visualStory.after.title}
                </div>
                <ul className="space-y-4 mt-6">
                  {visualStory.after.points.map((point, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-[#2ECC40]/20 flex items-center justify-center text-[#2ECC40] text-sm">
                        {index + 1}
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Accessibility Section */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Accessible for Everyone</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Our platform is designed with accessibility in mind, ensuring that legal education is available to all
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Screen Reader Compatible</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>All content is optimized for screen readers with proper semantic HTML and ARIA attributes</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Keyboard Navigation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Navigate the entire platform using keyboard shortcuts for a seamless experience</p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Multiple Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Content available in multiple languages with automatic translation features</p>
                </CardContent>
                <CardFooter className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm">English</Button>
                  <Button variant="outline" size="sm">Español</Button>
                  <Button variant="outline" size="sm">Français</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        <CTASection />
      </div>
    </div>
  );
};

export default Features;
