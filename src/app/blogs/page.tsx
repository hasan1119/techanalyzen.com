"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Filter as FilterIcon,
  LayoutGrid,
  List as ListIcon,
  Megaphone,
  Search as SearchIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

// Dummy blog data generator
const CATEGORIES = ["Tech", "Business", "Health", "Travel", "Lifestyle"];
const TAGS = [
  "React",
  "Next.js",
  "AI",
  "Startup",
  "Wellness",
  "Remote",
  "Finance",
  "Adventure",
  "Tips",
  "Design",
];
function generateBlog(idx: number) {
  // Assign badge and popularity for demo
  let badge = "";
  if (idx < 3) badge = "Recently Added";
  else if (idx % 7 === 0) badge = "Most Popular";
  else if (idx % 5 === 0) badge = "Trending";
  // Assign category and tags
  const category = CATEGORIES[idx % CATEGORIES.length];
  const tags = Array.from(
    { length: 2 + (idx % 2) },
    (_, i) => TAGS[(idx + i) % TAGS.length]
  );
  // Use a unique avatar for each author (using DiceBear Avatars for demo)
  const authorId = (idx % 5) + 1;
  const authorAvatar = `https://placehold.co/400x240/FFFFFF/000000.png`;
  return {
    id: idx,
    title: `Blog Post Title ${idx + 1}`,
    description: `This is a short summary of blog post number ${idx + 1}.`,
    author: `Author ${authorId}`,
    authorAvatar,
    date: `2025-08-${(idx % 28) + 1}`,
    image: `https://placehold.co/400x240/FFFFFF/000000.png`,
    badge,
    category,
    tags,
    popularity: 100 - idx * 2 + (idx % 7 === 0 ? 30 : 0), // for demo sorting
    createdAt: new Date(2025, 7, (idx % 28) + 1, 12, 0, 0).getTime(),
  };
}

const PAGE_SIZE = 6;

