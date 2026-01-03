
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Award,
  TrendingUp,
  Building2,
  Users,
  Briefcase,
  Star,
  CheckCircle2,
  ArrowRight,
  Database,
  BarChart3,
  Cpu,
  ShieldCheck,
  Code2,
  ChevronRight,
  Quote
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { logos } from '@/lib/logos';

const formSchema = z.object({
  companyName: z.string().min(2, 'Company name is too short'),
  contactName: z.string().min(2, 'Contact name is too short'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  roleToHire: z.string().min(2, 'Please specify the role'),
  positions: z.string().min(1, 'Please specify the number of positions'),
  requirements: z.string().min(10, 'Please describe your requirements'),
});

export default function HirePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      roleToHire: '',
      positions: '',
      requirements: ''
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.contactName,
          email: values.email,
          whatsapp: values.phone,
          inquiryType: "Hiring Partner Inquiry",
          message: `Company: ${values.companyName}\nRole: ${values.roleToHire}\nPositions: ${values.positions}\nRequirements: ${values.requirements}`,
          // We can map fields to the generic message or update API to handle more fields.
          // For now, packing details into message is safe and robust.
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: 'Inquiry Submitted!',
          description: 'Our talent acquisition team will reach out to you within 24 hours.',
        });
        form.reset();
      } else {
        toast({
          title: 'Submission Failed',
          description: data.error || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to connect to the server.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const careersStats = [
    { icon: <Users className="h-6 w-6" />, value: '4,500+', label: 'Careers Launched' },
    { icon: <Building2 className="h-6 w-6" />, value: '200+', label: 'Hiring Partners' },
    { icon: <Award className="h-6 w-6" />, value: 'Practical', label: 'Industry Training' },
    { icon: <TrendingUp className="h-6 w-6" />, value: 'Zero', label: 'Hiring Cost' },
  ];

  const disciplines = [
    { icon: <Database className="h-8 w-8 text-blue-500" />, name: 'Data Science & Analytics' },
    { icon: <BarChart3 className="h-8 w-8 text-indigo-500" />, name: 'Business Analytics' },
    { icon: <Cpu className="h-8 w-8 text-purple-500" />, name: 'AI & Machine Learning' },
    { icon: <Code2 className="h-8 w-8 text-emerald-500" />, name: 'Data Engineering' },
    { icon: <ShieldCheck className="h-8 w-8 text-orange-500" />, name: 'Cybersecurity' },
    { icon: <Code2 className="h-8 w-8 text-yellow-500" />, name: 'Python Development' },
  ];

  const alumni = [
    { name: 'Aisha', role: 'Data Analyst', company: 'Oracle', story: 'Aisha mastered Python and SQL with us and joined Oracle as a Data Analyst.' },
    { name: 'Rohit', role: 'Full-Stack Developer', company: 'Wipro', story: 'Rohit focused on MERN stack and secured a developmental role at Wipro.' },
    { name: 'Meera', role: 'ML Engineer', company: 'Salesforce', story: 'Meera specialized in Computer Vision and joined Salesforce as an AI Engineer.' },
  ];

  const testimonials = [
    {
      stars: 5,
      content: "Exceptional talent pool! Candidates were well-trained and project-ready.",
      author: "HR Manager",
      company: "Deloitte"
    },
    {
      stars: 4,
      content: "Quick hiring process and great support from the team.",
      author: "Tech Recruiter",
      company: "Salesforce"
    },
    {
      stars: 5,
      content: "The candidates fit perfectly into our tech stack — highly recommended.",
      author: "Engineering Lead",
      company: "Cisco"
    }
  ];



  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 py-20 text-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -right-20 -bottom-20 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-5xl">
          <Badge variant="outline" className="mb-6 border-primary/50 bg-primary/10 px-4 py-1 text-primary backdrop-blur-sm">
            Mathisi School • Talent Partner
          </Badge>
          <h1 className="mb-8 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-sm sm:text-7xl">
            Build Your Tech Team with <br className="hidden md:block" />
            <span className="text-white">Pre-Trained, Job-Ready Talent</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
            Professionals trained in real-world technologies, equipped with practical experience and ready to contribute to your projects from day one.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 px-8 text-lg font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105" asChild>
              <Link href="#inquiry-form">
                Start Hiring Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-14 border-slate-700 bg-slate-900/50 px-8 text-lg font-semibold text-white backdrop-blur-sm hover:bg-slate-800" asChild>
              <Link href="/courses">Explore Training Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hiring Partners Section */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-[0.2em]">
              Trusted by leading IT companies and fast-growing startups
            </h3>
          </div>
          <div className="group relative flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex animate-infinite-scroll-slow gap-16 group-hover:[animation-play-state:paused] items-center">
              {[...logos, ...logos].map((logo, idx) => (
                <div key={`${logo.id}-landing-${idx}`} className="flex shrink-0 items-center justify-center w-[160px] h-20 transition-all duration-300 hover:scale-110">
                  <Image
                    src={logo.imageUrl}
                    alt={logo.description}
                    width={140}
                    height={60}
                    className="max-h-12 w-auto max-w-[140px] object-contain"
                    data-ai-hint={logo.imageHint}
                  />
                </div>
              ))}
              {/* Text logos from landing page style */}
              {['Amazon', 'TCS', 'Accenture', 'Infosys', 'Flipkart', 'Zoho'].map((name, idx) => (
                <div key={`text-logo-${idx}`} className="flex shrink-0 items-center justify-center w-[160px] h-20 transition-all duration-300 hover:scale-110">
                  <span className="text-2xl font-black tracking-tight text-slate-700">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Careers Made Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Careers Made</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Empowering skilled professionals to unlock career opportunities across top tech companies.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careersStats.map((stat, idx) => (
              <Card key={idx} className="group relative overflow-hidden border-slate-200 transition-all hover:border-primary/50 hover:shadow-xl dark:border-slate-800">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-4 rounded-2xl bg-primary/10 p-4 text-primary transition-transform group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold tracking-tight">{stat.value}</div>
                  <div className="mt-2 font-medium text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highest Package Section */}
      <section className="relative overflow-hidden bg-primary py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white opacity-20 blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-indigo-200 opacity-20 blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="mb-4 text-2xl font-semibold uppercase tracking-widest opacity-80">Highest Package Secured</h2>
          <div className="mb-8 text-6xl font-black tracking-tighter sm:text-8xl">₹ 42,00,000 LPA</div>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <CheckCircle2 className="mb-3 h-8 w-8" />
              <span className="text-xl font-bold">Top Performers Placed</span>
              <span className="text-indigo-100 italic">Global MNCs & Leaders</span>
            </div>
            <div className="flex flex-col items-center border-white/20 md:border-x">
              <TrendingUp className="mb-3 h-8 w-8" />
              <span className="text-xl font-bold">Average Salary Growth</span>
              <span className="text-indigo-100 italic">75% Post-Training Hike</span>
            </div>
            <div className="flex flex-col items-center">
              <Star className="mb-3 h-8 w-8" />
              <span className="text-xl font-bold">Industry Ready</span>
              <span className="text-indigo-100 italic">Proven Skill Validation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Alumni Section */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Meet Our Alumni</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Professionals trained with us are now leading tech innovations at:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-8 opacity-60 grayscale filter">
              {['Oracle', 'Salesforce', 'Cisco', 'Deloitte', 'HP', 'IBM', 'Wipro'].map(name => (
                <span key={name} className="text-lg font-bold tracking-tighter">{name}</span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {alumni.map((person, idx) => {
              const logoUrl = logos.find(p => p.description.includes(person.company))?.imageUrl;
              return (
                <Card key={idx} className="bg-background transition-all hover:-translate-y-2 hover:shadow-xl">
                  <CardContent className="p-8">
                    <Quote className="mb-4 h-8 w-8 text-primary/20" />
                    <p className="mb-6 italic text-muted-foreground">{person.story}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                        {person.name[0]}
                      </div>
                      <div>
                        <div className="font-bold">{person.name}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-primary font-medium">{person.role} at</span>
                          {logoUrl ? (
                            <img src={logoUrl} alt={person.company} className="h-5 w-auto object-contain" />
                          ) : (
                            <span className="text-sm font-bold">{person.company}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Disciplines Section - (Keeping as is, just context for replace) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Find Deployment-Ready Talent</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hire experts in the most in-demand technological domains
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((disc, idx) => (
              <div key={idx} className="group flex items-center gap-6 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:border-primary/20 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
                <div className="rounded-xl bg-white p-3 shadow-sm dark:bg-slate-800 group-hover:bg-primary group-hover:text-white transition-colors">
                  {disc.icon}
                </div>
                <div className="text-lg font-bold">{disc.name}</div>
                <ChevronRight className="ml-auto h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" variant="link" className="text-lg" asChild>
              <Link href="#inquiry-form">See all specializations <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recruiters Feedback Section */}
      <section className="bg-slate-950 py-24 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold">Hear From Our Recruiters</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t, idx) => {
              const logoUrl = logos.find(p => p.description.includes(t.company))?.imageUrl;
              return (
                <div key={idx} className="flex flex-col rounded-3xl bg-slate-900 p-8 border border-white/5 transition-colors hover:border-primary/20">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < t.stars ? 'fill-yellow-500 text-yellow-500' : 'text-slate-700'}`} />
                    ))}
                  </div>
                  <p className="mb-8 text-lg text-slate-300">“{t.content}”</p>
                  <div className="mt-auto flex items-center gap-4">
                    <div className="h-0.5 w-8 bg-primary" />
                    <div>
                      <div className="font-bold">{t.author}</div>
                      {logoUrl ? (
                        <div className="mt-1 h-6 relative w-24">
                          {/* Using standard img tag for simplicity within this context as Next Image might require width/height or fill wrapping */}
                          <img src={logoUrl} alt={t.company} className="h-full w-auto object-contain brightness-0 invert opacity-70" />
                        </div>
                      ) : (
                        <div className="text-sm text-slate-500">{t.company}</div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Hire From Us</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Looking for the right talent to take your tech team to the next level? Fill out the form, and our recruitment team will get in touch with you to understand your requirements.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Zero Hiring Cost</h4>
                    <p className="text-muted-foreground">No placement fees or hidden charges for our hiring partners.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Pre-Vetted Profiles</h4>
                    <p className="text-muted-foreground">Every candidate goes through rigorous technical and behavioral assessments.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">Immediate Joining</h4>
                    <p className="text-muted-foreground">Our talent is ready to join and start contributing immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-slate-100 shadow-2xl shadow-primary/5 dark:border-slate-800">
              <CardHeader className="p-8">
                <CardTitle className="text-2xl">Partner Inquiry Form</CardTitle>
                <CardDescription>
                  Tell us about your hiring needs and we'll find the perfect match.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField control={form.control} name="companyName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl><Input placeholder="e.g. Google" {...field} className="h-12" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="contactName" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl><Input placeholder="John Doe" {...field} className="h-12" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl><Input type="email" placeholder="john@company.com" {...field} className="h-12" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl><Input type="tel" placeholder="+91 98765 43210" {...field} className="h-12" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField control={form.control} name="roleToHire" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Role You Want to Hire For</FormLabel>
                          <FormControl><Input placeholder="e.g. Data Analyst" {...field} className="h-12" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="positions" render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Positions</FormLabel>
                          <FormControl><Input type="number" placeholder="5" {...field} className="h-12" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="requirements" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message / Requirements</FormLabel>
                        <FormControl><Textarea rows={4} placeholder="Briefly describe your requirements..." {...field} className="resize-none" /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" disabled={isSubmitting} className="h-12 w-full text-lg font-bold">
                      {isSubmitting ? 'Submitting...' : 'Submit Inquiry'} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-24 dark:bg-slate-900/50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold sm:text-5xl">Ready to Scale Your Team?</h2>
          <p className="mb-10 text-xl text-muted-foreground">
            Join 200+ companies already hiring from Mathisi School.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl font-bold shadow-xl" asChild>
            <Link href="#inquiry-form">Start Hiring Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
