"use client";

import { MenuSection } from "@/components/MenuSection";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ChefsHighlightsSection } from "@/components/ChefsHighlightsSection";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ChefsHighlightsSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
