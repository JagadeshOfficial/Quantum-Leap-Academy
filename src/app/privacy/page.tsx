
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPolicyPage() {
    const policies = [
        {
            title: "1. Information We Collect",
            content: "We collect information that you provide directly to us when you create an account, enroll in a course, or communicate with us. This may include personal identification information (Name, email address, phone number, etc.), information about your professional and educational background, and payment information, which is processed by our secure third-party payment processors."
        },
        {
            title: "2. How We Use Your Information",
            content: "We use the information we collect to operate, maintain, and provide you with the features and functionality of our services. This includes personalizing your learning experience, communicating with you about your account and our services, providing you with support and responding to your inquiries, and processing your transactions."
        },
        {
            title: "3. Cookies and Tracking Technologies",
            content: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."
        },
        {
            title: "4. Data Security",
            content: "The security of your data is important to us. We use commercially acceptable means to protect your Personal Information, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use the best security practices, we cannot guarantee its absolute security."
        },
        {
            title: "5. Sharing Your Information",
            content: "We may share your information with third-party vendors and service providers that perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service. We do not sell your personal information to third parties."
        },
        {
            title: "6. Your Rights",
            content: "You have the right to access, update, or delete the information we have on you. Whenever made possible, you can access, update, or request deletion of your Personal Information directly within your account settings section. If you are unable to perform these actions yourself, please contact us to assist you."
        },
        {
            title: "7. Changes to This Privacy Policy",
            content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes."
        }
    ];

  return (
     <div className="bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last Updated: October 26, 2025
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-lg bg-card p-4 shadow-sm md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {policies.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="prose prose-lg max-w-none dark:prose-invert">
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
