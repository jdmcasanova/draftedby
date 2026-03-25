import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Get in touch with Drafted By about products, partnerships, or press.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1 pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="section-shell">
        <ScrollReveal>
          <p className="label-caps">Contact</p>
          <h1 className="heading-xl mt-5 max-w-[14ch]">Let&apos;s talk.</h1>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <p className="body-lg mt-6">
            Questions about a product, a partnership, or the company? Send us a
            note and we&apos;ll reply within two business days.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <ScrollReveal>
            <div>
              <p className="label-caps">Email</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-flex font-display text-2xl font-[340] tracking-[-0.03em] text-charcoal transition-colors hover:text-terracotta-500 md:text-3xl"
              >
                {CONTACT_EMAIL}
              </a>

              <hr className="rule my-8" />

              <p className="label-caps">Good for</p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Product questions about current tools",
                  "Press and partnership inquiries",
                  "General introductions or future collaboration",
                ].map((topic) => (
                  <li key={topic} className="flex gap-2.5 text-sm leading-6 text-stone-500">
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-terracotta-400" aria-hidden="true" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-stone-200/60 bg-white p-6 shadow-soft md:p-8">
              <h2 className="heading-md">Send a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
