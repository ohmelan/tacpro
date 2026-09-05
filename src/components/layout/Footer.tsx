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
            <p className="text-white mt-5 text-sm leading-relaxed">{siteConfig.fullName}</p>
            <div className="mt-8 flex items-center gap-3">
              <a href="https://www.facebook.com/p/Team-TAC-100063722516056/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-soft/50 bg-white/5 text-brand-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-ink hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/tacprofessionals/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-soft/50 bg-white/5 text-brand-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-ink hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/tac-professionals-india-llp/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-12 w-12 items-center justify-center rounded-xl border border-brand-soft/50 bg-white/5 text-brand-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-ink hover:shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
            <div className="mt-10 flex flex-col gap-8">
              {siteConfig.addresses.map((address) => (
                <div key={address.title}>
                  <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#e4cd91]">
                    {address.title}
                  </p>
                  {(address as any).locations ? (
                    <div className="mt-4 flex flex-col gap-5">
                      {(address as any).locations.map((loc: any, idx: number) => (
                        <div key={idx}>
                          <p className="text-white text-sm font-bold tracking-wider uppercase mb-1.5">
                            {loc.name}
                          </p>
                          <p className="text-white text-sm leading-relaxed">
                            {loc.lines.map((line: string, i: number) => (
                              <span key={i}>
                                {line}
                                {i < loc.lines.length - 1 && <br />}
                              </span>
                            ))}
                          </p>
                          {loc.email && (
                            <a 
                              href={`mailto:${loc.email}`} 
                              className="mt-2 inline-flex items-center gap-2 text-sm text-[#e4cd91] hover:text-white transition-colors"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                              </svg>
                              {loc.email}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p className="text-white mt-3 text-sm leading-relaxed">
                        {address.lines?.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < (address.lines?.length || 0) - 1 && <br />}
                          </span>
                        ))}
                      </p>
                      {(address as any).email && (
                        <a 
                          href={`mailto:${(address as any).email}`} 
                          className="mt-3 inline-flex items-center gap-2 text-sm text-[#e4cd91] hover:text-white transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                          {(address as any).email}
                        </a>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-20">
            <nav aria-label="Footer">
              <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#e4cd91]">
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
                        className="text-white hover:text-brand-soft text-sm transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white hover:text-brand-soft text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl font-medium text-[#e4cd91]">
                Contact
              </p>
              <ul className="mt-6 flex flex-col gap-6">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 text-brand-soft">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white/80 text-xs font-bold tracking-wider uppercase">
                      Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white hover:text-brand-soft text-sm transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                {siteConfig.contactNumbers.map((contact) => (
                  <li key={contact.location} className="flex items-start gap-3">
                    <div className="mt-0.5 text-brand-soft">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-white/80 text-xs font-bold tracking-wider uppercase">
                        {contact.location}
                      </span>
                      <a
                        href={contact.href}
                        className="text-white hover:text-brand-soft text-sm transition-colors"
                      >
                        {contact.number}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative mt-24 text-center text-xs">
          <PremiumDivider className="absolute left-0 right-0 top-0" />
          <div className="pt-16">
            <p className="text-white/70">
              © {new Date().getFullYear()} {siteConfig.fullName}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
