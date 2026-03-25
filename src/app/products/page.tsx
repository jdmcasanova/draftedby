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
    <main id="main-content" className="flex-1 pb-20 pt-24 md:pb-24 md:pt-32">
      <div className="section-shell">
        <ScrollReveal>
          <p className="section-kicker">Products</p>
          <h1 className="section-heading mt-5 max-w-4xl">
            Three local products, one shared product philosophy.
          </h1>
          <p className="section-copy mt-6">
            Each product runs on the same core planning engine, then gets adapted for the language,
            tone, and classroom expectations of the teachers it serves.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6">
          {products.map((product, index) => (
            <ScrollReveal key={product.slug} delay={index * 90}>
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

        <section className="mt-12">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[1.75rem] bg-forest-700 px-6 py-10 text-white shadow-card md:px-10 md:py-12">
              <p className="section-kicker !text-terracotta-300">Looking Ahead</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] font-light tracking-[-0.04em] text-white">
                More products coming soon.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-stone-200">
                Drafted By is intentionally focused today, but the company is structured to support
                future SaaS products beyond education wherever careful product design can reduce
                repetitive work and make expert workflows calmer.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </main>
  );
}
