import { Counter } from "@/components/ui/Counter";
import { Eyebrow } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { processSteps } from "@/content/process";
import { stats } from "@/content/stats";
export function ProcessSection() {
  return (
    <Section register="light">
      <Container>
        <RevealGroup className="border-brand-line grid grid-cols-2 gap-8 border-b pb-16 text-center sm:grid-cols-4">
          {stats.map((stat, index) => {
            const icons = [
              <svg key="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M17 4v8a5 5 0 0 1-10 0V4"></path><path d="M17 5h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2"></path><path d="M7 5H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2"></path></svg>,
              <svg key="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
              <svg key="3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
              <svg key="4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            ];
            return (
              <Reveal key={stat.label} className="group">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-deep text-brand-soft shadow-lg transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl">
                  {icons[index]}
                </div>
                <p className="text-brand-deep font-[family-name:var(--font-display)] text-[clamp(2.5rem,4vw,4rem)] leading-none font-bold">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-canvas-fg-secondary mt-2 text-sm">{stat.label}</p>
              </Reveal>
            );
          })}
        </RevealGroup>
        <Reveal className="mt-16">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.25rem)] font-bold tracking-tight">
            A <span className="text-brand-deep">process</span> built for compliance, not surprises
          </h2>
        </Reveal>
        <RevealGroup className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const stepIcons = [
              <svg key="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
              <svg key="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>,
              <svg key="3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M9 15l2 2 4-4"></path></svg>,
              <svg key="4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg>
            ];
            return (
              <Reveal key={step.number} className="group relative h-full">
                <div className="flex h-full flex-col justify-between rounded-3xl border border-brand-line/25 bg-canvas p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div>
                    <div className="mb-6 flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                        {stepIcons[index]}
                      </div>
                      <span className="text-brand-deep/20 font-[family-name:var(--font-display)] text-5xl font-black transition-colors duration-300 group-hover:text-brand-deep/40">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-canvas-fg-secondary mt-3 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </RevealGroup>
      </Container>
    </Section>
  );
}
