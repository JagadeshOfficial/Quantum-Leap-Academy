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
import { DownloadBrochureButton } from "@/components/course/download-buttons";

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
        <Card className="group flex flex-col overflow-hidden border-0 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-200/50">
            <div
                className="relative h-56 w-full cursor-pointer overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Static Image */}
                {courseImage && (
                    <Image
                        src={courseImage.imageUrl}
                        alt={course.name}
                        fill
                        unoptimized={true}
                        className={`object-cover transition-all duration-500 group-hover:scale-105 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
                        data-ai-hint={courseImage.imageHint}
                    />
                )}

                {/* Play Icon Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center bg-black/10 transition-all duration-300 group-hover:bg-black/20 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <PlayCircle className="h-6 w-6 text-blue-600 fill-blue-600/10" />
                    </div>
                </div>

                {/* Video */}
                <video
                    ref={videoRef}
                    src={course.videoPreview}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    muted
                    playsInline
                    loop
                />

                <div className="absolute bottom-3 left-3 flex gap-2">
                    <Badge variant="secondary" className="bg-white/90 text-xs font-semibold text-slate-800 backdrop-blur-md hover:bg-white">
                        Placement Assistance
                    </Badge>
                </div>
            </div>

            <CardContent className="flex flex-grow flex-col p-6">
                <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-green-500"></span> Live Classes</span>
                    <span>{course.duration}</span>
                </div>

                <h3 className="mb-2 min-h-[56px] text-xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">{course.name}</h3>

                <div className="mb-6 flex items-center gap-2 text-sm">
                    <div className="flex items-center text-yellow-500">
                        <span className="font-bold">{course.rating}</span>
                        <Star className="ml-1 h-3.5 w-3.5 fill-current" />
                    </div>
                    <span className="text-slate-400">|</span>
                    <span className="text-slate-500">{course.reviews.length}K+ reviews</span>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3">
                    <DownloadBrochureButton
                        course={course}
                        variant="outline"
                        className="h-10 w-full border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-600 hover:border-blue-600 hover:text-blue-600"
                        text="Brochure"
                    />
                    <Button
                        asChild
                        className="h-10 w-full bg-slate-900 text-[10px] font-bold uppercase tracking-wider text-white hover:bg-blue-600 shadow-md shadow-slate-200"
                    >
                        <Link href={`/courses/${course.slug}`}>View Course</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
