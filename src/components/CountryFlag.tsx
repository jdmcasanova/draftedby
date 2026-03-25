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
      {children}
    </svg>
  );
}

function FranceFlag(props: CountryFlagProps) {
  return (
    <FlagShell {...props} label={LABELS.fr}>
      <rect width="10.666" height="24" fill="#1A4FA3" />
      <rect x="10.666" width="10.668" height="24" fill="#FFFFFF" />
      <rect x="21.334" width="10.666" height="24" fill="#D64B3A" />
    </FlagShell>
  );
}

function PolandFlag(props: CountryFlagProps) {
  return (
    <FlagShell {...props} label={LABELS.pl}>
      <rect width="32" height="12" fill="#FFFFFF" />
      <rect y="12" width="32" height="12" fill="#D63634" />
    </FlagShell>
  );
}

function UnitedStatesFlag(props: CountryFlagProps) {
  return (
    <FlagShell {...props} label={LABELS.us}>
      <rect width="32" height="24" rx="3" fill="#FFFFFF" />
      {Array.from({ length: 7 }).map((_, index) => (
        <rect
          key={`stripe-${index}`}
          y={index * 3.4286}
          width="32"
          height="1.7143"
          fill="#CF4436"
        />
      ))}
      <rect width="14.5" height="12.2" fill="#1F4E8C" />
      {Array.from({ length: 12 }).map((_, index) => (
        <circle
          key={`star-${index}`}
          cx={2.2 + (index % 6) * 2.2}
          cy={1.8 + Math.floor(index / 6) * 2.1}
          r="0.28"
          fill="#FFFFFF"
        />
      ))}
    </FlagShell>
  );
}

function UnitedKingdomFlag(props: CountryFlagProps) {
  return (
    <FlagShell {...props} label={LABELS.gb}>
      <rect width="32" height="24" rx="3" fill="#1A3A7A" />
      <path d="M0 4.2 4.2 0 16 8.2 27.8 0 32 4.2 20.2 12 32 19.8 27.8 24 16 15.8 4.2 24 0 19.8 11.8 12 0 4.2Z" fill="#FFFFFF" opacity="0.95" />
      <path d="M0 6.4 6.4 0 16 6.8 25.6 0 32 6.4 22.8 12 32 17.6 25.6 24 16 17.2 6.4 24 0 17.6 9.2 12 0 6.4Z" fill="#D6453A" />
      <path d="M13 0h6v24h-6z" fill="#FFFFFF" />
      <path d="M0 9h32v6H0z" fill="#FFFFFF" />
      <path d="M14.2 0h3.6v24h-3.6z" fill="#D6453A" />
      <path d="M0 10.2h32v3.6H0z" fill="#D6453A" />
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
