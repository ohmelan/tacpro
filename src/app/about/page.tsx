import type { Metadata } from "next";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Eyebrow } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { values } from "@/content/values";
export const metadata: Metadata = {
  title: "About",
  description: "The firm behind TAC — TAC Professionals.",
};
const differentiators = [
  "Accuracy-driven audit & compliance approach",
  "Clear communication & transparent processes",
  "Industry-focused advisory support",
  "Timely filings & proactive compliance tracking",
  "Long-term client relationship focus",
];
function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="9" className="fill-brand-soft" />
      <path
        d="m6 10.5 2.5 2.5L14 7.5"
        stroke="var(--color-brand-deep)"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default function AboutPage() {
  return (
    <main className="flex-1">
      <Section register="light" className="pt-40 !pb-8">
        <Container>
          <Reveal>
            <Eyebrow>About TAC</Eyebrow>
            <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] font-bold tracking-tight">
              Accurate, transparent, and <span className="text-brand-deep">reliable</span> compliance
            </h1>
            <p className="text-canvas-fg-secondary mt-6 max-w-lg text-lg">
              TAC Professionals is a professional Audit, Taxation, and Compliance firm committed
              to delivering accurate, transparent, and reliable financial solutions for businesses
              across India.
            </p>
          </Reveal>
        </Container>
      </Section>
      <Section register="light" className="!pt-0">
        <Container>
          <Reveal className="max-w-3xl">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
              A team built around your compliance needs
            </h2>
            <p className="text-canvas-fg-secondary mt-5 text-lg">
              We are a team of experienced professionals specializing in audit, taxation, regulatory
              compliance, and financial advisory services. Our firm works closely with startups,
              SMEs, corporates, trusts, NGOs, and professionals.
            </p>
            <p className="text-canvas-fg-secondary mt-4 text-lg">
              By combining technical expertise with practical business understanding, we ensure that
              our clients remain compliant, confident, and financially sound at every stage of
              growth.
            </p>
          </Reveal>
        </Container>
      </Section>
      <Section register="dark">
        <Container>
          <Reveal>
            <Eyebrow className="!text-brand">Our purpose</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
              What drives our work
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="border-brand-line/25 bg-ink-raised/40 rounded-3xl border p-8">
              <p className="text-ink-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                Our mission
              </p>
              <p className="mt-4 text-lg">
                To simplify complex financial, taxation, and compliance requirements so our clients
                can focus on growth, innovation, and operational excellence while we manage their
                regulatory responsibilities.
              </p>
            </div>
            <div className="border-brand-line/25 bg-ink-raised/40 rounded-3xl border p-8">
              <p className="text-ink-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                Our vision
              </p>
              <p className="mt-4 text-lg">
                To be a trusted audit and compliance partner recognized for integrity, accuracy, and
                strategic financial guidance across industries and regions.
              </p>
            </div>
          </RevealGroup>
        </Container>
      </Section>
      <Section register="light">
        <Container>
          <Reveal>
            <Eyebrow>What sets us apart</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-tight">
              Why clients choose to work with us
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <Reveal key={item}>
                <Card className="flex h-full items-start gap-3 p-6">
                  <CheckIcon />
                  <span className="text-canvas-fg text-base font-medium">{item}</span>
                </Card>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>
      <Section register="light" className="!pt-0">
        <Container>
          <Reveal>
            <Eyebrow>Our values</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.25rem)] font-bold tracking-tight">
              The principles behind every engagement
            </h2>
          </Reveal>
          <RevealGroup className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title}>
                <span className="text-brand-deep font-[family-name:var(--font-display)] text-2xl font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight">
                  {value.title}
                </h3>
                <p className="text-canvas-fg-secondary mt-2 text-sm">{value.description}</p>
              </Reveal>
            ))}
          </RevealGroup>
        </Container>
      </Section>
      <ClosingCta />
    </main>
  );
}
