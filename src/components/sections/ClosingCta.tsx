import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { PremiumDivider } from "@/components/ui/PremiumDivider";

export function ClosingCta() {
  return (
    <Section register="brand" className="relative pt-0">
      <PremiumDivider className="mb-12" />
      <Container className="text-center">
        <Reveal>
          <p className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-semibold text-white max-w-4xl mx-auto">
            Not just a service provider,
            <span className="text-brand-soft block mt-1">Long-term Business Compliance Partner</span>
          </p>
          <div className="mt-10 flex justify-center">
            <LinkButton href="/contact" variant="brand">
              Need Professional Guidance?
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
