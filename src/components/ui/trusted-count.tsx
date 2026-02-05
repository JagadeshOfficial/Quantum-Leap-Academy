"use client";

import { useEffect, useState } from "react";

export function TrustedCount() {
    const [count, setCount] = useState("10,000+");

    useEffect(() => {
        // Randomize count between 10,000 and 12,000
        const randomNum = Math.floor(Math.random() * (12000 - 10000 + 1) + 10000);
        setCount(randomNum.toLocaleString() + "+");
    }, []);

    return <span className="text-sm font-medium text-slate-400">Trusted by {count} professionals</span>;
}
