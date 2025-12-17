
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TermsPage() {
  const terms = [
    {
      title: "1. Introduction",
      content:
        "Welcome to Quantum Leap Academy. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.",
    },
    {
      title: "2. User Accounts",
      content:
        "To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.",
    },
    {
      title: "3. Course Enrollment and Access",
      content:
        "When you enroll in a course, you are granted a limited, non-exclusive, non-transferable license to access and view the course content for your personal, non-commercial use. You may not share your account or course access with others. We reserve the right to revoke any license to access and use courses at any point in time in the event that we decide or are obligated to disable access to a course due to legal or policy reasons.",
    },
    {
      title: "4. Code of Conduct",
      content:
        "You agree to use our services for lawful purposes only. You are prohibited from posting or transmitting any material that is libelous, defamatory, obscene, or that infringes on any third party's intellectual property rights. We expect all users to be respectful and professional.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "All content, including courses, text, graphics, and logos, is the property of Quantum Leap Academy or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, or create derivative works from any content without our express written permission."
    },
    {
        title: "6. Limitation of Liability",
        content: "Quantum Leap Academy will not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service."
    },
    {
        title: "7. Changes to Terms",
        content: "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion."
    }
  ];

  return (
    <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last Updated: October 26, 2025
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-lg bg-card p-4 shadow-sm md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {terms.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="prose prose-lg max-w-none text-muted-foreground dark:prose-invert">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
