"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, GraduationCap, Menu } from "lucide-react";
import { courses } from "@/lib/courses";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              Quantum Leap Academy
            </span>
          </Link>
        </div>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1">
                Courses
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {courses.map((course) => (
                <DropdownMenuItem key={course.slug} asChild>
                  <Link href={`/courses/${course.slug}`}>{course.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/courses">All Courses</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/personalized-path" className="transition-colors hover:text-foreground/80 text-foreground/60">Personalized Path</Link>
          <Link href="/resume-builder" className="transition-colors hover:text-foreground/80 text-foreground/60">Resume Builder</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
           </div>
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <div className="flex flex-col h-full">
                <div className="border-b p-4">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
                      <GraduationCap className="h-6 w-6 text-primary" />
                      <span className="font-bold">Quantum Leap Academy</span>
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 p-4 text-lg">
                    <Link href="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
                    <Link href="/personalized-path" onClick={() => setMobileMenuOpen(false)}>Personalized Path</Link>
                    <Link href="/resume-builder" onClick={() => setMobileMenuOpen(false)}>Resume Builder</Link>
                </nav>
                <div className="mt-auto flex flex-col gap-4 border-t p-4">
                    <Button variant="ghost" asChild>
                        <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Login</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>Sign Up</Link>
                    </Button>
                </div>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
