import { type FC } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle, Brain, TrendingUp, Users } from 'lucide-react';
import { assessmentSteps } from '@/data';

const AiAssessmentSection: FC = () => {
  

    const benefits = [
        "Identify knowledge gaps in minutes, not months",
        "Skip courses you've already mastered",
        "Focus on high-impact skills for your career",
        "Track progress with AI-powered analytics",
        "Get recommendations as regulations change"
    ];

    return (
        <section id="assessment" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div>
                            <Badge className="bg-learnnexus-gold/10 text-learnnexus-gold border-learnnexus-gold/20 mb-4">
                                AI-Powered Assessment
                            </Badge>
                            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-learnnexus-navy mb-6">
                                Discover Your
                                <span className="text-learnnexus-orange"> Personalized </span>
                                Learning Path
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Our AI assessment analyzes your current expertise and career goals to create a customized learning experience that gets you results 40% faster.
                            </p>
                        </div>

                        {/* Benefits List */}
                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start space-x-3">
                                    <CheckCircle className="w-6 h-6 text-learnnexus-success mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                </div>
                            ))}
                        </div>

                        {/* Enterprise Value Prop */}
                        <Card className="bg-learnnexus-navy/5 border-learnnexus-navy/20">
                            <CardContent className="p-6">
                                <div className="flex items-start space-x-4">
                                    <Users className="w-8 h-8 text-learnnexus-navy mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-learnnexus-navy mb-2">Enterprise Compliance Analytics</h3>
                                        <p className="text-gray-600 text-sm">
                                            Get organization-wide insights on compliance readiness, skill gaps, and training ROI.
                                            Perfect for legal departments and law firms.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="gradient-cta text-white font-semibold px-8 animate-pulse-glow"
                            >
                                Start Free Assessment
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-learnnexus-navy text-learnnexus-navy hover:bg-learnnexus-navy hover:text-white"
                            >
                                Request Enterprise Demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Assessment Process */}
                    <div className="space-y-6">
                        {/* Assessment Steps */}
                        <div className="space-y-6">
                            {assessmentSteps.map((step, index) => (
                                <Card key={step.step} className="card-hover border-0 shadow-lg overflow-hidden">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-learnnexus-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <step.icon className="w-6 h-6 text-learnnexus-orange" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-3 mb-2">
                                                    <Badge className="bg-learnnexus-navy text-white text-xs">
                                                        Step {step.step}
                                                    </Badge>
                                                    <h3 className="font-semibold text-learnnexus-navy">{step.title}</h3>
                                                </div>
                                                <p className="text-gray-600 text-sm">{step.description}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>

                        {/* Assessment Preview */}
                        <Card className="bg-gradient-to-br from-learnnexus-navy to-learnnexus-navy/90 text-white border-0">
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold">Assessment Preview</h3>
                                        <Badge className="bg-learnnexus-gold text-learnnexus-navy">
                                            5 minutes
                                        </Badge>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="p-3 bg-white/10 rounded-lg">
                                            <p className="text-sm font-medium mb-1">Sample Question:</p>
                                            <p className="text-xs text-gray-200">
                                                "Rate your experience with GDPR Article 6 lawful basis requirements..."
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-4 gap-2">
                                            {[1, 2, 3, 4].map((level) => (
                                                <button
                                                    key={level}
                                                    className={`p-2 rounded text-xs font-medium transition-colors ${level === 3
                                                        ? 'bg-learnnexus-orange text-white'
                                                        : 'bg-white/20 hover:bg-white/30'
                                                        }`}
                                                >
                                                    {level === 1 ? 'Beginner' : level === 2 ? 'Basic' : level === 3 ? 'Advanced' : 'Expert'}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-white/20">
                                        <div className="flex items-center justify-between text-xs text-gray-200">
                                            <span>Question 3 of 25</span>
                                            <span>60% Complete</span>
                                        </div>
                                        <div className="w-full bg-white/20 rounded-full h-1 mt-2">
                                            <div className="bg-learnnexus-gold h-1 rounded-full w-3/5"></div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiAssessmentSection;
