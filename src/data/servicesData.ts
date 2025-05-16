import { Gavel, FileText, Shield, Book } from "lucide-react";

const services = [
    {
        title: "Intellectual Property Law",
        description: "Master patents, trademarks, copyrights and trade secrets with our comprehensive IPR courses.",
        icon: Gavel,
        metric: "94% Success Rate",
        subfeatures: ["Patent Applications", "Copyright Protection", "Trademark Registration"],
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        stats: "40% faster learning"
    },
    {
        title: "Regulatory Compliance",
        description: "Stay compliant with the latest regulations and standards across different jurisdictions.",
        icon: FileText,
        metric: "40% Risk Reduction",
        subfeatures: ["Policy Development", "Risk Assessment", "Compliance Training"],
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        stats: "60% fewer compliance violations"
    },
    {
        title: "Data Security & Privacy",
        description: "Learn about data protection laws, GDPR, CCPA and cybersecurity compliance.",
        icon: Shield,
        metric: "100% GDPR Compliant",
        subfeatures: ["Privacy Frameworks", "Data Protection", "Breach Response"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        stats: "85% reduction in data breaches"
    },
    {
        title: "Legal Tech Skills",
        description: "Embrace modern legal technology tools and digital transformation in legal practice.",
        icon: Book,
        metric: "85% Efficiency Gain",
        subfeatures: ["AI Legal Tools", "Digital Contract Management", "Legal Analytics"],
        image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
        stats: "3x productivity improvement"
    },
];

export default services;