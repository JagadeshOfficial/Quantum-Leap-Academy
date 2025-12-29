
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, MapPin, Phone, Twitter, Linkedin, Facebook } from "lucide-react";
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function ContactPage() {
  const mapImage = getImage("map-image");
  const faqs = [
    {
      question: "What is the duration of the courses?",
      answer:
        "Our courses range from 10 to 24 weeks, depending on the program. Each course page has specific details on duration and learning hours.",
    },
    {
      question: "Do you offer job placement assistance?",
      answer:
        "Yes, we offer comprehensive career assistance, including resume workshops, mock interviews, and placement support from day one.",
    },
    {
      question: "Are there any prerequisites for enrolling in a course?",
      answer:
        "Prerequisites vary by course. Most of our beginner-friendly courses do not require prior experience, while advanced programs may have specific requirements. Please check the individual course pages for details.",
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer:
        "We offer a satisfaction guarantee. Please refer to our terms and conditions for details on our refund policy.",
    },
  ];

  const socialLinks = [
    { icon: <Twitter className="h-6 w-6" />, href: "#" },
    { icon: <Linkedin className="h-6 w-6" />, href: "#" },
    { icon: <Facebook className="h-6 w-6" />, href: "#" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          We'd love to hear from you. Reach out with any questions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.491382496154!2d78.39339931487702!3d17.43633198804928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93d5f6e80b2f%3A0xbd36de45b37654f5!2sCapital%20Park!5e0!3m2!1sen!2sin!4v1724089858597!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Mathisi Academy</h3>
                  <p className="text-muted-foreground">
                    Capital Park, Image Garden Road, Madhapur, Hyderabad, Telangana 500081
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Email Us</h3>
                  <p className="text-muted-foreground">
                    akshjavahub@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">Call Us</h3>
                  <p className="text-muted-foreground">+91 90149 85626</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <section className="mt-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Find quick answers to common questions.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <section className="mt-20 border-t pt-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Follow Us</h2>
          <p className="mt-2 text-muted-foreground">
            Stay up to date with our latest news and offers.
          </p>
          <div className="mt-6 flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
