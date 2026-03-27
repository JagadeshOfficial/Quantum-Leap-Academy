"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, Banknote, GraduationCap, Briefcase, FileSearch, UserCheck, UserPlus } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function PAPPage() {
    const heroImage = PlaceHolderImages.find(img => img.id === "hero-background-2");

    const highlights = [
        { icon: <GraduationCap className="h-6 w-6 text-primary" />, title: "Best for Freshers", description: "Specifically designed for recent graduates and final year students looking to kickstart their career." },
        { icon: <Briefcase className="h-6 w-6 text-primary" />, title: "Job Assurance", description: "We don't just train you; we ensure you land a role in top-tier tech companies." },
        { icon: <Banknote className="h-6 w-6 text-primary" />, title: "Zero Upfront Tuition", description: "Focus on learning without the burden of tuition fees. Pay only when you succeed." },
    ];

    const admissionSteps = [
        { icon: <UserPlus className="h-8 w-8 text-blue-600" />, title: "Registration", description: "Pay a nominal registration fee of ₹9,999/- to start your journey." },
        { icon: <FileSearch className="h-8 w-8 text-purple-600" />, title: "Screening/Test", description: "Take a technical and aptitude assessment to evaluate your potential." },
        { icon: <UserCheck className="h-8 w-8 text-green-600" />, title: "Personal Interview", description: "Meet our mentors for a one-on-one discussion about your career goals." },
        { icon: <GraduationCap className="h-8 w-8 text-orange-600" />, title: "Enroll", description: "Get your offer letter and start your intensive training program." },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative h-[60vh] w-full overflow-hidden bg-slate-950">
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt="Pay After Placement"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="container relative z-10 mx-auto flex h-full flex-col items-center justify-center px-4 text-center text-white">
                    <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 backdrop-blur-sm px-4 py-1 text-sm">
                        Career Launchpad
                    </Badge>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-7xl">
                        Pay After <span className="text-primary italic">Placement</span>
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-slate-300 md:text-xl font-medium">
                        Invest in your future, not in fees. Join our elite program and pay your tuition only after you land a job of minimum ₹5 LPA.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        <Button size="lg" className="h-14 px-8 text-lg font-bold shadow-xl shadow-primary/20" asChild>
                            <Link href="#apply">Apply Now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 border-white/20 bg-white/10 px-8 text-lg font-bold text-white hover:bg-white/20 backdrop-blur-sm" asChild>
                            <Link href="/courses">Explore Domains</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Program Highlights */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold sm:text-5xl tracking-tight">Program <span className="text-primary">Highlights</span></h2>
                        <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">Everything you need to know about our unique outcome-based education model.</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        {highlights.map((item, idx) => (
                            <Card key={idx} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                                <CardHeader>
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                                        {item.icon}
                                    </div>
                                    <CardTitle className="text-2xl font-bold">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 leading-relaxed font-medium">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Admission Process */}
            <section className="py-24" id="apply">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold sm:text-5xl tracking-tight">Admission <span className="text-primary">Process</span></h2>
                        <p className="mt-4 text-lg text-slate-500">Four simple steps to start your career transformation.</p>
                    </div>
                    <div className="relative mx-auto max-w-5xl">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute left-1/2 top-10 hidden h-[80%] w-0.5 -translate-x-1/2 bg-slate-200 md:block" />
                        
                        <div className="space-y-12">
                            {admissionSteps.map((step, idx) => (
                                <div key={idx} className={`flex flex-col items-center gap-8 md:flex-row ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white shadow-xl border-4 border-slate-50">
                                        {step.icon}
                                    </div>
                                    <div className={`flex-1 text-center md:text-left ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                                        <Card className="border-slate-100 shadow-lg hover:shadow-xl transition-shadow bg-slate-50/50">
                                            <CardHeader>
                                                <CardTitle className="text-2xl font-bold text-slate-900">{step.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-slate-600 font-medium italic leading-relaxed">{step.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                    <div className="hidden flex-1 md:block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-primary py-24 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold sm:text-6xl mb-6 tracking-tight">Don't Wait for Success. <br/> <span className="italic opacity-80">Earn It.</span></h2>
                    <p className="mb-10 text-xl text-primary-foreground/80 max-w-2xl mx-auto font-medium">Limited batch sizes for our PAP program. Secure your spot today and transform your career.</p>
                    <Button size="lg" variant="secondary" className="h-16 px-12 text-xl font-bold shadow-2xl hover:scale-105 transition-transform" asChild>
                        <Link href="/contact">Book a Free Consultation</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
