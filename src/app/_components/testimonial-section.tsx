"use client";
import Container from "@/common/Container";
import SectionTitle from "@/common/SectionTitle";
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

const testimonials = [
  {
    name: "Jonathan Yombo",
    title: "Software Engineer",
    text: "Tailus templates are the perfect solution for anyone who wants to create a beautiful, functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help.",
    image: "/dipto_10.jpg",
  },
  {
    name: "Yves Kakume",
    title: "GDE - Android",
    text: "With no experience in webdesign I just redesigned my entire website in a few minutes with tailwindcss thanks to Tailus.",
    image:
      "https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg",
  },
  {
    name: "Yucel Farukşahan",
    title: "Creator, Tailkits",
    text: "Great work on tailfolio template. This is one of the best personal website that I have seen so far :)",
    image:
      "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg",
  },
  {
    name: "Shekinah Tshikulila",
    title: "Software Engineer",
    text: "Tailus is redefining the standard of web design, with these blocks it provides an easy and efficient way.",
    image:
      "https://i.pinimg.com/736x/81/d6/b1/81d6b158728f5fc97ca6e0a025fefee0.jpg",
  },
  {
    name: "Khatab Wedaa",
    title: "Merakiol Creator",
    text: "Tailus templates are the perfect solution for anyone who wants to create a beautiful, functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help.",
    image:
      "https://i.pinimg.com/736x/9f/46/74/9f4674ca9c17330ab419c1b2f5951d9a.jpg",
  },
  {
    name: "Oketa Fred",
    title: "Fullstack Developer",
    text: "I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.",
    image:
      "https://i.pinimg.com/736x/57/3c/80/573c80967c9429d0ed0ce32701f85b70.jpg",
  },
  {
    name: "Rodrigo Aguilar",
    title: "Creator, TailwindAwesome",
    text: "I love Tailus ❤️. The component blocks are well-structured, simple to use, and beautifully designed. It makes it really easy to have a good-looking website in no time.",
    image:
      "https://i.pinimg.com/736x/b0/c4/21/b0c421e77cf563962026ade82c90dd5b.jpg",
  },
  {
    name: "Zeki",
    title: "Founder of ChatExtend",
    text: "Using Tailkit!! has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.",
    image:
      "https://i.pinimg.com/736x/ce/31/42/ce3142d7a968fff3aecd0100572a5e8b.jpg",
  },
  {
    name: "Eric Ampire",
    title: "Mobile Engineer at @RBPNews , @GoogleGDE/Expert for Android",
    text: "Tailus templates are the perfect solution for anyone who wants to create a beautiful, functional website without any web design experience. The templates are easy to use, customizable, and responsive, and the support team is always available to help.",
    image:
      "https://i.pinimg.com/736x/79/63/a5/7963a5246188d408b8f28961a0cf2b90.jpg",
  },
  {
    name: "Joseph Kitheka",
    title: "Fullstack Developer",
    text: "Tailur has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. A game-changer for modern web development!",
    image:
      "https://i.pinimg.com/736x/8e/c1/f8/8ec1f80db272047cedf4c20263114387.jpg",
  },
];

// Fallback
const anonymousFallbackImage =
  "https://placehold.co/48x48/6B7280/FFFFFF?text=AA";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="gradient-primary border-t">
      <Container>
        <div className="w-full py-18 px-4 md:px-8 lg:px-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <SectionTitle>See How We&rsquo;ve Made a Difference</SectionTitle>
          </motion.div>

          <div className="px-4 sm:px-6 lg:px-8">
            <div className="w-full columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-[#150c19cf] w-full p-6 rounded-xl shadow-md break-inside-avoid border border-gray-200 dark:border-none"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = anonymousFallbackImage;
                      }}
                      width={48}
                      height={48}
                    />
                    <div>
                      <h4
                        className={`font-semibold text-gray-900 dark:text-white ${unbounded.className}`}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className={`text-sm text-gray-600 dark:text-gray-400 ${figtree.className}`}
                      >
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p
                    className={`text-base text-gray-700 dark:text-gray-200 leading-relaxed ${figtree.className}`}
                  >
                    {testimonial.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialSection;
