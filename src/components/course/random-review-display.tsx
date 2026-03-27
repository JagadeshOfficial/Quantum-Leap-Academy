"use client";

import { useEffect, useState } from "react";

export function RandomReviewDisplay({ initialCount }: { initialCount?: number }) {
    const [count, setCount] = useState("1.2K+");

    useEffect(() => {
        // Randomize count between 1.0 and 5.0 (K)
        const random = (Math.random() * (5.0 - 1.0) + 1.0).toFixed(1);
        setCount(`${random}K+`);
    }, []);

    return <span>{count} reviews</span>;
}
