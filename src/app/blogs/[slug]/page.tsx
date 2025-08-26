"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useMemo } from "react";

// Dummy blog data generator (copy from main blog page)
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
function generateBlog(idx) {
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
  const authorAvatar = `/logo-1.png`;
  return {
    id: idx,
    title: `Blog Post Title ${idx + 1}`,
    description: `This is a short summary of blog post number ${idx + 1}.`,
    author: `Author ${authorId}`,
    authorAvatar,
    date: `2025-08-${(idx % 28) + 1}`,
    image: `/logo-2.jpg`,
    badge,
    category,
    tags,
    popularity: 100 - idx * 2 + (idx % 7 === 0 ? 30 : 0),
    createdAt: new Date(2025, 7, (idx % 28) + 1, 12, 0, 0).getTime(),
  };
}

// Simple reading time estimator based on word count
function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default function BlogSinglePage() {
  // Simulate current blog info (in real app, get from params or fetch)
  const currentBlog = useMemo(() => generateBlog(0), []);
  // Recently added (upsell style)
  const recentlyAdded = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => generateBlog(i)).filter(
        (b) => b.badge === "Recently Added" && b.id !== currentBlog.id
      ),
    [currentBlog.id]
  );
  // Same category (upsell style)
  const sameCategory = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => generateBlog(i + 1)).filter(
        (b) => b.category === currentBlog.category && b.id !== currentBlog.id
      ),
    [currentBlog.category, currentBlog.id]
  );

  // Article content for reading time estimation
  const articleContent = `
    At RX Group of Corporation, we believe that innovation is the key to a brighter future. Our journey has been marked by a relentless pursuit of excellence, a commitment to our clients, and a passion for making a positive impact on society.
    The world is evolving rapidly, and so are we. From digital transformation to healthcare and wellness, our team is dedicated to staying ahead of the curve and delivering solutions that matter.
    To empower businesses and communities by offering innovative solutions, fostering sustainable growth, and maintaining the highest standards of professionalism and ethics.
    As we look to the future, RX Group remains committed to driving progress, embracing new technologies, and building lasting relationships with our partners and clients.
    Innovation distinguishes between a leader and a follower. – Steve Jobs
    Thank you for being part of our journey. Stay tuned for more updates, insights, and stories from RX Group of Corporation.
  `;
  const readingTime = estimateReadingTime(articleContent);

  return (
    <div className='container py-16 lg:px-0 mx-auto max-w-4xl px-4 sm:px-6'>
      <article className='bg-card rounded-xl shadow-lg border p-6 sm:p-8 mb-16'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight'>
          {currentBlog.title}
        </h1>
        <div className='flex items-center gap-4 mb-6'>
          <Image
            src={currentBlog.authorAvatar}
            alt='Author'
            width={48}
            height={48}
            className='rounded-full border-2 border-primary bg-white shadow-sm'
          />
          <div>
            <div className='font-semibold text-base sm:text-lg'>
              {currentBlog.author}
            </div>
            <div className='text-muted-foreground text-sm'>
              {currentBlog.date} • {readingTime} min read
            </div>
          </div>
        </div>
        <Image
          src={currentBlog.image}
          alt='Blog Cover'
          width={800}
          height={400}
          className='w-full h-64 sm:h-80 object-cover rounded-lg mb-8 shadow-md'
        />
        <div className='prose prose-lg max-w-none text-foreground'>
          <p>
            At RX Group of Corporation, we believe that innovation is the key to
            a brighter future. Our journey has been marked by a relentless
            pursuit of excellence, a commitment to our clients, and a passion
            for making a positive impact on society.
          </p>
          <h2 className='text-2xl sm:text-3xl font-semibold mt-8 mb-4'>
            Embracing Change
          </h2>
          <p>
            The world is evolving rapidly, and so are we. From digital
            transformation to healthcare and wellness, our team is dedicated to
            staying ahead of the curve and delivering solutions that matter.
          </p>
          <h2 className='text-2xl sm:text-3xl font-semibold mt-8 mb-4'>
            Our Mission
          </h2>
          <p>
            To empower businesses and communities by offering innovative
            solutions, fostering sustainable growth, and maintaining the highest
            standards of professionalism and ethics.
          </p>
          <h2 className='text-2xl sm:text-3xl font-semibold mt-8 mb-4'>
            Looking Ahead
          </h2>
          <p>
            As we look to the future, RX Group remains committed to driving
            progress, embracing new technologies, and building lasting
            relationships with our partners and clients.
          </p>
          <blockquote className='border-l-4 border-primary pl-4 italic text-lg my-6'>
            "Innovation distinguishes between a leader and a follower." – Steve
            Jobs
          </blockquote>
          <p>
            Thank you for being part of our journey. Stay tuned for more
            updates, insights, and stories from RX Group of Corporation.
          </p>
        </div>
      </article>

      {/* Recently Added Blogs */}
      {recentlyAdded.length > 0 && (
        <section className='mb-16'>
          <h3 className='text-2xl sm:text-3xl font-bold mb-6'>
            Recently Added
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {recentlyAdded.map((blog) => (
              <Card
                key={blog.id}
                className='transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-md pt-0'>
                <CardHeader className='p-0'>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className='w-full h-40 object-cover rounded-t-xl mb-2 shadow-sm'
                  />
                </CardHeader>
                <CardContent className='pt-2 flex-1 flex flex-col'>
                  <CardTitle className='text-lg mb-1 line-clamp-2'>
                    {blog.title}
                  </CardTitle>
                  <CardDescription className='mb-2'>
                    {blog.date}
                  </CardDescription>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    <span className='bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium'>
                      {blog.category}
                    </span>
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className='bg-muted text-muted-foreground px-2.5 py-1 rounded-full text-xs'>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className='text-sm text-foreground mb-3 line-clamp-2 flex-grow'>
                    {blog.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    href='#'
                    className='text-primary font-medium text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ml-auto'>
                    Read More
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Same Category Blogs */}
      {sameCategory.length > 0 && (
        <section className='mb-16'>
          <h3 className='text-2xl sm:text-3xl font-bold mb-6'>
            You May Also Like
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
            {sameCategory.slice(0, 4).map((blog) => (
              <Card
                key={blog.id}
                className='transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 w-full max-w-md pt-0'>
                <CardHeader className='p-0'>
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={200}
                    className='w-full h-40 object-cover rounded-t-xl mb-2 shadow-sm'
                  />
                </CardHeader>
                <CardContent className='pt-2 flex-1 flex flex-col'>
                  <CardTitle className='text-lg mb-1 line-clamp-2'>
                    {blog.title}
                  </CardTitle>
                  <CardDescription className='mb-2'>
                    {blog.date}
                  </CardDescription>
                  <div className='flex flex-wrap gap-2 mb-2'>
                    <span className='bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium'>
                      {blog.category}
                    </span>
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className='bg-muted text-muted-foreground px-2.5 py-1 rounded-full text-xs'>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className='text-sm text-foreground mb-3 line-clamp-2 flex-grow'>
                    {blog.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <a
                    href='#'
                    className='text-primary font-medium text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ml-auto'>
                    Read More
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
