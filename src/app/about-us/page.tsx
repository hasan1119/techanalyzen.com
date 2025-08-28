"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TEAM = [
  {
    name: "Rokibul Hasan",
    role: "Founder & CEO",
    desc: "Visionary leader driving innovation and excellence.",
    img: "/hasan.jpeg",
  },
  {
    name: "Joy Sarkar",
    role: "COO",
    desc: "Ensuring smooth operations and client satisfaction.",
    img: "/joy.jpeg",
  },
  {
    name: "Dipto Das",
    role: "Head of Wellness",
    desc: "Championing healthcare and wellness initiatives.",
    img: "/dipto.jpeg",
  },
];

type TimelineYear = "2019" | "2020" | "2021" | "2022" | "2023" | "2024";

const timelineData: Record<TimelineYear, { desc: string }[]> = {
  "2019": [
    {
      desc: "Founded RX Group of Corporation, laying the foundation for innovation and growth.",
    },
    {
      desc: "Established our first office and began building a team of passionate professionals.",
    },
  ],
  "2020": [
    {
      desc: "2020 was a year of challenges and new beginnings. The world was hit by the COVID-19 pandemic, forcing us to delay entering our office until June.",
    },
    {
      desc: "Launched our first-ever Bootcamp, marking a significant milestone in our journey.",
    },
    {
      desc: "Introduced new frameworks and programs, officially welcoming students into our growing community.",
    },
    {
      desc: "Introduced new frameworks and programs, officially welcoming students into our growing community.",
    },
    {
      desc: "Introduced new frameworks and programs, officially welcoming students into our growing community.",
    },
    {
      desc: "Introduced new frameworks and programs, officially welcoming students into our growing community.",
    },
    {
      desc: "Introduced new frameworks and programs, officially welcoming students into our growing community.",
    },
    {
      desc: "Introduced new frameworks and programs, officially welcoming students into our growing community.",
    },
    {
      desc: "Introduced new frameworks and programs, officially welcoming students into our growing community.",
    },
    {
      desc: "Introduced new frameworks and programs, officially welcoming students into our growing community.",
    },
  ],
  "2021": [
    {
      desc: "Expanded our services and launched new initiatives, further establishing our presence in the industry.",
    },
    {
      desc: "Our team grew significantly, and we reached new milestones in client satisfaction and innovation.",
    },
  ],
  "2022": [
    {
      desc: "2022 brought further growth, with new partnerships and expanded offerings.",
    },
    {
      desc: "Focused on digital transformation and delivering value to our clients.",
    },
  ],
  "2023": [
    {
      desc: "Embraced new technologies and continued to innovate in 2023.",
    },
    {
      desc: "Launched several new products and services that set us apart in the market.",
    },
  ],
  "2024": [
    {
      desc: "2024: A year of transformation. Expanded our offerings and built new partnerships.",
    },
    {
      desc: "Successfully launched new products and services, marking another step closer to our vision.",
    },
  ],
};

