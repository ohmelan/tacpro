"use client";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/content/nav";
export function Footer() {
  return (
    <footer className="border-brand-line bg-ink text-ink-fg border-t">
      <Container className="py-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/brand/tac-lockup-colored.webp"
              alt={siteConfig.fullName}
              width={800}
              height={236}
              className="h-8 w-auto"
            />
            <p className="text-ink-fg-secondary mt-3 text-sm">{siteConfig.fullName}</p>
            <div className="mt-6 flex flex-col gap-6">
              {siteConfig.addresses.map((address) => (
                <div key={address.title}>
                  <p className="text-ink-fg-dim text-xs font-semibold tracking-[0.1em] uppercase">
                    {address.title}
                  </p>
                  <p className="text-ink-fg-secondary mt-1.5 text-sm leading-relaxed">
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
          <div className="flex flex-wrap gap-16">
            <nav aria-label="Footer">
              <p className="text-ink-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                Navigate
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    {link.items ? (
                      <button
                        onClick={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          window.dispatchEvent(new CustomEvent("open-nav-dropdown", { detail: { href: link.href } }));
                        }}
                        className="text-ink-fg-secondary hover:text-ink-fg text-sm transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-ink-fg-secondary hover:text-ink-fg text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="text-ink-fg-dim text-xs font-semibold tracking-[0.18em] uppercase">
                Contact
              </p>
              <ul className="mt-4 flex flex-col gap-4">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-ink-fg-secondary hover:text-ink-fg text-sm transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                {siteConfig.contactNumbers.map((contact) => (
                  <li key={contact.location} className="flex flex-col gap-0.5">
                    <span className="text-ink-fg-dim text-[11px] font-semibold tracking-wider uppercase">
                      {contact.location}
                    </span>
                    <a
                      href={contact.href}
                      className="text-ink-fg-secondary hover:text-ink-fg text-sm transition-colors"
                    >
                      {contact.number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-brand-line text-ink-fg-dim mt-16 border-t pt-8 text-center text-xs">
          <p>
            © {new Date().getFullYear()} {siteConfig.fullName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
