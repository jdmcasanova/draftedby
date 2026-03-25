import CountryFlag from "@/components/CountryFlag";
import { cn } from "@/lib/utils";

type CountryCode = "fr" | "gb" | "us" | "pl";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  flags: CountryCode[];
  market?: string;
  targetMarket?: string;
  ctaLabel?: string;
  badge?: string;
  features?: string[];
  variant?: "compact" | "feature";
  className?: string;
};

function ExternalArrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
      <path d="M6 14L14 6M9 6h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProductCard({
  title,
  description,
  href,
  flags,
  market,
  targetMarket,
  ctaLabel = "Visit site",
  badge,
  features = [],
  variant = "compact",
  className = "",
}: ProductCardProps) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-stone-200 bg-cream shadow-card",
        variant === "feature" ? "p-6 md:p-8" : "h-full p-5",
        className
      )}
    >
      <div className="border-l-4 border-l-terracotta-500 pl-4">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {badge ? (
                <span className="badge bg-terracotta-100 text-terracotta-600">{badge}</span>
              ) : null}
              {market ? <span className="badge bg-forest-100 text-forest-700">{market}</span> : null}
            </div>

            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-xl font-light tracking-[-0.03em] text-charcoal md:text-2xl">
                  {title}
                </h3>
                <div className="flex items-center gap-1.5">
                  {flags.map((code) => (
                    <CountryFlag
                      key={`${title}-${code}`}
                      code={code}
                      className="h-4 w-6 rounded-sm border border-stone-200 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                    />
                  ))}
                </div>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-stone-600 md:text-base">{description}</p>
              {targetMarket ? (
                <p className="text-sm font-medium text-forest-700">Target market: {targetMarket}</p>
              ) : null}
            </div>
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-terracotta-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-terracotta-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-terracotta-500"
            aria-label={`${ctaLabel} in a new tab`}
          >
            <span>{ctaLabel}</span>
            <ExternalArrow />
          </a>
        </div>

        {variant === "feature" ? (
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-white to-terracotta-100/60 p-5">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-dashed border-stone-300 bg-[radial-gradient(circle_at_top_left,rgba(196,85,58,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(61,107,90,0.16),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.98),rgba(245,244,240,0.92))]">
                <div className="absolute left-5 top-5 h-8 w-24 rounded-full bg-white/75 shadow-card" />
                <div className="absolute left-5 top-[4.5rem] h-20 w-[46%] rounded-2xl bg-white/80 shadow-card" />
                <div className="absolute bottom-5 right-5 h-24 w-[40%] rounded-2xl border border-white/60 bg-forest-100/70 shadow-card" />
              </div>
            </div>

            {features.length > 0 ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Key features</p>
                <ul className="mt-4 space-y-3">
                  {features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-stone-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracotta-500" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
