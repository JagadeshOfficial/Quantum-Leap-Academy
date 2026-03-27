
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
import { RandomEnrolledCount } from "@/components/course/random-enrolled-count";
import { CourseCard } from "@/components/course/course-card";

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

import { RandomReviewDisplay } from "@/components/course/random-review-display";

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
        {courses.map((course: Course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
