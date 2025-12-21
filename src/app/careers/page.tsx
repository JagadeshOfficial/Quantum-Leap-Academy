
'use client';

import { useState, useRef } from 'react';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  ArrowRight,
  Briefcase,
  Code,
  Globe,
  Loader2,
  Megaphone,
  UploadCloud,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
};

const jobOpenings = {
  Engineering: [
    {
      title: 'Senior AI/ML Engineer',
      location: 'Hyderabad (Hybrid)',
      type: 'Full-time',
      description:
        'We are looking for an experienced AI/ML engineer to lead the development of our next-generation AI learning platform. You will work on building personalized learning paths, AI-driven assessment tools, and innovative features that enhance the student experience. Requires strong experience with Python, TensorFlow/PyTorch, and deploying models to production.',
    },
    {
      title: 'Frontend Developer (React)',
      location: 'Remote',
      type: 'Full-time',
      description:
        'Join our frontend team to build beautiful, intuitive, and high-performance user interfaces. You will be responsible for developing new features, maintaining our component library, and ensuring a seamless user experience across all devices. Strong proficiency in React, Next.js, and TypeScript is required.',
    },
  ],
  'Academics & Mentorship': [
    {
      title: 'Lead Data Science Instructor',
      location: 'Hyderabad (On-site)',
      type: 'Full-time',
      description:
        'As a Lead Data Science Instructor, you will be responsible for delivering our flagship Data Science program. This role involves teaching, curriculum development, and mentoring students to help them achieve their career goals. A passion for teaching and deep expertise in the data science ecosystem is a must.',
    },
    {
      title: 'Cybersecurity Mentor (Part-time)',
      location: 'Remote',
      type: 'Contract',
      description:
        'We are seeking industry experts to mentor our cybersecurity students. As a mentor, you will provide guidance, review projects, and share your real-world experience to help learners navigate the complexities of the cybersecurity landscape. Flexible, part-time hours.',
    },
  ],
  'Marketing & Sales': [
    {
      title: 'Digital Marketing Manager',
      location: 'Hyderabad',
      type: 'Full-time',
      description:
        "We're looking for a data-driven Digital Marketing Manager to lead our growth strategy. You will be responsible for SEO, SEM, content marketing, and social media campaigns to drive student enrollments and build our brand presence. Proven experience in a high-growth startup environment is a plus.",
    },
  ],
};

const benefits = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Growth Opportunities',
    description:
      'Fast-track your career with immense learning and leadership roles.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Vibrant Culture',
    description:
      'Join a passionate team that loves to innovate and collaborate.',
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Impactful Work',
    description:
      'Your work directly empowers thousands of learners to achieve their dreams.',
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: 'Global Impact',
    description: 'Competitive salary, health insurance, and flexible work policies.',
  },
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().optional(),
  resume: z
    .any()
    .refine(files => files?.length == 1, 'Resume is required.')
    .refine(
      files => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      files => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      '.pdf, .doc, and .docx files are accepted.'
    ),
});

export default function CareersPage() {
  const heroImage = getImage('benefits-image');
  const [selectedJob, setSelectedJob] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      resume: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log({ ...values, resume: values.resume[0].name });
    setIsSubmitting(false);
    setIsModalOpen(false);
    form.reset();
    toast({
      title: 'Application Submitted!',
      description: "We've received your application and will be in touch soon.",
    });
  };

  const handleApplyClick = (title: string) => {
    setSelectedJob(title);
    setIsModalOpen(true);
  };
  
  const resumeRef = form.register("resume");

  return (
    <div>
      <section className="relative h-72 w-full bg-card">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Join our team"
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
              Join Our Mission
            </h1>
            <p className="mt-4 text-lg drop-shadow md:text-xl">
              Shape the future of education and technology with us.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">
              Why Work at QuantumPod Technologies?
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              We're a team of innovators, educators, and dreamers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(benefit => (
              <Card key={benefit.title} className="p-6 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Current Openings</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Find a role where you can make a difference.
            </p>
          </div>

          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <div className="space-y-12">
              {Object.entries(jobOpenings).map(([department, jobs]) => (
                <div key={department}>
                  <h3 className="mb-6 text-2xl font-semibold">{department}</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {jobs.map(job => (
                      <AccordionItem value={job.title} key={job.title}>
                        <AccordionTrigger className="group rounded-lg px-4 text-left transition-colors hover:bg-card hover:no-underline">
                           <div className="flex w-full items-center justify-between">
                               <div>
                                <h4 className="text-xl font-semibold group-hover:text-primary">{job.title}</h4>
                                <p className="mt-1 text-sm text-muted-foreground">
                                  {job.location} • {job.type}
                                </p>
                              </div>
                              <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-data-[state=open]:rotate-90" />
                           </div>
                        </AccordionTrigger>
                        <AccordionContent className="border-t bg-card p-6">
                            <p className="mb-6 text-muted-foreground">{job.description}</p>
                            <DialogTrigger asChild>
                                <Button onClick={() => handleApplyClick(job.title)}>
                                Apply for this role
                                </Button>
                            </DialogTrigger>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Apply for: {selectedJob}</DialogTitle>
                <DialogDescription>
                  Submit your application by filling out the form below. We're
                  excited to hear from you!
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="Your Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us why you're a great fit..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                       <FormItem>
                        <FormLabel>Resume</FormLabel>
                        <FormControl>
                          <div
                            className="relative flex cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-input bg-background p-6 hover:border-primary"
                            onClick={() => fileInputRef.current?.click()}
                          >
                             <div className="text-center">
                               <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
                               <p className="mt-2 text-sm text-muted-foreground">
                                 {field.value?.[0]?.name ? (
                                    <span className="font-semibold text-primary">{field.value[0].name}</span>
                                 ) : 'Click to upload your resume'}
                               </p>
                               <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 5MB</p>
                            </div>
                            <Input
                              type="file"
                              className="hidden"
                              {...resumeRef}
                              ref={fileInputRef}
                              onChange={(event) => {
                                field.onChange(event.target.files);
                              }}
                            />
                           </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="secondary" disabled={isSubmitting}>
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit" disabled={isSubmitting}>
                       {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      Submit Application
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>

          <div className="mt-16 text-center text-muted-foreground">
            <p>
              Don't see a role that fits? We're always looking for talented
              people.
            </p>
            <Button variant="link" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
