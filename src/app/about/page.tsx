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
            Drafted By was founded by JD Michael Casanova, a former WhatsApp
            employee with a deep interest in education, chess teaching, and
            practical AI. The company exists to support focused products that
            help teachers prepare faster without making the work feel generic.
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
                Former tech employee, including time at WhatsApp, with an
                ongoing interest in education, chess teaching, and how AI can
                be made genuinely useful for expert work. He founded Drafted By
                to prove that focused, teacher-first tools can outperform
                generic platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-5">
          <p className="label-caps mb-6">Company story</p>

          <p className="text-[0.9375rem] leading-[1.9] text-stone-500">
            The company started with a simple question: if teachers spend so
            much of their week planning, rewriting, and adapting materials, what
            would helpful AI look like if it were built around that reality
            instead of a generic productivity demo?
          </p>

          <hr className="my-6 h-px border-none bg-terracotta-100" />

          <p className="text-[0.9375rem] leading-[1.9] text-stone-500">
            The answer became a suite of localized products. Rather than forcing
            one global interface everywhere, Drafted By adapts the same core
            engine for each market it serves.
          </p>

          <hr className="my-6 h-px border-none bg-terracotta-100" />

          <p className="text-[0.9375rem] leading-[1.9] text-stone-500">
            The long-term ambition is bigger than education, but the standard
            stays the same: useful software should reduce friction, respect
            expertise, and feel grounded in how people actually work.
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
