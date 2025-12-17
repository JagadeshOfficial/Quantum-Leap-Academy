
import Link from "next/link";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";
import { courses } from "@/lib/courses";
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, ArrowRight } from "lucide-react";

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Our Courses
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find the perfect program to launch or advance your career in tech.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course: Course) => {
          const courseImage = getImage(course.imageId);
          return (
            <Card
              key={course.slug}
              className="group flex flex-col overflow-hidden rounded-lg border shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-48 w-full">
                {courseImage && (
                  <Image
                    src={courseImage.imageUrl}
                    alt={course.name}
                    data-ai-hint={courseImage.imageHint}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute top-4 right-4">
                   <Badge variant="secondary">{course.category}</Badge>
                </div>
              </div>
              <CardContent className="flex flex-grow flex-col p-6">
                <h3 className="text-xl font-bold">{course.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{course.tagline}</p>

                <div className="my-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{course.enrolledStudents.toLocaleString()}+ Enrolled</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        <span>{course.rating} ({course.reviews.length} reviews)</span>
                    </div>
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div className="font-semibold">
                      <Button variant="link" asChild className="p-0">
                          <Link href={`/courses/${course.slug}`}>
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                      </Button>
                    </div>
                    <Button asChild>
                        <Link href={`/courses/${course.slug}#enroll`}>Enroll Now</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
