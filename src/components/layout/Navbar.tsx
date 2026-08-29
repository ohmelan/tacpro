"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { LinkButton } from "@/components/ui/Button";
import { navLinks, siteConfig } from "@/content/nav";
import { cn } from "@/lib/utils";
function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  useEffect(() => {
    const handleOpenDropdown = (e: Event) => {
      const customEvent = e as CustomEvent;
      const targetHref = customEvent.detail?.href;
      const index = navLinks.findIndex((l) => l.href === targetHref);
      if (index !== -1) {
        setDropdownOpen(index);
        setTimeout(() => setDropdownOpen(null), 4000);
      }
    };
    window.addEventListener("open-nav-dropdown", handleOpenDropdown);
    return () => window.removeEventListener("open-nav-dropdown", handleOpenDropdown);
  }, []);
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
      {navLinks.map((link, i) => (
        <div 
          key={link.href} 
          className="relative"
          onMouseEnter={() => { setHovered(i); setDropdownOpen(i); }}
          onMouseLeave={() => { setHovered(null); setDropdownOpen(null); }}
        >
          {link.items ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                setDropdownOpen(dropdownOpen === i ? null : i);
              }}
              className="text-canvas-fg-secondary hover:text-canvas-fg relative flex items-center gap-1.5 rounded-full px-4 py-2 font-[family-name:var(--font-display)] text-[15px] font-normal tracking-tight transition-colors"
            >
              {hovered === i && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="bg-brand-soft absolute inset-0 rounded-full"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
              <svg className="relative z-10 w-3.5 h-3.5 transition-transform duration-200" style={{ transform: dropdownOpen === i ? "rotate(180deg)" : "none" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
          ) : (
            <Link
              href={link.href}
              onClick={onNavigate}
              className="text-canvas-fg-secondary hover:text-canvas-fg relative flex items-center gap-1.5 rounded-full px-4 py-2 font-[family-name:var(--font-display)] text-[15px] font-normal tracking-tight transition-colors"
            >
              {hovered === i && (
                <motion.span
                  layoutId="nav-hover-pill"
                  className="bg-brand-soft absolute inset-0 rounded-full"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          )}
          {link.items && (
            <AnimatePresence>
              {dropdownOpen === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-2 w-56 rounded-2xl border border-canvas-raised/50 bg-canvas/90 p-2 shadow-xl backdrop-blur-xl"
                >
                  {link.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onNavigate}
                      className="block rounded-lg px-4 py-2.5 text-[15px] text-canvas-fg-secondary hover:bg-brand-soft hover:text-canvas-fg transition-colors font-[family-name:var(--font-display)] font-normal"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      ))}
    </nav>
  );
}
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });
  useEffect(() => {
    const handleOpenDropdown = () => {
      if (window.innerWidth < 768) {
        setMenuOpen(true);
      }
    };
    window.addEventListener("open-nav-dropdown", handleOpenDropdown);
    return () => window.removeEventListener("open-nav-dropdown", handleOpenDropdown);
  }, []);
  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);
  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-brand pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
      />
      <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-[1280px] px-4 pt-4 sm:px-8 lg:px-12">
        <div
          className={cn(
            "bg-canvas/35 border-canvas-raised/40 relative flex w-full justify-between items-center rounded-2xl border px-5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_8px_32px_rgba(18,19,15,0.08)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/25 before:to-transparent before:content-['']",
            scrolled &&
              "border-brand-line/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_12px_40px_rgba(18,19,15,0.16)]",
          )}
        >
          <Link href="/" className="flex items-center" aria-label={siteConfig.fullName}>
            <Image
              src="/brand/tac-lockup-colored.webp"
              alt={siteConfig.fullName}
              width={800}
              height={236}
              priority
              className="h-8 w-auto"
            />
          </Link>
          <NavLinks />
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <LinkButton href="/contact" variant="brand" className="!px-5 !py-2.5 !text-sm">
                <span className="inline-flex items-center gap-1.5 font-[family-name:var(--font-display)] font-normal tracking-tight">
                  Get in touch
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
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
            >
              <span
                className={cn(
                  "h-px w-5 transition-all duration-300",
                  menuOpen ? "bg-brand-deep translate-y-[3.5px] rotate-45" : "bg-canvas-fg",
                )}
              />
              <span
                className={cn(
                  "h-px w-5 transition-all duration-300",
                  menuOpen ? "bg-brand-deep -translate-y-[3.5px] -rotate-45" : "bg-canvas-fg",
                )}
              />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-canvas fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden"
            role="navigation"
            aria-label="Mobile"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, type: "spring", stiffness: 120, damping: 18 }}
                className="flex flex-col items-center gap-4"
              >
                {link.items ? (
                  <span className="font-[family-name:var(--font-display)] text-3xl font-semibold">
                    {link.label}
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-[family-name:var(--font-display)] text-3xl font-semibold"
                  >
                    {link.label}
                  </Link>
                )}
                {link.items && (
                  <div className="flex flex-col items-center gap-3">
                    {link.items.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="font-[family-name:var(--font-display)] text-xl text-canvas-fg-secondary hover:text-canvas-fg transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.05 * navLinks.length,
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
            >
              <LinkButton href="/contact" variant="brand" onClick={() => setMenuOpen(false)}>
                Get in touch
              </LinkButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
