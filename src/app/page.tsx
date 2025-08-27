import Hero from "@/components/Hero";
import { PartnersSection } from "../components/partners-section";
import { CustomerReviews } from "./_components/customer-reviews";
import { ServicesSection } from "./_components/services-section";

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <Hero />
      <ServicesSection />
      <PartnersSection />
      <CustomerReviews />
    </>
  );
}
