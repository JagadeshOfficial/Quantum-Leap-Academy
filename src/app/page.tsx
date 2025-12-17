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

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function Home() {
  const featuredCourses = courses.slice(0, 4);
  const companyLogos = [
    "logo-johnson-and-johnson",
    "logo-ubs",
    "logo-bank-of-america",
    "logo-spinnaker",
    "logo-kpmg",
    "logo-oracle",
    "logo-microsoft",
    "logo-american-express",
  ]
    .map(getImage)
    .filter(Boolean) as ImagePlaceholder[];

  const instructors = [
    {
      name: "Dr. Anjali Sharma",
      title: "AI Research Scientist",
      imageId: "instructor-1",
    },
    {
      name: "Rohan Verma",
      title: "Principal Data Scientist",
      imageId: "instructor-2",
    },
    {
      name: "Priya Singh",
      title: "Quantum Computing Expert",
      imageId: "instructor-3",
    },
    {
      name: "Amit Desai",
      title: "Cybersecurity Lead",
      imageId: "instructor-4",
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
      description: "Always-on mentor & peer learning channels for round-the-clock help.",
      icon: <Users className="h-8 w-8 text-primary" />,
    },
    {
      title: "Career Assistance",
      description:
        "Resume workshops, mock interviews & placement help from day one.",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
    },
    {
        title: 'Industry-Recognized Certification',
        description: 'Get certified by global leaders and showcase your skills.',
        icon: <Award className="h-8 w-8 text-primary" />,
    },
  ];

  const whyChooseUs = [
    { title: "Placement Assistance", icon: <Award className="h-6 w-6"/> },
    { title: "Application-Oriented Learning", icon: <BrainCircuit className="h-6 w-6"/> },
    { title: "Company-Specific Prep", icon: <Code className="h-6 w-6"/> },
    { title: "AI-enabled Resume Builder", icon: <BookOpen className="h-6 w-6"/> },
    { title: "Mock Interviews", icon: <Users className="h-6 w-6"/> },
    { title: "Capstone Projects", icon: <Cpu className="h-6 w-6"/> },
    { title: "Career Masterclasses", icon: <Star className="h-6 w-6"/> },
    { title: "Personalized Guidance", icon: <ShieldCheck className="h-6 w-6"/> },
    { title: "Lifetime LMS Access", icon: <Briefcase className="h-6 w-6"/> },
  ];

  const heroImage = getImage("hero-background-2");
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
                Transform into a Future-Ready Professional, Powered by AI.
              </h1>
              <p className="text-lg drop-shadow md:text-xl">
                Learn with AI-driven, industry-relevant courses in Data
                Science, AI/ML, and more — and unlock your dream career in tech.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/courses">Explore Courses</Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href="/signup">Sign Up Now</Link>
                </Button>
              </div>
            </div>
            <Card className="bg-white/90 p-6 shadow-2xl backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Book a Free Live Class</CardTitle>
                <CardDescription>
                  Get a taste of our learning experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Phone" />
                  <Input placeholder="Highest Qualification" />
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

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-2 text-3xl font-bold">
            Get Offers From Top Companies
          </h2>
          <p className="mb-8 text-muted-foreground">
            Our learners are hired by the best in the industry.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {companyLogos.map((logo, index) => (
              <div
                className="flex h-12 w-36 items-center justify-center"
                key={index}
              >
                <Image
                  src={logo.imageUrl}
                  alt={logo.description}
                  data-ai-hint={logo.imageHint}
                  width={144}
                  height={48}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-20">
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

      <section className="py-20">
        <div className="container mx-auto max-w-full px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">90% Career Transition Rate</h2>
            <p className="mt-2 mb-6 text-2xl font-semibold">— in Just 6 Months!</p>
            <Button size="lg" variant="outline">
              Download Handbook
            </Button>
          </div>
        </div>
      </section>
      
      <section className="bg-card py-20">
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
                <div className="mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20">
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
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div className="flex animate-infinite-scroll-slow flex-shrink-0 gap-8 group-hover:[animation-play-state:paused]">
              {[...successStories, ...successStories].map((story, index) => {
                const storyImage = getImage(story.imageId);
                return (
                  <Card key={`${story.author}-${index}`} className="w-80 flex-shrink-0">
                    <CardContent className="flex-grow p-6">
                      <div className="mb-2 flex">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">&quot;{story.text}&quot;</p>
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
                        <CardTitle className="text-base">{story.author}</CardTitle>
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
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-3 text-primary">
                  {item.icon}
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
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
                <Card key={instructor.name} className="text-center">
                  <CardContent className="p-6">
                    {instructorImage && (
                      <Avatar className="mx-auto mb-4 h-24 w-24">
                        <AvatarImage
                          src={instructorImage.imageUrl}
                          alt={instructor.name}
                          data-ai-hint={instructorImage.imageHint}
                        />
                        <AvatarFallback>
                          {instructor.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <CardTitle>{instructor.name}</CardTitle>
                    <CardDescription>{instructor.title}</CardDescription>
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
