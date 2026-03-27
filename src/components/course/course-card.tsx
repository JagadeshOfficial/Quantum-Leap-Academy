"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Course } from "@/lib/courses";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { DownloadBrochureButton } from "@/components/course/download-buttons";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Youtube } from "lucide-react";

interface CourseCardProps {
    course: Course;
}

function RandomReviewCount() {
    const [count, setCount] = useState("1.2K+");

    useEffect(() => {
        const random = (Math.random() * (4.9 - 1.2) + 1.2).toFixed(1);
        setCount(`${random}K+`);
    }, []);

    return <span className="text-slate-500">{count} reviews</span>;
}

export function CourseCard({ course }: CourseCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const courseImage = PlaceHolderImages.find((img) => img.id === course.imageId);

    const [showYoutubeModal, setShowYoutubeModal] = useState(false);

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

                {/* YouTube Preview on Hover */}
                {isPlaying && course.youtubeId && (
                    <div className="absolute inset-0 h-full w-full pointer-events-none">
                        <iframe
                            className="w-full h-full scale-125" // Scale to hide controls/branding
                            src={`https://www.youtube.com/embed/${course.youtubeId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${course.youtubeId}&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            style={{ border: 0 }}
                        ></iframe>
                    </div>
                )}

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
                    <RandomReviewCount />
                </div>

                <div className="mt-auto grid grid-cols-2 gap-3 mb-3">
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
                
                <Button
                    variant="secondary"
                    onClick={() => setShowYoutubeModal(true)}
                    className="h-10 w-full border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-600 hover:bg-red-50 hover:text-red-600 shadow-sm"
                >
                    <Youtube className="mr-2 h-4 w-4 text-red-600" /> Watch Intro
                </Button>

                <Dialog open={showYoutubeModal} onOpenChange={setShowYoutubeModal}>
                    <DialogContent className="sm:max-w-[1000px] p-0 bg-black border-none overflow-hidden aspect-video">
                        <DialogHeader className="sr-only">
                            <DialogTitle>Course Introduction</DialogTitle>
                        </DialogHeader>
                        {course.youtubeId ? (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${course.youtubeId}?autoplay=1&rel=0`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ border: 0 }}
                            ></iframe>
                        ) : (
                            <div className="flex items-center justify-center h-full text-white">Video not available.</div>
                        )}
                    </DialogContent>
                </Dialog>
            </CardContent>
        </Card>
    );
}
