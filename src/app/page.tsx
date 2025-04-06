// src/app/page.tsx
import About from "@/components/About/About";
import ContactSection from "@/components/Contact/ContactSection";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactSection />
      {/* Additional sections (e.g., Services, About, Testimonials) will be added here */}
    </>
  );
}
