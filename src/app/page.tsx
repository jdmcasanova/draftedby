import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import StatBar from "@/components/StatBar";
import { products, stats } from "@/lib/site";

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36 lg:pt-44">
        {/* Gradient orbs */}
        <div
          className="pointer-events-none absolute -left-32 -top-20 h-[28rem] w-[28rem] rounded-full opacity-30 blur-[100px]"
          style={{ background: "radial-gradient(circle, #c4553a 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-24 top-12 h-[24rem] w-[24rem] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, #3d6b5a 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="section-shell relative">
          <ScrollReveal>
            <p className="label-caps">AI-powered lesson planning</p>
            <h1 className="heading-xl mt-5 max-w-[18ch]">
              We build tools that give teachers their evenings back.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <p className="body-lg mt-8 max-w-xl">
              Drafted By is the company behind a suite of lesson-planning products.
              Practical software that helps teachers move faster, stay in control,
              and finish the day with more time for life outside school.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={140}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/products" className="btn-primary">
                Explore products
              </Link>
              <Link href="/about" className="btn-ghost">
                Our story
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────── */}
      <section className="pb-16 md:pb-24">
        <div className="section-shell">
          <ScrollReveal>
            <hr className="rule mb-10" />
            <StatBar items={[...stats]} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Products ────────────────────────────────────── */}
      <section className="pb-20 md:pb-28">
        <div className="section-shell">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="label-caps">Products</p>
              <h2 className="heading-lg mt-4">
                One core product, adapted market by market.
              </h2>
              <p className="body-base mt-4 text-stone-400">
                Same mission, different language. Each product is written and shaped
                for the teachers it serves.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {products.map((product, i) => (
              <ScrollReveal key={product.slug} delay={i * 80}>
                <ProductCard
                  title={product.name}
                  description={product.shortDescription}
                  href={product.href}
                  flags={product.flags}
                  market={product.marketLabel}
                  comingSoon={product.comingSoon}
                  ctaLabel="Visit site"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-800 py-20 text-white md:py-28">
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-[0.07]"
          style={{ background: "radial-gradient(ellipse at 80% 30%, #c4553a, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="section-shell relative">
          <ScrollReveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
              <div>
                <p className="label-caps !text-terracotta-300">Mission</p>
                <h2 className="heading-lg mt-4 !text-white">
                  AI should save teachers time, not replace them.
                </h2>
              </div>
              <div>
                <p className="text-base leading-[1.85] text-stone-300">
                  A teacher should be able to get to a strong first draft faster,
                  keep full editorial control, and trust what the tool is doing.
                  The goal is calmer preparation, not automated teaching.
                </p>
                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-sm font-medium text-terracotta-300 transition-colors hover:text-terracotta-200"
                  >
                    Read our story
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="section-shell">
          <ScrollReveal>
            <div className="text-center">
              <p className="label-caps">Get in touch</p>
              <h2 className="heading-lg mx-auto mt-4 max-w-[20ch]">
                Questions about a product or partnership?
              </h2>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Contact us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
