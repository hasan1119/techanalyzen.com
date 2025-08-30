"use client";

import Logo from "@/common/Logo";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import Container from "@/common/Container";
import { Figtree, Unbounded } from "next/font/google";

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

const footerSections = [
  {
    title: "Use Full Links",
    links: [
      { link: "/", label: "HOME" },
      { link: "/#services", label: "SERVICES" },
      { link: "/blogs", label: "BLOGS" },
      { link: "/about-us", label: "ABOUT US" },
      { link: "/#contact", label: "CONTACT US" },
      { link: "/#testimonials", label: "TESTIMONIALS" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { link: "#", label: "LIBRARY" },
      { link: "#", label: "WEB DESIGN & DEVELOPMENT" },
      { link: "#", label: "PENETRATION LAB" },
      { link: "#", label: "ETHICAL HACKING" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-background to-muted/40 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="py-10 px-4">
          {/* Main Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="py-12 grid grid-cols-1 lg:grid-cols-4 lg:gap-x-8 gap-y-10 px-6 xl:px-0"
          >
            {/* Logo Section */}
            <div>
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <Logo />
                <p
                  className={`font-bold text-2xl ${unbounded.className} text-center lg:text-left`}
                >
                  <span className="text-primary">Techanalyzen</span> Bangladesh
                </p>
                <p className={`text-sm sm:text-lg ${figtree.className}`}>
                  info@techanalyzen.com
                </p>
                <p className={`text-sm sm:text-lg ${figtree.className}`}>
                  09611806530
                </p>
                <p className={`text-sm sm:text-lg ${figtree.className}`}>
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            {/* Sections */}
            {footerSections.map(({ title, links }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mx-auto lg:mx-0 text-center lg:text-left"
              >
                <p className={`font-semibold text-lg ${unbounded.className}`}>
                  {title}
                </p>
                <ul className="mt-6 space-y-4">
                  {links?.map(({ label, link }, index) => (
                    <li key={index} className={`${figtree.className}`}>
                      <Link
                        href={link}
                        className="text-gray-400 hover:text-primary transition-all duration-300"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="col-span-1 flex flex-col max-w-[280px] mx-auto w-full"
            >
              <p
                className={`font-semibold text-center lg:text-left ${figtree.className}`}
              >
                Newsletter
              </p>
              <form
                className="mt-6 flex flex-col gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  required
                  placeholder="Your email"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-primary"
                />
                <Button
                  type="submit"
                  className="px-4 py-2 shadow-md hover:shadow-lg bg-primary transition-all duration-300"
                >
                  Subscribe
                </Button>
              </form>
              <span
                className={`text-xs text-gray-500 mt-1 text-center lg:text-left ${figtree.className}`}
              >
                Get the latest news and updates.
              </span>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="py-8 flex border-t flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0"
          >
            <span className="text-gray-500">
              &copy; {new Date().getFullYear()}{" "}
              <Link
                href="/"
                target="_blank"
                className={`text-primary font-medium hover:underline ${unbounded.className}`}
              >
                Techanalyzen Bangladesh
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-gray-500">
              {[TwitterIcon, DribbbleIcon, TwitchIcon, GithubIcon].map(
                (Icon, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer"
                  >
                    <Link
                      href="#"
                      target="_blank"
                      className="hover:text-primary transition-colors duration-300"
                    >
                      <Icon className="h-7 w-7" />
                    </Link>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
