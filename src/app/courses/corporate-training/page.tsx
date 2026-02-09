
'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
    CheckCircle2,
    ArrowRight,
    Download,
    Clock,
    Users,
    Building2,
    Star,
    MessageSquare,
    PhoneCall,
    Calendar,
    Layers,
    Target,
    Rocket,
    ShieldCheck,
    ChevronRight,
    Quote,
    Briefcase
} from 'lucide-react';
import { logos, getLogoById } from '@/lib/logos';
import { DownloadBrochureButton, DownloadCurriculumButton } from "@/components/course/download-buttons";
import { courses } from "@/lib/courses";

const course = courses.find(c => c.slug === 'corporate-training')!;

export default function CorporateTrainingPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        alert('Inquiry sent successfully!');
    };

    const stats = [
        { label: 'IT Companies Served', value: '120+' },
        { label: 'Individuals Trained', value: '120+' },
        { label: 'Training Duration', value: '2–12 Weeks' },
        { label: 'Custom Learning', value: '40–200+ Hours' },
    ];

    const highlights = [
        "Customized Curriculum: Technology, tools, and projects matched to your needs.",
        "Industry Trainers: Sessions led by experts with real-world IT experience.",
        "Hands-on, Project-Based Training: Relevant case studies and assignments.",
        "Team Deployment Ready: Prepare to contribute to projects from day one.",
        "Flexible Delivery Mode: Online or onsite based on your team’s preference.",
        "Continuous Support: Dedicated coordinator and post-training assistance."
    ];

    const learningPath = [
        { step: 1, title: 'Requirement Analysis', desc: 'Understand your tech stack, skill gaps, and project goals.' },
        { step: 2, title: 'Curriculum Design', desc: 'Custom modules, tools, and practical labs tailored to your company.' },
        { step: 3, title: 'Training Execution', desc: 'Hands-on learning through real datasets, tools, and environments.' },
        { step: 4, title: 'Project Implementation', desc: 'Capstone applicable to your domain (Finance, Healthcare, E-commerce, etc.).' },
        { step: 5, title: 'Team Readiness Assessment', desc: 'Tests, evaluations, and deployment feedback.' },
        { step: 6, title: 'Ongoing Support', desc: 'Optional advanced modules, upskilling, and refresher sessions.' },
    ];

    const domains = [
        'Python', 'Data Engineering', 'Prompt Engineering', 'Cybersecurity',
        'Data Analytics', 'AI/ML', 'SQL', 'Power BI', 'Tableau', 'Agentic AI', 'GitHub'
    ];

    const trainers = [
        {
            name: "Maulika Modi",
            role: "Senior Data Science Trainer",
            bio: "Experienced Data Science professional specializing in predictive modeling and analytics, with a background at industry giants.",
            imageUrl: "/trainers/maulika.jpg",
            companies: ["logo-microsoft", "logo-google"]
        },
        {
            name: "Dr. Tamanna Sood",
            role: "AI Research Associate",
            bio: "Renowned AI researcher focusing on next-generation machine learning architectures and autonomous systems.",
            imageUrl: "/trainers/tamanna.jpg",
            companies: ["logo-ibm", "logo-amazon"]
        },
        {
            name: "Keerthana Eganathan",
            role: "AI Developer",
            bio: "Lead AI Developer specializing in large-scale model deployment and specialized agentic AI orchestration.",
            imageUrl: "/trainers/keerthana.jpg",
            companies: ["logo-oracle", "logo-wipro"]
        },
    ];

    const testimonials = [
        {
            author: 'Rohit Nair',
            role: 'Engineering Manager',
            company: 'Infosys',
            stars: 5,
            content: 'Exceptional custom program! Our cloud team was deployment-ready in just 6 weeks. Truly professional training delivery.'
        },
        {
            author: 'Shalini Verma',
            role: 'HR Lead',
            company: 'Wipro',
            stars: 4,
            content: 'The tailored curriculum aligned perfectly with our upcoming project needs. Highly recommend for team upskilling.'
        }
    ];

    const trustLogos = ['Amazon', 'Google', 'Deloitte', 'Accenture', 'TCS', 'PwC', 'IBM', 'Wipro', 'Flipkart', 'Zoho', 'Infosys', 'Capgemini', 'HCL'];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white lg:py-32">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -left-20 -top-20 h-[600px] w-[600px] rounded-full bg-primary/30 blur-[120px]" />
                    <div className="absolute -right-20 -bottom-20 h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
                </div>

                <div className="container relative z-10 mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <Badge className="bg-primary/20 text-primary-foreground border-primary/30 px-4 py-1.5 text-sm font-semibold backdrop-blur-md">
                                Custom Corporate Solutions
                            </Badge>
                            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl xl:text-7xl">
                                Tailored Corporate Training for <span className="text-primary italic">IT Leaders</span>
                            </h1>
                            <p className="max-w-xl text-lg text-slate-300 md:text-xl leading-relaxed">
                                We offer fully tailored training programs for individuals and IT companies in Data Science, AI/ML, Prompt Engineering, and Cyber Security. Build the exact program you need for your goals.
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Button size="lg" className="h-16 px-8 text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                                    <Link href="#inquiry">Request a Call Back</Link>
                                </Button>
                                <DownloadBrochureButton
                                    course={course}
                                    variant="outline"
                                    className="h-16 border-slate-700 bg-slate-900/50 px-8 text-lg font-bold text-white backdrop-blur-md hover:bg-slate-800"
                                    text="Download Brochure"
                                />
                            </div>
                            <div className="flex items-center gap-2 pt-4 text-slate-400 font-medium italic">
                                <Target className="h-5 w-5 text-primary" />
                                Empowering IT Teams with Custom-Built Skill Training
                            </div>
                        </div>

                        <div id="inquiry" className="relative">
                            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary to-blue-600 opacity-20 blur-xl"></div>
                            <Card className="relative border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
                                <CardHeader className="p-8 pb-4">
                                    <CardTitle className="text-2xl text-white">Partner Inquiry Form</CardTitle>
                                    <CardDescription className="text-slate-400">
                                        Tell us about your training requirements.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 pt-0">
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <Input placeholder="Full Name" className="h-12 border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500" required />
                                            <Input type="email" placeholder="Email Address" className="h-12 border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500" required />
                                        </div>
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <Input type="tel" placeholder="Phone Number" className="h-12 border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500" required />
                                            <Select>
                                                <SelectTrigger className="h-12 border-slate-700 bg-slate-800/50 text-white">
                                                    <SelectValue placeholder="Training Domain" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {domains.map(d => <SelectItem key={d} value={d.toLowerCase()}>{d}</SelectItem>)}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <Select>
                                            <SelectTrigger className="h-12 border-slate-700 bg-slate-800/50 text-white">
                                                <SelectValue placeholder="Are you a Company or Individual?" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="company">We are an IT Company</SelectItem>
                                                <SelectItem value="individual">I am an Individual</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Textarea placeholder="Share your message or requirements..." className="min-h-[100px] border-slate-700 bg-slate-800/50 text-white placeholder:text-slate-500" />
                                        <Button type="submit" disabled={isSubmitting} className="h-14 w-full text-lg font-bold shadow-lg shadow-primary/20">
                                            {isSubmitting ? 'Sending...' : 'Submit Inquiry'} <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="bg-slate-950 py-16 border-y border-slate-800">
                <div className="container mx-auto px-4">
                    <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
                        Trust partners who scaled their teams with us
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-x-20 md:gap-y-12 max-w-6xl mx-auto">
                        {trustLogos.map(name => {
                            const logoId = `logo-${name.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`;
                            const companyLogo = getLogoById(logoId);
                            return (
                                <div key={name} className="flex items-center justify-center w-32 h-12 hover:scale-110 transition-all duration-300">
                                    {companyLogo ? (
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={companyLogo.imageUrl}
                                                alt={name}
                                                fill
                                                unoptimized={true}
                                                className="object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <span className="text-xl font-black tracking-tighter text-white/40 whitespace-nowrap">{name}</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-8 rounded-3xl border border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/50 transition-shadow hover:shadow-xl">
                                <div className="text-5xl font-black text-primary mb-3 leading-none">{stat.value}</div>
                                <div className="text-sm font-bold uppercase tracking-tight text-slate-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Domains Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-950">
                <div className="container mx-auto px-4">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl text-slate-900 dark:text-white">Expertise Across All Modern Technologies</h2>
                        <p className="mt-4 text-lg text-slate-500">Master the exact tech stack your project demands.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                        {domains.map(d => (
                            <Badge key={d} variant="secondary" className="px-6 py-3 text-lg font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-none shadow-sm hover:bg-primary hover:text-white transition-colors cursor-default">
                                {d}
                            </Badge>
                        ))}
                    </div>
                    <div className="mt-12 text-center text-slate-500 font-medium">
                        And more — fully customizable to your requirements.
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                            <div className="absolute inset-0 rounded-3xl bg-primary transform rotate-6 scale-95 opacity-10"></div>
                            <div className="relative h-full w-full rounded-3xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-12 text-primary overflow-hidden shadow-2xl">
                                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
                                <Layers className="h-40 w-40 opacity-20 absolute" />
                                <div className="relative text-center">
                                    <div className="text-6xl font-black mb-4 tracking-tighter">95%</div>
                                    <div className="text-lg font-bold text-slate-600 dark:text-slate-400">Completion rate with guaranteed skill validation.</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Why Best Companies <span className="text-primary italic">Choose Our Training</span></h2>
                            <div className="space-y-6">
                                {highlights.map((h, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="h-6 w-6 mt-1 flex shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <p className="text-lg font-medium text-slate-700 dark:text-slate-300 leading-snug">{h}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button size="lg" className="h-14 px-8 font-bold" asChild>
                                <Link href="#inquiry">Start Your Custom Training Plan <ArrowRight className="ml-2 h-5 w-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Path Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-extrabold sm:text-5xl mb-6">Your Customized Learning Path</h2>
                        <p className="text-xl text-slate-400">A systematic 6-step roadmap to ensure team readiness and project success.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {learningPath.map((step, idx) => (
                            <div key={idx} className="group p-8 rounded-3xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-all hover:-translate-y-2">
                                <div className="text-slate-500 font-black text-6xl mb-6 leading-none group-hover:text-primary transition-colors">0{step.step}</div>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <DownloadCurriculumButton
                            course={course}
                            className="h-14 border-slate-700 bg-slate-900 text-white hover:bg-slate-800 font-bold"
                            text="Download Training Roadmap"
                        />
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Training Schedule</h2>
                            <p className="text-lg text-slate-500">Flexible batches designed around your business needs.</p>
                        </div>
                        <div className="bg-primary/5 px-6 py-4 rounded-2xl border border-primary/20 inline-flex items-center gap-4">
                            <Calendar className="h-6 w-6 text-primary" />
                            <span className="font-bold text-primary">Limited slots per month. Book yours today.</span>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-slate-50 border-b border-slate-200">
                                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest text-slate-500">Batch Name</th>
                                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest text-slate-500">Start Date</th>
                                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest text-slate-500">Timings</th>
                                    <th className="px-8 py-6 text-sm font-bold uppercase tracking-widest text-slate-500">Delivery Mode</th>
                                    <th className="px-8 py-6 sr-only">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 bg-white">
                                <tr className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-8"><span className="text-xl font-bold">Batch A</span></td>
                                    <td className="px-8 py-8"><Badge variant="outline" className="text-primary border-primary/30">Custom Date</Badge></td>
                                    <td className="px-8 py-8 text-slate-600 font-medium italic">Based on team availability</td>
                                    <td className="px-8 py-8"><div className="flex items-center gap-2 font-bold"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Online / Onsite</div></td>
                                    <td className="px-8 py-8 text-right">
                                        <Button variant="ghost" className="font-bold text-primary hover:text-primary hover:bg-primary/10">Reserve Slot <ChevronRight className="ml-1 h-4 w-4" /></Button>
                                    </td>
                                </tr>
                                <tr className="group hover:bg-slate-50/50 transition-colors">
                                    <td className="px-8 py-8"><span className="text-xl font-bold">Batch B</span></td>
                                    <td className="px-8 py-8"><Badge variant="outline" className="text-primary border-primary/30">Custom Date</Badge></td>
                                    <td className="px-8 py-8 text-slate-600 font-medium italic">Flexible hours</td>
                                    <td className="px-8 py-8"><div className="flex items-center gap-2 font-bold"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Online / Onsite</div></td>
                                    <td className="px-8 py-8 text-right">
                                        <Button variant="ghost" className="font-bold text-primary hover:text-primary hover:bg-primary/10">Reserve Slot <ChevronRight className="ml-1 h-4 w-4" /></Button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Trainers Section - Advanced Orbital Profiles */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-slate-900/[0.02] mask-radial"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="mb-24 text-center">
                        <Badge className="mb-6 bg-slate-900 text-white border-none py-1.5 px-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">The Faculty</Badge>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
                            World Class <span className="text-primary tracking-normal">Architects.</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed italic">
                            Led by practitioners who have shaped the technology landscape at the world's most innovative organizations.
                        </p>
                    </div>

                    <div className="grid gap-16 md:grid-cols-3">
                        {trainers.map((t, i) => (
                            <div key={i} className="group relative flex flex-col items-center">
                                {/* Profile Orb */}
                                <div className="relative mb-12">
                                    <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-600 rounded-full animate-spin-slow opacity-10 group-hover:opacity-100 transition-opacity"></div>

                                    <div className="relative h-48 w-48 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-slate-100 z-10">
                                        <Image
                                            src={t.imageUrl}
                                            alt={t.name}
                                            fill
                                            unoptimized={true}
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="absolute -bottom-2 right-4 h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center z-20 border-4 border-slate-50">
                                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="w-full text-center space-y-6">
                                    <div className="space-y-2">
                                        <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/5 inline-block px-3 py-1 rounded-full">
                                            {t.role}
                                        </div>
                                        <h3 className="text-3xl font-black text-slate-900 tracking-tight italic">
                                            {t.name}
                                        </h3>
                                    </div>

                                    <p className="text-slate-600 text-sm leading-relaxed font-bold px-4">
                                        {t.bio}
                                    </p>

                                    <div className="pt-8 border-t border-slate-100">
                                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-6">Expertise Roots</div>
                                        <div className="flex justify-center items-center gap-10">
                                            {t.companies.map((compId) => {
                                                const company = getLogoById(compId);
                                                if (!company) return null;
                                                return (
                                                    <div key={compId} className="relative h-6 w-16 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 hover:scale-110">
                                                        <Image
                                                            src={company.imageUrl}
                                                            alt="Brand"
                                                            fill
                                                            unoptimized={true}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-slate-950 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">Stories of Transformation</h2>
                    <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
                        {testimonials.map((t, i) => (
                            <div key={i} className="relative p-10 rounded-3xl bg-slate-900 border border-white/5 italic">
                                <Quote className="absolute -left-4 -top-4 h-12 w-12 text-primary/20 italic" />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(t.stars)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />)}
                                </div>
                                <p className="text-xl text-slate-300 mb-10 leading-relaxed">“{t.content}”</p>
                                <div className="flex items-center gap-5 not-italic">
                                    <div className="h-12 w-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xl">{t.author[0]}</div>
                                    <div>
                                        <div className="font-bold text-white">{t.author}</div>
                                        <div className="text-sm text-slate-500 font-medium">{t.role}, {t.company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <Badge variant="outline" className="mb-6 border-primary/30 text-primary font-bold">Get Started Today</Badge>
                    <h2 className="text-4xl font-extrabold sm:text-6xl mb-8 leading-tight">Ready to Train Your Team for the <span className="text-primary italic">Next Big Project?</span></h2>
                    <p className="text-xl text-slate-500 mb-12">Join 120+ IT companies already upskilling with our tailored programs.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" className="h-16 px-12 text-xl font-bold shadow-2xl transition-all hover:scale-105" asChild>
                            <Link href="#inquiry">Request Call Back</Link>
                        </Button>
                        <DownloadBrochureButton
                            course={course}
                            variant="outline"
                            className="h-16 px-12 text-xl font-bold hover:bg-slate-50 transition-all text-slate-900"
                            text="Download Brochure"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
