import Link from "next/link";
import { GraduationCap } from "lucide-react";

export function Footer() {
  const offerings = [
    { name: "Data Science", href: "/courses/data-science" },
    { name: "Data Analysis", href: "/courses/data-analysis" },
    { name: "AI/ML Program", href: "/courses/ai-ml" },
    { name: "Agentic AI", href: "/courses/agentic-ai" },
    { name: "Quantum Computing", href: "/courses/quantum-computing" },
    { name: "Cyber Security", href: "/courses/cyber-security" },
    { name: "Data Engineering", href: "/courses/data-engineering" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#" },
  ];
  
  const legalLinks = [
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const moreLinks = [
    { name: "Teach at Quantum Leap", href: "#" },
    { name: "Hire from Us", href: "#" },
    { name: "Refer & Earn", href: "#" },
  ];

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Quantum Leap Academy</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Transform into a Future-Ready professional powered by AI.
            </p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider">Our Offerings</h3>
            <ul className="mt-4 space-y-2">
              {offerings.slice(0, 5).map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              {[...companyLinks, ...legalLinks].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider">More</h3>
            <ul className="mt-4 space-y-2">
              {moreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Quantum Leap Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
