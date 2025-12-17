
import { Database, Cookie, Mail, Shield } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const navigation = [
    { name: "Information We Collect", href: "#information-collection", icon: Database },
    { name: "How We Use Your Information", href: "#information-use", icon: Mail },
    { name: "Cookies and Tracking", href: "#cookies", icon: Cookie },
    { name: "Data Security", href: "#security", icon: Shield },
  ];
    
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Privacy Policy
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
          <section id="information-collection">
            <h2>1. Information We Collect</h2>
            <p>We collect information that you provide directly to us when you create an account, enroll in a course, or communicate with us. This may include:</p>
            <ul>
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Information about your professional and educational background.</li>
                <li>Payment information, which is processed by our secure third-party payment processors.</li>
            </ul>
          </section>

          <section id="information-use">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to operate, maintain, and provide you with the features and functionality of our services. This includes:</p>
            <ul>
                <li>Personalizing your learning experience.</li>
                <li>Communicating with you about your account and our services.</li>
                <li>Providing you with support and responding to your inquiries.</li>
                <li>Processing your transactions.</li>
            </ul>
          </section>

          <section id="cookies">
            <h2>3. Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
          </section>

          <section id="security">
            <h2>4. Data Security</h2>
            <p>The security of your data is important to us. We use commercially acceptable means to protect your Personal Information, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use the best security practices, we cannot guarantee its absolute security.</p>
          </section>
        </main>
      </div>
    </div>
  );
}
