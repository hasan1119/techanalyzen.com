"use client";
import { motion } from "framer-motion";
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

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-primary dark:!bg-gradient-to-b from-gray-900 to-black py-20 px-6 md:px-12 lg:px-20 lg:min-h-[calc(100vh_-_116px)] h-full flex items-center justify-center">
      <div className="absolute hidden h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:top-24 lg:-right-28 lg:block lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-right-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div className="absolute hidden h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:top-20 lg:-right-28 lg:block lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-right-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`font-extrabold leading-tight text-3xl md:text-5xl lg:text-6xl ${unbounded.className}`}
        >
          <span className="px-3 py-1 bg-pink-600 text-white rounded-md inline-block rotate-[-1.737deg]">
            Maximize
          </span>{" "}
          <span className="text-[#050713] dark:text-white">Your 🚀 Growth</span>
          <br />
          <span className="text-[#050713] dark:text-white">with</span>{" "}
          <span className="text-[#39b650]">Techanalyzen</span>{" "}
          <span className="text-[#050713] dark:text-white">Tech Services</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className={`font-medium mt-6 text-[#3C3C3D] dark:text-gray-300 text-lg px-2 md:px-0 max-w-2xl mx-auto ${figtree.className}`}
        >
          We provide professional Tech Services specializing in website
          development and modern digital solutions. Our team ensures scalable,
          user-friendly, and performance-focused applications tailored for your
          business. Let’s grow your brand with innovative design and clean code!
          🚀
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className={`relative mt-8 inline-flex h-[54px] overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${figtree.className}`}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
          <span className="h-full w-full cursor-pointer bg-gradient-to-r text-lg from-green-500 via-emerald-600 to-teal-600 justify-center rounded-md px-6 py-3 font-medium flex items-center gap-2 text-white backdrop-blur-3xl">
            Book a Call
            <Image
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6799ff5246a12a0e295ca0cf_Designmonks.svg"
              width={20}
              height={20}
              alt=""
            />
          </span>
        </motion.button>
      </div>

      {/* Floating shapes / decoration */}
      <motion.span
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-16 text-4xl"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.6378 27.5533C16.2667 26.2984 15.2851 25.3168 14.0302 24.9457L0.886591 21.0587C0.425571 20.9223 0.425569 20.2694 0.886589 20.133L14.0302 16.246C15.2851 15.8749 16.2667 14.8933 16.6378 13.6384L20.5248 0.494802C20.6612 0.033782 21.3141 0.033781 21.4505 0.494801L25.3375 13.6384C25.7086 14.8933 26.6902 15.8749 27.9451 16.246L41.0887 20.133C41.5497 20.2694 41.5497 20.9223 41.0887 21.0587L27.9451 24.9457C26.6902 25.3168 25.7086 26.2984 25.3375 27.5533L21.4505 40.6969C21.3141 41.1579 20.6612 41.1579 20.5248 40.6969L16.6378 27.5533Z"
            fill="#3DB44E"
            fillOpacity="0.25"
          />
        </svg>
      </motion.span>
      <motion.span
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 text-4xl"
      >
        💡
      </motion.span>
      <div className="absolute h-16 w-[600px] rotate-[-40deg] rounded-3xl bg-sky-400 opacity-10 blur-2xl filter dark:hidden lg:bottom-24 lg:-left-28 lg:h-12 lg:w-[600px] lg:opacity-30 lg:blur-2xl xl:-left-40 xl:h-4 xl:w-[700px] xl:opacity-100"></div>
      <div className="absolute h-14 w-[600px] rotate-[-40deg] rounded-3xl bg-purple-400 opacity-30 blur-2xl filter dark:hidden lg:bottom-20 lg:-left-28 lg:h-10 lg:w-[600px] lg:opacity-20 lg:blur-xl xl:-left-40 xl:h-2 xl:w-[800px] xl:opacity-100"></div>
    </section>
  );
};

export default Hero;
