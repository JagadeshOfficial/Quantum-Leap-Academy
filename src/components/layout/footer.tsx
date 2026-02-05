
import Link from "next/link";
import { MathisiLogo } from "@/components/brand/logo";
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

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
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  const moreLinks = [
    { name: "Teach with Us", href: "/teach" },
    { name: "Hire from Us", href: "/hire" },
    { name: "Refer & Earn", href: "/refer" },
  ];

  return (
    <footer className="border-t bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center">
              <MathisiLogo className="h-10" />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Elite training in Data Science, Cybersecurity, Generative AI, and Quantum Computing.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/mathisiedtech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://x.com/MathisiEdtech" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://www.instagram.com/mathisi.edtech/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://www.youtube.com/channel/UCtIyFuzPH8VwnB4MYyANBZw" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider text-foreground/80">Our Offerings</h3>
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
            <h3 className="font-semibold tracking-wider text-foreground/80">Company</h3>
            <ul className="mt-4 space-y-2">
              {[...companyLinks, ...moreLinks.slice(0, 1)].map((item) => (
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
            <h3 className="font-semibold tracking-wider text-foreground/80">Partners</h3>
            <ul className="mt-4 space-y-2">
              {[...moreLinks.slice(1)].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {legalLinks.map((item) => (
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
          © {new Date().getFullYear()} Mathisi School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
