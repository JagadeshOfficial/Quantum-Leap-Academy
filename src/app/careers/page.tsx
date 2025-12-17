'use client';

import { useState } from 'react';
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
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Briefcase, Code, Megaphone, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
};

const jobOpenings = {
  Engineering: [
    {
      title: 'Senior AI/ML Engineer',
      location: 'Hyderabad (Hybrid)',
      type: 'Full-time',
    },
    {
      title: 'Frontend Developer (React)',
      location: 'Remote',
      type: 'Full-time',
    },
  ],
  'Academics & Mentorship': [
    {
      title: 'Lead Data Science Instructor',
      location: 'Hyderabad (On-site)',
      type: 'Full-time',
    },
    {
      title: 'Cybersecurity Mentor (Part-time)',
      location: 'Remote',
      type: 'Contract',
    },
  ],
  'Marketing & Sales': [
    {
      title: 'Digital Marketing Manager',
      location: 'Hyderabad',
      type: 'Full-time',
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
    description: 'Join a passionate team that loves to innovate and collaborate.',
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: 'Impactful Work',
    description:
      'Your work directly empowers thousands of learners to achieve their dreams.',
  },
  {
    icon: <Megaphone className="h-8 w-8 text-primary" />,
    title: 'Great Benefits',
    description: 'Competitive salary, health insurance, and flexible work policies.',
  },
];

export default function CareersPage() {
  const heroImage = getImage('benefits-image');
  const [selectedJob, setSelectedJob] = useState('');

  const handleApplyClick = (title: string) => {
    setSelectedJob(title);
  };

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
              Why Work at Quantum Leap Academy?
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

          <Dialog>
            <div className="space-y-12">
              {Object.entries(jobOpenings).map(([department, jobs]) => (
                <div key={department}>
                  <h3 className="mb-6 text-2xl font-semibold">{department}</h3>
                  <div className="space-y-4">
                    {jobs.map(job => (
                      <Card
                        key={job.title}
                        className="group transition-shadow hover:shadow-lg"
                      >
                        <div className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <CardDescription className="mt-1">
                              {job.location} • {job.type}
                            </CardDescription>
                          </div>
                          <DialogTrigger asChild>
                            <Button
                              onClick={() => handleApplyClick(job.title)}
                              className="group-hover:bg-primary/90"
                            >
                              Apply Now{' '}
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </DialogTrigger>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Apply for: {selectedJob}</DialogTitle>
                <DialogDescription>
                  Submit your application by filling out the form below. We're
                  excited to hear from you!
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" placeholder="Your Name" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    className="col-span-3"
                  />
                </div>
                 <div className="grid grid-cols-4 items-start gap-4">
                  <Label htmlFor="message" className="text-right pt-2">
                    Message
                  </Label>
                   <Textarea id="message" placeholder="Tell us why you're a great fit..." className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Submit Application</Button>
              </DialogFooter>
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
