import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Get in touch with Drafted By about products, partnerships, or press.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="section-shell">
          <p className="label-caps">Contact</p>
          <Reveal animation="clip-reveal">
            <h1 className="heading-xl mt-4 max-w-[14ch]">
              Let&apos;s talk.
            </h1>
          </Reveal>
          <p className="body-lg mt-6 max-w-lg">
            Questions about a product, a partnership, or the company? Send us a
            note and we&apos;ll reply within two business days.
          </p>
        </div>
      </section>

      {/* ── TWO-COLUMN BODY ── */}
      <section className="pb-20 md:pb-28">
        <div className="section-shell">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            {/* LEFT — details */}
            <div>
              <h2 className="heading-md">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="transition-colors hover:text-terracotta-500"
                >
                  {CONTACT_EMAIL}
                </a>
              </h2>

              <hr className="my-8 h-px border-none bg-stone-200" />

              <p className="label-caps mb-4">Good for</p>
              <ul className="space-y-2.5">
                {[
                  "Product questions about current tools",
                  "Press and partnership inquiries",
                  "General introductions or future collaboration",
                ].map((topic) => (
                  <li
                    key={topic}
                    className="flex gap-2.5 text-sm leading-6 text-stone-500"
                  >
                    <span
                      className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-terracotta-400"
                      aria-hidden="true"
                    />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative stamp */}
              <div className="mt-10 inline-block rotate-[3deg] rounded-lg border-2 border-dashed border-terracotta-200 px-4 py-3">
                <span className="font-mono text-xs text-terracotta-400">
                  We reply within 2 business days
                </span>
              </div>
            </div>

            {/* RIGHT — form card */}
            <div className="rounded-xl border-t-[3px] border-t-terracotta-400 bg-cream p-6 shadow-card md:p-8">
              <h2 className="heading-md">Send a message</h2>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
