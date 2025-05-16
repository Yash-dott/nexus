import { Book, BookText, Shield, Gavel, Search, Menu } from "lucide-react";


const departments = [
    {
        id: "ipr",
        name: "Intellectual Property Law",
        icon: BookText,
        description: "Master intellectual property rights, patents, and trademarks",
        courses: [
            {
                title: "Patent Law Fundamentals",
                institution: "Harvard Law School",
                duration: "12 weeks",
                level: "Intermediate",
                rating: 4.8
            },
            {
                title: "Trademark Protection",
                institution: "Yale Law School",
                duration: "8 weeks",
                level: "Beginner",
                rating: 4.9
            },
            {
                title: "Copyright in Digital Age",
                institution: "Stanford Law",
                duration: "10 weeks",
                level: "Advanced",
                rating: 4.7
            },
        ],
    },
    {
        id: "compliance",
        name: "Regulatory Compliance",
        icon: Gavel,
        description: "Navigate complex regulatory frameworks and compliance requirements",
        courses: [
            {
                title: "Corporate Compliance Essentials",
                institution: "Columbia Law",
                duration: "10 weeks",
                level: "Intermediate",
                rating: 4.6
            },
            {
                title: "Financial Regulations",
                institution: "NYU Law",
                duration: "8 weeks",
                level: "Advanced",
                rating: 4.7
            },
            {
                title: "Healthcare Compliance",
                institution: "Johns Hopkins Law",
                duration: "12 weeks",
                level: "Beginner",
                rating: 4.8
            },
        ],
    },
    {
        id: "data-security",
        name: "Data Security & Privacy",
        icon: Shield,
        description: "Learn data protection, privacy laws, and cybersecurity compliance",
        courses: [
            {
                title: "GDPR Compliance",
                institution: "EU Law Institute",
                duration: "8 weeks",
                level: "Intermediate",
                rating: 4.9
            },
            {
                title: "Cybersecurity Law",
                institution: "MIT Law",
                duration: "10 weeks",
                level: "Advanced",
                rating: 4.8
            },
            {
                title: "Privacy Law Fundamentals",
                institution: "Berkeley Law",
                duration: "6 weeks",
                level: "Beginner",
                rating: 4.7
            },
        ],
    },
    {
        id: "legal-tech",
        name: "Legal Technology",
        icon: Book,
        description: "Explore the intersection of law and technology",
        courses: [
            {
                title: "Legal Tech Innovation",
                institution: "Stanford Law",
                duration: "10 weeks",
                level: "Intermediate",
                rating: 4.7
            },
            {
                title: "AI in Legal Practice",
                institution: "MIT Law",
                duration: "8 weeks",
                level: "Advanced",
                rating: 4.9
            },
            {
                title: "Digital Legal Services",
                institution: "Harvard Law",
                duration: "12 weeks",
                level: "Beginner",
                rating: 4.6
            },
        ],
    },
];

export default departments;