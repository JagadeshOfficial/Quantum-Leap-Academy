"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { PlayCircle, Calendar, CheckCircle2, ArrowLeft } from "lucide-react";

export default function DemoPage() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="min-h-screen bg-[#0B0F19] text-white pt-24 pb-12">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
            </div>

            <div className="container relative z-10 mx-auto px-4 max-w-6xl">
                {/* Back Button */}
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
                        <PlayCircle className="w-4 h-4" />
                        <span>Product Walkthrough</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Future of Learning</span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        See how our AI-powered platform personalizes your curriculum, prepares you for interviews, and accelerates your tech career.
                    </p>
                </div>

                {/* Video Player Container */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/20 bg-slate-900 mb-20">
                    {!isPlaying ? (
                        <div
                            onClick={() => setIsPlaying(true)}
                            className="group relative w-full h-full cursor-pointer"
                        >
                            {/* Thumbnail Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center">
                                <div className="absolute inset-0 bg-slate-950/60 transition-opacity group-hover:bg-slate-950/40" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/20 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                                        <PlayCircle className="w-10 h-10 text-white fill-white/20" />
                                    </div>
                                </div>
                            </div>

                            {/* UI Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none">
                                <div className="flex items-center gap-3 mb-1">
                                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Live Demo</span>
                                    <p className="font-bold text-white text-lg">Mathisi Platform Overview</p>
                                </div>
                                <p className="text-sm text-slate-300">Walkthrough of Dashboard, AI Mentor, and Coding Environment • 3:45</p>
                            </div>
                        </div>
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/SqoRAQskqbw?autoplay=1"
                            title="Mathisi Experience"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    )}
                </div>

                {/* Booking Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 md:p-12 backdrop-blur-xl">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Book a Live 1:1 Demo</h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Get a personalized tour with our academic counselors. We'll discuss your career goals and find the perfect path for you.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Personalized Career Roadmap",
                                "Scholarship Eligibility Check",
                                "Course Module Deep Dive",
                                "Placement Support Overview"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <div className="h-6 w-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-950/50 rounded-2xl p-8 border border-white/10 text-center shadow-inner">
                        <Calendar className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">Schedule Now</h3>
                        <p className="text-slate-400 text-sm mb-6">Select a time that works for you.</p>
                        <Button size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 shadow-lg shadow-indigo-600/20 rounded-xl">
                            View Available Slots
                        </Button>
                        <p className="mt-4 text-xs text-slate-500">
                            No credit card required. Free 30-min consultation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
