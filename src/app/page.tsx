import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import StatBar from "@/components/StatBar";
import BrowserMockup from "@/components/BrowserMockup";
import { products, stats } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28">
        {/* Gradient orb */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[480px] w-[480px] rounded-full bg-terracotta-400 opacity-[0.35] blur-[120px]"
          aria-hidden="true"
        />

        <div className="section-shell relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.65fr]">
            {/* Left column */}
            <div>
              <p className="label-caps mb-4">Practical software, built with care</p>

              <Reveal animation="clip-reveal">
                <h1 className="heading-xl max-w-[16ch]">
                  We build tools that make expert work easier.
                </h1>
              </Reveal>

              <Reveal animation="blur-in" delay={100}>
                <p className="body-lg mt-6 max-w-[48ch]">
                  Drafted By builds focused software that removes repetitive
                  work without flattening expertise. We started in education
                  and are expanding into new categories.
                </p>
              </Reveal>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className="btn-primary">
                  Explore products
                </Link>
                <Link href="/about" className="btn-ghost">
                  Our story
                </Link>
              </div>
            </div>

            {/* Right column — stacked mockups */}
            <div className="relative hidden lg:block">
              <div
                className="dot-grid absolute inset-0 -m-6 rounded-2xl opacity-40"
                aria-hidden="true"
              />
              <div className="relative">
                <BrowserMockup
                  productSlug="prepare-mes-cours"
                  className="relative rotate-2"
                />
                <BrowserMockup
                  productSlug="draft-my-lesson"
                  className="absolute -bottom-8 -left-10 w-[70%] -rotate-3 opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-cream py-12 md:py-16">
        <div className="section-shell">
          <StatBar items={[...stats]} />
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="py-16 md:py-24">
        <div className="section-shell">
          <p className="label-caps mb-3">Products</p>
          <h2 className="heading-lg">
            Focused tools, localized carefully.
          </h2>
          <p className="mt-4 max-w-xl text-stone-400">
            Each product is shaped for the people it serves — their language,
            workflows, and expectations.
          </p>

          <Reveal animation="scale-in" className="mt-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product, i) => (
                <div
                  key={product.slug}
                  className={i === 2 ? "lg:mt-6" : undefined}
                >
                  <ProductCard
                    variant="compact"
                    title={product.name}
                    description={product.shortDescription}
                    href={product.href}
                    flags={[...product.flags]}
                    market={product.marketLabel}
                    comingSoon={product.comingSoon}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="grain-strong relative bg-forest-800 py-20 text-white md:py-32">
        <div className="section-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="label-caps !text-terracotta-300">Our mission</p>
              <h2 className="heading-lg mt-3 !text-white">
                Software should remove friction, not flatten expertise.
              </h2>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-forest-200 leading-relaxed">
                We build practical tools that handle the repetitive parts of
                expert work. Our first products help teachers plan lessons
                faster. Over time, we will bring the same approach to other
                fields where careful software can make a real difference.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-terracotta-300 transition-colors hover:text-terracotta-200"
              >
                Read our story
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-24">
        <div className="section-shell">
          <div className="dot-grid relative mx-auto max-w-2xl -rotate-[0.5deg] rounded-2xl bg-cream p-10 shadow-card md:p-14">
            <p className="label-caps mb-3">Get in touch</p>
            <h2 className="heading-md text-center">
              Have a project in mind? We would love to hear about it.
            </h2>
            <div className="mt-6 text-center">
              <Link href="/contact" className="btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
