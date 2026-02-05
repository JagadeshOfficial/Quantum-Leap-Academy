
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Briefcase,
  Users,
  Award,
  Star,
  BookOpen,
  BrainCircuit,
  ShieldCheck,
  Cpu,
  Code,
  Rocket,
  TrendingUp,
  UserCheck,
  Building,
  CheckCircle,
  PlayCircle,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Course } from "@/lib/courses";
import { courses } from "@/lib/courses";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { logos, getLogoById, type Logo } from "@/lib/logos";
import { CourseCard } from "@/components/course/course-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { CareerCounselingPopup } from "@/components/ui/career-counseling-popup";
import { VideoTestimonials } from "@/components/section/video-testimonials";
import { TrustedCount } from "@/components/ui/trusted-count";

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function Home() {
  const featuredCourses = courses;

  const companyNames = [
    "Johnson & Johnson",
    "UBS",
    "Bank of America",
    "Spinnaker Analytics",
    "KPMG",
    "Oracle",
    "Microsoft",
    "American Express",
    "Google",
    "Amazon",
    "Deloitte",
    "Accenture",
    "TCS",
    "PwC",
    "IBM",
    "Wipro",
    "Flipkart",
    "Zoho"
  ];


  const instructors = [
    {
      name: "Maulika Modi",
      title: "Senior Data Science Trainer",
      imageId: "trainer-maulika",
      companies: ["logo-microsoft", "logo-google"],
      backgroundImageId: "instructor-bg-1",
    },
    {
      name: "Dr. Tamanna Sood",
      title: "AI Research Associate at Roundglass",
      imageId: "trainer-tamanna",
      companies: ["logo-ibm", "logo-amazon"],
      backgroundImageId: "instructor-bg-2",
    },
    {
      name: "Keerthana Eganathan",
      title: "AI Developer at Bloom Value Corporation",
      imageId: "trainer-keerthana",
      companies: ["logo-oracle", "logo-wipro"],
      backgroundImageId: "instructor-bg-3",
    },
  ];

  const successStories = [
    {
      text: "The Data Science course helped me land a role as a Data Analyst at Oracle! The projects and mentor support were excellent.",
      author: "Aditya Sharma",
      role: "Career Switcher",
      imageId: "student-1",
      rating: 5,
      company: "Oracle",
      logoId: "logo-oracle"
    },
    {
      text: "From zero experience to building dashboards — the course gave me confidence to work with real data.",
      author: "Karan Malhotra",
      role: "College Student",
      imageId: "student-2",
      rating: 5,
      company: "Wipro",
      logoId: "logo-wipro"
    },
    {
      text: "Mathisi School's AI/ML course gave me real project experience. The mentors were outstanding and helped me land my first AI internship.",
      author: "Ritika Verma",
      role: "B.Tech Student",
      imageId: "student-3",
      rating: 5,
      company: "Facebook",
      logoId: "logo-facebook" // Note: facebook logo might also be missing in json, checking...
    },
  ];

  const learnerBenefits = [
    {
      title: "Innovative Learning",
      description:
        "Interactive, lab-based learning with simulators and real-world projects.",
      icon: <Rocket className="h-8 w-8 text-primary" />,
    },
    {
      title: "24 x 7 Support",
      description:
        "Always-on mentor & peer learning channels for round-the-clock help.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Career Assistance",
      description:
        "Resume workshops, mock interviews & placement help from day one.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
      title: "Industry-Recognized Certification",
      description: "Get certified by global leaders and showcase your skills.",
      icon: <Award className="h-8 w-8 text-primary" />,
    },
  ];

  const whyChooseUs = [
    { title: "Placement Assistance", icon: <Award className="h-8 w-8" /> },
    {
      title: "Application-Oriented Learning",
      icon: <BrainCircuit className="h-8 w-8" />,
    },
    { title: "Company-Specific Prep", icon: <Code className="h-8 w-8" /> },
    {
      title: "AI-enabled Resume Builder",
      icon: <BookOpen className="h-8 w-8" />,
    },
    { title: "Mock Interviews", icon: <Users className="h-8 w-8" /> },
    { title: "Capstone Projects", icon: <Cpu className="h-8 w-8" /> },
    { title: "Career Masterclasses", icon: <Star className="h-8 w-8" /> },
    {
      title: "Personalized Guidance",
      icon: <ShieldCheck className="h-8 w-8" />,
    },
    { title: "Lifetime LMS Access", icon: <Briefcase className="h-8 w-8" /> },
  ];

  const heroImage = getImage("benefits-image");
  const benefitsImage = getImage("benefits-image");

  return (
    <div className="flex flex-col">
      <section className="relative flex min-h-[95vh] w-full items-center justify-center overflow-hidden bg-[#0B0F19] pt-20 lg:pt-0">

        {/* Ambient Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] h-[1000px] w-[1000px] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[10%] right-[0%] h-[800px] w-[800px] bg-violet-600/10 blur-[100px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 h-full">
          <div className="grid h-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Left Column: Typography */}
            <div className="flex flex-col items-start space-y-8 pt-10 lg:pt-0">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">New Batch Enrollment Open</span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1]">
                Master the Art of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">Tech Intelligence</span>
              </h1>

              {/* Description */}
              <p className="max-w-xl text-lg text-slate-400 md:text-xl leading-relaxed">
                Join the elite community of problem solvers. Industry-designed curriculums in <strong className="text-indigo-300">Generative AI</strong>, <strong className="text-indigo-300">Data Science</strong>, and <strong className="text-indigo-300">Full Stack Engineering</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col w-full sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-indigo-600 text-white font-bold text-lg hover:bg-indigo-700 hover:scale-105 transition-all shadow-[0_0_40px_rgba(79,70,229,0.3)] border border-indigo-500/50">
                  <Link href="/courses">Start Learning Now</Link>
                </Button>

                {/* Career Counseling Popup */}
                <CareerCounselingPopup
                  triggerText="Free Career Counseling"
                  className="h-14 px-8 rounded-2xl border-white/10 bg-white/5 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all"
                />
              </div>

              {/* Trust Signals */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 w-full">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0B0F19] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white relative overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500 text-sm">★★★★★</div>
                  <TrustedCount />
                </div>
              </div>
            </div>

            {/* Right Column: Imagery & Floating Cards */}
            <div className="relative hidden lg:block h-full min-h-[600px]">
              {/* Main Glowing Circle Background behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-full blur-[60px] animate-pulse-slow"></div>

              {/* Main Image Masked */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[600px] rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl shadow-indigo-500/20 rotate-[-3deg] hover:rotate-0 transition-all duration-700 ease-out z-10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent z-10 opacity-60"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2671"
                  alt="Students Collaborating"
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Floating Glass Card 1: Salary Hike */}
              <div className="absolute top-[20%] right-[10%] z-20 animate-float">
                <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium">Average Hike</p>
                    <p className="text-lg font-bold text-white">+ 55%</p>
                  </div>
                </div>
              </div>

              {/* Floating Glass Card 2: Hired */}
              <div className="absolute bottom-[25%] left-[5%] z-20 animate-float" style={{ animationDelay: '2s' }}>
                <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-lg flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://i.pravatar.cc/100?img=12" alt="Hired" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium whitespace-nowrap">Just Hired by</p>
                    <p className="text-sm font-bold text-white flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span> Google
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Premium Stats Strip (Floating Bridge) */}
            <div className="absolute -bottom-12 left-0 right-0 z-30 px-4 hidden md:block">
              <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6 flex items-center justify-between">
                {[
                  { label: "Average Salary Hike", value: "55%", icon: <TrendingUp className="w-5 h-5 text-green-400" /> },
                  { label: "Hiring Partners", value: "1200+", icon: <Briefcase className="w-5 h-5 text-blue-400" /> },
                  { label: "Active Learners", value: "15k+", icon: <Users className="w-5 h-5 text-indigo-400" /> },
                  { label: "Course Completion", value: "94%", icon: <CheckCircle2 className="w-5 h-5 text-purple-400" /> },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 border-r border-white/10 last:border-0 hover:scale-105 transition-transform duration-300">
                    <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white">{stat.value}</h4>
                      <p className="text-xs text-slate-300 uppercase tracking-wider font-semibold">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container mx-auto px-4 pt-10">
          <div className="text-center mb-12">
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-[0.2em]">Our Graduates Work At</h3>
          </div>
          <div className="group relative flex overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex animate-infinite-scroll-slow gap-16 group-hover:[animation-play-state:paused] items-center">
              {[...logos, ...logos].map((logo, idx) => (
                <div key={`${logo.id}-landing-${idx}`} className="flex shrink-0 items-center justify-center w-[160px] h-20 transition-all duration-300 hover:scale-110">
                  <Image
                    src={logo.imageUrl}
                    alt={logo.description}
                    width={140}
                    height={60}
                    className="max-h-12 w-auto max-w-[140px] object-contain"
                    data-ai-hint={logo.imageHint}
                  />
                </div>
              ))}
              {/* Text logos converted to visual style */}
              {['Amazon', 'TCS', 'Accenture', 'Infosys', 'Flipkart', 'Zoho'].map((name, idx) => (
                <div key={`text-logo-${idx}`} className="flex shrink-0 items-center justify-center w-[160px] h-20 transition-all duration-300 hover:scale-110">
                  <span className="text-2xl font-black tracking-tight text-slate-700">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Explore Our Courses</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Designed for the jobs of tomorrow.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredCourses.map((course: Course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto max-w-full px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">90% Career Transition Rate</h2>
            <p className="mt-2 mb-6 text-2xl font-semibold">
              — in Just 6 Months!
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-10">
              <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 w-48 transition-transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900 text-lg">55%</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Avg Salary Hike</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 w-48 transition-transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900 text-lg">1200+</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Hiring Partners</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 w-48 transition-transform hover:-translate-y-1">
                <div className="h-12 w-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900 text-lg">Global</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Job Opportunities</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Why Choose <span className="text-blue-600">Mathisi</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
              We&apos;ve engineered an ecosystem that guarantees your success.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 lg:h-[600px]">
            {/* Bento Grid Item 1: Large Feature */}
            <div className="group relative row-span-2 overflow-hidden rounded-3xl p-1 transition-all hover:bg-white hover:shadow-2xl hover:shadow-blue-100/50">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 transition-opacity duration-500 group-hover:opacity-20 animate-background-shine" style={{ backgroundSize: '200% 200%' }} />

              <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-slate-50 p-8">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl transition-transform group-hover:scale-150" />
                <Award className="mb-6 h-12 w-12 text-blue-600" />
                <h3 className="mb-2 text-2xl font-bold text-slate-900">100% Placement Support</h3>
                <p className="text-slate-600">Our dedicated career success team works 24/7 to ensure you land your dream job. From resume building to mock interviews.</p>
                <div className="mt-8 relative h-48 w-full overflow-hidden rounded-xl bg-white shadow-inner border border-slate-100">
                  {/* Abstract visualization of placement success */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="grid w-full gap-2 opacity-80">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-2 w-full animate-pulse rounded-full bg-slate-100"><div className="h-full w-2/3 rounded-full bg-blue-100"></div></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Grid Item 2 */}
            <div className="group col-span-1 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/50">
              <BrainCircuit className="mb-4 h-10 w-10 text-purple-600 transition-transform group-hover:scale-110 group-hover:rotate-3" />
              <h3 className="text-xl font-bold">AI-Powered Learning</h3>
              <p className="mt-2 text-sm text-slate-500">Personalized curriculum that adapts to your learning pace using advanced AI algorithms.</p>
            </div>

            {/* Bento Grid Item 3 */}
            <div className="group col-span-1 overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-green-100/50">
              <Code className="mb-4 h-10 w-10 text-green-600 transition-transform group-hover:scale-110 group-hover:-rotate-3" />
              <h3 className="text-xl font-bold">Hands-on Labs</h3>
              <p className="mt-2 text-sm text-slate-500">Don&apos;t just watch video. Code in real-time environments with instant feedback.</p>
            </div>

            {/* Bento Grid Item 4: Wide */}
            <div className="group relative col-span-1 md:col-span-2 overflow-hidden rounded-3xl bg-slate-900 p-8 text-white shadow-xl transition-all hover:scale-[1.01]">
              {/* Border Beam Effect */}
              <div className="absolute inset-0 z-0">
                <div className="absolute -inset-[100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
              </div>
              <div className="absolute inset-[1px] bg-slate-900 rounded-[23px] z-10" />

              <div className="relative z-20 flex h-full flex-col justify-between">
                <div>
                  <Star className="mb-4 h-10 w-10 text-yellow-400" />
                  <h3 className="text-2xl font-bold">Mentorship from Industry Leaders</h3>
                  <p className="mt-2 max-w-lg text-slate-400">Learn directly from engineers at Google, Amazon, and Microsoft.</p>
                </div>
              </div>
              {/* Decoration */}
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-600 blur-[80px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0F19] py-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/20 blur-[100px] rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-20 text-center">
            <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-2 block">Real Results</span>
            <h2 className="text-4xl font-black text-white md:text-6xl tracking-tight">
              Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Stories</span>
            </h2>
            <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with <span className="text-white font-semibold">Mathisi</span>.
            </p>
          </div>

          <div className="flex overflow-x-auto pb-12 gap-8 px-4 snap-x snap-mandatory no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {successStories.map((story, index) => {
              const storyImage = getImage(story.imageId);
              const companyLogo = story.logoId ? getLogoById(story.logoId) : null;

              return (
                <div
                  key={`${story.author}-${index}`}
                  className="group relative min-w-[320px] md:min-w-[400px] snap-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-indigo-500/20">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity"></div>
                      {storyImage && (
                        <Avatar className="h-16 w-16 border-2 border-white/20 relative z-10">
                          <AvatarImage src={storyImage.imageUrl} />
                          <AvatarFallback>{story.author[0]}</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{story.author}</h4>
                      <p className="text-sm text-indigo-300">{story.role}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex text-yellow-500 gap-1 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-slate-300 leading-relaxed italic line-clamp-4">
                      "{story.text.replace(/Quantum Pod|Quantum Leap Academy/g, "Mathisi")}"
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Hired By</span>
                    {companyLogo ? (
                      <div className="relative h-8 w-24">
                        <Image
                          src={companyLogo.imageUrl}
                          alt={companyLogo.description}
                          fill
                          className="object-contain brightness-0 invert opacity-80"
                        />
                      </div>
                    ) : (
                      <span className="text-sm font-bold text-white">{story.company}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      <VideoTestimonials />

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">
              Learn From The Best In The Industry
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Our instructors are practitioners from top companies.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {instructors.map((instructor) => {
              const instructorImage = getImage(instructor.imageId);
              return (
                <Card
                  key={instructor.name}
                  className="w-full max-w-[320px] overflow-hidden text-center transition-shadow hover:shadow-xl"
                >
                  <CardContent className="flex flex-col items-center p-6">
                    {instructorImage && (
                      <Avatar className="mb-4 h-24 w-24 border-4 border-primary/20">
                        <AvatarImage
                          src={instructorImage.imageUrl}
                          alt={instructor.name}
                          data-ai-hint={instructorImage.imageHint}
                        />
                        <AvatarFallback>
                          {instructor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <CardTitle className="text-xl">{instructor.name}</CardTitle>
                    <CardDescription className="mb-4">
                      {instructor.title}
                    </CardDescription>

                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
