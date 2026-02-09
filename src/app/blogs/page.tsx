'use client';

import { useState } from "react";
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
import { blogPosts } from "@/lib/blogs";

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const categories = ["All", "AI/ML", "Data Analysis", "Emerging Tech", "Security", "Career"];

const INITIAL_POST_COUNT = 3;

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(INITIAL_POST_COUNT);

  const featuredPost = blogPosts.find(p => p.featured);

  const filteredPosts = blogPosts.filter(post => {
    const isInCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return !post.featured && isInCategory && matchesSearch;
  });

  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-7xl mb-6">
          QuantumPod <span className="text-primary italic">Insights</span>
        </h1>
        <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto font-medium italic">
          Deep dives into the architectures, methodologies, and careers shaping the future of computation.
        </p>
      </div>

      <div className="mb-12 flex flex-col items-center gap-6 md:flex-row justify-center">
        <div className="relative w-full max-w-sm">
          <Input
            placeholder="Search articles..."
            className="pl-10 h-12 rounded-xl"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? 'default' : 'outline'}
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(INITIAL_POST_COUNT);
              }}
              className="rounded-full px-6"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {featuredPost && (
        <Card className="mb-16 grid grid-cols-1 overflow-hidden md:grid-cols-2 border-none shadow-2xl bg-slate-50 relative group">
          <Link href={`/blogs/${featuredPost.slug}`} className="absolute inset-0 z-30" aria-label={featuredPost.title} />
          <div className="relative h-64 w-full md:h-auto overflow-hidden">
            {getImage(featuredPost.postImageId) && (
              <Image
                src={getImage(featuredPost.postImageId)!.imageUrl}
                alt={featuredPost.title}
                fill
                unoptimized={true}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={featuredPost.postImageId}
              />
            )}
          </div>
          <div className="flex flex-col p-10 justify-center">
            <div className="z-20">
              <Badge className="mb-6 w-fit uppercase tracking-widest text-[10px] py-1 px-3">{featuredPost.category}</Badge>
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight group-hover:text-primary transition-colors">{featuredPost.title}</h2>
              <p className="mb-8 text-lg text-slate-600 leading-relaxed font-medium italic">{featuredPost.excerpt}</p>
            </div>
            <div className="flex items-center justify-between z-20">
              <div className="flex items-center gap-4">
                {getImage(featuredPost.authorImageId) && <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                  <div className="relative h-full w-full">
                    <Image
                      src={getImage(featuredPost.authorImageId)?.imageUrl || ""}
                      alt={featuredPost.author}
                      fill
                      unoptimized={true}
                      className="object-cover"
                    />
                  </div>
                </Avatar>}
                <div>
                  <p className="font-bold text-slate-900">{featuredPost.author}</p>
                  <p className="text-sm text-slate-500 font-bold">{featuredPost.date}</p>
                </div>
              </div>
              <div className="flex items-center text-primary font-bold group-hover:translate-x-1 transition-transform">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>
        </Card>
      )}


      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {displayedPosts.map((post) => {
          const postImage = getImage(post.postImageId);
          const authorImage = getImage(post.authorImageId);
          return (
            <Card key={post.slug} className="group flex flex-col overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative">
              <Link href={`/blogs/${post.slug}`} className="absolute inset-0 z-30" aria-label={post.title} />
              {postImage && <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={postImage.imageUrl}
                  alt={post.title}
                  data-ai-hint={postImage.id}
                  fill
                  unoptimized={true}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="secondary" className="backdrop-blur-md bg-white/20 text-white border-none text-[9px] uppercase tracking-widest">{post.category}</Badge>
                </div>
              </div>}
              <CardHeader className="pt-6 z-20">
                <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-grow z-20">
                <p className="text-slate-500 line-clamp-3 font-medium leading-relaxed italic">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-slate-50 pt-6 z-20">
                <div className="flex items-center gap-3">
                  {authorImage && <Avatar className="h-10 w-10">
                    <div className="relative h-full w-full">
                      <Image
                        src={authorImage.imageUrl}
                        alt={post.author}
                        fill
                        unoptimized={true}
                        className="object-cover"
                      />
                    </div>
                  </Avatar>}
                  <div>
                    <p className="text-sm font-black text-slate-800">{post.author}</p>
                    <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{post.date}</p>
                  </div>
                </div>
                <div className="rounded-full bg-slate-100 p-2 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      {filteredPosts.length === 0 && !featuredPost && (
        <div className="mt-16 text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
          <p className="text-xl font-bold text-slate-400">No matching articles found.</p>
          <Button variant="link" className="mt-2" onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>Clear All Filters</Button>
        </div>
      )}

      {hasMore && (
        <div className="mt-20 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={handleLoadMore}
            className="h-14 px-10 rounded-full font-bold border-2 hover:bg-slate-50 transition-all"
          >
            Load More Insights
          </Button>
        </div>
      )}
    </div>
  );
}
