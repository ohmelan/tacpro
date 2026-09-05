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
import { PackagesReveal } from "@/components/ui/PackagesReveal";

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
            {service.offerings.map((offeringItem, index) => {
              const isObj = typeof offeringItem === 'object' && offeringItem !== null;
              const name = isObj ? (offeringItem as any).name : (offeringItem as string);
              const price = isObj ? (offeringItem as any).price : null;
              const priceDetail = isObj ? (offeringItem as any).priceDetail : null;
              const features = isObj ? (offeringItem as any).features : null;
              const notes = isObj ? (offeringItem as any).notes : null;
              
              return (
                <Reveal key={name} className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-6 py-8 group">
                  <div className="flex gap-6 w-full">
                    <span className="text-brand-deep font-[family-name:var(--font-display)] text-sm font-bold pt-1 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      {/* Header Row: Title & Pricing */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <span className="text-canvas-fg font-bold text-lg">{name}</span>
                        {price && (
                          <div className="sm:text-right shrink-0">
                            <span className="text-brand-deep font-[family-name:var(--font-display)] text-xl font-bold block">{price}</span>
                            {priceDetail && <span className="text-canvas-fg-secondary text-xs font-medium block mt-1">{priceDetail}</span>}
                          </div>
                        )}
                      </div>
                      
                      {/* Features List */}
                      {features && features.length > 0 && (
                        <ul className="mt-5 grid sm:grid-cols-2 gap-y-2 gap-x-4">
                          {features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-canvas-fg-secondary font-medium">
                              <span className="text-brand mt-0.5 shrink-0">
                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      )}
                      
                      {/* Notes / Disclaimers */}
                      {notes && notes.length > 0 && (
                        <div className="mt-6 flex flex-col gap-2 rounded-xl bg-brand-soft/20 p-4 border border-brand-line/20">
                          {notes.map((note: string, i: number) => (
                            <p key={i} className="text-xs font-semibold text-brand-deep leading-relaxed">
                              {i === 0 && <span className="font-bold mr-1">Note:</span>}
                              {note}
                            </p>
                          ))}
                        </div>
                      )}
                      
                      {/* Packages Reveal Button */}
                      {(offeringItem as any).packages && (offeringItem as any).packages.length > 0 && (
                        <PackagesReveal packages={(offeringItem as any).packages} />
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
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
