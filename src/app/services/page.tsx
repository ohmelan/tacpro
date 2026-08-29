import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
export const metadata: Metadata = {
  title: "Services",
  description: "Tax, GST, audit, compliance, and business registration services from TAC.",
};
export default function ServicesPage() {
  return (
    <main className="flex-1">
      <Section register="light" className="!pt-20 !pb-16">
        <Container>
          <div className="grid items-center gap-0 lg:grid-cols-[1.35fr_1fr]">
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] font-bold tracking-tight">
                Every filing, every compliance deadline, handled with{" "}
                <span className="text-brand-deep">precision</span>
              </h1>
            </Reveal>
            <Reveal className="hidden justify-self-center lg:block">
              <Image
                src="/scene/services-sketch.webp"
                alt="Pencil sketch of a stamp approving a stack of filed documents"
                width={1073}
                height={1200}
                priority
                className="h-auto w-full max-w-[460px]"
              />
            </Reveal>
          </div>
        </Container>
      </Section>
      <Section register="light" className="!pt-0">
        <Container>
          <Reveal>
            <Eyebrow>All services</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.25rem)] font-bold tracking-tight">
              Seven specialities, one point of contact
            </h2>
          </Reveal>
          <div className="mt-16">
            <ServicesGrid />
          </div>
        </Container>
      </Section>
    </main>
  );
}
