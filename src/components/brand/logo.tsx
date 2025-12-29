
import React from 'react';

interface LogoProps {
    className?: string;
    showTagline?: boolean;
}

export function MathisiLogo({ className = "h-10", showTagline = true }: LogoProps) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Abstract M Icon representing Neural Networks and Connectivity */}
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto"
            >
                {/* Outer Hexagon Shape */}
                <path
                    d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
                    className="fill-primary/10 stroke-primary"
                    strokeWidth="2"
                />

                {/* Stylized 'M' as a Network */}
                <path
                    d="M25 70L25 35L50 55L75 35L75 70"
                    stroke="url(#logo-gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Connectivity Nodes */}
                <circle cx="25" cy="35" r="4" className="fill-primary" />
                <circle cx="50" cy="55" r="4" className="fill-blue-400" />
                <circle cx="75" cy="35" r="4" className="fill-primary" />
                <circle cx="25" cy="70" r="4" className="fill-blue-600" />
                <circle cx="75" cy="70" r="4" className="fill-blue-600" />

                <defs>
                    <linearGradient id="logo-gradient" x1="25" y1="35" x2="75" y2="70" gradientUnits="userSpaceOnUse">
                        <stop stopColor="var(--primary)" />
                        <stop offset="1" stopColor="#3b82f6" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="flex flex-col justify-center">
                <span className="text-2xl font-black tracking-tighter leading-none text-slate-900 dark:text-white">
                    MATHISI
                </span>
                {showTagline && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary leading-tight">
                        School of Tech & AI
                    </span>
                )}
            </div>
        </div>
    );
}
