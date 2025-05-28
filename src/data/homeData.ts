import { Users, Award, Globe, TrendingUp, CheckCircle, Brain } from 'lucide-react';

const aboutStatsData = [
    {
        icon: Users,
        number: "500+",
        label: "Legal Professionals",
        description: "Trust our platform"
    },
    {
        icon: Award,
        number: "50+",
        label: "Expert Instructors",
        description: "Industry leaders"
    },
    {
        icon: Globe,
        number: "25+",
        label: "Countries",
        description: "Global reach"
    },
    {
        icon: TrendingUp,
        number: "40%",
        label: "Faster Learning",
        description: "Than traditional methods"
    }
];

const ourValuesData = [
    {
        title: "Innovation",
        description: "We leverage cutting-edge AI and technology to create the most effective learning experiences."
    },
    {
        title: "Excellence",
        description: "Our courses are designed by industry experts and updated continuously to maintain the highest standards."
    },
    {
        title: "Accessibility",
        description: "We believe quality legal education should be accessible to professionals at every career stage."
    },
    {
        title: "Impact",
        description: "We measure success by the career advancement and knowledge gains of our learners."
    }
];

const coursesData = [
    {
        id: 1,
        title: "AI Law Fundamentals",
        instructor: "Dr. Sarah Chen",
        duration: "8 weeks",
        students: 1247,
        rating: 4.9,
        price: 299,
        originalPrice: 499,
        category: "AI & Technology",
        level: "Beginner",
        popular: true,
        features: ["Live Q&A", "Certificate", "AI Tools Access"]
    },
    {
        id: 2,
        title: "Data Privacy Compliance Mastery",
        instructor: "Prof. Michael Rodriguez",
        duration: "12 weeks",
        students: 892,
        rating: 4.8,
        price: 399,
        originalPrice: 599,
        category: "Compliance",
        level: "Advanced",
        popular: false,
        features: ["GDPR Focus", "Case Studies", "Compliance Tools"]
    },
    {
        id: 3,
        title: "Legal Tech Innovation",
        instructor: "Jennifer Kim",
        duration: "6 weeks",
        students: 634,
        rating: 4.7,
        price: 249,
        originalPrice: 399,
        category: "Legal Tech",
        level: "Intermediate",
        popular: false,
        features: ["Hands-on Labs", "Tool Integration", "Industry Insights"]
    },
    {
        id: 4,
        title: "Contract Analytics with AI",
        instructor: "Dr. David Thompson",
        duration: "10 weeks",
        students: 1089,
        rating: 4.9,
        price: 349,
        originalPrice: 549,
        category: "AI & Technology",
        level: "Advanced",
        popular: true,
        features: ["AI Contract Review", "Automation", "Risk Assessment"]
    }
];
const assessmentSteps = [
    {
        step: 1,
        title: "Current Skills Analysis",
        description: "AI evaluates your legal expertise across 15+ practice areas",
        icon: Brain
    },
    {
        step: 2,
        title: "Career Goals Mapping",
        description: "Define your professional objectives and specialization interests",
        icon: TrendingUp
    },
    {
        step: 3,
        title: "Personalized Path Creation",
        description: "Get a custom learning roadmap with courses, timeline, and milestones",
        icon: CheckCircle
    }
];
const plans = [
    {
        name: "Free",
        price: "$0",
        period: "/month",
        description: "Perfect for getting started with legal education",
        features: [
            "Access to 3 basic courses",
            "Community forum access",
            "Basic progress tracking",
            "Mobile app access",
            "Email support"
        ],
        limitations: [
            "No AI assessment",
            "No live sessions",
            "No certificates",
            "Limited course library"
        ],
        cta: "Get Started Free",
        popular: false,
        variant: "outline" as const
    },
    {
        name: "Pro",
        price: "$49",
        period: "/month",
        description: "Most popular choice for legal professionals",
        features: [
            "Unlimited course access",
            "AI-powered learning paths",
            "Live mentor sessions",
            "Professional certificates",
            "Priority support",
            "Downloadable resources",
            "Progress analytics",
            "Mobile offline access"
        ],
        limitations: [],
        cta: "Start Pro Trial",
        popular: true,
        variant: "default" as const
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "Advanced solution for legal departments",
        features: [
            "Everything in Pro",
            "Team management dashboard",
            "Compliance analytics",
            "Custom course creation",
            "Advanced reporting",
            "SSO integration",
            "Dedicated account manager",
            "Custom integrations",
            "White-label options"
        ],
        limitations: [],
        cta: "Request Demo",
        popular: false,
        variant: "secondary" as const
    }
];
const faqsData = [
    {
      question: "How does the AI assessment work?",
      answer: "Our AI assessment analyzes your current knowledge, career goals, and learning preferences to create a personalized learning path. It takes about 10 minutes and covers areas like legal specialization, technology proficiency, and professional objectives."
    },
    {
      question: "Are the courses accredited for CLE credits?",
      answer: "Yes, most of our courses are approved for Continuing Legal Education (CLE) credits in major jurisdictions. Each course page clearly indicates CLE credit availability and the number of credits offered."
    },
    {
      question: "Can I access courses on mobile devices?",
      answer: "Absolutely! Our platform is fully responsive and includes dedicated mobile apps for iOS and Android. You can download courses for offline viewing and sync your progress across all devices."
    },
    {
      question: "What's included in the Enterprise plan?",
      answer: "The Enterprise plan includes team management, compliance tracking, custom course creation, advanced analytics, SSO integration, and dedicated support. Perfect for law firms and legal departments managing multiple users."
    },
    {
      question: "How often is course content updated?",
      answer: "We update our courses quarterly or whenever significant legal changes occur. Our expert instructors monitor regulatory developments and ensure all content reflects the latest legal standards and best practices."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee on all paid plans. If you're not satisfied with your learning experience, contact our support team for a full refund within 30 days of purchase."
    },
    {
      question: "Can I switch between plans?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. Your learning progress and certificates are preserved across all plan changes."
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we offer significant discounts for teams of 5 or more users. Contact our sales team to discuss volume pricing and custom enterprise solutions tailored to your organization's needs."
    }
  ];
export {
    aboutStatsData,
    ourValuesData,
    coursesData,
    assessmentSteps,
    plans,
    faqsData
}