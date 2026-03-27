"use client";

import { useEffect, useState } from "react";

export function RandomEnrolledCount({ initialCount }: { initialCount: number }) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        // Randomize count based on initial count + some random growth
        const randomGrowth = Math.floor(Math.random() * 500) + 100;
        setCount(initialCount + randomGrowth);
    }, [initialCount]);

    return <span>{count.toLocaleString()}+ Enrolled</span>;
}
