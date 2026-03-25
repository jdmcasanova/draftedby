import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/metadata";
import { timeline, values } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn how Drafted By was founded and why the company focuses on practical AI tools for teachers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="flex-1 pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="section-shell">
        {/* Header */}
        <ScrollReveal>
          <p className="label-caps">About</p>
          <h1 className="heading-xl mt-5 max-w-[20ch]">
            A company built to keep useful products focused.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="body-lg mt-8">
            Drafted By was founded by JD Michael Casanova, a former WhatsApp employee
            with a deep interest in education, chess teaching, and practical AI. The
            company exists to support focused products that help teachers prepare faster
            without making the work feel generic.
          </p>
        </ScrollReveal>

        {/* Two-column story */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <ScrollReveal>
            <div>
              <p className="label-caps">Company story</p>
              <div className="mt-6 space-y-6 text-[0.9375rem] leading-[1.85] text-stone-500">
                <p>
                  The company started with a simple question: if teachers spend so much
                  of their week planning, rewriting, and adapting materials, what would
                  helpful AI look like if it were built around that reality instead of a
                  generic productivity demo?
                </p>
                <p>
                  The answer became a suite of localized products. Rather than forcing one
                  global interface everywhere, Drafted By adapts the same core engine for
                  each market it serves.
                </p>
                <p>
                  The long-term ambition is bigger than education, but the standard stays
                  the same: useful software should reduce friction, respect expertise, and
                  feel grounded in how people actually work.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-stone-200/60 bg-white p-6 shadow-soft lg:mt-10">
              <p className="label-caps">Founder</p>
              <h2 className="heading-md mt-4">
                JD Michael Casanova
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-[1.85] text-stone-500">
                Former tech employee, including time at WhatsApp, with an ongoing
                interest in education, chess teaching, and how AI can be made genuinely
                useful for expert work.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <section className="mt-24">
          <ScrollReveal>
            <hr className="rule mb-10" />
            <p className="label-caps">Timeline</p>
            <h2 className="heading-lg mt-4">A short, deliberate rollout.</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-stone-200/60 bg-stone-200/60 md:grid-cols-3">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="flex h-full flex-col bg-white p-6">
                  <span className="font-mono text-2xl font-medium tracking-[-0.02em] text-terracotta-500">
                    {item.year}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-[360] tracking-[-0.02em] text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mt-24">
          <ScrollReveal>
            <p className="label-caps">Values</p>
            <h2 className="heading-lg mt-4">Principles that shape the work.</h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 60}>
                <div className="rounded-2xl border border-stone-200/60 bg-white p-5 shadow-soft">
                  <h3 className="font-display text-lg font-[380] tracking-[-0.02em] text-forest-700">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone-400">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
