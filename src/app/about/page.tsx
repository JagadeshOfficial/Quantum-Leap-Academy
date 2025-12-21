
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Globe,
  Lightbulb,
  Rocket,
  Users,
  Award,
  TrendingUp,
  Building,
  BrainCircuit,
} from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

export default function AboutPage() {
  const heroImage = getImage("benefits-image");
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

  const missionPoints = [
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Our Mission",
      description:
        "To bridge the gap between academic learning and industry requirements by providing hands-on, AI-powered education that prepares students for the jobs of tomorrow.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Our Vision",
      description:
        "To empower a global community of future-ready professionals who can drive innovation and make a meaningful impact in the tech industry.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Our Philosophy",
      description:
        "We believe in learning by doing. Our courses emphasize practical projects, real-world case studies, and mentorship from industry experts to ensure true mastery of skills.",
    },
  ];

  const stats = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      value: "10,000+",
      label: "Students Trained",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      value: "95%",
      label: "Placement Rate",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      value: "55%",
      label: "Average Salary Hike",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      value: "300+",
      label: "Hiring Partners",
    },
  ];

  return (
    <div>
      <section className="relative h-72 w-full bg-card">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Our Team"
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10 mx-auto flex h-full items-center justify-center px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-tight drop-shadow-md md:text-6xl">
              About QuantumPod Technologies
            </h1>
            <p className="mt-4 text-lg drop-shadow md:text-xl">
              Empowering the next generation of tech leaders.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                QuantumPod Technologies was founded with the vision of bridging
                the gap between academic learning and industry requirements. We
                saw countless talented individuals struggling to break into
                the tech world due to a lack of practical, job-ready skills.
              </p>
              <p className="mt-4 text-muted-foreground">
                We set out to create a new kind of learning institution—one
                that leverages the power of AI to create personalized learning
                paths and focuses on hands-on experience. Today, we are a
                thriving community of learners, mentors, and industry leaders,
                all dedicated to building the future of technology.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {missionPoints.map((point) => (
                <div key={point.title} className="flex items-start gap-6">
                  <div className="flex-shrink-0">{point.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold">{point.title}</h3>
                    <p className="mt-1 text-muted-foreground">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">The Numbers Speak For Themselves</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              We are proud of the success our students have achieved.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2"
              >
                {stat.icon}
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Meet Our Expert Instructors</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Learn from the best in the industry.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {instructors.map((instructor) => {
              const instructorImage = getImage(instructor.imageId);
              return (
                <Card
                  key={instructor.name}
                  className="overflow-hidden text-center"
                >
                  <div className="relative mx-auto mt-6 h-32 w-32">
                    {instructorImage && (
                      <Avatar className="h-full w-full">
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
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{instructor.name}</CardTitle>
                    <CardDescription>{instructor.title}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

       <section className="border-t bg-card py-20">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Start Your Journey?</h2>
          <p className="mb-8 text-lg text-muted-foreground">Enroll today and take the first step towards your dream career.</p>
          <div className="flex justify-center gap-4">
             <Button size="lg" asChild>
                <Link href="/courses">Explore Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Talk to an Advisor</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
