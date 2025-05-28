import { type FC } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { aboutStatsData, ourValuesData } from "@/data";



const AboutSection: FC = () => {
    return(
        <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="bg-learnnexus-orange text-white mb-4">About LearnNexus</Badge>
            <h2 className="text-4xl font-poppins font-bold text-learnnexus-navy mb-4">
              Transforming Legal Education with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded by legal professionals for legal professionals, LearnNexus combines traditional legal expertise 
              with modern learning technology to deliver personalized education experiences.
            </p>
          </div>
  
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {aboutStatsData.map((stat, index) => (
              <Card key={index} className="text-center card-hover bg-white">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-learnnexus-orange mx-auto mb-4" />
                  <div className="text-3xl font-bold text-learnnexus-navy mb-2">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-gray-800 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
  
          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-poppins font-bold text-learnnexus-navy mb-6">
                Our Story
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  LearnNexus was born from a simple observation: the legal profession was being transformed by technology, 
                  but legal education wasn't keeping pace. Our founders, experienced legal professionals and technologists, 
                  saw an opportunity to bridge this gap.
                </p>
                <p>
                  In 2023, we launched with a mission to create the world's most effective legal learning platform. 
                  By combining AI-powered personalization with expert-designed content, we've helped hundreds of legal 
                  professionals advance their careers and stay ahead of industry changes.
                </p>
                <p>
                  Today, LearnNexus serves legal professionals across 25+ countries, from solo practitioners to large 
                  law firms, providing the knowledge and skills needed to thrive in the digital age of law.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-learnnexus-navy to-learnnexus-orange rounded-lg p-8 text-white">
                <h4 className="text-2xl font-poppins font-bold mb-4">Why We're Different</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>AI-powered personalized learning paths</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Content created by practicing legal experts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Real-world application focus</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span>Continuous content updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
  
          {/* Values */}
          <div>
            <h3 className="text-3xl font-poppins font-bold text-learnnexus-navy text-center mb-12">
              Our Values
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {ourValuesData.map((value, index) => (
                <Card key={index} className="text-center card-hover bg-white">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-poppins font-bold text-learnnexus-navy mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
}

export default AboutSection;