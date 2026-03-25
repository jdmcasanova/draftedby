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
    <dl className={`grid grid-cols-3 gap-8 md:gap-12 ${className}`}>
      {items.map((item) => (
        <div key={item.label}>
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
          <dt className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.12em] text-stone-400">
            {item.label}
          </dt>
        </div>
      ))}
    </dl>
  );
}
