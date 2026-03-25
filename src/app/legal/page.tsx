import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { createPageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, COMPANY_NAME } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Legal & Privacy",
  description:
    "Legal notice and privacy policy for Drafted By, a sole proprietorship hosted on Coolify.",
  path: "/legal",
});

const sections = [
  {
    title: "Company notice",
    body: [
      `${COMPANY_NAME} is operated as an auto-entrepreneur / sole proprietor. This website is a corporate showcase for the parent company behind its products and is not itself an application platform.`,
    ],
  },
  {
    title: "Hosting and infrastructure",
    body: [
      "This website is hosted on Coolify in a self-hosted environment. Operational logs may be generated for security, uptime monitoring, and troubleshooting.",
    ],
  },
  {
    title: "Personal data",
    body: [
      "If you contact us through the form or by email, we may process your name, email address, and message in order to reply to your request.",
      "We keep personal data only for as long as needed to handle the request and maintain reasonable business records.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "This site does not use analytics, advertising, or marketing cookies. Only strictly necessary technical storage may be used to keep the site functioning as intended.",
    ],
  },
  {
    title: "GDPR rights",
    body: [
      `Under the GDPR, you can request access, correction, or deletion of personal data we hold about you by contacting ${CONTACT_EMAIL}.`,
      "If email delivery is enabled for the contact form, messages may be transmitted through Resend as the outbound email provider.",
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      {/* ── HEADER ── */}
      <section className="pt-32 pb-10 md:pt-44 md:pb-14">
        <div className="section-shell max-w-3xl">
          <p className="label-caps">Legal</p>
          <Reveal animation="fade-up">
            <h1 className="heading-lg mt-4">Legal notice & privacy policy</h1>
          </Reveal>
          <p className="mt-4 text-stone-400">
            The essentials of how {COMPANY_NAME} operates this site and handles
            personal data.
          </p>
        </div>
      </section>

      {/* ── SECTIONS ── */}
      <section className="pb-20 md:pb-28">
        <div className="section-shell max-w-3xl space-y-10">
          {sections.map((section, i) => (
            <div key={section.title}>
              {i > 0 && (
                <hr className="mb-10 h-px border-none bg-terracotta-100" />
              )}
              <h2 className="heading-accent text-xl text-charcoal">
                {section.title}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[0.9375rem] leading-[1.85] text-stone-500"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
