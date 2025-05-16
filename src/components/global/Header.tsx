
import { useState, useEffect, FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { departments } from "@/data";



const Header: FC = () => {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll for sticky navbar effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Force-show all categories if menu is open but no category is active
    const showAllCategories = isOpen && !activeCategory;

    // Check if a link is active
    const isActiveLink = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="text-2xl font-bold text-primary hover:scale-105 transition-transform">LegalNexus</Link>

                        <NavigationMenu
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                            className="hidden md:block"
                        >
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="cursor-pointer nav-link"
                                    >
                                        Explore
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="z-50">
                                        <div className="absolute left-0 w-screen bg-background border-b shadow-lg z-50">
                                            <div className="max-w-7xl mx-auto grid grid-cols-4 gap-6 p-8">
                                                {departments.map((dept) => (
                                                    <div
                                                        key={dept.id}
                                                        className="group"
                                                        onMouseEnter={() => setActiveCategory(dept.id)}
                                                        onClick={() => setActiveCategory(dept.id)}
                                                    >
                                                        <div className="flex items-center gap-2 mb-3 cursor-pointer">
                                                            <dept.icon className="h-5 w-5 text-primary" />
                                                            <h3 className="font-medium text-lg">{dept.name}</h3>
                                                        </div>
                                                        <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                                                        {(activeCategory === dept.id || showAllCategories) && (
                                                            <div className="space-y-4">
                                                                {dept.courses.map((course) => (
                                                                    <Link
                                                                        to={`/courses/${dept.id}/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                                        key={course.title}
                                                                        className="group/course hover:bg-accent p-3 rounded-lg transition-colors block card-hover"
                                                                    >
                                                                        <div className="font-medium text-base mb-1">{course.title}</div>
                                                                        <div className="text-sm text-muted-foreground">{course.institution}</div>
                                                                        <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                                                                            <span>{course.duration}</span>
                                                                            <span>{course.level}</span>
                                                                            <span>★ {course.rating}</span>
                                                                        </div>
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* New navigation links with active state */}
                                <NavigationMenuItem>
                                    <Link to="/features" className={`px-4 py-2 nav-link ${isActiveLink('/features') ? 'font-bold text-primary' : ''}`}>
                                        Features
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/use-cases" className={`px-4 py-2 nav-link ${isActiveLink('/use-cases') ? 'font-bold text-primary' : ''}`}>
                                        Use Cases
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link to="/pricing" className={`px-4 py-2 nav-link ${isActiveLink('/pricing') ? 'font-bold text-primary' : ''}`}>
                                        Pricing
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <div className="relative">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search courses..."
                                className="pl-8 w-64 bg-muted/50 border-none focus:ring-primary"
                            />
                        </div>
                        <Button asChild variant="default" className="bg-[#FF851B] hover:bg-[#FF851B]/90 text-white btn-hover-glow">
                            <Link to="/login">Sign In</Link>
                        </Button>
                    </div>

                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="relative"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background border-t p-4 shadow-lg">
                    <div className="mb-4">
                        <div className="relative">
                            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search courses..."
                                className="w-full pl-8"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        {departments.map((dept) => (
                            <div key={dept.id} className="py-2">
                                <div className="flex items-center gap-2 font-medium">
                                    <dept.icon className="h-4 w-4 text-primary" />
                                    {dept.name}
                                </div>
                            </div>
                        ))}
                        <Link to="/features" className={`block py-2 ${isActiveLink('/features') ? 'font-bold text-primary' : ''}`}>
                            Features
                        </Link>
                        <Link to="/use-cases" className={`block py-2 ${isActiveLink('/use-cases') ? 'font-bold text-primary' : ''}`}>
                            Use Cases
                        </Link>
                        <Link to="/pricing" className={`block py-2 ${isActiveLink('/pricing') ? 'font-bold text-primary' : ''}`}>
                            Pricing
                        </Link>
                        <Button asChild variant="default" className="w-full mt-4 bg-[#FF851B] hover:bg-[#FF851B]/90 text-white">
                            <Link to="/login">Sign In</Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
export default Header;
