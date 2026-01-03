import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

export default function ForgotPasswordPage() {
    // Rich Security/Tech Image - "Secure" vibe
    const resetImage = "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop";

    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
            <div className="flex items-center justify-center py-12 bg-background animate-in slide-in-from-left-10 duration-700 fade-in">
                <div className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tight">Recover Password</h1>
                        <p className="text-balance text-muted-foreground text-sm">
                            Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Send Reset Link
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Remember your password?{" "}
                        <Link href="/login" className="underline font-medium hover:text-primary transition-colors">
                            Back to Login
                        </Link>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block relative overflow-hidden bg-slate-900 border-l border-slate-800">
                <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10" />
                <Image
                    src={resetImage}
                    alt="Future Tech"
                    fill
                    className="h-full w-full object-cover opacity-90 animate-in zoom-in-105 duration-[2000ms]"
                    priority
                />
                <div className="absolute bottom-10 left-10 z-20 max-w-md p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 text-white animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-300">
                    <h3 className="text-xl font-bold mb-2">Secure Your Future</h3>
                    <p className="text-sm text-slate-200">We prioritize the security of your learning journey. Reset your password to regain access.</p>
                </div>
            </div>
        </div>
    )
}
