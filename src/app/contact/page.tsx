import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Eyebrow } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/content/nav";
export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with TAC — TAC Professionals.",
};
const mapQuery = encodeURIComponent("TAC Professionals, Door No: 66/1150, Kalabhavan Road, Near Kochi Town Hall, North Kaloor, Ernakulam, Kerala 682018");
const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.148-.669.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
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
  );
}
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden>
      <path
        d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4 6.5 8 6.25L20 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden>
      <path
        d="M12 21.5s7-6.4 7-11.9A7 7 0 0 0 5 9.6c0 5.5 7 11.9 7 11.9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default function ContactPage() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi! I'd like to know more about your services.",
  )}`;
  return (
    <main className="flex-1">
      <Section register="light" className="pt-40 !pb-8">
        <Container>
          <Reveal>
            <Eyebrow>Get in touch</Eyebrow>
            <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] font-bold tracking-tight">
              Let&apos;s talk about your <span className="text-brand-deep">filing</span>
            </h1>
            <p className="text-canvas-fg-secondary mt-6 max-w-md text-lg">
              Tell us what you need — we&apos;ll reply within one business day.
            </p>
          </Reveal>
        </Container>
      </Section>
      <Section register="light" className="!pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <Reveal>
              <div className="border-brand-line bg-brand-deep relative overflow-hidden rounded-3xl border p-10">
                <span
                  aria-hidden
                  className="bg-brand/15 pointer-events-none absolute -top-20 -left-20 h-56 w-56 rounded-full blur-3xl"
                />
                <div className="relative">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="border-brand-line bg-canvas-raised hover:border-brand flex h-full flex-col rounded-3xl border p-10 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_20px_50px_-15px_rgba(213,175,84,0.35)]">
                <p className="text-canvas-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                  Direct contact
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                  Reach the team
                </p>
                <div className="border-brand-line mt-8 flex flex-col gap-6 border-t pt-8">
                  <div className="flex items-start gap-4">
                    <span className="bg-brand-soft text-brand-deep flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <EmailIcon />
                    </span>
                    <div>
                      <p className="text-canvas-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                        Email
                      </p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-brand-deep mt-1 inline-block text-base font-semibold break-all transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-brand-soft text-brand-deep flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <PinIcon />
                    </span>
                    <div>
                      <p className="text-canvas-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                        Corporate office
                      </p>
                      <p className="text-canvas-fg mt-1 text-base font-semibold leading-snug">
                        {siteConfig.addresses[0].lines?.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="bg-brand-soft text-brand-deep flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <ClockIcon />
                    </span>
                    <div>
                      <p className="text-canvas-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                        Response time
                      </p>
                      <p className="text-canvas-fg mt-1 text-base font-semibold">
                        Within one business day
                      </p>
                    </div>
                  </div>
                  <div className="border-brand-line overflow-hidden rounded-2xl border">
                    <iframe
                      title="Office location map"
                      src={mapEmbedSrc}
                      className="h-[180px] w-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-brand-line mt-auto flex items-center gap-4 border-t pt-8"
                >
                  <span className="bg-brand-soft text-brand-deep flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <WhatsAppIcon />
                  </span>
                  <span className="flex flex-1 items-center justify-between gap-3">
                    <span>
                      <p className="text-canvas-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                        Prefer WhatsApp?
                      </p>
                      <p className="group-hover:text-brand-deep text-canvas-fg mt-1 text-base font-semibold transition-colors">
                        Chat with us directly
                      </p>
                    </span>
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  );
}
