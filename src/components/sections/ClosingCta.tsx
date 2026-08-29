import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
export function ClosingCta() {
  return (
    <Section register="dark">
      <Container className="text-center">
        <Reveal>
          <p className="font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl">
            A century of diligence.
            <span className="text-brand"> One standard of care.</span>
          </p>
          <div className="mt-8 flex justify-center">
            <LinkButton href="/contact" variant="brand">
              Get in touch
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
