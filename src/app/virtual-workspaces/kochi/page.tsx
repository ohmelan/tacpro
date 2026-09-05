import type { Metadata } from "next";
import Image from "next/image";
import { Armchair, Wifi, Snowflake, Coffee } from "lucide-react";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Eyebrow } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/content/nav";
export const metadata: Metadata = {
  title: "Kochi Virtual Workspace",
  description: "Professional virtual office space and business address in Kochi (Ernakulam).",
};
const features = [
  { title: "Free Udyam Registration", desc: "Hassle-free MSME registration." },
  { title: "Bank Account Opening", desc: "Guidance for smooth business banking setup." },
  { title: "Free GST Registration", desc: "Complete documentation & registration." },
  { title: "Meeting Room Facility", desc: "3 Hours / Month — professional space for client meetings." },
  { title: "Courier Handling", desc: "Secure receipt and management of your business mails & parcels." },
  { title: "Reception Support", desc: "Professional front-desk assistance for your business presence." },
  { title: "Temporary Sign Board", desc: "Display your business name for compliance and inspections." },
];
function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" fill="none" aria-hidden>
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
export default function KochiWorkspacePage() {
  const mapLink = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("TAC Professionals, 66/1150, Kalabhavan Road, Near Kochi Town Hall, Kaloor, Ernakulam, 682018");
  return (
    <main className="flex-1">
      <Section register="light" className="pt-40 !pb-12">
        <Container>
          <Reveal>
            <Eyebrow>Location</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] font-bold tracking-tight">
              Kochi <span className="text-brand-deep">Workspace</span>
            </h1>
            <p className="text-canvas-fg-secondary mt-6 max-w-xl text-lg">
              Establish a professional business presence in the heart of Ernakulam. Choose between a premium Virtual Office address or your own Dedicated Desk Space.
            </p>
          </Reveal>
        </Container>
      </Section>
      <Section register="light" className="!pt-0">
        <Container>
          <Reveal>
            <h2 className="mb-10 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-brand-deep">
              1. Virtual Office
            </h2>
          </Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-x-16 lg:gap-y-10">
            <Reveal className="h-full w-full">
              <div className="relative h-full min-h-[400px] w-full overflow-hidden rounded-3xl border border-brand-line/20 bg-canvas-raised">
                <Image
                  src="/workspaces/kochi/office-1.png"
                  alt="Kochi Office Space"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="h-full">
              <div className="border-brand-line bg-canvas-raised flex h-full flex-col justify-between rounded-3xl border p-8">
                <div>
                  <p className="text-canvas-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                    Pricing
                  </p>
                  <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3vw,2.5rem)] font-bold tracking-tight text-brand-deep">
                    ₹ 8,999 <span className="text-lg font-medium text-canvas-fg-secondary">/ year</span>
                  </p>
                  <div className="border-brand-line mt-8 border-t pt-8">
                    <p className="text-canvas-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                      Official Address
                    </p>
                    <p className="mt-4 text-base font-medium text-canvas-fg">
                      TAC Professionals<br />
                      66/1150, Suite #----<br />
                      Kalabhavan Road, Near Kochi Town Hall,<br />
                      Kaloor, Ernakulam, 682018
                    </p>
                    <a 
                      href={mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-deep transition-colors"
                    >
                      View on Google Maps
                      <span aria-hidden>→</span>
                    </a>
                  </div>
                </div>
                <div className="mt-10">
                  <LinkButton 
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to book the Kochi (Ernakulam) Virtual Office space.")}`} 
                    className="w-full"
                  >
                    Enquire & Book Now
                  </LinkButton>
                </div>
              </div>
            </Reveal>
            <RevealGroup className="grid gap-4 sm:grid-cols-2">
              <Reveal>
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-brand-line/20 bg-canvas-raised">
                  <Image
                    src="/workspaces/kochi/office-2.png"
                    alt="Kochi Office Space Desks"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-brand-line/20 bg-canvas-raised">
                  <Image
                    src="/workspaces/kochi/office-3.jpg"
                    alt="Kochi Office Space Wide"
                    fill
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </RevealGroup>
            <Reveal>
              <div className="h-full">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight">
                  What&apos;s included
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckIcon />
                      <div>
                        <p className="font-semibold text-canvas-fg">{feature.title}</p>
                        <p className="text-sm text-canvas-fg-secondary">{feature.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-brand-soft/50 p-4 border border-brand-line/30">
                  <p className="text-sm font-medium text-brand-deep">
                    <span className="font-bold">Note:</span> Free GST Registration is complimentary only if the upcoming three return filings are handled with us.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
      
      <Section register="light" className="!pt-0 pb-20">
        <Container>
          <div className="border-t border-brand-line/30 pt-16">
            <Reveal>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-brand-deep">
                2. Dedicated Desk Space
              </h2>
              <p className="text-canvas-fg-secondary max-w-2xl text-lg">
                Get your own productive, distraction-free workspace in Kochi designed for freelancers, remote professionals, and small teams. Work efficiently in a modern, fully equipped environment with zero setup hassle.
              </p>
            </Reveal>
            
            <div className="mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-x-12">
              <Reveal className="h-full">
                <div className="grid h-full gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Dedicated Desk",
                      desc: "Reserved single desk & ergonomic chair for maximum focus.",
                      icon: <Armchair className="h-6 w-6" strokeWidth={1.5} />
                    },
                    {
                      title: "High-Speed Wi-Fi",
                      desc: "Fast & reliable internet connectivity for uninterrupted work.",
                      icon: <Wifi className="h-6 w-6" strokeWidth={1.5} />
                    },
                    {
                      title: "Climate Control",
                      desc: "Fully air-conditioned workspace for all-day comfort.",
                      icon: <Snowflake className="h-6 w-6" strokeWidth={1.5} />
                    },
                    {
                      title: "Pantry Access",
                      desc: "Free access to pantry and clean drinking water.",
                      icon: <Coffee className="h-6 w-6" strokeWidth={1.5} />
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="group rounded-3xl border border-brand-line/20 bg-canvas-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft/40 text-brand-deep transition-colors duration-300 group-hover:bg-brand group-hover:text-ink">
                        {item.icon}
                      </div>
                      <h4 className="mb-2 font-[family-name:var(--font-display)] text-lg font-bold tracking-tight text-canvas-fg">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-canvas-fg-secondary">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal className="h-full">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-brand/20 bg-gradient-to-br from-canvas-raised to-brand-soft/20 p-8 shadow-sm">
                  {/* Subtle Background Accent */}
                  <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-brand/10 blur-3xl" />
                  
                  <div className="relative z-10">
                    <p className="text-xs font-semibold tracking-[0.18em] text-brand-deep uppercase">
                      Coworking Plan
                    </p>
                    <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3vw,2.5rem)] font-bold tracking-tight text-ink">
                      ₹ 3,500 <span className="text-lg font-medium text-canvas-fg-secondary">/ month</span>
                    </p>
                    <div className="mt-8 border-t border-brand-line/30 pt-8">
                       <p className="text-sm font-medium leading-relaxed text-canvas-fg-secondary">
                         Located at our premium Kochi Corporate Office. Walk in, plug in, and start working immediately with absolutely zero setup hassle.
                       </p>
                    </div>
                  </div>
                  <div className="relative z-10 mt-10">
                    <LinkButton 
                      href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to book the Dedicated Desk Space in Kochi.")}`} 
                      className="w-full"
                    >
                      Enquire & Book Now
                    </LinkButton>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
      <ClosingCta />
    </main>
  );
}
