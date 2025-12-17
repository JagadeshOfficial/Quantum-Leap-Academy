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
import { CheckCircle, Clock, Star, Users, Briefcase } from "lucide-react";

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

  return (
    <div className="bg-background">
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <Badge variant="secondary">{course.category}</Badge>
              <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                {course.name}
              </h1>
              <p className="text-xl text-muted-foreground">{course.tagline}</p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
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
                  <span className="text-sm text-muted-foreground">
                    students enrolled
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button size="lg">Request a Call Back</Button>
                <Button size="lg" variant="outline">
                  Download Brochure
                </Button>
              </div>
            </div>
            <Card className="p-6 shadow-xl">
              <CardHeader>
                <CardTitle>Inquire Now</CardTitle>
                <CardDescription>
                  Get more details about the program.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Phone" />
                  <Textarea placeholder="Message" />
                  <Button type="submit" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div className="flex items-center justify-center gap-4">
              <Users className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">
                  {course.enrolledStudents.toLocaleString()}+
                </p>
                <p className="text-muted-foreground">Students Enrolled</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">{course.duration}</p>
                <p className="text-muted-foreground">Course Duration</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold">{course.learningHours}</p>
                <p className="text-muted-foreground">Learning Hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">Program Highlights</h2>
              <ul className="space-y-4">
                {course.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-500" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">
                Tools & Technologies Covered
              </h2>
              <div className="flex flex-wrap gap-2">
                {course.tools.map((tool, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="px-3 py-1 text-sm"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-3xl font-bold">Your Learning Path</h2>
              <div className="relative space-y-8">
                <div className="absolute top-0 left-3 -z-10 h-full w-0.5 bg-border"></div>
                {course.learningPath.map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <aside className="space-y-8 self-start lg:col-span-1 sticky top-24">
            <Card>
              <CardHeader>
                <CardTitle>Batch Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {course.batchDetails.map((batch, index) => (
                  <div key={index} className="text-sm">
                    <p className="font-semibold">{batch.name}</p>
                    <p className="text-muted-foreground">
                      Starts: {batch.startDate}
                    </p>
                    <p className="text-muted-foreground">
                      Timings: {batch.timings}
                    </p>
                  </div>
                ))}
                <Button className="mt-4 w-full">Reserve Your Spot</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Top Recruiters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {course.recruiters.map((recruiter, index) => (
                    <Badge key={index} variant="outline">
                      {recruiter}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        <section className="rounded-lg bg-card py-16">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Student Reviews</h2>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            {course.reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-2 flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="italic text-muted-foreground">
                    &quot;{review.text}&quot;
                  </blockquote>
                  <p className="mt-4 text-right font-semibold">
                    — {review.author},{" "}
                    <span className="font-normal text-muted-foreground">
                      {review.role}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Upskill?</h2>
          <div className="flex justify-center gap-4">
            <Button size="lg">Enroll Now</Button>
            <Button size="lg" variant="outline">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
