"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    title?: string;
    description?: string;
    courseName?: string;
}

export function LeadCaptureModal({
    isOpen,
    onClose,
    onSuccess,
    title = "Unlock Course Materials",
    description = "Please fill in your details to download the complete course guide.",
    courseName,
}: LeadCaptureModalProps) {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/inquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    whatsapp: formData.phone,
                    inquiryType: title, // Use the modal title as inquiry type (e.g. "Download Syllabus")
                    message: description,
                    courseName: courseName,
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast({
                    title: "Success",
                    description: "Your details have been verified.",
                });
                onSuccess();
                onClose();
            } else {
                toast({
                    title: "Error",
                    description: data.error || "Failed to process request.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <DialogTitle className="text-center">{title}</DialogTitle>
                    <DialogDescription className="text-center">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <Button type="submit" disabled={loading} className="w-full mt-2">
                        {loading ? "Verifying..." : "Unlock Download"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
