import Link from "next/link";
import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  footerNavigation,
  products,
} from "@/lib/site";

const siteLinks = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-stone-200/60 bg-cream">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-8">
        <div className="max-w-xs">
          <p className="font-display text-lg font-[340] tracking-[-0.03em] text-charcoal">
            drafted by<span className="text-terracotta-500">.</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-stone-400">
            Localized AI lesson-planning products built to save teachers time
            without replacing their judgment.
          </p>
        </div>

        <div>
          <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-stone-400">
            Company
          </p>
          <nav className="mt-3 flex flex-col gap-2" aria-label="Footer company">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-stone-500 transition-colors hover:text-charcoal"
              >
                {link.label}
              </Link>
            ))}
            {footerNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-stone-500 transition-colors hover:text-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-stone-400">
            Products
          </p>
          <nav className="mt-3 flex flex-col gap-2" aria-label="Footer products">
            {products.map((product) =>
              product.comingSoon ? (
                <span key={product.slug} className="text-sm text-stone-300">
                  {product.name}
                </span>
              ) : (
                <a
                  key={product.slug}
                  href={product.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-stone-500 transition-colors hover:text-charcoal"
                >
                  {product.name}
                </a>
              )
            )}
          </nav>
        </div>

        <div>
          <p className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-stone-400">
            Contact
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 block text-sm text-stone-500 transition-colors hover:text-charcoal"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="section-shell border-t border-stone-200/60 py-5">
        <p className="text-xs text-stone-400">
          {new Date().getFullYear()} {COMPANY_NAME}
        </p>
      </div>
    </footer>
  );
}
