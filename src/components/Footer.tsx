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
    <footer className="grain-strong relative mt-auto bg-forest-800">
      <div className="section-shell grid gap-10 py-14 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-8">
        <div className="max-w-xs">
          <p className="font-display text-lg tracking-[-0.03em] text-cream">
            drafted by<span className="text-terracotta-500">.</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-forest-300">
            Localized AI lesson-planning products built to save teachers time
            without replacing their judgment.
          </p>
        </div>

        <div>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-forest-400">
            Company
          </p>
          <nav className="mt-3 flex flex-col gap-2" aria-label="Footer company">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-forest-200 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            {footerNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-forest-200 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-forest-400">
            Products
          </p>
          <nav className="mt-3 flex flex-col gap-2" aria-label="Footer products">
            {products.map((product) =>
              product.comingSoon ? (
                <span key={product.slug} className="text-sm text-forest-400">
                  {product.name}
                </span>
              ) : (
                <a
                  key={product.slug}
                  href={product.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-forest-200 transition-colors hover:text-white"
                >
                  {product.name}
                </a>
              )
            )}
          </nav>
        </div>

        <div>
          <p className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-forest-400">
            Contact
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-3 block text-sm text-forest-200 transition-colors hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>

      <div className="section-shell border-t border-forest-700 py-5 flex flex-col items-center gap-3">
        <p className="text-xs text-forest-400">
          {new Date().getFullYear()} {COMPANY_NAME}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-forest-500">
          <span>Our products:</span>
          <a href="https://preparemescours.fr" rel="noopener noreferrer" className="text-forest-400 hover:text-white transition-colors">Prépare Mes Cours (FR)</a>
          <span className="text-forest-600">·</span>
          <a href="https://draftmylesson.com" rel="noopener noreferrer" className="text-forest-400 hover:text-white transition-colors">Draft My Lesson (EN)</a>
          <span className="text-forest-600">·</span>
          <a href="https://przygotujlekcje.pl" rel="noopener noreferrer" className="text-forest-400 hover:text-white transition-colors">przygotuj lekcje. (PL)</a>
        </div>
      </div>
    </footer>
  );
}
