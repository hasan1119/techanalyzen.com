"use client";

import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const footerSections = [
  {
    title: "Product",
    links: [
      { link: "/", label: "HOME" },
      { link: "/service", label: "SERVICE" },
      { link: "/blogs", label: "BLOGS" },
      { link: "/about", label: "ABOUT" },
      { link: "/contact", label: "CONTACT" },
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
    <footer className='w-full border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container mx-auto py-2 px-4'>
        <div className='py-12 grid grid-cols-1 lg:grid-cols-4 lg:gap-x-4 gap-y-6 px-6 xl:px-0'>
          <div>
            {/* Logo and Name Flex Row */}
            <div className='flex flex-col gap-2 items-center lg:items-start'>
              <Image src='/logo-1.png' alt='Logo' width={50} height={50} />
              <p className='font-semibold text-2xl'>
                <span className='text-primary'>RX Group</span> of Corporation
              </p>
              <p className='text-sm sm:text-lg'>
                <span className='font-semibold'>Email:</span> info@rxgroup.com
              </p>
              <p className='text-sm sm:text-lg'>
                <span className='font-semibold'>Phone:</span> (123) 456-7890
              </p>
              <p className='text-sm sm:text-lg'>
                <span className='font-semibold'>Address:</span> 123 RX St, City,
                Country
              </p>
            </div>
          </div>

          {footerSections.map(({ title, links }) => (
            <div
              key={title}
              className='mx-auto lg:mx-0 text-center lg:text-left'>
              <p className='font-semibold'>{title}</p>
              <ul className='mt-6 space-y-4'>
                {links?.map(({ label, link }, index) => (
                  <li key={index}>
                    <Link
                      href={link}
                      className='text-gray-400 hover:text-primary transition-all duration-200'>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Newsletter Signup */}
          <div className='col-span-1 flex flex-col max-w-[280px] mx-auto w-full'>
            <p className='font-semibold text-center lg:text-left'>Newsletter</p>
            <form
              className='mt-6 flex flex-col gap-2'
              onSubmit={(e) => e.preventDefault()}>
              <Input
                type='email'
                required
                placeholder='Your email'
                className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none'
              />
              <Button type='submit' className='px-4 py-2'>
                Subscribe
              </Button>
            </form>
            <span className='text-xs text-gray-500 mt-1 text-center lg:text-left'>
              Get the latest news and updates.
            </span>
          </div>
        </div>
        <div className='py-8 flex border-t flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0'>
          <span className='text-gray-500'>
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href='/'
              target='_blank'
              className='text-primary font-medium hover:underline'>
              RX Group of Corporation
            </Link>
            . All rights reserved.
          </span>

          <div className='flex items-center gap-5 text-gray-500'>
            <Link
              href='#'
              target='_blank'
              className='hover:text-purple-300 transition-colors duration-300'>
              <TwitterIcon className='h-5 w-5' />
            </Link>
            <Link
              href='#'
              target='_blank'
              className='hover:text-purple-300 transition-colors duration-300'>
              <DribbbleIcon className='h-5 w-5' />
            </Link>
            <Link
              href='#'
              target='_blank'
              className='hover:text-purple-300 transition-colors duration-300'>
              <TwitchIcon className='h-5 w-5' />
            </Link>
            <Link
              href='#'
              target='_blank'
              className='hover:text-purple-300 transition-colors duration-300'>
              <GithubIcon className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
