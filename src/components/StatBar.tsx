type StatItem = {
  label: string;
  value: string;
};

type StatBarProps = {
  items: StatItem[];
  className?: string;
};

export default function StatBar({ items, className = "" }: StatBarProps) {
  return (
    <dl className={`grid grid-cols-3 ${className}`}>
      {items.map((item, i) => (
        <div
          key={item.label}
          className={`py-2 ${i > 0 ? "border-l border-stone-200 pl-6 md:pl-10" : ""}`}
        >
          <dd className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-[280] leading-none tracking-[-0.04em] text-charcoal">
            {item.value}
          </dd>
          <dt className="mt-2 font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-stone-400 md:text-xs">
            {item.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
