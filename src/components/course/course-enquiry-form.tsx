"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CourseEnquiryFormProps {
    courseName: string;
    courseSlug: string;
    allCourses: { name: string; slug: string }[];
}

export function CourseEnquiryForm({ courseName, courseSlug, allCourses }: CourseEnquiryFormProps) {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        courseSlug: courseSlug,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const selectedCourse = allCourses.find(c => c.slug === formData.courseSlug)?.name || courseName;

            const response = await fetch("/api/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    whatsapp: formData.phone,
                    inquiryType: "Course Enquiry",
                    courseName: selectedCourse,
                    message: "I am interested in this course.",
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Enquiry Submitted!",
                    description: "We have sent a confirmation email. Our team will contact you shortly.",
                });
                setFormData({ name: "", email: "", phone: "", courseSlug: courseSlug });
            } else {
                toast({
                    title: "Submission Failed",
                    description: data.error || "Something went wrong. Please try again.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to submit enquiry. Please check your connection.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, courseSlug: value });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="courseSlug">Interested Course</Label>
                <Select value={formData.courseSlug} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                        {allCourses.map((c) => (
                            <SelectItem key={c.slug} value={c.slug}>
                                {c.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Button type="submit" className="w-full text-lg h-12" disabled={isLoading}>
                {isLoading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                    </>
                ) : (
                    <>
                        Submit Enquiry <ChevronRight className="ml-2 h-4 w-4" />
                    </>
                )}
            </Button>
        </form>
    );
}
