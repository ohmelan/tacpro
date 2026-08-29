"use client";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui/Badge";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/content/nav";
function RoomVideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className="h-full w-full object-cover"
        src="/scene/corner-office.mp4"
        poster="/scene/corner-office-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="from-canvas via-canvas/35 pointer-events-none absolute inset-0 bg-gradient-to-r to-transparent" />
    </div>
  );
}
export function Hero() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden">
      <RoomVideoBackground />
      <Container className="relative z-10 flex min-h-[100dvh] items-center pt-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 20 }}
          >
            <Eyebrow>TAC Professionals</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 20 }}
            className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.75rem,5.5vw,5.25rem)] leading-[1.02] font-bold tracking-tight"
          >
            Secure your financial future with <span className="text-brand-deep">expert</span>{" "}
            guidance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 20 }}
            className="text-canvas-fg-secondary mt-6 max-w-lg text-lg"
          >
            Business Registration, Taxation, Audit & Assurance, Corporate Compliance, Trademark
            Registration — handled with the precision of a firm that has seen every filing.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 20 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <LinkButton href="/services" variant="outline">
              Our services
            </LinkButton>
            <LinkButton
              href={`tel:+${siteConfig.whatsappNumber}`}
              variant="brand"
              onClick={(e) => {
                if (!window.confirm("Would you like to call +91 8848 26 6969?")) {
                  e.preventDefault();
                }
              }}
            >
              <span className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] font-normal tracking-tight">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  aria-hidden
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Book a Free Consultation
              </span>
            </LinkButton>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
