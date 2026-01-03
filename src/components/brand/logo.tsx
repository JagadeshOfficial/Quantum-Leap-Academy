import React from 'react';

interface LogoProps {
    className?: string;
    showTagline?: boolean;
}

export function MathisiLogo({ className = "h-14", showTagline = true }: LogoProps) {
    return (
        <div className={`flex items-center gap-4 group cursor-pointer select-none ${className}`}>
            {/* Advanced "Quantum Core" Icon */}
            <div className="relative flex items-center justify-center w-14 h-14">

                {/* 1. Background Glow Pulse */}
                <div className="absolute inset-0 bg-indigo-500/30 rounded-full blur-xl animate-pulse" />

                {/* 2. Rotating Outer HUD Ring (Slow Spin) */}
                <svg
                    viewBox="0 0 100 100"
                    className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] opacity-60"
                >
                    <defs>
                        <linearGradient id="ring-grad" x1="0" y1="0" x2="100" y2="100">
                            <stop offset="0%" stopColor="#818cf8" />
                            <stop offset="100%" stopColor="#c084fc" />
                        </linearGradient>
                    </defs>
                    {/* Dashed Ring Segments */}
                    <circle cx="50" cy="50" r="46" stroke="url(#ring-grad)" strokeWidth="1" fill="none" strokeDasharray="10 10" opacity="0.5" />
                    <circle cx="50" cy="50" r="42" stroke="url(#ring-grad)" strokeWidth="1.5" fill="none" strokeDasharray="30 50" />
                    <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5 90" strokeLinecap="round" className="animate-[spin_3s_linear_infinite_reverse]" />
                </svg>

                {/* 3. Central Hexagon Container */}
                <div className="relative z-10 p-2">
                    <svg viewBox="0 0 100 100" className="w-8 h-8 overflow-visible">
                        <defs>
                            <linearGradient id="m-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#4f46e5" /> {/* Indigo 600 */}
                                <stop offset="50%" stopColor="#7c3aed" /> {/* Violet 600 */}
                                <stop offset="100%" stopColor="#db2777" /> {/* Pink 600 */}
                            </linearGradient>
                            <filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.3" />
                            </filter>
                        </defs>

                        {/* The 'M' Shape - Modern, Geometric, Sharp */}
                        {/* Left Leg */}
                        <path
                            d="M20 90 V30 L50 60 L80 30 V90"
                            fill="none"
                            stroke="url(#m-gradient)"
                            strokeWidth="12"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="drop-shadow-lg"
                        />

                        {/* Tech Dot at Top Center */}
                        <circle cx="50" cy="60" r="4" fill="white" className="animate-ping" />
                        <circle cx="20" cy="30" r="3" fill="#818cf8" />
                        <circle cx="80" cy="30" r="3" fill="#c084fc" />
                    </svg>
                </div>
            </div>

            <div className="flex flex-col justify-center">
                <span className="text-3xl font-black tracking-tight leading-none text-slate-900">
                    MATHISI
                </span>
                {showTagline && (
                    <div className="flex items-center gap-2">
                        <span className="h-[2px] w-2 rounded-full bg-indigo-500"></span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-600 leading-tight">
                            School
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
