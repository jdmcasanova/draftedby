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
    <main id="main-content" className="flex-1 pb-20 pt-24 md:pb-24 md:pt-32">
      <div className="section-shell">
        <ScrollReveal>
          <p className="section-kicker">About</p>
          <h1 className="section-heading mt-5 max-w-4xl">
            A parent company built to keep useful products focused.
          </h1>
          <p className="section-copy mt-6">
            Drafted By was founded by JD Michael Casanova, a former WhatsApp employee with a deep
            interest in education, chess teaching, and practical AI. The company exists to support
            focused products that help teachers prepare faster without making the work feel generic
            or detached from the classroom.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <article className="card border border-stone-200 bg-white/80">
              <p className="section-kicker">Company Story</p>
              <div className="mt-5 space-y-5 text-base leading-8 text-stone-600">
                <p>
                  The company started with a simple question: if teachers spend so much of their
                  week planning, rewriting, and adapting materials, what would helpful AI look like
                  if it were built around that reality instead of around a generic productivity
                  demo?
                </p>
                <p>
                  The answer became a suite of localized products. Rather than forcing one global
                  interface everywhere, Drafted By adapts the same core lesson-planning engine for
                  each market it serves.
                </p>
                <p>
                  The long-term ambition is bigger than education, but the standard stays the same:
                  useful software should reduce friction, respect expertise, and feel grounded in
                  how people actually work.
                </p>
              </div>
            </article>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <aside className="card border border-stone-200 bg-cream/90">
              <p className="section-kicker">Founder</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-charcoal">
                JD Michael Casanova
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-600">
                Former tech employee, including time at WhatsApp, with an ongoing interest in
                education, chess teaching, and how AI can be made genuinely useful for expert work.
              </p>
            </aside>
          </ScrollReveal>
        </div>

        <section className="mt-16">
          <ScrollReveal>
            <p className="section-kicker">Timeline</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-light tracking-[-0.04em] text-charcoal">
              A short, deliberate rollout.
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-5">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 80}>
                <article className="card border border-stone-200 bg-white/80">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta-600">
                    {item.year}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-light tracking-[-0.03em] text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-8 text-stone-600">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <ScrollReveal>
            <p className="section-kicker">Values</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] font-light tracking-[-0.04em] text-charcoal">
              Principles that keep the work honest.
            </h2>
          </ScrollReveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 70}>
                <article className="card border border-stone-200 bg-cream/90">
                  <h3 className="font-display text-2xl font-light tracking-[-0.03em] text-forest-700">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">{value.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
