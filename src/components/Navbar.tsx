"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/lib/site";
import { cn } from "@/lib/utils";

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const syncScrolled = () => {
      setScrolled(window.scrollY > 8);
    };

    syncScrolled();
    window.addEventListener("scroll", syncScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", syncScrolled);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-stone-200/80 bg-linen/82 shadow-[0_12px_36px_rgba(28,25,23,0.06)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-1 rounded-md font-display text-[1.45rem] font-[340] tracking-[-0.04em] text-forest-700 transition-colors hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta-500"
          aria-label="Drafted By home"
        >
          <span>drafted by</span>
          <span
            className="inline-flex h-2.5 w-2.5 rounded-full bg-terracotta-500 shadow-[0_0_0_5px_rgba(196,85,58,0.1)]"
            aria-hidden="true"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {primaryNavigation.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={`Go to ${link.label}`}
                className={cn(
                  "rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta-500",
                  active
                    ? "bg-terracotta-100 text-terracotta-600"
                    : "text-stone-600 hover:bg-white/75 hover:text-charcoal"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white/70 p-2 text-charcoal transition-colors hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta-500 md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          "border-t border-stone-200/80 bg-linen/95 px-4 pb-4 pt-2 backdrop-blur-xl md:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {primaryNavigation.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={`Go to ${link.label}`}
                className={cn(
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta-500",
                  active
                    ? "bg-terracotta-100 text-terracotta-600"
                    : "text-stone-600 hover:bg-cream hover:text-charcoal"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
