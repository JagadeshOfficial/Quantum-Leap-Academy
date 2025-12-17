
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight } from "lucide-react";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const blogPosts = [
  {
    slug: "the-future-of-ai-in-education",
    title: "The Future of AI in Education: A 2025 Outlook",
    excerpt: "Explore how Artificial Intelligence is set to revolutionize the learning landscape, from personalized student paths to automated grading and beyond.",
    category: "AI/ML",
    author: "Dr. Anjali Sharma",
    authorImageId: "instructor-1",
    postImageId: "course-ai-ml",
    date: "Oct 15, 2025",
    featured: true,
  },
  {
    slug: "demystifying-quantum-computing",
    title: "Demystifying Quantum Computing: A Beginner's Guide",
    excerpt: "Quantum computing sounds like science fiction, but its impact is closer than you think. This guide breaks down the core concepts.",
    category: "Emerging Tech",
    author: "Priya Singh",
    authorImageId: "instructor-3",
    postImageId: "course-quantum-computing",
    date: "Oct 10, 2025",
    featured: false,
  },
  {
    slug: "top-5-skills-for-data-analysts",
    title: "The Top 5 Skills Every Data Analyst Needs in 2025",
    excerpt: "The demand for data analysts is booming. We break down the top 5 essential skills you need to master to land your dream job.",
    category: "Data Analysis",
    author: "Rohan Verma",
    authorImageId: "instructor-2",
    postImageId: "course-data-analysis",
    date: "Oct 5, 2025",
    featured: false,
  },
    {
    slug: "building-secure-applications-in-the-cloud",
    title: "Building Secure Applications in the Cloud",
    excerpt: "Cloud security is more critical than ever. Learn the best practices for developing, deploying, and managing secure applications.",
    category: "Security",
    author: "Amit Desai",
    authorImageId: "instructor-4",
    postImageId: "course-cyber-security",
    date: "Sep 28, 2025",
    featured: false,
  },
];

const categories = ["All", "AI/ML", "Data Science", "Emerging Tech", "Security", "Career"];

export default function BlogPage() {
  const featuredPost = blogPosts.find(p => p.featured);
  const otherPosts = blogPosts.filter(p => !p.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Quantum Pods Insights
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your source for the latest in tech, career advice, and learning.
        </p>
      </div>

       <div className="mb-12 flex flex-col items-center gap-4 md:flex-row">
        <div className="relative w-full max-w-sm">
            <Input placeholder="Search articles..." className="pl-10"/>
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"/>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
                <Button key={cat} variant={cat === 'All' ? 'default' : 'outline'}>
                    {cat}
                </Button>
            ))}
        </div>
      </div>
      
      {featuredPost && (
         <Card className="mb-12 grid grid-cols-1 overflow-hidden md:grid-cols-2">
            <div className="relative h-64 w-full md:h-auto">
                {getImage(featuredPost.postImageId) && (
                    <Image 
                        src={getImage(featuredPost.postImageId)!.imageUrl} 
                        alt={featuredPost.title} 
                        fill
                        className="object-cover"
                        data-ai-hint={getImage(featuredPost.postImageId)!.imageHint}
                    />
                )}
            </div>
            <div className="flex flex-col p-6">
                <Badge variant="secondary" className="mb-4 w-fit">{featuredPost.category}</Badge>
                <h2 className="text-2xl font-bold">{featuredPost.title}</h2>
                <p className="mt-2 flex-grow text-muted-foreground">{featuredPost.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        {getImage(featuredPost.authorImageId) && <Avatar className="h-10 w-10">
                            <AvatarImage src={getImage(featuredPost.authorImageId)?.imageUrl} alt={featuredPost.author} />
                            <AvatarFallback>{featuredPost.author.charAt(0)}</AvatarFallback>
                        </Avatar>}
                        <div>
                            <p className="font-semibold">{featuredPost.author}</p>
                            <p className="text-sm text-muted-foreground">{featuredPost.date}</p>
                        </div>
                    </div>
                     <Button variant="link" asChild>
                        <Link href={`/blogs/${featuredPost.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
         </Card>
      )}


      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {otherPosts.map((post) => {
           const postImage = getImage(post.postImageId);
           const authorImage = getImage(post.authorImageId);
           return (
            <Card key={post.slug} className="group flex flex-col overflow-hidden">
                 {postImage && <div className="relative h-48 w-full">
                    <Image
                        src={postImage.imageUrl}
                        alt={post.title}
                        data-ai-hint={postImage.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>}
                <CardHeader>
                    <Badge variant="secondary" className="mb-2 w-fit">{post.category}</Badge>
                    <h3 className="text-xl font-bold group-hover:text-primary">
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                    </h3>
                </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
               <CardFooter className="flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    {authorImage && <Avatar className="h-8 w-8">
                        <AvatarImage src={authorImage.imageUrl} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>}
                    <div>
                        <p className="text-sm font-semibold">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                </div>
                 <Button variant="ghost" size="icon" asChild>
                    <Link href={`/blogs/${post.slug}`}>
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
        )})}
      </div>

       <div className="mt-16 text-center">
            <Button variant="outline">Load More Articles</Button>
        </div>
    </div>
  );
}
