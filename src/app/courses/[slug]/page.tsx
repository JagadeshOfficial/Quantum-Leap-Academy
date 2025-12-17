
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
import { CheckCircle, Clock, Star, Users, Briefcase, Award, GraduationCap, Target, Calendar, MessageSquare, Newspaper, FileText } from "lucide-react";

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
      <header className="bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Badge variant="secondary" className="mb-4">{course.category}</Badge>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
                {course.name}
              </h1>
              <p className="mb-6 text-xl text-muted-foreground">{course.tagline}</p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center space-x-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({course.reviews.length} reviews)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold">
                    {course.enrolledStudents.toLocaleString()}+
                  </span>
                   <span className="text-sm text-muted-foreground">Enrolled</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                   <span className="font-semibold">
                    {course.duration}
                  </span>
                </div>
              </div>
            </div>
             <div className="hidden md:block">
               {courseImage && (
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
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

      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Program Highlights</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Tools & Technologies You'll Master</h2>
            <div className="flex flex-wrap gap-4">
              {course.tools.map((tool, index) => (
                 <div key={index} className="flex items-center gap-2 rounded-lg border bg-card p-2">
                   {/* Placeholder for tool icon, you can map tool names to actual icons */}
                   <GraduationCap className="h-6 w-6 text-muted-foreground" />
                   <span className="font-medium">{tool}</span>
                 </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold">Your Learning Path</h2>
            <div className="relative space-y-8">
              <div className="absolute top-0 left-4 h-full w-0.5 bg-border" />
              {course.learningPath.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6 pl-12">
                   <div className="absolute top-1 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-1 text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

           <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">Hear From Our Learners</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {course.reviews.map((review, index) => (
                  <Card key={index} className="flex flex-col">
                    <CardContent className="flex-grow p-6">
                      <div className="mb-4 flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="italic text-muted-foreground">
                        &quot;{review.text}&quot;
                      </blockquote>
                    </CardContent>
                     <CardHeader className="flex-row items-center gap-4 border-t pt-6">
                        {/* You can add student images here if available */}
                        <div>
                          <CardTitle className="text-base">{review.author}</CardTitle>
                          <CardDescription>{review.role}</CardDescription>
                        </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
        </div>

        <aside className="space-y-8 self-start lg:col-span-1 sticky top-24">
          <Card>
            <CardHeader>
              <CardTitle>Next Batch Starts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {course.batchDetails.map((batch, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{batch.startDate}</span>
                  </div>
                   <div className="mt-2 flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{batch.timings} ({batch.name})</span>
                  </div>
                </div>
              ))}
              <Button className="mt-4 w-full">Reserve Your Spot</Button>
            </CardContent>
          </Card>
          
          <Card>
             <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Phone" />
                  <Textarea placeholder="Your question..." />
                  <Button type="submit" className="w-full">
                    Request a Callback
                  </Button>
                </form>
              </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Hiring Partners</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {course.recruiters.map((recruiter, index) => (
                  <Badge key={index} variant="secondary">{recruiter}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
           <Card>
            <CardContent className="p-6 space-y-4">
               <div className="flex items-center gap-3">
                 <Newspaper className="h-6 w-6 text-primary"/>
                 <Button variant="link" className="p-0">Download Brochure</Button>
               </div>
                <div className="flex items-center gap-3">
                 <FileText className="h-6 w-6 text-primary"/>
                 <Button variant="link" className="p-0">View Program Curriculum</Button>
               </div>
            </CardContent>
           </Card>
        </aside>
      </div>

       <section className="border-t bg-card py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-lg text-muted-foreground">Enroll today and take the first step towards your dream career.</p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Enroll Now</Button>
            <Button size="lg" variant="outline">
              Talk to an Advisor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
