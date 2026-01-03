import React from 'react';
import Image from 'next/image';

interface LogoProps {
    className?: string;
    showTagline?: boolean;
}

export function MathisiLogo({ className = "h-14", showTagline = true }: LogoProps) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Logo Image - Aspect ratio square for the icon */}
            <div className="relative h-full aspect-square">
                <Image
                    src="/Logos/Mathisi_Logo.png"
                    alt="Mathisi Logo"
                    fill
                    className="object-contain scale-125"
                    priority
                />
            </div>

            {/* Brand Name Text */}
            <div className="flex flex-col justify-center">
                <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 leading-none">
                    MATHISI
                </span>
                {showTagline && (
                    <span className="text-[0.65rem] font-bold tracking-[0.2em] text-indigo-600 dark:text-indigo-400 uppercase leading-tight ml-0.5">
                        &mdash; SCHOOL
                    </span>
                )}
            </div>
        </div>
    );
}
