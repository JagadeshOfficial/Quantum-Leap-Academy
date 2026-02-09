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
                    unoptimized={true}
                    className="object-contain scale-125"
                    priority
                />
            </div>

            {/* Brand Name Text */}
            <div className="flex flex-col justify-center">
                <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 leading-none">
                    Mathisi
                </span>
                {showTagline && (
                    <span className="text-sm font-bold tracking-wide text-indigo-600 dark:text-indigo-400 leading-tight">
                        School of AI
                    </span>
                )}
            </div>
        </div>
    );
}
