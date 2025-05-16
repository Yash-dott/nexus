import { Building, User, University } from "lucide-react";

const audiences = [
    {
        id: "individual",
        label: "For Individuals",
        icon: User,
        href: "/individual",
    },
    {
        id: "corporate",
        label: "For Businesses",
        icon: Building,
        href: "/corporate",
    },
    {
        id: "education",
        label: "For Universities",
        icon: University,
        href: "/education",
    },
];

export default  audiences;