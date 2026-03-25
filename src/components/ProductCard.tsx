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

export default function ProductCard({
  title,
  description,
  href,
  flags,
  market,
  targetMarket,
  ctaLabel = "Visit site",
  features = [],
  comingSoon = false,
  variant = "compact",
  className = "",
}: ProductCardProps) {
  const isFeature = variant === "feature";

  return (
    <article
      className={cn(
        "group rounded-2xl border transition-all duration-300",
        isFeature
          ? "border-stone-200/80 bg-white p-6 shadow-soft hover:shadow-elevated md:p-8"
          : "h-full border-stone-200/60 bg-white p-5 shadow-soft hover:shadow-card",
        className
      )}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0 flex-1 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            {market ? (
              <span className="badge bg-forest-50 text-forest-600">{market}</span>
            ) : null}
            {comingSoon ? (
              <span className="badge bg-stone-100 text-stone-400">Coming soon</span>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <h3 className={cn(
              "font-display tracking-[-0.025em] text-charcoal",
              isFeature
                ? "text-2xl font-[320] md:text-3xl"
                : "text-xl font-[340]"
            )}>
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

          <p className={cn(
            "body-base max-w-2xl",
            isFeature && "text-base"
          )}>
            {description}
          </p>

          {targetMarket ? (
            <p className="font-mono text-[0.6875rem] font-medium uppercase tracking-[0.1em] text-forest-500">
              {targetMarket}
            </p>
          ) : null}
        </div>

        {comingSoon ? null : (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-linen px-3.5 py-2 text-sm font-medium text-charcoal transition-all hover:border-terracotta-300 hover:bg-terracotta-50 hover:text-terracotta-600"
            aria-label={`${ctaLabel} in a new tab`}
          >
            {ctaLabel}
            <ArrowRight />
          </a>
        )}
      </div>

      {isFeature && features.length > 0 ? (
        <div className="mt-6 border-t border-stone-100 pt-6">
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2.5 text-sm leading-6 text-stone-500">
                <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-terracotta-400" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
