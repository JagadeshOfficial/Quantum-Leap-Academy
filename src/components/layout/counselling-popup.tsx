"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles, CheckCircle2 } from "lucide-react";

export function CounsellingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
    message: "",
  });

  useEffect(() => {
    // Trigger popup after 4 seconds every time the app/page loads
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || "counselling@popup.request",
          whatsapp: formData.phone,
          inquiryType: "Free Counselling Request",
          message: `Course: ${formData.course}\nMessage: ${formData.message || "User requested free counselling from the homepage popup."}`,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsOpen(false);
        }, 3000);
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Connection Error",
        description: "Failed to connect to the server.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[800px] overflow-hidden p-0 border-none shadow-2xl">
        <div className="flex flex-col md:flex-row w-full">
          {/* Left Side Feature Banner */}
          <div className="relative bg-gradient-to-br from-indigo-600 via-primary to-purple-800 p-8 md:p-10 text-white flex flex-col justify-center items-center text-center md:w-2/5 w-full shrink-0">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 rounded-full bg-white/10 blur-xl"></div>
            <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-48 h-48 rounded-full bg-white/10 blur-2xl"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md mb-6 shadow-xl text-yellow-300">
                <Sparkles className="h-8 w-8" />
              </div>
              <DialogTitle className="text-3xl font-black mb-4 tracking-tight leading-tight">Free Career Counselling</DialogTitle>
              <DialogDescription className="text-indigo-100 text-sm md:text-base font-medium leading-relaxed">
                Confused about your tech career path? Get expert guidance tailored to your goals.
              </DialogDescription>
            </div>
          </div>
          
          {/* Right Side Form */}
          <div className="p-6 md:p-10 bg-white md:w-3/5 w-full">
            {isSuccess ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center animate-in zoom-in fade-in duration-500">
                <div className="rounded-full bg-green-100 p-4 text-green-600 mb-6">
                  <CheckCircle2 className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Request Received!</h3>
                <p className="text-slate-500 text-lg">Our expert counselor will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name *</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      required 
                      className="h-11 border-slate-200 focus:ring-primary focus:border-primary"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      required 
                      className="h-11 border-slate-200 focus:ring-primary focus:border-primary"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-bold text-slate-700">Email (Optional)</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="h-11 border-slate-200 focus:ring-primary focus:border-primary"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course" className="text-sm font-bold text-slate-700">Course of Interest *</Label>
                    <select
                      id="course"
                      required
                      className="flex h-11 w-full items-center justify-between rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                    >
                      <option value="" disabled>Select course</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Data Analysis">Data Analysis</option>
                      <option value="Data Engineering">Data Engineering</option>
                      <option value="AI & ML">AI & Machine Learning</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Agentic AI">Agentic AI</option>
                      <option value="Quantum Computing">Quantum Computing</option>
                      <option value="Not Sure Yet">Need Guidance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-bold text-slate-700">Message (Optional)</Label>
                  <textarea
                    id="message"
                    rows={2}
                    placeholder="Any specific questions?"
                    className="flex w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-[15px] font-bold mt-2 shadow-lg shadow-primary/25">
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...</>
                  ) : (
                    "Book My Free Session"
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
