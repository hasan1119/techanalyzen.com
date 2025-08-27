"use client";

import { Figtree } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

const figtree = Figtree({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  subsets: ["latin"],
})

const NAV_LINKS = [
  { link: "/", label: "HOME" },
  { link: "/services", label: "SERVICES" },
  { link: "/blogs", label: "BLOGS" },
  { link: "/about-us", label: "ABOUT US" },
  { link: "/contact-us", label: "CONTACT US" },
];

export function Navbar() {
  return (
    <nav className='w-full  bg-background/80  supports-[backdrop-filter]:bg-background/60 sticky  shadow dark:shadow-none bg-gradient-to-t from-gray-900 to-black top-0 z-50 backdrop-blur-2xl transition-colors duration-500 border-b border-b-[#1c222b]'>
      <div className='container mx-auto flex items-center justify-between py-2 px-4'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2'>
          <Image src='/logo.png' alt='Logo' width={100} height={100} />
        </Link>
        {/* Navigation Menu (Desktop) */}
        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList>
            {NAV_LINKS.map(({ link, label }, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild className={`px-4 py-2 ${figtree.className}`}>
                  <Link
                    className='px-4 py-2 font-semibold text-[15px] hover:bg-transparent hover:text-primary transition-all duration-200'
                    href={link}>
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            {/* <Button type='button' className='bg-transparent hover:bg-primary hover:text-primary-foreground border border-transparent hover:border-primary transition-all duration-200 cursor-pointer dark:text-primary-foreground text-black'> Button </Button> */}
          </NavigationMenuList>
        </NavigationMenu>
        {/* Theme Toggle + Mobile Menu */}
        <div className='flex items-center gap-2'>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className='md:hidden'>
      <button
        aria-label='Open Menu'
        className='p-2 rounded focus:outline-none focus:ring'
        onClick={() => setOpen((v) => !v)}>
        <svg
          width='24'
          height='24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
      {open && (
        <div className='absolute right-4 top-16 bg-background border rounded shadow-lg flex flex-col w-40 z-50'>
          {NAV_LINKS.map(({ link, label }) => (
            <Link
              key={link}
              href={link}
              className='px-4 py-2 font-semibold text-[15px] hover:text-primary transition-all duration-200'
              onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
