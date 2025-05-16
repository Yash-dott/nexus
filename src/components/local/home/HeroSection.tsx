
import { type FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Play } from "lucide-react";

const HeroSection: FC = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    return (
        <div className="relative bg-gradient-to-b from-primary/10 via-background to-background pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-left animate-fade-in">
                        <span className="inline-block bg-primary/10 text-primary font-medium rounded-full px-3 py-1 text-sm mb-4">
                            AI-Powered Learning Platform
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                            Master Legal Excellence
                        </h1>
                        <p className="text-xl text-primary font-semibold mb-6">
                            AI-Powered Learning for Every Legal Professional
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            Navigate the complex world of law with expert-led courses in IPR, Compliance, Data Security, and more
                        </p>
                        <div className="flex gap-2 mb-8">
                            <Input
                                type="search"
                                placeholder="Search legal courses..."
                                className="w-full"
                            />
                            <Button className="btn-hover-scale btn-hover-glow">
                                <Search className="h-4 w-4 mr-2" />
                                Search
                            </Button>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Button size="lg" className="bg-[#FF851B] hover:bg-[#FF851B]/90 text-white transition-all btn-hover-scale btn-hover-glow">
                                Get Started Free
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="group flex items-center gap-2 transition-all btn-hover-scale"
                                onClick={() => setIsVideoPlaying(true)}
                            >
                                <div className="relative">
                                    <div className="absolute -inset-1 rounded-full bg-primary/20 animate-pulse"></div>
                                    <Play className="h-4 w-4 text-primary group-hover:text-secondary relative z-10" />
                                </div>
                                <span>Watch Demo</span>
                            </Button>
                        </div>

                        {/* Trust indicators */}
                        <div className="mt-8">
                            <p className="text-sm text-muted-foreground mb-2">Trusted by leading institutions</p>
                            <div className="flex flex-wrap gap-4">
                                <div className="text-muted-foreground text-xs bg-muted/50 px-3 py-1 rounded-full">Harvard Law</div>
                                <div className="text-muted-foreground text-xs bg-muted/50 px-3 py-1 rounded-full">Yale University</div>
                                <div className="text-muted-foreground text-xs bg-muted/50 px-3 py-1 rounded-full">Oxford Law</div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block relative">
                        {isVideoPlaying ? (
                            <div className="rounded-lg shadow-xl overflow-hidden relative aspect-video">
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                                    <p>Demo video playing...</p>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                                        onClick={() => setIsVideoPlaying(false)}
                                    >
                                        Close
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <img
                                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                                    alt="Legal Technology Learning"
                                    className="rounded-lg shadow-xl card-hover cursor-pointer"
                                    onClick={() => setIsVideoPlaying(true)}
                                />
                                <div className="absolute -bottom-4 -left-4 bg-background p-4 rounded-lg shadow-lg border">
                                    <div className="flex gap-2 items-center">
                                        <div className="bg-green-500 h-3 w-3 rounded-full"></div>
                                        <span className="font-medium">4.9/5</span>
                                        <span className="text-muted-foreground text-sm">(2,450+ Reviews)</span>
                                    </div>
                                </div>
                                {/* Interactive element overlay */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 transition-colors rounded-full p-5 cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                                    <Play className="h-8 w-8 text-white" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Learning style mini-quiz */}
            <div className="bg-muted/50 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-medium">What's Your Learning Style?</h3>
                        <p className="text-muted-foreground">Take our quick quiz to get personalized course recommendations</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="outline" className="btn-hover-scale">Visual Learner</Button>
                        <Button variant="outline" className="btn-hover-scale">Auditory Learner</Button>
                        <Button variant="outline" className="btn-hover-scale">Reading/Writing Preference</Button>
                        <Button variant="outline" className="btn-hover-scale">Kinesthetic Learner</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
