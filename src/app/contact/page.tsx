"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, MapPin, Phone, Twitter, Linkedin, Facebook, Loader2, CheckCircle2, Send, MessageSquare, ArrowRight } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact-submission";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("submitting");
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  }

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
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-24 pb-12 relative overflow-hidden">
      {/* Background Effects (Light Mode Advanced) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium mb-6 shadow-sm">
            <MessageSquare className="w-4 h-4" />
            <span>24/7 Support Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-900">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">Conversation</span>
          </h1>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Have questions about our AI courses? Need career guidance? We're here to help you navigate your future in tech.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start mb-20">
          {/* Left Column: Contact Form (Ceramic Glass Panel) */}
          <div className="lg:col-span-3 bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 md:p-10 shadow-2xl shadow-indigo-200/50 relative overflow-hidden group hover:shadow-indigo-300/40 transition-all duration-300">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-700"></div>

            <div className="relative z-10 w-full">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Send us a Message</h3>
              <p className="text-slate-500 mb-8">We usually respond within 2 hours.</p>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center animate-in fade-in zoom-in">
                  <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Received!</h3>
                  <p className="text-slate-600 mb-6">Thanks for reaching out. Check your email for a confirmation.</p>
                  <Button onClick={() => setStatus("idle")} variant="outline" className="border-slate-200 hover:bg-slate-50 text-slate-700">
                    Send Another
                  </Button>
                </div>
              ) : (
                <form action={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</Label>
                      <Input name="name" id="name" placeholder="John Doe" required className="bg-white border-slate-200 text-slate-900 h-12 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-300 shadow-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</Label>
                      <Input name="email" id="email" type="email" placeholder="john@company.com" required className="bg-white border-slate-200 text-slate-900 h-12 focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-300 shadow-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">Your Message</Label>
                    <Textarea name="message" id="message" placeholder="How can we help you today?" required className="bg-white border-slate-200 text-slate-900 min-h-[150px] focus:ring-indigo-500 focus:border-indigo-500 transition-all hover:border-indigo-300 resize-none p-4 shadow-sm" />
                  </div>
                  <Button disabled={status === "submitting"} type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold h-14 rounded-xl shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02] hover:shadow-indigo-600/30">
                    {status === "submitting" ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending Message...</>
                    ) : (
                      <><Send className="w-5 h-5 mr-2" /> Send Message Now</>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Info Cards (Floating Ceramic) */}
          <div className="lg:col-span-2 space-y-6">

            {/* Contact Info Card */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-200/40 transition-all group cursor-pointer">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-slate-900">Email Us</h3>
              <p className="text-slate-500 text-sm mb-4">For general inquiries and support.</p>
              <div className="space-y-1">
                <a href="mailto:info@mathisi.in" className="text-lg font-semibold text-slate-900 hover:text-indigo-600 transition-colors flex items-center group-hover:translate-x-1 duration-300">
                  info@mathisi.in
                </a>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <Button variant="outline" className="w-full justify-between group/btn" asChild>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfxQr-6UnZfJzrBSJgmPRbksKh7pVVBiuYaZ9aLfiZ0I5Klig/viewform?usp=sharing&ouid=107766999723966890966"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Direct Support Form <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Phone Info Card */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-purple-200/40 transition-all group cursor-pointer">
              <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-1 text-slate-900">Call Us</h3>
              <p className="text-slate-500 text-sm mb-4">Mon-Fri from 9am to 6pm.</p>
              <div className="space-y-1">
                <a href="tel:+917090000311" className="block text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors group-hover:translate-x-1 duration-300">
                  +91 709 0000 311
                </a>
                <a href="tel:+919880289192" className="block text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors group-hover:translate-x-1 duration-300">
                  +91 988 0289 192
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-pink-200/40 transition-all group">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">Visit HQ</h3>
                  <p className="text-slate-600 leading-relaxed text-sm mb-2">
                    Dex Co Work Space, 4th block, HBR Layout, 1st Stage, Bengaluru
                  </p>
                  <a href="https://www.mathisi.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-semibold hover:underline">
                    www.mathisi.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - Full Width */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl shadow-indigo-100 h-[400px] mb-20 relative group bg-white">
          <div className="absolute inset-0 bg-indigo-500/10 pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-500" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.95383214!2d77.6322!3d13.0185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAxJzA2LjYiTiA3N8KwMzcnNTUuOSJF!5e0!3m2!1sen!2sin!4v1724089858597"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          ></iframe>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border border-white/60 bg-white/60 px-6 rounded-xl data-[state=open]:bg-white/80 transition-all shadow-sm">
                <AccordionTrigger className="text-slate-900 hover:text-indigo-600 py-6 text-left text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-6 leading-relaxed text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Footer Socials */}
        <div className="mt-20 border-t border-slate-200 pt-10 text-center">
          <p className="text-slate-500 mb-6 font-medium">Connect with us on social media</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-all hover:bg-sky-500 hover:text-white hover:scale-110 shadow-sm"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-all hover:bg-blue-600 hover:text-white hover:scale-110 shadow-sm"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 transition-all hover:bg-blue-800 hover:text-white hover:scale-110 shadow-sm"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}
