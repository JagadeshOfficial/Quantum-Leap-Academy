import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/courses";
import { courses } from "@/lib/courses";
import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

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

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course: Course) => {
          const courseImage = getImage(course.imageId);
          return (
            <Card
              key={course.slug}
              className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl"
            >
              {courseImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={courseImage.imageUrl}
                    alt={course.name}
                    data-ai-hint={courseImage.imageHint}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <CardContent className="flex flex-grow flex-col p-6">
                <h3 className="text-xl font-bold">{course.name}</h3>
                <div className="mt-4 flex-grow space-y-3 text-sm text-muted-foreground">
                  <p>{course.duration}</p>
                  <div className="flex items-center">
                    <span className="font-semibold">{course.rating}</span>
                    <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2">
                      ({course.reviews.length}K+ Students)
                    </span>
                  </div>
                  <Badge variant="secondary">DEDICATED CAREER SUPPORT</Badge>
                  <p>{course.enrolledStudents}+ students enrolled</p>
                </div>
                <div className="mt-6 flex gap-4">
                  <Button variant="outline" className="w-full">
                    Brochure
                  </Button>
                  <Button asChild className="w-full">
                    <Link href={`/courses/${course.slug}`}>View Course</Link>
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
