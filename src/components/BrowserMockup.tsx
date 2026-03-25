import { cn } from "@/lib/utils";

type BrowserMockupProps = {
  productSlug: "prepare-mes-cours" | "draft-my-lesson" | "przygotuj-lekcje";
  className?: string;
};

const urlMap: Record<BrowserMockupProps["productSlug"], string> = {
  "prepare-mes-cours": "preparemescours.fr",
  "draft-my-lesson": "draftmylesson.com",
  "przygotuj-lekcje": "przygotujlekcje.pl",
};

const sidebarColors: Record<BrowserMockupProps["productSlug"], string> = {
  "prepare-mes-cours": "bg-terracotta-200",
  "draft-my-lesson": "bg-forest-200",
  "przygotuj-lekcje": "bg-terracotta-100",
};

const cardBorders: Record<BrowserMockupProps["productSlug"], string> = {
  "prepare-mes-cours": "border-t-2 border-t-terracotta-300",
  "draft-my-lesson": "border-t-2 border-t-forest-300",
  "przygotuj-lekcje": "border-l-2 border-l-terracotta-300",
};

export default function BrowserMockup({
  productSlug,
  className,
}: BrowserMockupProps) {
  const sidebarBarWidths = ["w-[70%]", "w-[55%]", "w-[80%]", "w-[50%]"];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-elevated",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex h-8 items-center bg-stone-100 px-3">
        <div className="flex items-center gap-1.5">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "#ff5f57" }}
            aria-hidden="true"
          />
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "#febd2e" }}
            aria-hidden="true"
          />
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: "#27c93f" }}
            aria-hidden="true"
          />
        </div>
        <span className="ml-auto font-mono text-[10px] text-stone-400">
          {urlMap[productSlug]}
        </span>
      </div>

      {/* Content area */}
      <div className="flex min-h-[180px] gap-3 bg-[#f5f4f0] p-3">
        {/* Sidebar */}
        <div className="flex w-[22%] flex-col gap-2.5">
          {sidebarBarWidths.map((w, i) => (
            <div
              key={i}
              className={cn(
                "h-2 rounded-full",
                w,
                sidebarColors[productSlug]
              )}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Main content */}
        <div className="flex flex-1 flex-col gap-3">
          {/* Heading bar */}
          <div
            className="h-3 w-[55%] rounded-full bg-charcoal/15"
            aria-hidden="true"
          />

          {/* Body lines */}
          <div className="flex flex-col gap-2">
            <div
              className="h-2 w-[75%] rounded-full bg-stone-200/80"
              aria-hidden="true"
            />
            <div
              className="h-2 w-[60%] rounded-full bg-stone-200/80"
              aria-hidden="true"
            />
          </div>

          {/* Mini cards */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  "h-14 flex-1 rounded-lg border border-stone-200/60 bg-white",
                  cardBorders[productSlug]
                )}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
