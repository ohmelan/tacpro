import { Eyebrow } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const features = [
  {
    title: "Professional Expertise",
    description: "Experienced professionals handling your compliance.",
  },
  {
    title: "One-Stop Business Support",
    description: "Multiple business requirements under one roof.",
  },
  {
    title: "Transparent Process",
    description: "Clear communication and straightforward procedures.",
  },
  {
    title: "Timely Compliance",
    description: "Deadlines and filings managed systematically.",
  },
  {
    title: "Dedicated Support",
    description: "Get assistance when you actually need it.",
  },
  {
    title: "Long-Term Partnership",
    description: "We don't just register your business—we support its journey.",
  },
];

export function WhyChooseUsSection() {
  return (
    <Section register="brand" className="relative overflow-hidden">
      <Container className="relative z-10">
        <div className="mb-16 md:mb-20">
          <Reveal>
            <Eyebrow className="!text-brand">Why Choose TAC</Eyebrow>
            <h2 className="mt-5 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,4vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
              We build compliance around <span className="text-brand-soft">your success.</span>
            </h2>
          </Reveal>
        </div>

        <RevealGroup>
          {/* Hairline grid container */}
          <div className="overflow-hidden rounded-[2.5rem] bg-white/10 ring-1 ring-white/10">
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, idx) => (
                <Reveal key={idx} className="h-full">
                  <div className="group relative flex h-full flex-col justify-between bg-brand-deep p-10 transition-colors duration-500 hover:bg-white/[0.04] sm:p-12">
                    {/* Big elegant number */}
                    <span className="font-[family-name:var(--font-display)] text-5xl font-light text-brand/30 transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-brand/60">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    
                    <div className="mt-16 sm:mt-24">
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/70">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </RevealGroup>
      </Container>
    </Section>
  );
}
