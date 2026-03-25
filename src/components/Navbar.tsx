"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 8);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-stone-200/60 bg-cream/90 shadow-soft backdrop-blur-2xl"
          : "bg-transparent"
      )}
    >
      <div className="section-shell flex h-16 items-center justify-between lg:h-[4.25rem]">
        <Link
          href="/"
          className="group flex items-baseline gap-0.5 font-display text-xl tracking-[-0.04em] text-charcoal"
          aria-label="Drafted By home"
        >
          drafted by
          <span className="inline-block h-[0.4rem] w-[0.4rem] rounded-full bg-terracotta-500 transition-transform group-hover:scale-125" aria-hidden="true" />
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Primary">
          {primaryNavigation.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3.5 py-1.5 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors",
                  active
                    ? "bg-terracotta-500 text-white"
                    : "text-stone-500 hover:text-charcoal"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-9 w-9 items-center justify-center rounded-lg md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <div className="flex w-4 flex-col gap-[5px]">
            <span className={cn(
              "block h-[1.5px] w-full transition-all duration-300 origin-center",
              mobileOpen ? "translate-y-[3.25px] rotate-45 bg-cream" : "bg-charcoal"
            )} />
            <span className={cn(
              "block h-[1.5px] w-full transition-all duration-300 origin-center",
              mobileOpen ? "-translate-y-[3.25px] -rotate-45 bg-cream" : "bg-charcoal"
            )} />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-forest-800 transition-all duration-300 md:hidden",
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="flex h-full flex-col items-start justify-center gap-2 px-8" aria-label="Mobile">
          {primaryNavigation.map((link, i) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-display text-[2.5rem] tracking-[-0.03em] transition-all duration-500",
                  active ? "text-terracotta-300" : "text-cream",
                  mobileOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                )}
                style={{ transitionDelay: mobileOpen ? `${100 + i * 60}ms` : "0ms" }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/legal"
            className={cn(
              "mt-6 font-mono text-xs uppercase tracking-widest text-forest-400 transition-all duration-500",
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            )}
            style={{ transitionDelay: mobileOpen ? "340ms" : "0ms" }}
          >
            Legal
          </Link>
        </nav>
      </div>
    </header>
  );
}
