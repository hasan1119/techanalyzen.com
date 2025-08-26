"use client";

import Image from "next/image";

const PARTNERS = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
];

export function PartnersSection() {
  return (
    <section className='w-full py-12 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Our Partners</h2>
        <p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
          We are proud to partner with some of the leading companies in the
          industry to deliver the best solutions for our clients.
        </p>
      </div>

      {/* Scroll Wrapper */}
      <div className='relative overflow-hidden'>
        {/* Animated Track */}
        <div className='flex gap-12 w-max animate-[scroll_40s_linear_infinite]'>
          {PARTNERS.concat(PARTNERS).map((partner, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center min-w-[100px] sm:min-w-[120px] max-w-[140px] shrink-0'>
              <div className='w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center mb-2'>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={80}
                  height={80}
                  className='object-contain'
                />
              </div>
              <span className='text-xs sm:text-sm text-muted-foreground text-center'>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes in Tailwind arbitrary style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
