"use client";

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();

  // Rich Community Image - "Join the Team" vibe
  const signupImage = "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop";

  const [step, setStep] = useState<'details' | 'otp'>('details');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [otp, setOtp] = useState('');
  const [resendTimer, setResendTimer] = useState(0);
  const [resendForbid, setResendForbid] = useState(false);

  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendForbid && resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setResendForbid(false);
    }
    return () => clearInterval(interval);
  }, [resendForbid, resendTimer]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: formData.phone })
      });
      const data = await res.json();

      if (data.success) {
        setIsLoading(false);
        setStep('otp');
        setResendForbid(true);
        setResendTimer(30);
        toast({
          title: "OTP Sent",
          description: `We've sent a verification code to ${formData.phone} (Valid for 10 mins)`,
        });
        if (data.debug_otp) console.log("Debug OTP:", data.debug_otp);
      } else {
        setIsLoading(false);
        toast({
          title: "Failed to send OTP",
          description: data.error || 'Please try again',
          variant: "destructive"
        });
      }
    } catch (err) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Something went wrong sending OTP",
        variant: "destructive"
      });
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, otp })
      });
      const data = await res.json();

      if (data.success) {
        toast({
          title: "Registration Successful",
          description: "Redirecting you to IntelSkill...",
        });
        // Redirect to external URL as requested
        window.location.href = "https://www.intelskill.in";
      } else {
        setIsLoading(false);
        toast({
          title: "Registration Failed",
          description: data.error || 'Please check your OTP details',
          variant: "destructive"
        });
      }

    } catch (err) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "Something went wrong during registration",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
      <div className="flex items-center justify-center py-12 bg-background animate-in slide-in-from-left-10 duration-700 fade-in">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              {step === 'details' ? 'Sign Up' : 'Verify Mobile'}
            </h1>
            <p className="text-balance text-muted-foreground text-sm">
              {step === 'details'
                ? 'Create an account to start your learning journey.'
                : `Enter the OTP sent to +91 ${formData.phone}`
              }
            </p>
          </div>

          {step === 'details' ? (
            <form onSubmit={handleSendOtp} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Max Robinson" required value={formData.name} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Mobile Number</Label>
                <Input id="phone" type="tel" placeholder="9876543210" required value={formData.phone} onChange={handleInputChange} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required value={formData.password} onChange={handleInputChange} />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isLoading ? "Sending OTP..." : "Get OTP"}
              </Button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="otp">One-Time Password</Label>
                <Input
                  id="otp"
                  placeholder="123456"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="text-center text-2xl tracking-widest"
                  maxLength={6}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {isLoading ? "Verifying..." : "Verify & Register"}
              </Button>

              <div className="flex justify-between items-center text-sm">
                <Button variant="ghost" type="button" onClick={() => setStep('details')} className="text-xs text-muted-foreground p-0 h-auto hover:bg-transparent hover:text-primary">
                  Change Number
                </Button>

                {resendForbid ? (
                  <span className="text-xs text-muted-foreground">Resend in {resendTimer}s</span>
                ) : (
                  <Button
                    variant="ghost"
                    type="button"
                    onClick={handleSendOtp}
                    className="text-xs font-semibold text-primary p-0 h-auto hover:bg-transparent hover:underline"
                    disabled={isLoading}
                  >
                    Resend OTP
                  </Button>
                )}
              </div>
            </form>
          )}

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline font-medium hover:text-primary transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative overflow-hidden bg-slate-900 border-l border-slate-800">
        <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10" />
        <Image
          src={signupImage}
          alt="Community"
          fill
          className="h-full w-full object-cover opacity-90 animate-in zoom-in-105 duration-[2000ms]"
          priority
        />
        <div className="absolute bottom-10 left-10 z-20 max-w-md p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-white animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-300">
          <h3 className="text-xl font-bold mb-2">Join the Future of Tech</h3>
          <p className="text-sm text-slate-200">Unlock your potential with industry-leading courses in AI, Data Science, and more.</p>
        </div>
      </div>
    </div>
  )
}
