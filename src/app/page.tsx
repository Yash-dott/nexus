
import ServicesSection from "@/components/ServicesSection";
import TrendingCourses from "@/components/TrendingCourses";
import LiveSessions from "@/components/LiveSessions";
import BlogPosts from "@/components/BlogPosts";
import EndSection from "@/components/EndSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Header } from "@/components/global";
import { AudienceSection, HeroSection } from "@/components/local/home";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="pt-16"> 
                <AudienceSection />
                <HeroSection />
                <ServicesSection />
                <TrendingCourses />
                <TestimonialsSection />
                <PricingSection />
                <LiveSessions />
                <FAQSection />
                <BlogPosts />
                <CTASection />
                <EndSection />
            </div>
        </div>
    );
};

export default Index;
