import { type FC } from "react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Clock, Users, Star } from 'lucide-react';
import { coursesData } from "@/data";

const CourseShowcaseSection: FC = () => {

    const categories = ["All Courses", "AI & Technology", "Compliance", "Legal Tech", "Data Privacy"];


    return (
        <section id="courses" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-learnnexus-orange/10 text-learnnexus-orange border-learnnexus-orange/20 mb-4">
                        Featured Courses
                    </Badge>
                    <h2 className="text-4xl md:text-5xl font-poppins font-bold text-learnnexus-navy mb-6">
                        Master Legal Innovation with
                        <span className="text-learnnexus-orange"> Expert-Led Courses</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Choose from our curated selection of courses designed by industry leaders and enhanced with AI-powered personalization.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={category === "All Courses" ? "default" : "outline"}
                            className={category === "All Courses"
                                ? "bg-learnnexus-navy text-white"
                                : "border-learnnexus-navy/20 text-learnnexus-navy hover:bg-learnnexus-navy hover:text-white"
                            }
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                {/* Course Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {coursesData.map((course) => (
                        <Card key={course.id} className="card-hover border-0 shadow-lg overflow-hidden group">
                            {course.popular && (
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge className="bg-learnnexus-gold text-learnnexus-navy font-medium">
                                        Most Popular
                                    </Badge>
                                </div>
                            )}

                            <CardHeader className="bg-gradient-to-r from-learnnexus-navy to-learnnexus-navy/90 text-white p-6">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <Badge className="bg-white/20 text-white text-xs">
                                            {course.category}
                                        </Badge>
                                        <h3 className="text-xl font-poppins font-bold leading-tight">
                                            {course.title}
                                        </h3>
                                        <p className="text-gray-200 text-sm">by {course.instructor}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 text-sm text-gray-200 mt-4">
                                    <div className="flex items-center space-x-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{course.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Users className="w-4 h-4" />
                                        <span>{course.students.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Star className="w-4 h-4 fill-learnnexus-gold text-learnnexus-gold" />
                                        <span>{course.rating}</span>
                                    </div>
                                </div>
                            </CardHeader>

                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Badge variant="outline" className="text-learnnexus-navy">
                                            {course.level}
                                        </Badge>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-learnnexus-navy text-sm">What's Included:</h4>
                                        <ul className="space-y-1">
                                            {course.features.map((feature, index) => (
                                                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                                    <div className="w-1.5 h-1.5 bg-learnnexus-success rounded-full"></div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-6 pt-0">
                                <div className="w-full space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-2xl font-bold text-learnnexus-navy">
                                                    ${course.price}
                                                </span>
                                                <span className="text-lg text-gray-400 line-through">
                                                    ${course.originalPrice}
                                                </span>
                                                <Badge className="bg-learnnexus-warning/10 text-learnnexus-warning text-xs">
                                                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                                                </Badge>
                                            </div>
                                            <p className="text-xs text-gray-500">
                                                Pay once, learn forever
                                            </p>
                                        </div>
                                    </div>

                                    <Button className="w-full gradient-cta text-white font-semibold group-hover:scale-105 transition-transform">
                                        Enroll Now
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-learnnexus-navy text-learnnexus-navy hover:bg-learnnexus-navy hover:text-white font-semibold px-8"
                    >
                        View All Courses
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default CourseShowcaseSection;