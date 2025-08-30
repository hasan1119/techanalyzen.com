"use client";

import Container from "@/common/Container";
import SectionTitle from "@/common/SectionTitle";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Figtree, Unbounded } from "next/font/google";
import Image from "next/image";

const unbounded = Unbounded({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-unbounded",
  subsets: ["latin"],
});

const figtree = Figtree({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  subsets: ["latin"],
});

const projects = [
  {
    title: "Project 1",
    description: "Project was about precision and information.",
    image: "/project.jpg", // your image path
  },
  {
    title: "Project 2",
    description: "Best translation and messaging app designed to simplify.",
    image: "/project.jpg",
  },
  {
    title: "Project 3",
    description: "Best translation and messaging app designed to simplify.",
    image: "/project.jpg",
  },
  {
    title: "Project 4",
    description: "Best translation and messaging app designed to simplify.",
    image: "/project.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

const OurProjectsSection = () => {
  return (
    <section className="relative border-t">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/10 to-transparent"></div>
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/10 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20 opacity-30 blur-3xl"></div>
      <Container>
        <div className="w-full py-16 px-4 md:px-8 lg:px-0">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-center mb-12"
            >
              <SectionTitle>Our Recent Project</SectionTitle>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
              >
                <Card className="group pt-9 pb-0 pl-9 pr-9 h-[434px] inset-0 bg-[#39b6501a] relative overflow-hidden rounded-xl border-0 shadow-none">
                  {/* Image */}
                  <div className="relative h-full w-full mx-auto overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute bottom-0 group-hover:bottom-[33px] left-0 right-0 w-[89%] mx-auto translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    <div className="bg-gradient-to-r text-lg from-green-500 via-emerald-600 to-teal-600 backdrop-blur-3xl text-white p-5 rounded-none flex items-center justify-between">
                      <div>
                        <h3
                          className={`text-3xl mb-4 font-bold ${unbounded.className}`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-sm opacity-90 ${figtree.className}`}
                        >
                          {project.description}
                        </p>
                      </div>

                      {/* Arrow animation on hover */}
                      <ArrowUpRight className="size-10 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurProjectsSection;