export default function AboutPage() {
  const [selectedYear, setSelectedYear] = useState<TimelineYear>("2020");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<Record<TimelineYear, HTMLDivElement | null>>({
    "2019": null,
    "2020": null,
    "2021": null,
    "2022": null,
    "2023": null,
    "2024": null,
  });

  useEffect(() => {
    if (scrollContainerRef.current && yearRefs.current[selectedYear]) {
      const yearElement = yearRefs.current[selectedYear];
      scrollContainerRef.current.scrollTo({
        top: yearElement.offsetTop - scrollContainerRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [selectedYear]);

  return (
    <main className='bg-background text-foreground'>
      {/* Mission & Vision */}
      <section className='container py-16 lg:px-0 mx-auto'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
          From Vision to Impact
        </h1>
        <p className='text-muted-foreground text-lg max-w-2xl mx-auto text-center'>
          Every Step with You — RX Group of Corporation is your partner for
          growth, innovation, and excellence across industries.
        </p>
        <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-8 px-4 mt-10'>
          <div className='rounded-xl p-6 shadow-lg border bg-card'>
            <h2 className='text-2xl font-bold mb-2 text-primary'>
              Our Mission
            </h2>
            <p className='text-muted-foreground'>
              To empower businesses and communities by offering innovative
              solutions, fostering sustainable growth, and maintaining the
              highest standards of professionalism and ethics.
            </p>
          </div>
          <div className='rounded-xl p-6 shadow-lg border bg-card'>
            <h2 className='text-2xl font-bold mb-2 text-primary'>Our Vision</h2>
            <p className='text-muted-foreground'>
              To be a global leader recognized for our commitment to quality,
              customer satisfaction, and positive impact on society.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className='container py-16 lg:px-0 mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          Our Core Values
        </h2>
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4'>
          {[
            {
              icon: "🤝",
              title: "Integrity",
              desc: "We act with honesty and transparency in all we do.",
            },
            {
              icon: "🚀",
              title: "Innovation",
              desc: "We push boundaries and embrace new ideas.",
            },
            {
              icon: "🌍",
              title: "Community",
              desc: "We foster connections that empower and inspire.",
            },
            {
              icon: "🎯",
              title: "Excellence",
              desc: "We strive for quality in every aspect of our work.",
            },
          ].map((val) => (
            <div
              key={val.title}
              className='rounded-xl p-6 text-center border bg-card shadow-md hover:shadow-lg transition'>
              <div className='text-3xl mb-3'>{val.icon}</div>
              <div className='font-semibold'>{val.title}</div>
              <p className='text-muted-foreground text-sm mt-2'>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className='container py-16 lg:px-0 mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-6'>Who We Are</h2>
        <p className='text-muted-foreground text-center max-w-2xl mx-auto mb-10'>
          RX Group of Corporation is committed to igniting potential and
          empowering futures. Our mission goes beyond just providing services—we
          nurture careers and create a community where curiosity, ambition, and
          expertise flourish.
        </p>
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4'>
          {[
            {
              icon: "💡",
              title: "Lifelong Partner",
              desc: "We build lasting relationships and help our clients grow at every stage.",
            },
            {
              icon: "🛠️",
              title: "Tech-Ready",
              desc: "We deliver modern, scalable solutions for a digital world.",
            },
            {
              icon: "🌟",
              title: "Beyond Traditional",
              desc: "We challenge convention and drive positive change.",
            },
          ].map((val) => (
            <div
              key={val.title}
              className='rounded-xl p-6 text-center border bg-card shadow-md hover:shadow-lg transition'>
              <div className='text-3xl mb-3'>{val.icon}</div>
              <div className='font-semibold'>{val.title}</div>
              <p className='text-muted-foreground text-sm mt-2'>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey */}
      <section className='container py-16 lg:px-0 mx-auto'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-6'>Our Journey</h2>
          <p className='text-muted-foreground text-center max-w-2xl mx-auto mb-10'>
            From a small startup to a comprehensive solutions provider, our
            journey reflects our commitment to making quality services
            accessible to all.
          </p>
          <div className='flex flex-col md:flex-row gap-8'>
            <div className='flex flex-col gap-3 items-center md:items-start md:w-24'>
              {Object.keys(timelineData).map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year as TimelineYear)}
                  className={`rounded-full px-4 py-1 font-semibold text-sm cursor-pointer transition-all duration-300 w-full max-w-[100px] md:max-w-none ${
                    selectedYear === year
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}>
                  {year}
                </button>
              ))}
            </div>
            <div className='flex-1 relative'>
              <div className='border-l-2 border-primary/40 pl-8'>
                <div
                  ref={scrollContainerRef}
                  className='max-h-[400px] md:max-h-[500px] overflow-y-auto pr-4 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] scrollbar-hide'>
                  {(Object.keys(timelineData) as TimelineYear[]).map((year) => (
                    <div
                      key={year}
                      ref={(el) => {
                        yearRefs.current[year] = el;
                      }}
                      className='mb-8'>
                      <span className='sticky top-0 -left-10 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg -ml-10 mb-4'>
                        {year}
                      </span>
                      <div className='space-y-6'>
                        {timelineData[year].map((item, index) => (
                          <div
                            key={index}
                            className='bg-card rounded-xl p-6 border shadow-md transform transition-all duration-300 hover:shadow-lg animate-fadeIn'>
                            <div className='font-bold mb-2'>{year}</div>
                            <div className='text-muted-foreground text-sm'>
                              {item.desc}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className='container py-16 lg:px-0 mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-10'>Meet Our Team</h2>
        <div className='max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4'>
          {TEAM.map((member) => (
            <div
              key={member.name}
              className='rounded-xl p-6 text-center border bg-card shadow-md hover:shadow-lg transition flex flex-col items-center'>
              <Image
                width={100}
                height={100}
                src={member.img}
                alt={member.name}
                className='w-24 h-24 rounded-full object-cover mb-4 border-2 border-primary bg-white'
              />
              <div className='font-semibold text-lg'>{member.name}</div>
              <div className='text-primary text-sm mb-2'>{member.role}</div>
              <p className='text-muted-foreground text-sm'>{member.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
