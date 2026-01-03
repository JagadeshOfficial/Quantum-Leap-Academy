"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Phone, CheckCircle2, Star, ArrowRight, Loader2 } from "lucide-react";
import { submitCareerSession } from "@/app/actions/career-session";

export function CareerCounselingPopup({ triggerText = "Free Career Counseling", variant = "outline", className }: { triggerText?: string, variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link", className?: string }) {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    async function handleSubmit(formData: FormData) {
        setStatus("submitting");
        const result = await submitCareerSession(formData);

        if (result.success) {
            setStatus("success");
            setTimeout(() => {
                setOpen(false);
                setStatus("idle");
            }, 3000);
        } else {
            setStatus("idle");
            alert("Something went wrong. Please check your details.");
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={variant} size="lg" className={className}>
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden bg-[#0B0F19] border border-white/10 shadow-2xl shadow-indigo-500/20 gap-0">
                <div className="grid md:grid-cols-2 h-full">
                    {/* Left Side: Visual & Social Proof */}
                    <div className="relative hidden md:flex flex-col justify-end p-8 bg-slate-900 border-r border-white/5">
                        <div className="absolute inset-0">
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                                alt="Mentorship"
                                className="h-full w-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <div className="flex gap-1 text-yellow-500">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <blockquote className="text-lg font-medium text-slate-200 leading-relaxed italic">
                                "The career guidance session was a game-changer. I got a clear roadmap to transition from Support to Data Science."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full border-2 border-indigo-500/30 overflow-hidden">
                                    <img src="https://i.pravatar.cc/100?img=32" alt="User" />
                                </div>
                                <div>
                                    <p className="font-bold text-white">Sarah Jenkins</p>
                                    <p className="text-xs text-indigo-400">Data Scientist @ Uber</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="p-8 md:p-10 flex flex-col justify-center bg-[#0B0F19]">
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center h-full space-y-6 animate-in fade-in zoom-in duration-500">
                                <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <div className="text-center space-y-2">
                                    <h3 className="text-2xl font-bold text-white">Booking Confirmed!</h3>
                                    <p className="text-slate-400 max-w-[250px] mx-auto">We've sent a confirmation email to you. Our team will contact you shortly.</p>
                                </div>
                                <Button onClick={() => setOpen(false)} variant="outline" className="border-white/10 text-white hover:bg-white/10">
                                    Close Window
                                </Button>
                            </div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                                        </span>
                                        Limited Slots Available
                                    </div>
                                    <DialogTitle className="text-3xl font-bold text-white mb-2">Book Free Strategy Call</DialogTitle>
                                    <DialogDescription className="text-slate-400">
                                        Get a personalized career roadmap from industry experts.
                                    </DialogDescription>
                                </div>

                                <form action={handleSubmit} className="space-y-5">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Full Name</Label>
                                        <Input name="name" id="name" required placeholder="Enter your full name" className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 transition-all hover:bg-white/10" />
                                    </div>

                                    <div className="grid gap-4 grid-cols-2">
                                        <div className="grid gap-2">
                                            <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Work Email</Label>
                                            <Input name="email" id="email" required placeholder="john@work.com" type="email" className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 transition-all hover:bg-white/10" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone</Label>
                                            <Input name="phone" id="phone" required placeholder="+91 98765..." type="tel" className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-indigo-500 focus-visible:border-indigo-500 transition-all hover:bg-white/10" />
                                        </div>
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="domain" className="text-xs font-semibold uppercase tracking-wider text-slate-500">Career Goal</Label>
                                        <Select name="domain" required>
                                            <SelectTrigger className="h-11 bg-white/5 border-white/10 text-white focus:ring-indigo-500 hover:bg-white/10 transition-all">
                                                <SelectValue placeholder="What do you want to achieve?" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-[#0B0F19] border-slate-800 text-white">
                                                <SelectItem value="transition">Transition into Tech</SelectItem>
                                                <SelectItem value="upskill">Upskill for Promotion</SelectItem>
                                                <SelectItem value="placement">Placement Assistance</SelectItem>
                                                <SelectItem value="abroad">Master's Degree Abroad</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <Button disabled={status === "submitting"} type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold h-12 text-md mt-4 shadow-lg shadow-indigo-600/20 transition-all hover:scale-[1.02]">
                                        {status === "submitting" ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Processing...
                                            </>
                                        ) : (
                                            <>
                                                Confirm Booking <ArrowRight className="w-4 h-4 ml-2" />
                                            </>
                                        )}
                                    </Button>

                                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 text-center">
                                        <CheckCircle2 className="w-3 h-3 text-green-500" /> No credit card required
                                        <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                        <CheckCircle2 className="w-3 h-3 text-green-500" /> Free 30-min consultation
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
