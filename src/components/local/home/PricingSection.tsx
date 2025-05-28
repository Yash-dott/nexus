import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';
import { plans } from '@/data';

const PricingSection = () => {


    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-poppins font-bold text-learnnexus-navy mb-4">
                        Choose Your Learning Path
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transform your legal career with our flexible pricing options. Start free or unlock premium features.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={`relative card-hover ${plan.popular ? 'ring-2 ring-learnnexus-orange' : ''}`}>
                            {plan.popular && (
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-learnnexus-orange text-white">
                                    Most Popular
                                </Badge>
                            )}

                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl font-poppins text-learnnexus-navy">
                                    {plan.name}
                                </CardTitle>
                                <div className="flex items-baseline justify-center mb-2">
                                    <span className="text-4xl font-bold text-learnnexus-navy">{plan.price}</span>
                                    <span className="text-gray-500 ml-1">{plan.period}</span>
                                </div>
                                <CardDescription className="text-gray-600">
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    {plan.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3">
                                            <Check className="w-5 h-5 text-learnnexus-success flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                    {plan.limitations.map((limitation, index) => (
                                        <div key={index} className="flex items-center space-x-3 opacity-60">
                                            <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                            <span className="text-gray-500 line-through">{limitation}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className={`w-full mt-6 ${plan.popular ? 'gradient-cta text-white animate-pulse-glow' : ''}`}
                                    variant={plan.variant}
                                >
                                    {plan.cta}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        All plans include 30-day money-back guarantee
                    </p>
                    <div className="flex justify-center space-x-8 text-sm text-gray-500">
                        <span>✓ No setup fees</span>
                        <span>✓ Cancel anytime</span>
                        <span>✓ Secure payments</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
