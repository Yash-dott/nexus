'use client';
import { useState, type FC, } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Navbar: FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-learnnexus-navy rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">LN</span>
                        </div>
                        <span className="text-2xl font-poppins font-bold text-learnnexus-navy">LearnNexus</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#about" className="text-gray-700 hover:text-learnnexus-navy transition-colors font-medium">
                            About
                        </a>
                        <a href="#courses" className="text-gray-700 hover:text-learnnexus-navy transition-colors font-medium">
                            Courses
                        </a>
                        <a href="#assessment" className="text-gray-700 hover:text-learnnexus-navy transition-colors font-medium">
                            AI Assessment
                        </a>
                        <a href="#pricing" className="text-gray-700 hover:text-learnnexus-navy transition-colors font-medium">
                            Pricing
                        </a>
                        <a href="#leadership" className="text-gray-700 hover:text-learnnexus-navy transition-colors font-medium">
                            Leadership
                        </a>
                        <a href="#faq" className="text-gray-700 hover:text-learnnexus-navy transition-colors font-medium">
                            FAQ
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Link href="/auth/login" >
                            <Button variant="ghost" className="text-learnnexus-navy hover:bg-learnnexus-navy/10">
                                Sign In
                            </Button>
                        </Link>
                        <Button className="gradient-cta text-white hover:bg-learnnexus-orange/90 animate-pulse-glow">
                            Start Free Assessment
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-around">
                            <span className="w-full h-0.5 bg-learnnexus-navy"></span>
                            <span className="w-full h-0.5 bg-learnnexus-navy"></span>
                            <span className="w-full h-0.5 bg-learnnexus-navy"></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-100 mt-4 pt-4">
                        <div className="flex flex-col space-y-3">
                            <a href="#about" className="text-gray-700 hover:text-learnnexus-navy font-medium">
                                About
                            </a>
                            <a href="#courses" className="text-gray-700 hover:text-learnnexus-navy font-medium">
                                Courses
                            </a>
                            <a href="#assessment" className="text-gray-700 hover:text-learnnexus-navy font-medium">
                                AI Assessment
                            </a>
                            <a href="#pricing" className="text-gray-700 hover:text-learnnexus-navy font-medium">
                                Pricing
                            </a>
                            <a href="#leadership" className="text-gray-700 hover:text-learnnexus-navy font-medium">
                                Leadership
                            </a>
                            <a href="#faq" className="text-gray-700 hover:text-learnnexus-navy font-medium">
                                FAQ
                            </a>
                            <div className="flex flex-col space-y-2 pt-3 border-t border-gray-100">
                                <Link href="/auth/login" >
                                    <Button variant="ghost" className="border-learnnexus-navy text-learnnexus-navy">
                                        Sign In
                                    </Button>
                                </Link>
                                <Button className="gradient-cta text-white">
                                    Start Free Assessment
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;


