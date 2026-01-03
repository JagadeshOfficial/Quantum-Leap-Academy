
import { notFound } from "next/navigation";
import Image from "next/image";
import type { Course } from "@/lib/courses";
import { courses } from "@/lib/courses";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { DownloadBrochureButton } from "@/components/course/download-buttons";
import { CourseEnquiryForm } from "@/components/course/course-enquiry-form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Clock,
  Star,
  Users,
  Award,
  Calendar,
  Newspaper,
  ChevronRight,
  Briefcase,
  Download,
  Phone,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getLogoById } from "@/lib/logos";
import { getToolLogoByName } from "@/lib/tool-logos";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CourseNavigation } from "@/components/course/course-navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LearningPath } from "@/components/course/learning-path";

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const getCourseFromSlug = (slug: string): Course | undefined => {
  return courses.find((course) => course.slug === slug);
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseFromSlug(params.slug);

  if (!course) {
    notFound();
  }

  const courseImage = getImage(course.imageId);

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Top Banner / Hero */}
      <header className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-24">
        {/* Abstract Background Element */}
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-600">Ranked #1 in India</Badge>
                <div className="flex items-center gap-1 text-sm font-medium text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span>{course.rating}/5 Rating</span>
                </div>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {course.name}
              </h1>

              <p className="text-lg text-slate-300 md:text-xl">
                {course.tagline}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                  <Users className="h-5 w-5 text-yellow-400" />
                  <span>{course.enrolledStudents.toLocaleString()}+ Enrolled</span>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                <Button size="lg" className="h-14 bg-primary px-8 text-lg font-bold hover:bg-primary/90">
                  Request Call Back
                </Button>
                <DownloadBrochureButton
                  course={course}
                  variant="outline"
                  className="h-14 border-white/20 bg-transparent px-8 text-lg text-white hover:bg-white/10 hover:text-white"
                />
              </div>
            </div>

            {/* Hero Card / Form */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
                {course.videoPreview ? (
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
                    <video
                      src={course.videoPreview}
                      controls
                      autoPlay
                      muted
                      loop
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <p className="font-semibold text-white drop-shadow-md">Featured Program</p>
                    </div>
                  </div>
                ) : (
                  courseImage && (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
                      <Image
                        src={courseImage.imageUrl}
                        alt={course.name}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <p className="font-semibold text-white">Featured Program</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Navigation */}
      <CourseNavigation />

      <main className="container mx-auto grid grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-3">
        {/* Left Column (Content) */}
        <div className="space-y-16 lg:col-span-2">

          {/* Overview */}
          <section id="overview" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose This Course?</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* 1:1 Mentorship Card */}
              <div className="flex gap-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 shadow-sm">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">1:1 Mentorship</h3>
                  <p className="text-sm text-slate-600">Personalized guidance from industry experts to clear doubts and build your career path.</p>
                </div>
              </div>

              {/* Real Projects Card */}
              <div className="flex gap-4 rounded-xl border border-indigo-100 bg-white p-5 shadow-sm">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Live Projects</h3>
                  <p className="text-sm text-slate-600">Work on real-world case studies and build a portfolio that employers love.</p>
                </div>
              </div>

              {/* Placement Support */}
              <div className="flex gap-4 rounded-xl border border-indigo-100 bg-white p-5 shadow-sm">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Placement Support</h3>
                  <p className="text-sm text-slate-600">Dedicated placement cell to help you with resume building and mock interviews.</p>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="flex gap-4 rounded-xl border border-indigo-100 bg-white p-5 shadow-sm">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">24/7 Support</h3>
                  <p className="text-sm text-slate-600">Never get stuck. Our support team is available round the clock to assist you.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Curriculum */}
          <section id="curriculum" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Curriculum & Learning Path</h2>
            <div className="mt-8">
              <LearningPath steps={course.learningPath} />
            </div>
          </section>

          {/* Tools */}
          <section id="tools" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Tools & Technologies</h2>
            <TooltipProvider>
              <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5">
                {course.tools.map((toolName) => {
                  const toolLogo = getToolLogoByName(toolName);
                  return (
                    <Tooltip key={toolName}>
                      <TooltipTrigger asChild>
                        <div className="group flex flex-col items-center gap-3 rounded-xl border bg-white p-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                          <div className="relative h-12 w-12 grayscale transition-all group-hover:grayscale-0">
                            {toolLogo ? (
                              <Image
                                src={toolLogo.imageUrl}
                                alt={toolLogo.name}
                                fill
                                className="object-contain"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-slate-100 rounded-full text-xs font-bold text-slate-500">
                                {toolName[0]}
                              </div>
                            )}
                          </div>
                          <span className="text-center text-xs font-medium text-slate-600 group-hover:text-primary">
                            {toolName}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>{toolName}</TooltipContent>
                    </Tooltip>
                  );
                })}
              </div>
            </TooltipProvider>
          </section>

          {/* Projects (Placeholder based on Highlights) */}
          <section id="projects" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Hands-on Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="h-40 w-full bg-slate-100 relative">
                  {/* Placeholder project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <Briefcase className="h-10 w-10" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Capstone Project</CardTitle>
                  <CardDescription>Apply your learning in a real-world scenario.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Work on industry-relevant datasets and problem statements to build a portfolio-worthy project.</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="h-40 w-full bg-slate-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    <Award className="h-10 w-10" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Live Business Case Studies</CardTitle>
                  <CardDescription>Solve actual business problems.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Analyze trends, forecast data, and provide actionable insights just like a professional.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recruiters - Redesigned Grid */}
          <section className="scroll-mt-24 space-y-8 rounded-2xl bg-slate-50 p-8 text-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Alumni Working At Top Global Companies</h2>
              <p className="mt-2 text-muted-foreground">Our learners are transforming industries worldwide.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {course.recruiters.map((recruiterId) => {
                const logoName = recruiterId.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
                const companyLogo = getLogoById(`logo-${logoName}`);
                return (
                  <div key={recruiterId} className="relative h-12 w-32 grayscale transition-all hover:grayscale-0 hover:scale-110" title={recruiterId}>
                    {companyLogo ? (
                      <Image
                        src={companyLogo.imageUrl}
                        alt={recruiterId}
                        fill
                        className="object-contain"
                      />
                    ) : <span className="flex h-full w-full items-center justify-center text-sm font-bold text-slate-400">{recruiterId}</span>}
                  </div>
                )
              })}
            </div>
          </section>

          {/* Reviews */}
          <section id="reviews" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Student Success Stories</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {course.reviews.map((review, index) => (
                <Card key={index} className="bg-card">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                      {review.author[0]}
                    </div>
                    <div>
                      <CardTitle className="text-base">{review.author}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-2 flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
                      ))}
                    </div>
                    <p className="italic text-muted-foreground">"{review.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Who is this course for?</AccordionTrigger>
                <AccordionContent>
                  This course is designed for both beginners and professionals looking to upskill. Whether you are a student, recent graduate, or working professional, our curriculum starts from the basics and covers advanced topics.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you offer placement assistance?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide 100% placement assistance. This includes resume building, mock interviews, and connecting you with our hiring partners.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What if I miss a class?</AccordionTrigger>
                <AccordionContent>
                  All sessions are recorded and available in your learning portal for lifetime access. You can watch them at your convenience.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

        </div>

        {/* Right Column (Sticky Form) */}
        <div className="relative">
          <div className="sticky top-24 space-y-6">
            <Card className="border-t-4 border-t-primary shadow-xl">
              <CardHeader>
                <div className="mb-4">
                  <p className="text-sm font-medium text-slate-500">Program Fees</p>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-slate-900">{course.fees}</span>
                    <span className="text-sm text-slate-400 line-through">{(parseInt(course.fees.replace(/[^0-9]/g, '')) * 1.2).toLocaleString('en-IN', { style: 'currency', currency: 'INR' }).replace('.00', '')}</span>
                  </div>
                  {course.earlyBirdOffer && (
                    <div className="mt-2 inline-block rounded-md bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      {course.earlyBirdOffer}
                    </div>
                  )}
                </div>
                <CardTitle className="text-xl">Enquire Now</CardTitle>
                <CardDescription>Fill out the form below and our counselor will contact you.</CardDescription>
              </CardHeader>
              <CardContent>
                <CourseEnquiryForm
                  courseName={course.name}
                  courseSlug={course.slug}
                  allCourses={courses.map((c) => ({ name: c.name, slug: c.slug }))}
                />
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  By submitting, you agree to our privacy policy.
                </p>
              </CardContent>
            </Card>

            <div className="rounded-xl bg-blue-50 p-6 text-center text-blue-900">
              <h4 className="font-bold">Need Help?</h4>
              <p className="mt-2 text-sm">Call our admission team directly</p>
              <a href="tel:+919876543210" className="mt-3 inline-flex items-center gap-2 text-lg font-bold hover:underline">
                <Phone className="h-5 w-5" /> +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
