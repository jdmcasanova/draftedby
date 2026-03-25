import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Get in touch with Drafted By about products, partnerships, or press.",
  path: "/contact",
});

const contactTopics = [
  "Product questions about the current education tools",
  "Press and partnership inquiries",
  "General company introductions or future collaboration",
];

export default function ContactPage() {
  return (
    <main id="main-content" className="flex-1 pb-20 pt-24 md:pb-24 md:pt-32">
      <div className="section-shell">
        <ScrollReveal>
          <p className="section-kicker">Contact</p>
          <h1 className="section-heading mt-5 max-w-4xl">Let&apos;s talk.</h1>
          <p className="section-copy mt-6">
            If you have a question about the company, a product, or a possible partnership, send us
            a note and we&apos;ll get back to you by email.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <aside className="card border border-stone-200 bg-white/80">
              <p className="section-kicker">Inbox</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email Drafted By"
                className="mt-4 inline-flex font-display text-3xl font-light tracking-[-0.04em] text-charcoal"
              >
                {CONTACT_EMAIL}
              </a>
              <p className="mt-5 text-base leading-8 text-stone-600">
                This inbox is monitored for corporate questions, product inquiries, and thoughtful
                introductions.
              </p>

              <div className="mt-8 rounded-2xl border border-stone-200 bg-cream px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-forest-700">
                  Good for
                </p>
                <ul className="mt-4 space-y-3">
                  {contactTopics.map((topic) => (
                    <li key={topic} className="flex gap-3 text-sm leading-7 text-stone-600">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terracotta-500" aria-hidden="true" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <section className="card border border-stone-200 bg-white/80">
              <p className="section-kicker">Send A Message</p>
              <h2 className="mt-4 font-display text-3xl font-light tracking-[-0.04em] text-charcoal">
                We read every message.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-600">
                Until Resend is configured, submissions are still logged safely on the server so the
                form can stay live during setup.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
