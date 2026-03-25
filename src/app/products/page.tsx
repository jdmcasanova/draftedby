import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { products } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Products",
  description:
    "Explore Drafted By's AI-powered education products across France, English-speaking markets, and Poland.",
  path: "/products",
});

const sectionBgs = ["bg-cream", "bg-linen", "bg-cream"] as const;

export default function ProductsPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="section-shell max-w-3xl">
          <Reveal animation="clip-reveal">
            <h1 className="heading-xl">
              Three local products, one shared philosophy.
            </h1>
          </Reveal>
          <p className="body-lg mt-6 max-w-xl">
            Each product runs on the same core planning engine, then gets
            adapted for the language, tone, and classroom expectations of
            the teachers it serves.
          </p>
        </div>
      </section>

      {/* ── PRODUCT SECTIONS ── */}
      {products.map((product, i) => (
        <section
          key={product.slug}
          className={`${sectionBgs[i % sectionBgs.length]} py-14 md:py-20`}
        >
          <div
            className={`section-shell flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="lg:flex-1">
              <ProductCard
                variant="feature"
                title={product.name}
                description={product.description}
                href={product.href}
                slug={product.slug}
                flags={[...product.flags]}
                market={product.marketLabel}
                targetMarket={product.targetMarket}
                features={product.features}
                comingSoon={product.comingSoon}
                ctaLabel={`Visit ${product.name}`}
              />
            </div>
          </div>
        </section>
      ))}

      {/* ── FOOTER CTA ── */}
      <section className="py-16 md:py-24">
        <div className="section-shell text-center">
          <p className="text-lg text-stone-400">Looking for something else?</p>
          <div className="mt-4">
            <Link href="/contact" className="btn-ghost">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
