'use client';

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const faqs = [
  {
    question: "How does the AI-powered learning work?",
    answer: "Our platform uses artificial intelligence to analyze your learning patterns and customize content to your specific needs. It identifies knowledge gaps, adjusts difficulty levels, and recommends relevant resources to optimize your learning journey."
  },
  {
    question: "Are the courses accredited for continuing legal education?",
    answer: "Yes, many of our courses are accredited for CLE credits across multiple jurisdictions. Each course listing specifies the exact CLE credits available and the jurisdictions that recognize them."
  },
  {
    question: "Can I access the courses on mobile devices?",
    answer: "Absolutely! Our platform is fully responsive and optimized for all devices. You can learn on your computer, tablet, or smartphone with a seamless experience across all devices."
  },
  {
    question: "Do you offer corporate training packages?",
    answer: "Yes, we offer customized training solutions for law firms and corporate legal departments. Our enterprise plans include custom learning paths, branded portals, and detailed analytics to track team progress."
  },
  {
    question: "How often is the content updated?",
    answer: "Our legal content is continuously updated to reflect the latest laws, regulations, and case precedents. We have a team of legal experts who review and update course materials to ensure they remain current and accurate."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial that gives you limited access to our premium features. You can also access our free tier indefinitely with a selection of basic courses and resources."
  }
];

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  
  // Filter FAQs based on search term
  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our legal learning platform
          </p>
          
          {/* Search functionality */}
          <div className="mt-6 mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search questions..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={selectedQuestion === index ? "border-primary" : ""}
              >
                <AccordionTrigger 
                  className="text-left font-medium hover:text-primary"
                  onClick={() => setSelectedQuestion(index === selectedQuestion ? null : index)}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No questions found matching your search.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-hover-scale btn-hover-glow">Contact Support</Button>
            <Button variant="outline" className="btn-hover-scale">View Documentation</Button>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center bg-muted/50 px-4 py-2 rounded-md">
              <div className="mr-2 bg-green-500 h-2 w-2 rounded-full"></div>
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center bg-muted/50 px-4 py-2 rounded-md">
              <div className="mr-2 bg-green-500 h-2 w-2 rounded-full"></div>
              <span className="text-sm">GDPR Compliant</span>
            </div>
            <div className="flex items-center bg-muted/50 px-4 py-2 rounded-md">
              <div className="mr-2 bg-green-500 h-2 w-2 rounded-full"></div>
              <span className="text-sm">ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
