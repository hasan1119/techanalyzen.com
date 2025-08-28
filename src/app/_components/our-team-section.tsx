"use client";
import Container from "@/common/Container";
import SectionTitle from "@/common/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Facebook,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Figtree, Unbounded } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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

const teamMembers = [
  {
    name: "MD. Rokibul Hasan",
    role: "Founder, Chief Executive Officer (CEO) & Lead Developer",
    image: "/hasan.jpeg",
    facebook: "https://www.facebook.com/md.rokibul.hasan.bd",
    twitter: "https://x.com/rokibuldev",
    github: "https://github.com/hasan1119",
    linkedin: "https://www.linkedin.com/in/md-rokibul-hasan",
    portfolio: "#",
  },
  {
    name: "Joy Sorkar",
    role: "Co-Founder, Chief Operating Officer (COO) & Software Development Lead",
    image: "/joy.jpeg",
    facebook: "https://www.facebook.com/webdev.joysarkar/",
    twitter: "https://x.com/Joy_Sarkar_BD",
    github: "https://github.com/JoySarkarBD",
    linkedin: "https://www.linkedin.com/in/joysarkarbd/",
    portfolio: "https://devjoysarkar.vercel.app",
  },
  {
    name: "Dipto Das",
    role: "Co-Founder & Head of Frontend Engineering",
    image: "/dipto.jpeg",
    twitter: null,
    github: "https://github.com/diptowebhero",
    linkedin: null,
    portfolio: "https://dev-dipto.vercel.app/",
  },
];

const OurTeamSection = () => {
  return (
    <section className='relative overflow-hidden gradient-primary dark:!bg-gradient-to-b from-gray-900 to-black border-t flex items-center justify-center'>
      <Container>
        <div className='w-full py-18 px-4 md:px-8 lg:px-0'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className='text-center mb-12'>
            <SectionTitle>Meet Our Team</SectionTitle>
          </motion.div>

          {/* Team Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}>
                <Card className='rounded-2xl min-h-[534px] shadow-lg bg-gradient-to-b  transition-all duration-300 bg-white dark:bg-zinc-900/50 p-6 backdrop-blur-sm hover:scale-105 hover:shadow-lg'>
                  <CardHeader className='flex flex-col items-center p-6'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={1920}
                      height={1920}
                      className='w-full h-full rounded-md aspect-square max-w-[220px] max-h-[220px] border-4 border-primary shadow-md object-cover'
                    />
                    <h3
                      className={`mt-4 text-xl text-center font-semibold text-gray-900 dark:text-white ${unbounded.className}`}>
                      {member.name}
                    </h3>
                    <p
                      className={`text-sm text-center font-medium text-gray-600 dark:text-gray-400 ${figtree.className}`}>
                      {member.role}
                    </p>
                  </CardHeader>
                  <CardContent className='flex flex-col items-center gap-3 pb-6'>
                    {/* Social Links */}
                    <div className='flex gap-4'>
                      {member.facebook && (
                        <Link href={member.facebook} target='_blank'>
                          <Facebook className='h-5 w-5 text-gray-500 hover:text-blue-600 transition-colors' />
                        </Link>
                      )}
                      {member.twitter && (
                        <Link href={member.twitter} target='_blank'>
                          <Twitter className='h-5 w-5 text-gray-500 hover:text-sky-400 transition-colors' />
                        </Link>
                      )}
                      {member.github && (
                        <Link href={member.github} target='_blank'>
                          <Github className='h-5 w-5 text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors' />
                        </Link>
                      )}
                      {member.linkedin && (
                        <Link href={member.linkedin} target='_blank'>
                          <Linkedin className='h-5 w-5 text-gray-500 hover:text-blue-600 transition-colors' />
                        </Link>
                      )}
                    </div>

                    {/* Portfolio Button */}
                    <Button
                      variant='outline'
                      size='sm'
                      asChild
                      className='mt-2 border-primary text-primary hover:bg-primary hover:text-white transition-all'>
                      <Link
                        href={member.portfolio}
                        target='_blank'
                        className='flex items-center gap-2'>
                        <ExternalLink className='h-4 w-4' />
                        Portfolio
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurTeamSection;
