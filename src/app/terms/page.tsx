
import { FileText, Shield, User, Info } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const navigation = [
    { name: "Introduction", href: "#introduction", icon: Info },
    { name: "User Accounts", href: "#accounts", icon: User },
    { name: "Course Enrollment & Access", href: "#enrollment", icon: FileText },
    { name: "Code of Conduct", href: "#conduct", icon: Shield },
  ];
    
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Last Updated: October 26, 2025
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <h3 className="text-lg font-semibold">On this page</h3>
            <nav className="mt-4 flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} className="flex items-center gap-3 rounded-md p-2 text-muted-foreground hover:bg-secondary hover:text-foreground">
                  <item.icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <main className="prose prose-lg max-w-none lg:col-span-3 dark:prose-invert">
          <section id="introduction">
            <h2>1. Introduction</h2>
            <p>Welcome to Quantum Leap Academy. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.</p>
          </section>

          <section id="accounts">
            <h2>2. User Accounts</h2>
            <p>To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
          </section>

          <section id="enrollment">
            <h2>3. Course Enrollment and Access</h2>
            <p>When you enroll in a course, you are granted a limited, non-exclusive, non-transferable license to access and view the course content for your personal, non-commercial use. You may not share your account or course access with others.</p>
            <p>We reserve the right to revoke any license to access and use courses at any point in time in the event that we decide or are obligated to disable access to a course due to legal or policy reasons.</p>
          </section>

          <section id="conduct">
            <h2>4. Code of Conduct</h2>
            <p>You agree to use our services for lawful purposes only. You are prohibited from posting or transmitting any material that is libelous, defamatory, obscene, or that infringes on any third party's intellectual property rights. We expect all users to be respectful and professional.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
