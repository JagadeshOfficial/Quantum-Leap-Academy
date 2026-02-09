"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2, Flag, GraduationCap, Trophy } from "lucide-react";

interface LearningPathProps {
    steps: {
        title: string;
        topics: string[];
    }[];
}

export function LearningPath({ steps }: LearningPathProps) {
    return (
        <div className="relative space-y-16 py-12 px-4 md:px-0">
            {/* Vertical Connecting Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 md:left-1/2 md:-ml-px" />

            {/* Start Node */}
            <div className="relative flex items-center md:justify-center">
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-indigo-600 shadow-xl md:h-16 md:w-16">
                    <Flag className="h-6 w-6 text-white md:h-8 md:w-8" />
                </div>
                <div className="absolute left-20 whitespace-nowrap rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-bold text-indigo-800 shadow-sm md:left-1/2 md:top-20 md:-translate-x-1/2 md:text-lg">
                    Start Your Journey
                </div>
            </div>

            {/* Steps */}
            {steps.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={index}
                        className={cn(
                            "relative flex flex-col items-start md:flex-row md:items-center",
                            isEven ? "md:flex-row-reverse" : ""
                        )}
                    >
                        {/* Timeline Node */}
                        <div className="absolute left-8 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-indigo-500 shadow-md md:left-1/2 md:h-8 md:w-8">
                            <span className="h-2 w-2 rounded-full bg-white md:h-3 md:w-3" />
                        </div>

                        {/* Content Spacer for Alignment */}
                        <div className="hidden w-1/2 md:block" />

                        {/* Content Card */}
                        <div className={cn(
                            "ml-16 w-[calc(100%-4rem)] md:ml-0 md:w-[60%] lg:w-[45%]",
                            isEven ? "md:mr-auto md:pr-12 lg:pr-16" : "md:ml-auto md:pl-12 lg:pl-16"
                        )}>
                            <div
                                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10"
                            >
                                {/* Step Number Badge */}
                                <div className="mb-4 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-600">
                                    Step {index + 1}
                                </div>

                                <h3 className="mb-4 text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                                    {step.title}
                                </h3>

                                <ul className="space-y-3">
                                    {step.topics &&
                                        step.topics.map((topic, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600">
                                                <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                                </div>
                                                <span className="text-sm leading-relaxed">{topic}</span>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* End Node */}
            <div className="relative flex items-center md:justify-center pt-12">
                <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-yellow-400 shadow-2xl ring-8 ring-yellow-400/10 md:h-20 md:w-20">
                    <Trophy className="h-8 w-8 text-yellow-900 md:h-10 md:w-10" />
                </div>
                <div className="absolute left-24 whitespace-nowrap rounded-full bg-yellow-100 px-6 py-2 text-sm font-bold text-yellow-800 shadow-sm md:left-1/2 md:top-28 md:-translate-x-1/2 md:text-lg">
                    Course Completion!
                </div>
            </div>
        </div>
    );
}
