import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Eyebrow } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { services } from "@/content/services";
type Props = {
  params: Promise<{ slug: string }>;
};
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
  };
}
export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 2);
  return (
    <main className="flex-1">
      <Section register="light" className="pt-40">
        <Container>
          <Reveal>
            <Link
              href="/services"
              className="text-canvas-fg-dim hover:text-canvas-fg block text-sm transition-colors"
            >
              ← All services
            </Link>
            <Eyebrow className="mt-8">Service {service.number}</Eyebrow>
            <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] font-bold tracking-tight">
              {service.title}
            </h1>
            <p className="text-canvas-fg-secondary mt-6 max-w-lg text-lg">{service.intro}</p>
            <div className="mt-10">
              <LinkButton href="/contact" variant="brand">
                <span className="inline-flex items-center gap-1.5">
                  Talk to us
                  <svg
                    viewBox="0 0 16 16"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8h10M8.5 3.5L13 8l-4.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </LinkButton>
            </div>
          </Reveal>
        </Container>
      </Section>
      <Section register="light" className="!pt-0">
        <Container>
          <Reveal>
            <Eyebrow>What&apos;s included</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.25rem)] font-bold tracking-tight">
              Every part of the filing, covered
            </h2>
          </Reveal>
          <RevealGroup className="divide-brand-line border-brand-line mt-12 divide-y border-t border-b">
            {service.offerings.map((offering, index) => (
              <Reveal key={offering} className="flex items-center gap-6 py-5">
                <span className="text-brand-deep font-[family-name:var(--font-display)] text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-canvas-fg">{offering}</span>
              </Reveal>
            ))}
          </RevealGroup>
          <Reveal className="border-brand-line mt-16 border-t pt-10">
            <p className="text-canvas-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
              Related services
            </p>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="text-canvas-fg-secondary hover:text-brand-deep transition-colors"
                >
                  {r.title} →
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>
      <ClosingCta />
    </main>
  );
}
