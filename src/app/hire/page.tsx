
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Award, TrendingUp, Building, BrainCircuit, Loader2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { logos } from '@/lib/logos';

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const formSchema = z.object({
  companyName: z.string().min(2, 'Company name is too short'),
  contactName: z.string().min(2, 'Contact name is too short'),
  email: z.string().email('Invalid email address'),
  roles: z.string().min(10, 'Please describe the roles you are hiring for'),
});

export default function HirePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const heroImage = getImage('benefits-image');
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { companyName: '', contactName: '', email: '', roles: '' },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    form.reset();
    toast({
      title: 'Request Received!',
      description: 'Our partnerships team will get in touch with you shortly.',
    });
  };

  const stats = [
    { icon: <Award className="h-10 w-10 text-primary" />, value: '95%', label: 'Placement Rate' },
    { icon: <TrendingUp className="h-10 w-10 text-primary" />, value: '55%', label: 'Average Salary Hike' },
    { icon: <Building className="h-10 w-10 text-primary" />, value: '300+', label: 'Hiring Partners' },
    { icon: <BrainCircuit className="h-10 w-10 text-primary" />, value: 'AI-Powered', label: 'Screening' },
  ];

  return (
    <div>
      <section className="relative h-72 w-full bg-card">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Hire from us"
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto flex h-full items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md md:text-6xl">
              Hire Top Tech Talent
            </h1>
            <p className="mt-4 text-lg drop-shadow md:text-xl">
              Access a pool of job-ready candidates trained for the future.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Our Graduates Get Results</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              We train professionals who make an immediate impact.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                {stat.icon}
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
            <h2 className="mb-2 text-3xl font-bold">
                Trusted by Industry Leaders
            </h2>
            <p className="mb-8 text-muted-foreground">
                Our learners are hired by the best in the industry.
            </p>
            <div
                className="group relative flex gap-12 overflow-hidden"
                style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                }}
            >
                <div className="flex animate-infinite-scroll-slow flex-shrink-0 gap-12 group-hover:[animation-play-state:paused]">
                    {[...logos, ...logos].map((logo, index) => (
                      <div key={`${logo.id}-marquee-hire-${index}`} className="flex h-10 items-center justify-center" title={logo.description.replace(' Logo', '')}>
                          <Image
                              src={logo.imageUrl}
                              alt={logo.description}
                              width={100}
                              height={40}
                              className="object-contain"
                              data-ai-hint={logo.imageHint}
                          />
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Partner with Us</h2>
            <p className="mt-4 text-muted-foreground">
              Gain access to a curated pool of talent equipped with the most in-demand skills in data science, AI, cybersecurity, and more. Our rigorous, project-based curriculum ensures our graduates are not just certified, but job-ready from day one.
            </p>
            <p className="mt-4 font-semibold">Our hiring partnership is simple and free:</p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Get access to our talent pool.</li>
              <li>We pre-screen candidates based on your needs.</li>
              <li>Host exclusive hiring drives or webinars.</li>
              <li>Collaborate on curriculum to meet your specific needs.</li>
            </ul>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Connect with our Talent Pool</CardTitle>
              <CardDescription>
                Fill out the form to start hiring from QuantumPod Technologies.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                   <FormField control={form.control} name="companyName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl><Input placeholder="Your Company" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                   <FormField control={form.control} name="contactName" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Work Email Address</FormLabel>
                      <FormControl><Input type="email" placeholder="work.email@company.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="roles" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roles You're Hiring For</FormLabel>
                      <FormControl><Textarea rows={4} placeholder="e.g., Data Analysts, AI Engineers..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit Inquiry
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
