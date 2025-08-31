"use client";

import Container from "@/common/Container";
import SectionTitle from "@/common/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Briefcase, Code, Globe } from "lucide-react";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  subsets: ["latin"],
});

const SERVICES = [
  {
    icon: <Briefcase className="w-[70px] h-[70px]" />,
    title: "Custom Website Design & Development",
    description:
      "Responsive, user-friendly, and SEO-optimized websites tailored to your business needs.",
    darkStyle: {
      icon: "text-[#7FCA1B]",
      card: "dark:border-[#133601] bg-gradient-to-r from-[#E6EFFF] to-[#FFFFFF] border-transparent dark:bg-gradient-to-b dark:from-[rgba(19,55,0,0.12)] dark:to-[#133700]",
    },
  },
  {
    icon: <Globe className="w-[70px] h-[70px]" />,
    title: "E-Commerce Solutions",
    description:
      "Scalable online stores with secure payment gateways, inventory management, and order tracking.",
    darkStyle: {
      icon: "text-[#4C54FB]",
      card: "dark:border-[#001B6B] bg-gradient-to-r from-[#E6EFFF] to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[rgba(0,26,104,0.12)] dark:to-[#001A68]",
    },
  },
  {
    icon: <Code className="w-[70px] h-[70px]" />,
    title: "Website Maintenance & Support",
    description:
      "Keep your website updated, secure, and optimized with ongoing support and performance monitoring.",
    darkStyle: {
      icon: "text-[#C347FF]",
      card: "dark:border-[#530047] bg-gradient-to-r from-[#E6EFFF] to-[#FFFFFF] dark:bg-gradient-to-b dark:from-[rgba(86,0,73,0.12)] dark:to-[#560049]",
    },
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="gradient-primary border-t">
      <Container>
        <div className="w-full py-18 px-4 md:px-8 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <SectionTitle>What We Do</SectionTitle>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card
                  className={clsx(
                    "flex flex-col items-start justify-between h-[300px] rounded-[31px] border transition-transform hover:scale-105 hover:shadow-lg duration-200",
                    service.darkStyle.card,
                  )}
                >
                  <CardHeader className="w-full items-start flex flex-col space-y-4">
                    <div className={clsx(service.darkStyle.icon)}>
                      {service.icon}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardTitle className={`text-2xl mb-3 ${figtree.className}`}>
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-base">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
