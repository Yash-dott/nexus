
import { Button } from "@/components/ui/button";

const trustBadges = [
  "SSL Secured",
  "GDPR Compliant",
  "ISO 27001",
  "SOC 2"
];

const partners = [
  "Harvard Law School",
  "Stanford Law",
  "National Law University",
  "Legal Tech Association"
];

export default function CTASection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Legal Career?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of legal professionals who are already leveraging AI-powered learning to stay ahead in their field
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-transform hover:scale-105">
              Get Started for Free
            </Button>
            <Button variant="outline" size="lg">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mb-12">
            <p className="text-sm text-muted-foreground mb-4">TRUSTED BY LEGAL PROFESSIONALS WORLDWIDE</p>
            <div className="flex flex-wrap justify-center gap-4">
              {trustBadges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-background border rounded-full px-4 py-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-4">PARTNERED WITH LEADING INSTITUTIONS</p>
            <div className="flex flex-wrap justify-center gap-8">
              {partners.map((partner) => (
                <div key={partner} className="text-lg font-medium text-muted-foreground">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
