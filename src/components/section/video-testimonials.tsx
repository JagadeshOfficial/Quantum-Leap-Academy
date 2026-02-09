"use client";

import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { logos, getLogoById } from "@/lib/logos";

const videos = [
    {
        id: "1",
        youtubeId: "7Y3uM-V5_Xw",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
        title: "Introduction to Agentic AI and Future Tech",
        author: "Mathisi Faculty",
        role: "School of AI",
        company: "Mathisi",
        logoId: "logo-mathisi"
    },
    {
        id: "2",
        youtubeId: "Kz6lBpsit_I", // generic AI demo
        thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
        title: "Data Science Career Roadmap 2026",
        author: "Alumni Network",
        role: "Success Story",
        company: "Google",
        logoId: "logo-google"
    },
    {
        id: "3",
        youtubeId: "j942wKiXFu8", // generic AI demo
        thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2670&auto=format&fit=crop",
        title: "Building Real-World AI Projects",
        author: "Student Showcase",
        role: "Project Demo",
        company: "Microsoft",
        logoId: "logo-microsoft"
    }
];

export function VideoTestimonials() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Student Voices</span>
                    <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Hear directly from our Alumni</h2>
                    <p className="text-slate-500 mt-4 max-w-2xl mx-auto mb-8 text-lg">
                        Discover how Mathisi School transformed their careers and lives.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://www.youtube.com/channel/UCtIyFuzPH8VwnB4MYyANBZw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF0000] text-white rounded-xl font-bold hover:bg-[#CC0000] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            Visit our YouTube Channel
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video) => {
                        return (
                            <div
                                key={video.id}
                                className="group relative rounded-3xl overflow-hidden aspect-video shadow-lg cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 bg-slate-900"
                                onClick={() => setActiveVideo(video.youtubeId)}
                            >
                                {/* Thumbnail Image */}
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                                        <Play className="w-6 h-6 text-white fill-current ml-1" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-lg leading-tight mb-2">{video.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <p className="text-slate-300 text-sm font-medium">{video.author} • {video.role} at</p>
                                        <div className="h-5 w-auto relative">
                                            {getLogoById(video.logoId) ? (
                                                <img
                                                    src={getLogoById(video.logoId)?.imageUrl}
                                                    alt={video.company}
                                                    className="h-full w-auto object-contain"
                                                />
                                            ) : (
                                                <span className="text-white text-xs font-bold">{video.company}</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Video Modal */}
                <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
                    <DialogContent className="sm:max-w-[1000px] p-0 bg-black border-none overflow-hidden aspect-video">
                        <DialogHeader className="sr-only">
                            <DialogTitle>Video Testimonial</DialogTitle>
                        </DialogHeader>
                        {activeVideo && (
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                style={{ border: 0 }}
                            ></iframe>
                        )}
                    </DialogContent>
                </Dialog>

            </div>
        </section>
    );
}
