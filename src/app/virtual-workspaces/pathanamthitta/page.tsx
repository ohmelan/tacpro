import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Pathanamthitta Virtual Workspace (Coming Soon)",
  description: "Professional virtual office space and business address in Pathanamthitta.",
};

export default function PathanamthittaWorkspacePage() {
  return (
    <main className="flex-1">
      <Section register="light" className="min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-24 relative overflow-hidden">

        
        <Container className="relative z-10 flex flex-col items-center text-center px-4">
          <Reveal>
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand-deep text-sm font-semibold tracking-wide uppercase mb-8 mx-auto">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Under Construction
            </div>
            
            <h1 className="max-w-4xl mx-auto font-[family-name:var(--font-display)] text-[clamp(3rem,6vw,6.5rem)] leading-[1.05] font-bold tracking-tight text-canvas-fg">
              Pathanamthitta
              <br />
              <span className="text-brand-deep">
                Coming Soon
              </span>
            </h1>
            
            <p className="mt-8 mx-auto max-w-xl text-canvas-fg-secondary text-lg sm:text-xl leading-relaxed">
              We are bringing our premium virtual office network to a brand new location. A professional corporate address and dedicated business facilities await.
            </p>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
