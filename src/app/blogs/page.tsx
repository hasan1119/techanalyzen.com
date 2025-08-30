"use client";

import AdUnit from "@/components/AdUnit";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MultiSelect } from "@/components/ui/multi-select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import {
  Calendar,
  Filter,
  LayoutGrid,
  ListIcon,
  Megaphone,
  Search as SearchIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

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
  let badge = "";
  if (idx < 3) badge = "Recently Added";
  else if (idx % 7 === 0) badge = "Most Popular";
  else if (idx % 5 === 0) badge = "Trending";
  const category = CATEGORIES[idx % CATEGORIES.length];
  const tags = Array.from(
    { length: 2 + (idx % 2) },
    (_, i) => TAGS[(idx + i) % TAGS.length]
  );
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
    popularity: 100 - idx * 2 + (idx % 7 === 0 ? 30 : 0),
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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [dateFilter, setDateFilter] = useState<
    "all" | "week" | "month" | "custom"
  >("all");
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to?: Date | undefined;
  }>({ from: undefined, to: undefined });
  const [sortBy, setSortBy] = useState<
    "relevance" | "date" | "popularity" | "rating"
  >("relevance");
  const loader = useRef<HTMLDivElement | null>(null);

  // Memoize loadMore to prevent unnecessary re-renders
  const loadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const next = blogs.length;
      const newBlogs = Array.from({ length: PAGE_SIZE }, (_, i) =>
        generateBlog(next + i)
      );
      setBlogs((prev) => [...prev, ...newBlogs]);
      setHasMore(blogs.length + newBlogs.length < 60);
      setLoading(false);
    }, 1200);
  }, [blogs.length]);

  useEffect(() => {
    loadMore();
  }, [loadMore]);

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
  }, [loading, hasMore, loadMore]);

  let filteredBlogs = blogs.filter(
    (blog) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(blog.category)) &&
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

  if (dateFilter !== "all") {
    const now = new Date("2025-08-27T22:00:00+06:00");
    let start: number;
    if (dateFilter === "week") {
      start = now.getTime() - 7 * 24 * 60 * 60 * 1000;
      filteredBlogs = filteredBlogs.filter(
        (blog) => (blog.createdAt || 0) >= start
      );
    } else if (dateFilter === "month") {
      start = now.getTime() - 30 * 24 * 60 * 60 * 1000;
      filteredBlogs = filteredBlogs.filter(
        (blog) => (blog.createdAt || 0) >= start
      );
    } else if (dateFilter === "custom" && dateRange.from && dateRange.to) {
      const startTime = dateRange.from.getTime();
      const endTime = dateRange.to.getTime();
      filteredBlogs = filteredBlogs.filter(
        (blog) =>
          (blog.createdAt || 0) >= startTime && (blog.createdAt || 0) <= endTime
      );
    }
  }

  if (sortBy === "date") {
    filteredBlogs.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  } else if (sortBy === "popularity") {
    filteredBlogs.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  } else if (sortBy === "rating") {
    filteredBlogs.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
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
        <div className='flex flex-wrap items-center justify-center sm:justify-end gap-4'>
          <div className='flex items-center gap-2 flex-col sm:flex-row w-full sm:w-auto'>
            <div className='w-full sm:w-auto flex-1 flex items-center gap-2'>
              <div className='relative flex items-center w-full sm:w-64 md:w-72'>
                <div className='relative w-full md:w-72'>
                  <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'>
                    <SearchIcon className='size-4' />
                  </span>
                  <input
                    type='text'
                    placeholder='Search blog posts...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='border rounded-md pl-10 pr-4 py-2 w-full focus:ring-primary focus:outline-none outline-none focus:ring-0 ring-0 shadow-none border-gray-300'
                  />
                </div>
              </div>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='outline'
                  className='border-gray-700 w-full sm:w-auto'>
                  <Filter className='mr-2 h-4 w-4' /> Filters
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-80 p-4 border shadow'>
                <div className='space-y-4'>
                  <div>
                    <MultiSelect
                      options={CATEGORIES}
                      selected={selectedCategories}
                      onChange={setSelectedCategories}
                      placeholder='Select categories...'
                      searchPlaceholder='Search categories...'
                      key={selectedCategories.join(",")}
                      label='Categories'
                    />
                  </div>
                  <div>
                    <h3 className='text-sm font-semibold mb-2'>Date Filter</h3>
                    <div className='space-y-2'>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='all-dates'
                          checked={dateFilter === "all"}
                          onCheckedChange={(checked) =>
                            checked && setDateFilter("all")
                          }
                        />
                        <label htmlFor='all-dates' className='text-sm'>
                          All Dates
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='last-week'
                          checked={dateFilter === "week" && !dateRange.from}
                          onCheckedChange={(checked) =>
                            checked && setDateFilter("week")
                          }
                        />
                        <label htmlFor='last-week' className='text-sm'>
                          Last Week
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='last-month'
                          checked={dateFilter === "month" && !dateRange.from}
                          onCheckedChange={(checked) =>
                            checked && setDateFilter("month")
                          }
                        />
                        <label htmlFor='last-month' className='text-sm'>
                          Last Month
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='custom'
                          checked={dateFilter === "custom"}
                          onCheckedChange={(checked) =>
                            checked && setDateFilter("custom")
                          }
                        />
                        <label htmlFor='custom' className='text-sm'>
                          Custom Range
                        </label>
                      </div>
                      {dateFilter === "custom" && (
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant='outline'
                              className='w-full justify-start text-left font-normal border-gray-700'>
                              <Calendar className='mr-2 h-4 w-4' />
                              {dateRange.from && dateRange.to ? (
                                `${format(dateRange.from, "PPP")} - ${format(
                                  dateRange.to,
                                  "PPP"
                                )}`
                              ) : (
                                <span>Pick a date range</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className='w-auto p-0 border-gray-700'>
                            <CalendarComponent
                              mode='range'
                              selected={dateRange}
                              onSelect={(range) =>
                                setDateRange(
                                  range ?? { from: undefined, to: undefined }
                                )
                              }
                              initialFocus
                              captionLayout='dropdown'
                              className='bg-gray-800'
                            />
                          </PopoverContent>
                        </Popover>
                      )}
                    </div>
                  </div>
                  <div>
                    <h3 className='text-sm font-semibold mb-2'>Filter by</h3>
                    <div className='space-y-2'>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='all'
                          checked={filter === "all"}
                          onCheckedChange={(checked) =>
                            checked && setFilter("all")
                          }
                        />
                        <label htmlFor='all' className='text-sm'>
                          All
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='recent'
                          checked={filter === "recent"}
                          onCheckedChange={(checked) =>
                            checked && setFilter("recent")
                          }
                        />
                        <label htmlFor='recent' className='text-sm'>
                          Recently Added
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='popular'
                          checked={filter === "popular"}
                          onCheckedChange={(checked) =>
                            checked && setFilter("popular")
                          }
                        />
                        <label htmlFor='popular' className='text-sm'>
                          Most Popular
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='trending'
                          checked={filter === "trending"}
                          onCheckedChange={(checked) =>
                            checked && setFilter("trending")
                          }
                        />
                        <label htmlFor='trending' className='text-sm'>
                          Trending
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className='text-sm font-semibold mb-2'>Sort by</h3>
                    <div className='space-y-2'>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='sort-relevance'
                          checked={sortBy === "relevance"}
                          onCheckedChange={(checked) =>
                            checked && setSortBy("relevance")
                          }
                        />
                        <label htmlFor='sort-relevance' className='text-sm'>
                          Relevance
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='sort-date'
                          checked={sortBy === "date"}
                          onCheckedChange={(checked) =>
                            checked && setSortBy("date")
                          }
                        />
                        <label htmlFor='sort-date' className='text-sm'>
                          Date
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='sort-popularity'
                          checked={sortBy === "popularity"}
                          onCheckedChange={(checked) =>
                            checked && setSortBy("popularity")
                          }
                        />
                        <label htmlFor='sort-popularity' className='text-sm'>
                          Popularity
                        </label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Checkbox
                          id='sort-rating'
                          checked={sortBy === "rating"}
                          onCheckedChange={(checked) =>
                            checked && setSortBy("rating")
                          }
                        />
                        <label htmlFor='sort-rating' className='text-sm'>
                          Rating
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
            <Button
              variant='outline'
              className='border-gray-700 w-full sm:w-auto'
              onClick={() => setLayout("grid")}
              aria-label='Grid view'>
              <LayoutGrid className='mr-2 h-4 w-4' /> Grid
            </Button>
            <Button
              variant='outline'
              className='border-gray-700 w-full sm:w-auto'
              onClick={() => setLayout("list")}
              aria-label='List view'>
              <ListIcon className='mr-2 h-4 w-4' /> List
            </Button>
          </div>
        </div>
      </div>
      <div className='flex w-full'>
        <div className='hidden lg:flex flex-col items-center mr-6 w-48'>
          <AdUnit slotId='5262155604' className='my-6' />
        </div>
        <div
          className={
            layout === "grid"
              ? "grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 flex-1"
              : "flex flex-col gap-8 flex-1"
          }>
          {filteredBlogs.map((blog, index) => {
            const largeCard = layout === "grid" && Math.random() < 0.18;
            const colSpan = largeCard
              ? Math.random() < 0.5
                ? "lg:col-span-2"
                : "xl:col-span-3"
              : "";
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
                  <div className='w-full h-48 sm:w-40 sm:h-36 flex-shrink-0'>
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
