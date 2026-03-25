import type { ReactNode, SVGProps } from "react";

type CountryCode = "fr" | "gb" | "us" | "pl";

type CountryFlagProps = {
  code: CountryCode;
  className?: string;
  title?: string;
  decorative?: boolean;
} & Omit<SVGProps<SVGSVGElement>, "title">;

const LABELS: Record<CountryCode, string> = {
  fr: "France",
  gb: "United Kingdom",
  us: "United States",
  pl: "Poland",
};

function FlagShell({
  children,
  className,
  title,
  decorative,
  label,
  ...props
}: CountryFlagProps & { label: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 24"
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? true : undefined}
      aria-label={decorative ? undefined : title ?? label}
      className={className}
      {...props}
    >
      {!decorative ? <title>{title ?? label}</title> : null}
      <clipPath id={`clip-${label.replace(/\s/g, "")}`}>
        <rect width="32" height="24" rx="2" />
      </clipPath>
      <g clipPath={`url(#clip-${label.replace(/\s/g, "")})`}>
        {children}
      </g>
    </svg>
  );
}

function FranceFlag(props: CountryFlagProps) {
  return (
    <FlagShell {...props} label={LABELS.fr}>
      <rect width="32" height="24" fill="#FFFFFF" />
      <rect width="10.666" height="24" fill="#0055A4" />
      <rect x="21.334" width="10.666" height="24" fill="#EF4135" />
    </FlagShell>
  );
}

function PolandFlag(props: CountryFlagProps) {
  return (
    <FlagShell {...props} label={LABELS.pl}>
      <rect width="32" height="12" fill="#FFFFFF" />
      <rect y="12" width="32" height="12" fill="#DC143C" />
    </FlagShell>
  );
}

function UnitedStatesFlag(props: CountryFlagProps) {
  return (
    <FlagShell {...props} label={LABELS.us}>
      <rect width="32" height="24" fill="#FFFFFF" />
      {Array.from({ length: 13 }).map((_, i) =>
        i % 2 === 0 ? (
          <rect key={`s-${i}`} y={i * (24 / 13)} width="32" height={24 / 13} fill="#B22234" />
        ) : null
      )}
      <rect width="12.8" height={24 * (7 / 13)} fill="#3C3B6E" />
      {/* Simplified 5x4 + 4x3 star grid */}
      {[0, 1, 2, 3, 4].map((row) =>
        (row % 2 === 0 ? [0, 1, 2, 3, 4, 5] : [0, 1, 2, 3, 4]).map((col) => (
          <circle
            key={`st-${row}-${col}`}
            cx={row % 2 === 0 ? 1.1 + col * 2.12 : 2.16 + col * 2.12}
            cy={1.3 + row * 2.15}
            r="0.55"
            fill="#FFFFFF"
          />
        ))
      )}
    </FlagShell>
  );
}

function UnitedKingdomFlag(props: CountryFlagProps) {
  return (
    <FlagShell {...props} label={LABELS.gb}>
      {/* Blue field */}
      <rect width="32" height="24" fill="#012169" />
      {/* White saltire */}
      <path d="M0 0 L32 24 M32 0 L0 24" stroke="#FFFFFF" strokeWidth="4.8" />
      {/* Red saltire */}
      <path d="M0 0 L32 24 M32 0 L0 24" stroke="#C8102E" strokeWidth="2.4" />
      {/* White saltire offsets for counterchanging */}
      <path d="M16 0 V24 M0 12 H32" stroke="#FFFFFF" strokeWidth="6.4" />
      {/* Red cross */}
      <path d="M16 0 V24 M0 12 H32" stroke="#C8102E" strokeWidth="3.6" />
    </FlagShell>
  );
}

export default function CountryFlag(props: CountryFlagProps) {
  switch (props.code) {
    case "fr":
      return <FranceFlag {...props} />;
    case "gb":
      return <UnitedKingdomFlag {...props} />;
    case "us":
      return <UnitedStatesFlag {...props} />;
    case "pl":
      return <PolandFlag {...props} />;
    default:
      return <FranceFlag {...props} />;
  }
}
