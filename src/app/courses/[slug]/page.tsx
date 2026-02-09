
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

const instructors = [
  {
    name: "Maulika Modi",
    title: "Senior Data Science Trainer",
    imageId: "trainer-maulika",
    companies: ["logo-microsoft", "logo-google"],
  },
  {
    name: "Dr. Tamanna Sood",
    title: "AI Research Associate at Roundglass",
    imageId: "trainer-tamanna",
    companies: ["logo-ibm", "logo-amazon"],
  },
  {
    name: "Keerthana Eganathan",
    title: "AI Developer at Bloom Value Corporation",
    imageId: "trainer-keerthana",
    companies: ["logo-oracle", "logo-wipro"],
  },
];

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
                <Button size="lg" className="h-14 bg-primary px-8 text-lg font-bold hover:bg-primary/90" asChild>
                  <Link href="#enroll">Request Call Back</Link>
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
                        unoptimized={true}
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
            <h2 className="text-3xl font-bold text-slate-900">Why Choose Mathisi?</h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* 1:1 Mentorship Card */}
              <div className="flex gap-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-5 shadow-sm">
                <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-2 border border-indigo-100 shadow-sm">
                  {getImage("icon-mentorship") && <Image src={getImage("icon-mentorship")!.imageUrl} alt="Mentorship" width={40} height={40} unoptimized={true} className="object-contain" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">1:1 Mentorship</h3>
                  <p className="text-sm text-slate-600">Personalized guidance from industry experts to clear doubts and build your career path.</p>
                </div>
              </div>

              {/* Real Projects Card */}
              <div className="flex gap-4 rounded-xl border border-indigo-100 bg-white p-5 shadow-sm">
                <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-2 border border-indigo-100 shadow-sm">
                  {getImage("icon-real-projects") && <Image src={getImage("icon-real-projects")!.imageUrl} alt="Projects" width={40} height={40} unoptimized={true} className="object-contain" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Live Projects</h3>
                  <p className="text-sm text-slate-600">Work on real-world case studies and build a portfolio that employers love.</p>
                </div>
              </div>

              {/* Placement Support */}
              <div className="flex gap-4 rounded-xl border border-indigo-100 bg-white p-5 shadow-sm">
                <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-2 border border-indigo-100 shadow-sm">
                  {getImage("icon-placement") && <Image src={getImage("icon-placement")!.imageUrl} alt="Placement" width={40} height={40} unoptimized={true} className="object-contain" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Placement Support</h3>
                  <p className="text-sm text-slate-600">Dedicated placement cell to help you with resume building and mock interviews.</p>
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="flex gap-4 rounded-xl border border-indigo-100 bg-white p-5 shadow-sm">
                <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white p-2 border border-indigo-100 shadow-sm">
                  {getImage("icon-support") && <Image src={getImage("icon-support")!.imageUrl} alt="Support" width={40} height={40} unoptimized={true} className="object-contain" />}
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
                                unoptimized={true}
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

          {/* Instructors Section - Advanced Orbital Profiles */}
          <section id="trainers" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
            <div className="absolute inset-0 bg-grid-slate-900/[0.02] mask-radial"></div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="mb-20 text-center">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors uppercase tracking-widest text-[10px] py-1 px-3">Expert Faculty</Badge>
                <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Meet Your <span className="text-primary italic">Instructors</span></h2>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed italic text-center">Learn the craft from builders who have led teams at world-class engineering organizations.</p>
              </div>

              <div className="grid gap-16 md:grid-cols-3">
                {instructors.map((instructor: any) => {
                  const instructorImage = getImage(instructor.imageId);
                  return (
                    <div key={instructor.name} className="group relative flex flex-col items-center">
                      <div className="relative mb-10">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                        <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-600 rounded-full animate-spin-slow opacity-10 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative h-44 w-44 rounded-full border-8 border-white shadow-2xl overflow-hidden bg-slate-100 z-10">
                          {instructorImage && (
                            <Image
                              src={instructorImage.imageUrl}
                              alt={instructor.name}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          )}
                        </div>

                        <div className="absolute -bottom-2 right-4 h-10 w-10 rounded-full bg-white shadow-xl flex items-center justify-center z-20 border-4 border-slate-50">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        </div>
                      </div>

                      <div className="w-full text-center space-y-4">
                        <div className="space-y-1">
                          <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em] bg-primary/5 inline-block px-3 py-1 rounded-full">
                            {instructor.title}
                          </div>
                          <h3 className="text-2xl font-black text-slate-900 tracking-tight italic text-center">
                            {instructor.name}
                          </h3>
                        </div>

                        <div className="pt-8 border-t border-slate-200/50">
                          <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4 text-center">Industry Background</div>
                          <div className="flex justify-center items-center gap-8">
                            {instructor.companies.map((compId: string) => {
                              const companyLogo = getLogoById(compId);
                              if (!companyLogo) return null;
                              return (
                                <div key={compId} className="relative h-5 w-14 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 hover:scale-110">
                                  <Image
                                    src={companyLogo.imageUrl}
                                    alt="Company"
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>


          {/* Projects (Placeholder based on Highlights) */}
          <section id="projects" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Hands-on Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden group">
                <div className="h-48 w-full relative overflow-hidden">
                  {getImage("icon-capstone") && (
                    <Image
                      src={getImage("icon-capstone")!.imageUrl}
                      alt="Capstone Project"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Capstone Project</CardTitle>
                  <CardDescription>Apply your learning in a real-world scenario.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Work on industry-relevant datasets and problem statements to build a portfolio-worthy project.</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group">
                <div className="h-48 w-full relative overflow-hidden">
                  {getImage("icon-case-study") && (
                    <Image
                      src={getImage("icon-case-study")!.imageUrl}
                      alt="Live Business Case Studies"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
                // Handle cases like "DXC | Accelya" by taking the first brand or cleaning characters
                const logoName = recruiterId
                  .split('|')[0] // Take first part if there's a pipe
                  .trim()
                  .toLowerCase()
                  .replace(/ /g, '-')
                  .replace(/[^a-z0-9-]/g, ''); // Remove any other non-alphanumeric chars
                const companyLogo = getLogoById(`logo-${logoName}`);
                return (
                  <div key={recruiterId} className="relative h-12 w-32 grayscale transition-all hover:grayscale-0 hover:scale-110" title={recruiterId}>
                    {companyLogo ? (
                      <Image
                        src={companyLogo.imageUrl}
                        alt={recruiterId}
                        fill
                        unoptimized={true}
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
            <Card id="enroll" className="border-t-4 border-t-primary shadow-xl scroll-mt-24">
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
