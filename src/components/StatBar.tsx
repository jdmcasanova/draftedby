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
    <dl
      className={`grid gap-3 rounded-2xl border border-stone-200 bg-white/70 p-4 shadow-card sm:grid-cols-3 ${className}`}
    >
      {items.map((item) => (
        <div key={item.label} className="rounded-xl bg-cream px-4 py-4">
          <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{item.label}</dt>
          <dd className="mt-2 font-display text-2xl font-light tracking-[-0.03em] text-forest-700">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
