
import { Button } from "@/components/ui/button";

export default function EndSection() {
  const references = [
    { name: "About Us", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Help Center", url: "#" }
  ];

  return (
    <section className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">LearnNexus</h2>
            <p className="text-muted-foreground mb-6">
              Empowering learners worldwide with quality education through our comprehensive online learning platform. Access expert-led courses, live mentoring, and a supportive community to achieve your educational goals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {references.map((ref) => (
                <li key={ref.name}>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <a href={ref.url}>{ref.name}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
