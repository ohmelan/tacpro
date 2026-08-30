"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/content/nav";
import { PremiumDivider } from "@/components/ui/PremiumDivider";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white">
      <PremiumDivider />
      <Container className="py-20">
        <div className="flex flex-col gap-16 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="relative h-9 w-max">
              {/* White Text Layer */}
              <Image
                src="/brand/tac-lockup-colored.webp"
                alt={siteConfig.fullName}
                width={800}
                height={236}
                className="h-9 w-auto brightness-0 invert"
              />
              {/* Colored Flower Layer (Clipped to left 30%) */}
              <Image
                src="/brand/tac-lockup-colored.webp"
                alt=""
                width={800}
                height={236}
                className="absolute inset-0 h-9 w-auto"
                style={{ clipPath: "inset(0 70% 0 0)" }}
              />
            </div>
            <p className="text-white/80 mt-5 text-sm leading-relaxed">{siteConfig.fullName}</p>
            <div className="mt-10 flex flex-col gap-10">
              {siteConfig.addresses.map((address) => (
                <div key={address.title}>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-brand-soft">
                    {address.title}
                  </p>
                  <p className="text-white/80 mt-3 text-sm leading-relaxed">
                    {address.lines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < address.lines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-20">
            <nav aria-label="Footer">
              <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-brand-soft">
                Navigate
              </p>
              <ul className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.items ? (
                      <button
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          window.dispatchEvent(new CustomEvent("open-nav-dropdown", { detail: { href: link.href } }));
                        }}
                        className="text-white/80 hover:text-brand-soft text-sm transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/80 hover:text-brand-soft text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-brand-soft">
                Contact
              </p>
              <ul className="mt-6 flex flex-col gap-6">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white/80 hover:text-brand-soft text-sm transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                {siteConfig.contactNumbers.map((contact) => (
                  <li key={contact.location} className="flex flex-col gap-1.5">
                    <span className="text-white/50 text-[11px] font-semibold tracking-wider uppercase">
                      {contact.location}
                    </span>
                    <a
                      href={contact.href}
                      className="text-white/80 hover:text-brand-soft text-sm transition-colors"
                    >
                      {contact.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative mt-24 text-center text-xs">
          <PremiumDivider className="absolute left-0 right-0 top-0" />
          <div className="pt-16">
            <p className="text-white/50">
              © {new Date().getFullYear()} {siteConfig.fullName}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
