import CountryFlag from "@/components/CountryFlag";
import BrowserMockup from "@/components/BrowserMockup";
import { cn } from "@/lib/utils";
import type { ProductSlug } from "@/lib/site";

type CountryCode = "fr" | "gb" | "us" | "pl";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  slug?: ProductSlug;
  flags: CountryCode[];
  market?: string;
  targetMarket?: string;
  ctaLabel?: string;
  features?: string[];
  comingSoon?: boolean;
  variant?: "compact" | "feature";
  className?: string;
};

function ArrowRight() {
  return (
    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VisitLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-500 transition-colors hover:text-terracotta-600"
      aria-label={`${label} in a new tab`}
    >
      {label}
      <ArrowRight />
    </a>
  );
}

export default function ProductCard({
  title,
  description,
  href,
  slug,
  flags,
  market,
  targetMarket,
  ctaLabel = "Visit site",
  features = [],
  comingSoon = false,
  variant = "compact",
  className = "",
}: ProductCardProps) {
  if (variant === "feature") {
    return (
      <article className={cn("grid items-center gap-8 md:grid-cols-2 md:gap-12", className)}>
        {/* Text side */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {market ? (
              <span className="badge bg-forest-50 text-forest-600">{market}</span>
            ) : null}
            {comingSoon ? (
              <span className="badge bg-stone-100 text-stone-400">Coming soon</span>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <h3 className="heading-accent text-2xl tracking-[-0.025em] text-charcoal">
              {title}
            </h3>
            <div className="flex items-center gap-1">
              {flags.map((code) => (
                <CountryFlag
                  key={`${title}-${code}`}
                  code={code}
                  className="h-3.5 w-5 rounded-[3px] shadow-soft"
                />
              ))}
            </div>
          </div>

          <p className="body-base max-w-2xl text-base">
            {description}
          </p>

          {targetMarket ? (
            <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-forest-500">
              {targetMarket}
            </p>
          ) : null}

          {features.length > 0 ? (
            <ul className="grid gap-2.5 pt-2 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm leading-6 text-stone-500">
                  <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-terracotta-400" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="pt-2">
            {comingSoon ? (
              <span className="badge bg-stone-100 text-stone-400">Coming soon</span>
            ) : (
              <VisitLink href={href} label={ctaLabel} />
            )}
          </div>
        </div>

        {/* Mockup side */}
        <div className={cn(comingSoon && "opacity-50")}>
          {slug ? <BrowserMockup productSlug={slug} /> : null}
        </div>
      </article>
    );
  }

  // Compact variant
  return (
    <article
      className={cn(
        "rounded-xl border-l-[3px] border-l-terracotta-300 bg-cream p-5 shadow-card",
        className
      )}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          {market ? (
            <span className="badge bg-forest-50 text-forest-600">{market}</span>
          ) : null}
          {comingSoon ? (
            <span className="badge bg-stone-100 text-stone-400">Coming soon</span>
          ) : null}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <h3 className="heading-md text-xl tracking-[-0.025em] text-charcoal">
            {title}
          </h3>
          <div className="flex items-center gap-1">
            {flags.map((code) => (
              <CountryFlag
                key={`${title}-${code}`}
                code={code}
                className="h-3.5 w-5 rounded-[3px] shadow-soft"
              />
            ))}
          </div>
        </div>

        <p className="body-base">
          {description}
        </p>

        <div>
          {comingSoon ? (
            <span className="badge bg-stone-100 text-stone-400">Coming soon</span>
          ) : (
            <VisitLink href={href} label={ctaLabel} />
          )}
        </div>
      </div>
    </article>
  );
}
