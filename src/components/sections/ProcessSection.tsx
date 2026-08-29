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
          {stats.map((stat) => (
            <Reveal key={stat.label}>
              <p className="text-brand-deep font-[family-name:var(--font-display)] text-[clamp(2.5rem,4vw,4rem)] leading-none font-bold">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-canvas-fg-secondary mt-2 text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </RevealGroup>
        <Reveal className="mt-16">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.25rem)] font-bold tracking-tight">
            A <span className="text-brand-deep">process</span> built for compliance, not surprises
          </h2>
        </Reveal>
        <RevealGroup className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <Reveal key={step.number}>
              <span className="text-brand-deep font-[family-name:var(--font-display)] text-2xl font-bold">
                {step.number}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="text-canvas-fg-secondary mt-2 text-sm">{step.description}</p>
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
