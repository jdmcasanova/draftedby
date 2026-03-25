import Link from "next/link";
import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  COPYRIGHT_YEAR,
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
    <footer className="mt-auto bg-forest-700 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <p className="font-display text-2xl font-[340] tracking-[-0.04em]">
            drafted by<span className="text-terracotta-300">.</span>
          </p>
          <p className="mt-4 text-sm leading-6 text-stone-200">
            {COMPANY_NAME} is the parent company behind localized AI lesson-planning products built
            to save teachers time without taking judgment away from the classroom.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-flex text-sm text-stone-100 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">Company</p>
          <nav className="mt-4 flex flex-col gap-3" aria-label="Footer company">
            {siteLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-label={`Go to ${link.label}`}
                className="text-sm text-stone-100 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            ))}
            {footerNavigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-label={`Go to ${link.label}`}
                className="text-sm text-stone-100 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">Products</p>
          <nav className="mt-4 flex flex-col gap-3" aria-label="Footer products">
            {products.map((product) => (
              <a
                key={product.href}
                href={product.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Visit ${product.name}`}
                className="text-sm text-stone-100 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {product.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-stone-300 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            Copyright {COPYRIGHT_YEAR} {COMPANY_NAME}
          </p>
          <p>Corporate website for the parent company behind localized SaaS products.</p>
        </div>
      </div>
    </footer>
  );
}
