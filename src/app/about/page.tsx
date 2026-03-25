import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { timeline, values } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how Drafted By was founded and why the company focuses on practical AI tools for teachers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* ── HERO (centered — unique to this page) ── */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="section-shell text-center">
          <Reveal animation="clip-reveal">
            <h1 className="heading-xl mx-auto max-w-[20ch]">
              A company built to keep useful products focused.
            </h1>
          </Reveal>
          <p className="body-lg mx-auto mt-6 max-w-2xl">
            Drafted By builds focused software that handles the busywork
            professionals deal with every day. We started with education
            and we are expanding into new categories where the same
            approach applies.
          </p>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="bg-cream py-14">
        <div className="section-shell">
          <div className="relative border-t-[3px] border-t-terracotta-400 pt-8">
            {/* Decorative letter */}
            <span
              className="pointer-events-none absolute -left-4 -top-8 select-none font-display text-[8rem] leading-none text-terracotta-100 md:text-[12rem]"
              aria-hidden="true"
            >
              J
            </span>

            <div className="relative z-10 max-w-xl">
              <h2 className="heading-md">JD Michael Casanova</h2>
              <p className="mt-4 text-[0.9375rem] leading-[1.85] text-stone-500">
                Former Apple and Meta project manager. Founded Drafted By
                to build practical software that respects how professionals
                actually work.
              </p>
              <a
                href="https://jdmcasanova.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-500 transition-colors hover:text-terracotta-600"
              >
                jdmcasanova.com
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-5">
          <p className="label-caps mb-6">Company story</p>

          <p className="text-[0.9375rem] leading-[1.9] text-stone-500">
            Most software tries to do everything for everyone. The result
            is tools that feel generic and get in the way. Drafted By
            takes the opposite approach: one problem at a time, one market
            at a time, done properly.
          </p>

          <hr className="my-6 h-px border-none bg-terracotta-100" />

          <p className="text-[0.9375rem] leading-[1.9] text-stone-500">
            The first products focus on education because the need was
            obvious. Teachers everywhere spend hours on repetitive planning
            work that AI can handle in minutes. But the playbook is the
            same for any field: understand the workflow, build something
            useful, and localize it for each market.
          </p>

          <hr className="my-6 h-px border-none bg-terracotta-100" />

          <p className="text-[0.9375rem] leading-[1.9] text-stone-500">
            The company is structured to grow into new categories over
            time. The standard stays the same: reduce friction, respect
            expertise, ship software that feels like it was built by
            someone who understands the job.
          </p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="grain-strong relative bg-forest-800 py-16 text-white md:py-24">
        <div className="section-shell">
          <p className="label-caps !text-terracotta-300">Timeline</p>
          <h2 className="heading-lg mt-4 !text-white">
            A short, deliberate rollout.
          </h2>

          {/* Desktop: horizontal */}
          <div className="relative mt-12 hidden md:flex md:justify-between">
            {/* Connecting line */}
            <div
              className="absolute left-0 right-0 top-4 h-px bg-forest-600"
              aria-hidden="true"
            />

            {timeline.map((item) => (
              <div
                key={item.title}
                className="relative max-w-[16rem] text-center"
              >
                <div
                  className="mx-auto mb-3 h-2 w-2 rounded-full bg-terracotta-400"
                  aria-hidden="true"
                />
                <span className="font-mono text-2xl text-terracotta-300">
                  {item.year}
                </span>
                <h3 className="mt-2 text-sm font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-forest-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="mt-10 space-y-8 border-l border-forest-600 pl-6 md:hidden">
            {timeline.map((item) => (
              <div key={item.title} className="relative">
                <div
                  className="absolute -left-[1.6875rem] top-1 h-2 w-2 rounded-full bg-terracotta-400"
                  aria-hidden="true"
                />
                <span className="font-mono text-xl text-terracotta-300">
                  {item.year}
                </span>
                <h3 className="mt-1 text-sm font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-forest-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-16">
        <div className="section-shell">
          <h2 className="heading-lg">Principles that shape the work.</h2>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-r-xl border-l-[3px] border-l-forest-400 bg-cream p-6 md:p-8"
              >
                <h3 className="heading-accent text-lg text-forest-700">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-stone-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
