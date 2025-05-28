import { type FC } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HeroSection: FC = () => {
    return (
        <section className="relative min-h-screen flex items-center heroBackground overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-learnnexus-gold rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-learnnexus-orange rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="text-white space-y-8 animate-fade-in-up">
                        {/* Trust Badge */}
                        <Badge className="bg-learnnexus-success/20 text-learnnexus-success border-learnnexus-success/30 text-sm font-medium px-4 py-2">
                            Trusted by 500+ Legal Professionals
                        </Badge>

                        {/* Main Headlines */}
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-6xl font-poppins font-bold leading-tight">
                                Transform Your
                                <span className="text-learnnexus-gold"> Legal Career </span>
                                in 40% Less Time
                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                                AI-powered personalized learning paths that adapt to your expertise level and career goals.
                                Master compliance, legal tech, and emerging regulations with confidence.
                            </p>
                        </div>

                        {/* Key Benefits */}
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-learnnexus-gold rounded-full"></div>
                                <span>Personalized AI Assessment</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-learnnexus-gold rounded-full"></div>
                                <span>Expert-Led Live Sessions</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-learnnexus-gold rounded-full"></div>
                                <span>Compliance Analytics</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-learnnexus-gold rounded-full"></div>
                                <span>Enterprise Solutions</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="gradient-cta text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-transform animate-pulse-glow"
                            >
                                Start Free Assessment
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-2 border-white text-white hover:bg-white hover:text-learnnexus-navy font-semibold px-8 py-4 text-lg transition-all"
                            >
                                Explore Courses
                            </Button>
                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-learnnexus-gold animate-counter">500+</div>
                                <div className="text-sm text-gray-300">Professionals</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-learnnexus-gold animate-counter">95%</div>
                                <div className="text-sm text-gray-300">Success Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-learnnexus-gold animate-counter">40%</div>
                                <div className="text-sm text-gray-300">Time Saved</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Hero Visual */}
                    <div className="relative lg:mt-0 mt-8">
                        <div className="relative">
                            {/* Main Dashboard Mockup */}
                            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                                <div className="space-y-4">
                                    {/* Header */}
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-learnnexus-navy">Your Learning Dashboard</h3>
                                        <Badge className="bg-learnnexus-success/10 text-learnnexus-success">95% Complete</Badge>
                                    </div>

                                    {/* Progress Bars */}
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">AI Law Fundamentals</span>
                                                <span className="text-learnnexus-success">Complete</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-learnnexus-success h-2 rounded-full w-full"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">Data Privacy Compliance</span>
                                                <span className="text-learnnexus-orange">In Progress</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-learnnexus-orange h-2 rounded-full w-3/4"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex justify-between text-sm mb-1">
                                                <span className="text-gray-600">Legal Tech Mastery</span>
                                                <span className="text-gray-400">Not Started</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div className="bg-gray-300 h-2 rounded-full w-1/4"></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Next Session */}
                                    <div className="bg-learnnexus-navy/5 rounded-lg p-4">
                                        <div className="text-sm font-medium text-learnnexus-navy mb-1">Next Live Session</div>
                                        <div className="text-xs text-gray-600">Advanced Contract Analysis</div>
                                        <div className="text-xs text-learnnexus-orange font-medium">Tomorrow, 2:00 PM EST</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -right-4 bg-learnnexus-orange text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-bounce">
                                AI Powered!
                            </div>

                            <div className="absolute -bottom-4 -left-4 bg-learnnexus-gold text-learnnexus-navy px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                                Personalized Path
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