export default function BlogPage() {
  interface Blog {
    id: number;
    title: string;
    description: string;
    author: string;
    authorAvatar: string;
    date: string;
    image: string;
    badge?: string;
    category: string;
    tags: string[];
    popularity?: number;
    createdAt?: number;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [filter, setFilter] = useState<
    "all" | "recent" | "popular" | "trending"
  >("all");
  const [category, setCategory] = useState<string>("all");
  const loader = useRef<HTMLDivElement | null>(null);

  // Load initial blogs
  useEffect(() => {
    loadMore();
    // eslint-disable-next-line
  }, []);

  // Infinite scroll observer
  useEffect(() => {
    if (!loader.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          loadMore();
        }
      },
      { threshold: 1 }
    );
    observer.observe(loader.current);
    return () => observer.disconnect();
    // eslint-disable-next-line
  }, [loading, hasMore]);

  function loadMore() {
    setLoading(true);
    setTimeout(() => {
      const next = blogs.length;
      const newBlogs = Array.from({ length: PAGE_SIZE }, (_, i) =>
        generateBlog(next + i)
      );
      setBlogs((prev) => [...prev, ...newBlogs]);
      setHasMore(blogs.length + newBlogs.length < 60); // Limit to 60 for demo
      setLoading(false);
    }, 1200);
  }

  // Filter and sort blogs
  let filteredBlogs = blogs.filter(
    (blog) =>
      (category === "all" || blog.category === category) &&
      (blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.description.toLowerCase().includes(search.toLowerCase()))
  );
  if (filter === "recent") {
    filteredBlogs = filteredBlogs
      .filter((b) => b.badge === "Recently Added")
      .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  } else if (filter === "popular") {
    filteredBlogs = filteredBlogs
      .filter((b) => b.badge === "Most Popular")
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  } else if (filter === "trending") {
    filteredBlogs = filteredBlogs
      .filter((b) => b.badge === "Trending")
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  }

  return (
    <section className='container min-h-[80vh] py-16 px-4 md:px-8 lg:px-0 mx-auto'>
      <div className='mb-8'>
        <h1 className='text-4xl md:text-5xl font-bold text-center mb-4'>
          Blog
        </h1>
        <p className='text-muted-foreground text-lg max-w-2xl mx-auto mb-6 text-center'>
          Insights, stories, and updates from RX Group of Corporation.
        </p>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-4'>
          {/* Search left */}
          <div className='w-full lg:w-auto flex-1 flex items-center gap-2'>
            <div className='relative w-full md:w-72'>
              <span className='absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground'>
                <SearchIcon className='size-4' />
              </span>
              <input
                type='text'
                placeholder='Search blog posts...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='border rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary'
              />
            </div>
          </div>
          {/* Category, filter, and layout right */}
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className='w-40'>
                <span className='mr-2'>Category</span>
                <SelectValue placeholder='Category' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All</SelectItem>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={filter}
              onValueChange={(v) =>
                setFilter(v as "all" | "recent" | "popular" | "trending")
              }>
              <SelectTrigger className='w-44'>
                <FilterIcon className='size-4 mr-2' />
                <SelectValue placeholder='Filter by' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All</SelectItem>
                <SelectItem value='recent'>Recently Added</SelectItem>
                <SelectItem value='popular'>Most Popular</SelectItem>
                <SelectItem value='trending'>Trending</SelectItem>
              </SelectContent>
            </Select>
            <button
              className={`px-3 py-2 rounded-md border text-sm font-medium transition-colors flex items-center gap-1 ${
                layout === "grid"
                  ? "bg-primary text-white"
                  : "bg-background text-foreground"
              }`}
              onClick={() => setLayout("grid")}
              aria-label='Grid view'>
              <LayoutGrid className='size-4' />
            </button>
            <button
              className={`px-3 py-2 rounded-md border text-sm font-medium transition-colors flex items-center gap-1 ${
                layout === "list"
                  ? "bg-primary text-white"
                  : "bg-background text-foreground"
              }`}
              onClick={() => setLayout("list")}
              aria-label='List view'>
              <ListIcon className='size-4' />
            </button>
          </div>
        </div>
      </div>
      <div className='flex w-full'>
        {/* Left Ad (large screens only) */}
        <div className='hidden lg:flex flex-col items-center mr-6 w-48'>
          <Card className='mb-8 flex flex-col items-center justify-center h-64 bg-muted/50 w-full'>
            <Megaphone className='mb-2 text-primary' size={32} />
            <span className='font-semibold text-lg'>Advertisement</span>
            <span className='text-xs text-muted-foreground'>Your ad here</span>
          </Card>
        </div>
        {/* Blog grid/list with possible middle ad */}
        <div
          className={
            layout === "grid"
              ? "grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 flex-1"
              : "flex flex-col gap-8 flex-1"
          }>
          {filteredBlogs.map((blog, index) => {
            // Randomly select some indices for large cards and ads
            const largeCard = layout === "grid" && Math.random() < 0.18; // ~18% chance
            const colSpan = largeCard
              ? Math.random() < 0.5
                ? "lg:col-span-2"
                : "xl:col-span-3"
              : "";
            // Randomly show a horizontal ad (10% chance, not at index 0)
            const showMiddleAd =
              layout === "grid" && index > 0 && Math.random() < 0.1;
            return (
              <React.Fragment key={index}>
                {showMiddleAd && (
                  <Card
                    key={`ad-middle-${blog.id}`}
                    className='col-span-full flex flex-col items-center justify-center h-32 bg-muted/50'>
                    <Megaphone className='mb-1 text-primary' size={24} />
                    <span className='font-semibold'>
                      Sponsored Advertisement
                    </span>
                  </Card>
                )}
                {layout === "grid" ? (
                  <Card
                    key={blog.id}
                    className={`flex flex-col h-full shadow-md border hover:shadow-xl transition-shadow duration-200 pt-0 ${colSpan}`}>
                    <Link href={`/blogs/${blog.id}`}>
                      <CardHeader className='p-0 relative'>
                        <Image
                          width={400}
                          height={240}
                          src={blog.image}
                          alt={blog.title}
                          className='w-full h-48 object-cover rounded-t-xl'
                          loading='lazy'
                        />
                        {blog.badge && (
                          <Badge className='absolute top-3 left-3 shadow'>
                            {blog.badge}
                          </Badge>
                        )}
                      </CardHeader>
                      <CardContent className='pt-4 flex-1 flex flex-col'>
                        <div className='flex flex-wrap gap-2 mb-2'>
                          <Badge variant='secondary' className=''>
                            {blog.category}
                          </Badge>
                          {blog.tags.map((tag) => (
                            <Badge key={tag} variant='outline' className=''>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className='text-xl font-semibold mb-1'>
                          {blog.title}
                        </CardTitle>
                        <CardDescription className='mb-2 text-base text-muted-foreground'>
                          {blog.description}
                        </CardDescription>
                        <div className='mt-auto flex items-center justify-between text-xs text-muted-foreground'>
                          <span className='flex items-center gap-2'>
                            <Image
                              src={blog.authorAvatar}
                              alt={blog.author}
                              width={24}
                              height={24}
                              className='rounded-full border bg-white w-6 h-6'
                            />
                            {blog.author}
                          </span>
                          <span>{blog.date}</span>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ) : (
                  <Link href={`/blogs/${blog.id}`}>
                    <Card
                      key={blog.id}
                      className='flex flex-col sm:flex-row items-start sm:items-center shadow-md border hover:shadow-xl transition-shadow duration-200 py-0'>
                      <div className='flex-shrink-0 relative'>
                        <Image
                          width={160}
                          height={112}
                          src={blog.image}
                          alt={blog.title}
                          className='w-full h-48 sm:h-full object-cover rounded-t-xl sm:rounded-t-none sm:rounded-l-xl'
                          loading='lazy'
                        />
                        {blog.badge && (
                          <Badge className='absolute top-2 left-2 shadow'>
                            {blog.badge}
                          </Badge>
                        )}
                      </div>
                      <CardContent className='flex-1 flex flex-col py-4 px-4 sm:px-6 w-full'>
                        <div className='flex flex-wrap gap-2 mb-2'>
                          <Badge variant='secondary'>{blog.category}</Badge>
                          {blog.tags.map((tag) => (
                            <Badge key={tag} variant='outline'>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <CardTitle className='text-lg font-semibold mb-1'>
                          {blog.title}
                        </CardTitle>
                        <CardDescription className='mb-2 text-base text-muted-foreground'>
                          {blog.description}
                        </CardDescription>
                        <div className='mt-auto flex items-center justify-between text-xs text-muted-foreground'>
                          <span className='flex items-center gap-2'>
                            <Image
                              src={blog.authorAvatar}
                              alt={blog.author}
                              width={24}
                              height={24}
                              className='rounded-full border bg-white w-6 h-6'
                            />
                            {blog.author}
                          </span>
                          <span>{blog.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
          {loading &&
            Array.from({ length: PAGE_SIZE }).map((_, idx) =>
              layout === "grid" ? (
                <Card
                  key={"skeleton-" + idx}
                  className='flex flex-col h-full shadow-md border pt-0'>
                  <CardHeader className='p-0'>
                    <Skeleton className='w-full h-48 rounded-t-xl' />
                  </CardHeader>
                  <CardContent className='pt-4 flex-1 flex flex-col'>
                    <Skeleton className='h-6 w-3/4 mb-2' />
                    <Skeleton className='h-4 w-full mb-4' />
                    <div className='mt-auto flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <Skeleton className='h-6 w-6 rounded-full' />
                        <Skeleton className='h-4 w-16' />
                      </div>
                      <Skeleton className='h-4 w-12' />
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card
                  key={"skeleton-" + idx}
                  className='flex flex-col sm:flex-row items-start sm:items-center shadow-md border py-0'>
                  <div className='w-full h-48 sm:w-40 sm:h-36 flex-shrink-0 '>
                    <Skeleton className='w-full h-full rounded-t-xl sm:rounded-t-none sm:rounded-l-xl' />
                  </div>
                  <CardContent className='flex-1 flex flex-col py-4 px-4 sm:px-6 w-full'>
                    <div className='flex flex-wrap gap-2 mb-2'>
                      <Skeleton className='h-6 w-16' />
                      <Skeleton className='h-6 w-12' />
                      <Skeleton className='h-6 w-14' />
                    </div>
                    <Skeleton className='h-6 w-3/4 mb-1' />
                    <Skeleton className='h-4 w-full mb-4' />
                    <div className='mt-auto flex items-center justify-between text-xs'>
                      <div className='flex items-center gap-2'>
                        <Skeleton className='h-6 w-6 rounded-full' />
                        <Skeleton className='h-4 w-16' />
                      </div>
                      <Skeleton className='h-4 w-12' />
                    </div>
                  </CardContent>
                </Card>
              )
            )}
        </div>
        {/* Right Ad (large screens only) */}
        <div className='hidden lg:flex flex-col items-center ml-6 w-48'>
          <Card className='mb-8 flex flex-col items-center justify-center h-64 bg-muted/50 w-full'>
            <Megaphone className='mb-2 text-primary' size={32} />
            <span className='font-semibold text-lg'>Advertisement</span>
            <span className='text-xs text-muted-foreground'>Your ad here</span>
          </Card>
        </div>
      </div>
      <div ref={loader} className='h-8' />
      {!hasMore && (
        <div className='text-center text-muted-foreground mt-8 text-sm'>
          No more blog posts to load.
        </div>
      )}
    </section>
  );
}
