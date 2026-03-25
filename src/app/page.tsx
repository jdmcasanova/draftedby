import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import StatBar from "@/components/StatBar";
import { products, stats } from "@/lib/site";

const operatingNotes = [
  "Built around real teacher prep time, not generic prompts.",
  "Localized for each market instead of copied everywhere.",
  "Designed to assist judgment, not automate it away.",
];

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <section className="relative overflow-hidden pb-18 pt-24 md:pb-24 md:pt-32">
        <div className="ambient-wash -left-14 top-0 h-72 w-72 bg-terracotta-300/70" aria-hidden="true" />
        <div className="ambient-wash right-0 top-8 h-80 w-80 bg-forest-100/80" aria-hidden="true" />
        <div className="section-shell relative">
          <ScrollReveal>
            <p className="section-kicker">Drafted By</p>
            <h1 className="section-heading hero-heading mt-5 max-w-5xl">
              We build tools that give teachers their evenings back.
            </h1>
            <p className="section-copy mt-6">
              Drafted By is the parent company behind a suite of AI-powered lesson-planning
              products. We build practical software that helps teachers move faster, stay in
              control, and finish the day with more time left for life outside school.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary" aria-label="Explore Drafted By products">
                Explore products
              </Link>
              <Link href="/about" className="btn-ghost" aria-label="Read the Drafted By company story">
                Read our story
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} className="mt-16 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="card border border-stone-200 bg-white/80">
              <p className="section-kicker">How We Build</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-charcoal">
                Focused software, localized carefully.
              </h2>
              <ul className="mt-6 space-y-4">
                {operatingNotes.map((note) => (
                  <li key={note} className="flex gap-3 text-sm leading-7 text-stone-600 md:text-base">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracotta-500" aria-hidden="true" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card border border-stone-200 bg-white/80">
              <p className="section-kicker">Operating Today</p>
              <div className="mt-6 space-y-5">
                {products.map((product) => (
                  <div
                    key={product.slug}
                    className="rounded-2xl border border-stone-200 bg-cream/80 px-4 py-4"
                  >
                    <p className="text-sm font-medium text-forest-700">{product.marketLabel}</p>
                    <p className="mt-1 font-display text-xl font-light tracking-[-0.03em] text-charcoal">
                      {product.name}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{product.shortDescription}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-12 pt-2 md:pb-16">
        <div className="section-shell">
          <ScrollReveal>
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-kicker">Products</p>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-light tracking-[-0.04em] text-charcoal">
                  One core product, adapted market by market.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-stone-600 md:text-base">
                The products share the same mission, but each one is written and shaped for the
                teachers it serves.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {products.map((product, index) => (
              <ScrollReveal key={product.slug} delay={index * 90}>
                <ProductCard
                  title={product.name}
                  description={product.shortDescription}
                  href={product.href}
                  flags={product.flags}
                  market={product.marketLabel}
                  ctaLabel="Visit site"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="section-shell">
          <ScrollReveal>
            <div className="card border border-stone-200 bg-white/80 md:grid md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-10">
              <div>
                <p className="section-kicker">Mission</p>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-light tracking-[-0.04em] text-forest-700">
                  AI should save teachers time, not replace them.
                </h2>
              </div>
              <div className="mt-6 md:mt-0">
                <p className="text-base leading-8 text-stone-600">
                  Our products start from a simple product belief: a teacher should be able to get
                  to a strong first draft faster, keep full editorial control, and trust what the
                  tool is doing. The goal is calmer preparation, not automated teaching.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="section-shell">
          <ScrollReveal>
            <StatBar items={[...stats]} />
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20 pt-12 md:pb-24 md:pt-16">
        <div className="section-shell">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[1.75rem] bg-forest-700 px-6 py-10 text-white shadow-card md:px-10 md:py-12">
              <p className="section-kicker !text-terracotta-300">What&apos;s next</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-light tracking-[-0.04em] text-white">
                We are exploring what thoughtful software can unlock beyond education.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-stone-200">
                Drafted By began in classrooms because the need was obvious and urgent. Over time,
                we expect to expand into other SaaS categories where the same discipline applies:
                focused tools, clear product decisions, and software that removes repetitive work
                without flattening expertise.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary" aria-label="Contact Drafted By">
                  Talk to us
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
