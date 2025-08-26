import { PartnersSection } from "../components/partners-section";
import { CustomerReviews } from "./_components/customer-reviews";
import { HeroSection } from "./_components/hero-section";
import { ServicesSection } from "./_components/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <CustomerReviews />
    </>
  );
}
