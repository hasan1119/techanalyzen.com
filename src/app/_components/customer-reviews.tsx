"use client";

import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const REVIEWS = [
  {
    name: "Jane Doe",
    role: "CEO, Acme Corp",
    review:
      "RX Group helped us transform our business. Their team is professional, responsive, and truly cares about our success.",
    rating: 5,
  },
  {
    name: "John Smith",
    role: "CTO, Techify",
    review:
      "The software solutions delivered were top-notch and on time. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Marketing Lead, Brandly",
    review:
      "Their digital marketing expertise boosted our online presence and sales. Great experience working with RX Group.",
    rating: 4,
  },
  {
    name: "Carlos Ruiz",
    role: "Operations Manager, GlobalBiz",
    review:
      "Professional, reliable, and innovative. RX Group exceeded our expectations in every way.",
    rating: 5,
  },
  {
    name: "Ava Patel",
    role: "Founder, Startly",
    review:
      "The team at RX Group is creative and dedicated. They delivered beyond our expectations.",
    rating: 5,
  },
  {
    name: "Liam Nguyen",
    role: "Product Manager, InnovateX",
    review:
      "Great communication and results. Our product launch was a success thanks to RX Group.",
    rating: 4,
  },
  {
    name: "Sophia Lee",
    role: "HR Lead, PeopleFirst",
    review:
      "Their training sessions were engaging and effective. Our team learned a lot!",
    rating: 5,
  },
  {
    name: "Noah Kim",
    role: "COO, MarketMakers",
    review:
      "We saw measurable improvements in our operations after working with RX Group.",
    rating: 4,
  },
  {
    name: "Mia Garcia",
    role: "Designer, Creativa",
    review:
      "Loved the attention to detail and the collaborative approach. Highly recommend!",
    rating: 5,
  },
  {
    name: "Ethan Brown",
    role: "Lead Dev, CodeWorks",
    review:
      "Their developers are top-tier. The code quality and support were excellent.",
    rating: 5,
  },
];

export function CustomerReviews() {
  return (
    <section className='w-full py-16 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Customer Reviews
        </h2>
        <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
          Hear what our clients have to say about working with RX Group.
        </p>
      </div>
      <div className='relative flex items-center justify-center'>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{ align: "start", loop: true }}
          className='w-full max-w-5xl'>
          <CarouselContent>
            {REVIEWS.map((review, idx) => (
              <CarouselItem key={idx} className='sm:basis-1/2 md:basis-1/3'>
                <Card className='bg-card border rounded-xl shadow-sm p-8 flex flex-col items-center h-full'>
                  <CardContent className='flex flex-col items-center p-0'>
                    {/* Rating */}
                    <div className='flex gap-1 mb-2'>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-5 h-5 text-yellow-400 fill-yellow-400'
                        />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className='w-5 h-5 text-muted-foreground'
                        />
                      ))}
                    </div>
                    {/* Review */}
                    <blockquote className='text-lg italic text-center mb-4'>
                      “{review.review}”
                    </blockquote>
                    {/* Reviewer */}
                    <div className='font-semibold text-primary text-base'>
                      {review.name}
                    </div>
                    <div className='text-muted-foreground text-sm'>
                      {review.role}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
