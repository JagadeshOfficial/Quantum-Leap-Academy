"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Course } from "@/lib/courses";
import { PlaceHolderImages } from "@/lib/placeholder-images";

interface CourseCardProps {
    course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const courseImage = PlaceHolderImages.find((img) => img.id === course.imageId);

    const handleMouseEnter = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            // Reset time just in case, or just play
            videoRef.current.currentTime = 0;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Auto-play was prevented
                });
            }
        }
    };

    const handleMouseLeave = () => {
        setIsPlaying(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
            <div
                className="relative h-48 w-full cursor-pointer group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Static Image (always rendered behind to prevent white flash) */}
                {courseImage && (
                    <Image
                        src={courseImage.imageUrl}
                        alt={course.name}
                        fill
                        className={`object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                        data-ai-hint={courseImage.imageHint}
                    />
                )}

                {/* Play Icon Overlay (visible when not playing) */}
                <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="rounded-full bg-white/20 p-2 backdrop-blur-sm transition-transform group-hover:scale-110">
                        <PlayCircle className="h-10 w-10 text-white fill-white/20" />
                    </div>
                </div>

                {/* Video Element (visible when playing) */}
                <video
                    ref={videoRef}
                    src={course.videoPreview}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    muted
                    playsInline
                    loop
                />
            </div>

            <CardContent className="flex flex-grow flex-col p-6">
                <h3 className="text-xl font-bold line-clamp-2 min-h-[56px]">{course.name}</h3>
                <div className="mt-4 flex-grow space-y-3 text-sm text-muted-foreground">
                    <p className="flex items-center gap-2">
                        <span className="font-semibold text-foreground">Duration:</span> {course.duration}
                    </p>
                    <div className="flex items-center">
                        <span className="font-bold text-foreground">{course.rating}</span>
                        <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-2">({course.reviews.length}K+ Reviews)</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                        Placement Assistance
                    </Badge>
                    <p className="text-xs text-muted-foreground pt-1">
                        {course.enrolledStudents.toLocaleString()}+ students currently enrolled
                    </p>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button
                        variant="outline"
                        className="w-full text-xs font-semibold uppercase tracking-wider h-10 border-primary/20 hover:border-primary hover:bg-primary/5"
                    >
                        Brochure
                    </Button>
                    <Button
                        asChild
                        className="w-full text-xs font-semibold uppercase tracking-wider h-10"
                    >
                        <Link href={`/courses/${course.slug}`}>View Course</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
