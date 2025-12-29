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
import { ChevronDown, Menu, Github } from "lucide-react";
import { courses } from "@/lib/courses";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { MathisiLogo } from "@/components/brand/logo";

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <MathisiLogo className="h-10" />
          </Link>
        </div>

        <div className="flex-1 justify-center hidden md:flex">
          <nav className="flex items-center space-x-6 text-sm font-medium">
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
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            <Link href="/blogs" className="transition-colors hover:text-foreground/80 text-foreground/60">Blogs</Link>
            <Link href="/hire" className="transition-colors hover:text-foreground/80 text-foreground/60">Hire From Us</Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
        </div>

        <div className="flex items-center justify-end space-x-4 md:flex-1">
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://github.com/JagadeshOfficial/Quantum-Leap-Academy"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="View on GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <div className="h-4 w-px bg-border mx-2" />
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
            <SheetContent side="left" className="p-0 bg-card text-card-foreground">
              <div className="flex flex-col h-full">
                <div className="border-b border-border p-4">
                  <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                    <MathisiLogo className="h-8" />
                  </Link>
                </div>
                <nav className="flex flex-col space-y-4 p-4 text-lg">
                  <Link href="/courses" className="text-foreground/60 hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Courses</Link>
                  <Link href="/about" className="text-foreground/60 hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>About</Link>
                  <Link href="/blogs" className="text-foreground/60 hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
                  <Link href="/hire" className="text-foreground/60 hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Hire From Us</Link>
                  <Link href="/contact" className="text-foreground/60 hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                </nav>
                <div className="mt-auto flex flex-col gap-4 border-t border-border p-4">
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
