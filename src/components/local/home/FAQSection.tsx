
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/data";

const FAQSection = () => {

    return (
        <section id="faq" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-poppins font-bold text-learnnexus-navy mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Get answers to common questions about our platform and courses.
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                    {faqsData.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                            <AccordionTrigger className="text-left font-semibold text-learnnexus-navy hover:text-learnnexus-orange">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Still have questions?
                    </p>
                    <div className="space-x-4">
                        <a href="mailto:support@learnnexus.com" className="text-learnnexus-orange hover:text-learnnexus-navy font-medium">
                            Email Support
                        </a>
                        <span className="text-gray-400">|</span>
                        <a href="#" className="text-learnnexus-orange hover:text-learnnexus-navy font-medium">
                            Live Chat
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
