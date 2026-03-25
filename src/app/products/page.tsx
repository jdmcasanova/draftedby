import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/metadata";
import { products } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Products",
  description:
    "Explore Drafted By's AI-powered education products across France, English-speaking markets, and Poland.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main id="main-content" className="flex-1 pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="section-shell">
        <ScrollReveal>
          <p className="label-caps">Products</p>
          <h1 className="heading-xl mt-5 max-w-[22ch]">
            Three local products, one shared philosophy.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="body-lg mt-8">
            Each product runs on the same core planning engine, then gets adapted
            for the language, tone, and classroom expectations of the teachers it serves.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5">
          {products.map((product, i) => (
            <ScrollReveal key={product.slug} delay={i * 80}>
              <ProductCard
                title={product.name}
                description={product.description}
                href={product.href}
                flags={product.flags}
                market={product.marketLabel}
                targetMarket={product.targetMarket}
                features={product.features}
                comingSoon={product.comingSoon}
                ctaLabel={`Visit ${product.name}`}
                variant="feature"
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <p className="text-sm text-stone-400">
              Looking for something else?
            </p>
            <div className="mt-4">
              <Link href="/contact" className="btn-ghost">
                Talk to us
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
