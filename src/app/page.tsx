import Hero from "@/components/Hero";
import ContactSection from "./_components/contact-section";
import OurProjectsSection from "./_components/our-projects-section";
import OurTeamSection from "./_components/our-team-section";
import { ServicesSection } from "./_components/services-section";
import TestimonialSection from "./_components/testimonial-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <OurProjectsSection />
      <TestimonialSection />
      <OurTeamSection />
      <ContactSection />
    </>
  );
}
