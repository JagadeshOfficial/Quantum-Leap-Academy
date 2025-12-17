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
              <CardHeader>
                <CardTitle>{course.name}</CardTitle>
                <CardDescription>{course.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col justify-end">
                <Button asChild className="mt-4 w-full">
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
