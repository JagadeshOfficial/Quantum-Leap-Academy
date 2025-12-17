
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
} from "lucide-react";
import type { Course } from "@/lib/courses";
import { courses } from "@/lib/courses";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { logos, getLogoById, type Logo } from "@/lib/logos";

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function Home() {
  const featuredCourses = courses.slice(0, 4);
  
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
      name: "Dr. Anjali Sharma",
      title: "AI Research Scientist",
      imageId: "instructor-1",
      companies: ["logo-google", "logo-microsoft"],
      backgroundImageId: "instructor-bg-1",
    },
    {
      name: "Rohan Verma",
      title: "Principal Data Scientist",
      imageId: "instructor-2",
      companies: ["logo-amazon", "logo-flipkart"],
      backgroundImageId: "instructor-bg-2",
    },
    {
      name: "Priya Singh",
      title: "Quantum Computing Expert",
      imageId: "instructor-3",
      companies: ["logo-ibm"],
      backgroundImageId: "instructor-bg-3",
    },
    {
      name: "Amit Desai",
      title: "Cybersecurity Lead",
      imageId: "instructor-4",
      companies: ["logo-pwc", "logo-deloitte"],
      backgroundImageId: "instructor-bg-4",
    },
  ];

  const successStories = [
    {
      text: "The Data Science course helped me land a role as a Data Analyst at Infosys! The projects and mentor support were excellent.",
      author: "Aditya Sharma",
      role: "Career Switcher",
      imageId: "student-1",
      rating: 5,
    },
    {
      text: "From zero experience to building dashboards — the course gave me confidence to work with real data.",
      author: "Karan Malhotra",
      role: "College Student",
      imageId: "student-2",
      rating: 5,
    },
    {
      text: "Quantum Leap’s AI/ML course gave me real project experience. The mentors were outstanding and helped me land my first AI internship.",
      author: "Ritika Verma",
      role: "B.Tech Student",
      imageId: "student-3",
      rating: 5,
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
      <section className="relative h-[80vh] min-h-[600px] w-full">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto flex h-full items-center px-4">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-6 text-white">
              <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md md:text-5xl lg:text-6xl">
                Transform into a Future-Ready Data Scientist powered by AI.
              </h1>
              <p className="text-lg drop-shadow md:text-xl">
                Learn with AI-driven, industry-relevant courses in Data Analysis, Data Science, and AI/ML — and unlock your dream career in tech.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
            <Card className="border-0 bg-black/60 p-6 text-white shadow-2xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Book a Live Class Now</CardTitle>
                <CardDescription className="text-gray-300">
                  Get a taste of our learning experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Button variant="outline" className="w-full text-black">
                    <svg
                      className="mr-2 h-4 w-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 381.5 512 244 512 109.8 512 0 402.2 0 261.8 0 120.5 109.8 8 244 8c70.3 0 129.8 27.6 173.4 71.9l-67.4 64.9C333.1 106.1 292.8 88 244 88c-84.3 0-152.3 67.9-152.3 151.4s68 151.4 152.3 151.4c97.9 0 135.3-70.8 139.7-105.3H244v-73.4h239.5c2.3 12.7 3.8 26.1 3.8 40.2z"
                      ></path>
                    </svg>
                    Login w/ Google
                  </Button>
                  <Input placeholder="Name" className="bg-white/20 text-white placeholder:text-gray-300 border-gray-500"/>
                  <Input type="email" placeholder="Email" className="bg-white/20 text-white placeholder:text-gray-300 border-gray-500" />
                  <Input type="tel" placeholder="Phone" className="bg-white/20 text-white placeholder:text-gray-300 border-gray-500" />
                  <Input placeholder="Highest Qualification" className="bg-white/20 text-white placeholder:text-gray-300 border-gray-500" />
                  <Button type="submit" className="w-full">
                    Book Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div className="flex flex-col items-center gap-2">
              <UserCheck className="h-10 w-10 text-primary" />
              <h3 className="text-3xl font-bold">1:1</h3>
              <p className="text-muted-foreground">Mentorship</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Building className="h-10 w-10 text-primary" />
              <h3 className="text-3xl font-bold">30+</h3>
              <p className="text-muted-foreground">Hiring Partners</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TrendingUp className="h-10 w-10 text-primary" />
              <h3 className="text-3xl font-bold">55%</h3>
              <p className="text-muted-foreground">Average Salary Hike</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BrainCircuit className="h-10 w-10 text-primary" />
              <h3 className="text-3xl font-bold">AI</h3>
              <p className="text-muted-foreground">Personalized Learning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Get Offers From Top Companies
          </h2>
          <p className="mb-8 text-muted-foreground">
            Our learners are hired by the best in the industry.
          </p>
          <div
            className="group relative flex gap-8 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex animate-infinite-scroll-slow flex-shrink-0 gap-8 group-hover:[animation-play-state:paused]">
                {[...companyNames, ...companyNames].map((name, index) => (
                  <Badge key={`${name}-${index}`} variant="outline" className="px-6 py-3 text-lg whitespace-nowrap">
                    {name}
                  </Badge>
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
            {featuredCourses.map((course: Course) => {
              const courseImage = getImage(course.imageId);
              return (
                <Card
                  key={course.slug}
                  className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl"
                >
                  {courseImage && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={courseImage.imageUrl}
                        alt={course.name}
                        fill
                        className="object-cover"
                        data-ai-hint={courseImage.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="flex flex-grow flex-col p-6">
                    <h3 className="text-xl font-bold">{course.name}</h3>
                    <div className="mt-4 flex-grow space-y-3 text-sm text-muted-foreground">
                      <p>{course.duration}</p>
                      <div className="flex items-center">
                        <span className="font-semibold">{course.rating}</span>
                        <Star className="ml-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-2">
                          ({course.reviews.length}K+ Students)
                        </span>
                      </div>
                      <Badge variant="secondary">
                        DEDICATED CAREER SUPPORT
                      </Badge>
                      <p>{course.enrolledStudents}+ students enrolled</p>
                    </div>
                    <div className="mt-6 flex gap-4">
                      <Button variant="outline" className="w-full">
                        Brochure
                      </Button>
                      <Button asChild className="w-full">
                        <Link href={`/courses/${course.slug}`}>
                          View Course
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
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
            <Button size="lg" variant="outline">
              Download Handbook
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Learner Benefits</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              An ecosystem designed for your success.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {learnerBenefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto max-w-full px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Success Stories</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              See how we&apos;ve changed lives.
            </p>
          </div>
          <div
            className="group relative flex gap-8 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="flex animate-infinite-scroll-slow flex-shrink-0 gap-8 group-hover:[animation-play-state:paused]">
              {[...successStories, ...successStories].map((story, index) => {
                const storyImage = getImage(story.imageId);
                return (
                  <Card
                    key={`${story.author}-${index}`}
                    className="w-80 flex-shrink-0"
                  >
                    <CardContent className="flex-grow p-6">
                      <div className="mb-2 flex">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">
                        &quot;{story.text}&quot;
                      </p>
                    </CardContent>
                    <CardHeader className="flex-row items-center gap-4 pt-0">
                      {storyImage && (
                        <Avatar>
                          <AvatarImage
                            src={storyImage.imageUrl}
                            alt={story.author}
                            data-ai-hint={storyImage.imageHint}
                          />
                          <AvatarFallback>
                            {story.author.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div>
                        <CardTitle className="text-base">
                          {story.author}
                        </CardTitle>
                        <CardDescription>{story.role}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Why Choose Quantum Leap</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Everything you need to launch your tech career.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="flex items-center gap-6 p-6">
                <div className="rounded-lg bg-primary/10 p-4 text-primary">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {instructors.map((instructor) => {
              const instructorImage = getImage(instructor.imageId);
              return (
                <Card
                  key={instructor.name}
                  className="overflow-hidden text-center transition-shadow hover:shadow-xl"
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
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <p className="w-full text-center text-xs font-semibold text-muted-foreground">
                        Formerly at:
                      </p>
                      {instructor.companies.map((companyId) => {
                        const companyLogo = getLogoById(companyId);
                        return companyLogo ? (
                          <div key={companyId} className="flex h-6 w-16 shrink-0 items-center justify-center" title={companyLogo.description.replace(' Logo', '')}>
                            <Image
                              src={companyLogo.imageUrl}
                              alt={companyLogo.description}
                              width={64}
                              height={24}
                              className="object-contain"
                              data-ai-hint={companyLogo.imageHint}
                            />
                           </div>
                        ) : null;
                      })}
                    </div>
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
