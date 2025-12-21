
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { CheckCircle, Lightbulb, Users, Handshake, Loader2 } from 'lucide-react';

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const formSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  linkedin: z.string().url('Please enter a valid LinkedIn URL'),
  expertise: z.string().min(10, 'Please describe your expertise'),
});

export default function TeachPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const heroImage = getImage('instructor-bg-1');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', linkedin: '', expertise: '' },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(values);
    setIsSubmitting(false);
    form.reset();
    toast({
      title: 'Application Sent!',
      description: "Thank you for your interest. We'll be in touch soon.",
    });
  };

  const benefits = [
    { icon: <Users className="h-8 w-8 text-primary" />, title: 'Inspire Learners', description: 'Shape the next generation of tech talent.' },
    { icon: <Handshake className="h-8 w-8 text-primary" />, title: 'Industry Impact', description: 'Share your real-world expertise and knowledge.' },
    { icon: <Lightbulb className="h-8 w-8 text-primary" />, title: 'Flexible Partnership', description: 'Collaborate on a schedule that works for you.' },
    { icon: <CheckCircle className="h-8 w-8 text-primary" />, title: 'Competitive Compensation', description: 'Get rewarded for your valuable time and skills.' },
  ];

  return (
    <div>
      <section className="relative h-72 w-full bg-card">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Teach with us"
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
              Teach with QuantumPod Technologies
            </h1>
            <p className="mt-4 text-lg drop-shadow md:text-xl">
              Become a mentor and share your passion with the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Why Partner with Us?</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Join a community dedicated to excellence in tech education.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">Share Your Expertise</h2>
            <p className="mt-4 text-muted-foreground">
              We are looking for passionate industry professionals with expertise in:
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-6 text-muted-foreground">
              <li>Data Science &amp; Analytics</li>
              <li>Artificial Intelligence &amp; Machine Learning</li>
              <li>Quantum Computing &amp; Emerging Technologies</li>
              <li>Cybersecurity &amp; Ethical Hacking</li>
              <li>Data Engineering &amp; Cloud Architecture</li>
              <li>And other cutting-edge domains...</li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              If you are a practitioner with a knack for teaching and a desire to mentor,
              we would love to hear from you.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Become an Instructor</CardTitle>
              <CardDescription>
                Fill out the form below to start the conversation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl><Input type="email" placeholder="your.email@example.com" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="linkedin" render={({ field }) => (
                    <FormItem>
                      <FormLabel>LinkedIn Profile</FormLabel>
                      <FormControl><Input placeholder="https://linkedin.com/in/yourprofile" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="expertise" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area of Expertise</FormLabel>
                      <FormControl><Textarea rows={4} placeholder="Briefly describe your skills and experience..." {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Submit Application
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
