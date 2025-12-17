
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Course } from "@/lib/courses";
import { courses } from "@/lib/courses";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Star, Users, Award, Calendar, Newspaper, FileText, ChevronRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getLogoById } from "@/lib/logos";

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const getCourseFromSlug = (slug: string): Course | undefined => {
  return courses.find((course) => course.slug === slug);
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseFromSlug(params.slug);

  if (!course) {
    notFound();
  }
  
  const courseImage = getImage(course.imageId);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <header className="relative bg-card py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="text-center md:text-left">
              <Badge variant="secondary" className="mb-4">{course.category}</Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                {course.name}
              </h1>
              <p className="mb-6 text-lg text-muted-foreground md:text-xl">{course.tagline}</p>
              <p className="mb-8 font-semibold text-primary">
                Join {course.enrolledStudents.toLocaleString()}+ Students Already Enrolled
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Button size="lg">Request a Call Back</Button>
                <Button size="lg" variant="outline">
                   <Newspaper className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>
            </div>
             <div className="hidden md:block">
               {courseImage && (
                <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={courseImage.imageUrl}
                    alt={course.name}
                    data-ai-hint={courseImage.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
       {/* Quick Info Bar */}
      <section className="border-b bg-secondary">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-8 text-center md:grid-cols-3">
          <div className="flex items-center justify-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{course.enrolledStudents.toLocaleString()}+</p>
              <p className="text-sm text-muted-foreground">Students Enrolled</p>
            </div>
          </div>
           <div className="flex items-center justify-center gap-4">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{course.duration}</p>
              <p className="text-sm text-muted-foreground">Course Duration</p>
            </div>
          </div>
           <div className="flex items-center justify-center gap-4">
            <Briefcase className="h-8 w-8 text-primary" />
            <div>
              <p className="text-2xl font-bold">{course.learningHours}</p>
              <p className="text-sm text-muted-foreground">Learning Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
           {/* Highlights */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Program Highlights</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
            </div>
             <Button className="mt-8">Join the Next Batch <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </section>

          {/* Batch Details */}
          <section className="mb-12 rounded-lg border bg-card p-6">
             <h2 className="mb-6 text-3xl font-bold">Batch Details</h2>
             <div className="space-y-4">
                {course.batchDetails.map((batch, index) => (
                    <div key={index} className="grid items-center gap-4 rounded-md border p-4 md:grid-cols-3">
                        <div>
                            <p className="font-semibold">{batch.name}</p>
                            <p className="text-sm text-muted-foreground">Online</p>
                        </div>
                        <div className="flex items-center gap-2">
                           <Calendar className="h-5 w-5 text-primary" />
                           <span>{batch.startDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-primary" />
                            <span>{batch.timings}</span>
                        </div>
                    </div>
                ))}
             </div>
             <p className="mt-4 text-sm text-primary">Limited seats available. Early enrollments get exclusive bonuses!</p>
             <Button variant="secondary" className="mt-6">Reserve Your Spot <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </section>

          {/* Tools */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Tools & Technologies Covered</h2>
            <div className="flex flex-wrap gap-3">
              {course.tools.map((tool, index) => (
                 <Badge key={index} variant="outline" className="px-4 py-2 text-sm">{tool}</Badge>
              ))}
            </div>
            <Button variant="link" className="mt-6 px-0">Explore Full Curriculum <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </section>
          
          {/* Learning Path */}
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Your Learning Path</h2>
            <div className="relative space-y-8 border-l-2 border-primary/20 pl-8">
              {course.learningPath.map((step, index) => (
                <div key={index} className="relative">
                   <div className="absolute -left-[42px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-1 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
             <Button variant="link" className="mt-6 px-0">Download Learning Path <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </section>

           {/* Recruiters */}
          <section className="mb-12">
             <h2 className="mb-6 text-3xl font-bold">Our Top Recruiters</h2>
             <p className="mb-6 text-muted-foreground">Learners from Quantum Leap Academy have been placed at:</p>
             <div className="flex flex-wrap items-center gap-4">
                 {course.recruiters.slice(0,10).map((recruiterId) => {
                     const logoName = recruiterId.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
                     const companyLogo = getLogoById(`logo-${logoName}`);
                     return (
                         <div key={recruiterId} className="flex h-10 items-center justify-center rounded-md border bg-card p-4 transition-shadow hover:shadow-md" title={recruiterId}>
                             {companyLogo ? (
                                <Image
                                    src={companyLogo.imageUrl}
                                    alt={recruiterId}
                                    width={80}
                                    height={20}
                                    className="object-contain"
                                    data-ai-hint={companyLogo.imageHint}
                                />
                             ) : <span className="text-sm font-semibold">{recruiterId}</span>}
                         </div>
                     )
                 })}
             </div>
             <Button variant="link" className="mt-6 px-0">View All Placement Partners <ChevronRight className="ml-2 h-4 w-4" /></Button>
          </section>

          {/* Reviews */}
           <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">Hear From Our Learners</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {course.reviews.map((review, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardContent className="flex-grow p-6">
                      <div className="mb-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`} />
                        ))}
                      </div>
                      <blockquote className="italic text-muted-foreground">
                        &quot;{review.text}&quot;
                      </blockquote>
                    </CardContent>
                     <CardHeader className="flex-row items-center gap-4 border-t bg-secondary/50 pt-6">
                        <div>
                          <CardTitle className="text-base">{review.author}</CardTitle>
                          <CardDescription>{review.role}</CardDescription>
                        </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <Button variant="link" className="mt-6 px-0">Read All Reviews <ChevronRight className="ml-2 h-4 w-4" /></Button>
            </section>
        </div>

        {/* Sticky Sidebar */}
        <aside className="space-y-8 self-start lg:col-span-1 sticky top-24">
          <Card className="shadow-lg">
             <CardHeader>
                <CardTitle>Submit Inquiry</CardTitle>
                <CardDescription>Have questions? We're here to help.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                   <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                   <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Your Phone Number" />
                  </div>
                   <div>
                    <Label htmlFor="course">Select Course</Label>
                     <Select defaultValue={course.slug}>
                      <SelectTrigger id="course">
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map(c => <SelectItem key={c.slug} value={c.slug}>{c.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                   <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your question..." />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Inquiry <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
          </Card>
        </aside>
      </div>

       {/* Final CTA */}
       <section className="border-t bg-card py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-lg text-muted-foreground">Enroll today and take the first step towards your dream career.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Request a Call Back</Button>
            <Button size="lg" variant="secondary">
              <Newspaper className="mr-2 h-5 w-5" />
              Download Brochure
            </Button>
             <Button size="lg" variant="outline">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

    