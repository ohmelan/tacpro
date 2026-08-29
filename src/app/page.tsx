import { ClosingCta } from "@/components/sections/ClosingCta";
import { Hero } from "@/components/sections/Hero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProcessSection />
      <TestimonialsSection />
      <ClosingCta />
    </main>
  );
}
