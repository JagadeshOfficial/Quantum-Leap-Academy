"use client";

import * as React from "react";
import { Link } from "react-scroll";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Overview", to: "overview" },
    { name: "Curriculum", to: "curriculum" },
    { name: "Tools", to: "tools" },
    { name: "Projects", to: "projects" },
    { name: "Reviews", to: "reviews" },
    { name: "Fees & FAQ", to: "faq" },
];

export function CourseNavigation() {
    const [isSticky, setIsSticky] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={cn(
                "z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                isSticky ? "fixed top-16 left-0 shadow-md transition-all duration-300" : "relative"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                <nav className="flex items-center gap-6 overflow-x-auto py-4 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.to}
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="cursor-pointer whitespace-nowrap text-muted-foreground transition-colors hover:text-primary active:text-primary"
                            activeClass="text-primary font-bold border-b-2 border-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <div className="hidden md:block">
                    {/* Placeholder for a small CTA if needed in sticky nav */}
                </div>
            </div>
        </div>
    );
}
