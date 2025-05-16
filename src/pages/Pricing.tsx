
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { Header } from "@/components/global";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 pb-16">
        <section className="py-16 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the plan that's right for your legal learning journey
            </p>
          </div>
        </section>

        <PricingSection />

        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Compare Plans</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 w-1/4">Features</th>
                    <th className="text-center py-4 px-6">Free</th>
                    <th className="text-center py-4 px-6 bg-primary/5">Pro</th>
                    <th className="text-center py-4 px-6">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Course access</td>
                    <td className="text-center py-4 px-6">5 courses</td>
                    <td className="text-center py-4 px-6 bg-primary/5">Unlimited</td>
                    <td className="text-center py-4 px-6">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">AI-powered learning</td>
                    <td className="text-center py-4 px-6">Basic</td>
                    <td className="text-center py-4 px-6 bg-primary/5">Advanced</td>
                    <td className="text-center py-4 px-6">Custom</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Certifications</td>
                    <td className="text-center py-4 px-6">❌</td>
                    <td className="text-center py-4 px-6 bg-primary/5">✓</td>
                    <td className="text-center py-4 px-6">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Practice questions</td>
                    <td className="text-center py-4 px-6">Limited</td>
                    <td className="text-center py-4 px-6 bg-primary/5">Unlimited</td>
                    <td className="text-center py-4 px-6">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Mentor support</td>
                    <td className="text-center py-4 px-6">❌</td>
                    <td className="text-center py-4 px-6 bg-primary/5">✓</td>
                    <td className="text-center py-4 px-6">Dedicated</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Team collaboration</td>
                    <td className="text-center py-4 px-6">❌</td>
                    <td className="text-center py-4 px-6 bg-primary/5">❌</td>
                    <td className="text-center py-4 px-6">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">API access</td>
                    <td className="text-center py-4 px-6">❌</td>
                    <td className="text-center py-4 px-6 bg-primary/5">❌</td>
                    <td className="text-center py-4 px-6">✓</td>
                  </tr>
                </tbody>
              </table>
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

export default Pricing;
