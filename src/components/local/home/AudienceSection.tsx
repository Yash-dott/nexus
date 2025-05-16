import { type FC } from "react";
import { audiences } from "@/data";
import Link from "next/link";



const AudienceSection: FC = () => {
    return (
        <div className="bg-background border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-start space-x-8 h-12">
                    {audiences.map((audience) => (
                        <Link
                            key={audience.id}
                            href={audience.href}
                            className="group flex items-center px-2 py-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <audience.icon className="h-4 w-4 mr-2" />
                            {audience.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default AudienceSection;