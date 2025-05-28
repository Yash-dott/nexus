import LeadershipSection from '@/components/LeadershipSection';

import { Navbar } from '@/components/global';
import { HeroSection, CourseShowcaseSection, AiAssessmentSection , AboutSection, PricingSection, FAQSection} from '@/components/local/home';

const Index = () => {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <HeroSection/>
            <AboutSection />
            <CourseShowcaseSection />
            <AiAssessmentSection />
            <PricingSection/>

            <LeadershipSection />
            <FAQSection />

            {/* Footer placeholder */}
            <footer className="bg-learnnexus-navy text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-learnnexus-orange rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">LN</span>
                        </div>
                        <span className="text-2xl font-poppins font-bold">LearnNexus</span>
                    </div>
                    <p className="text-gray-300">
                        © 2024 LearnNexus. All rights reserved. Transforming legal education with AI.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Index;
