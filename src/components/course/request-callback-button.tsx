"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LeadCaptureModal } from "@/components/course/lead-capture-modal";
import type { Course } from "@/lib/courses";

interface RequestCallBackButtonProps {
    course: Course;
    className?: string;
    size?: "default" | "sm" | "lg" | "icon";
}

export function RequestCallBackButton({ course, className, size = "lg" }: RequestCallBackButtonProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Button 
                size={size} 
                className={className}
                onClick={() => setIsModalOpen(true)}
            >
                Request Call Back
            </Button>
            <LeadCaptureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSuccess={() => {
                    console.log("Call back request successful for:", course.name);
                }}
                courseName={course.name}
                courseSlug={course.slug}
                title="Request Call Back"
                description="Please fill in your details and our team will call you back shortly."
                buttonText="Request Call Back"
            />
        </>
    );
}
