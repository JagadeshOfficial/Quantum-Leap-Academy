
import Link from "next/link";
import Image from "next/image";

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
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/Logo.jpeg" alt="QuantumPod Technologies" width={180} height={30} className="object-contain"/>
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
              {[...companyLinks, ...moreLinks.slice(0,1)].map((item) => (
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
            <h3 className="font-semibold tracking-wider">Partners</h3>
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
          © {new Date().getFullYear()} QuantumPod Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
