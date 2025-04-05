// src/app/page.tsx
import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      {/* Additional sections (e.g., Services, About, Testimonials) will be added here */}
    </>
  );
}
