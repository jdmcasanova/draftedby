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
    <dl className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 ${className}`}>
      {items.map((item, i) => (
        <div key={item.label} className="flex items-baseline gap-2">
          <dd
            className="font-display leading-none tracking-[-0.04em] text-terracotta-500"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 300,
              fontVariationSettings: '"opsz" 72',
            }}
          >
            {item.value}
          </dd>
          <dt className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-stone-400">
            {item.label}
          </dt>
          {i < items.length - 1 && (
            <span className="ml-2 text-3xl font-light text-stone-200" aria-hidden="true">/</span>
          )}
        </div>
      ))}
    </dl>
  );
}
