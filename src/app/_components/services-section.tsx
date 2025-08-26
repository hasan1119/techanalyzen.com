"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Globe, Users } from "lucide-react";

const SERVICES = [
  {
    icon: <Briefcase className='w-8 h-8 text-primary' />,
    title: "Business Consulting",
    description:
      "Expert advice to help your business grow, optimize operations, and achieve your goals.",
  },
  {
    icon: <Code className='w-8 h-8 text-primary' />,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your needs, from web apps to enterprise systems.",
  },
  {
    icon: <Globe className='w-8 h-8 text-primary' />,
    title: "Digital Marketing",
    description:
      "Boost your online presence with SEO, social media, and targeted digital campaigns.",
  },
  {
    icon: <Users className='w-8 h-8 text-primary' />,
    title: "Team Training",
    description:
      "Upskill your workforce with workshops and training sessions led by industry experts.",
  },
];

export function ServicesSection() {
  return (
    <section className='w-full py-16 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Services</h2>
        <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
          Discover the wide range of services we offer to help your business
          succeed in a digital world.
        </p>
      </div>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
        {SERVICES.map((service) => (
          <Card
            key={service.title}
            className='flex flex-col items-center transition-transform hover:scale-105 hover:shadow-lg duration-200'>
            <CardHeader className='flex flex-col items-center space-y-4'>
              {service.icon}
              <CardTitle className='text-xl text-center'>
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground text-center text-base'>
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
