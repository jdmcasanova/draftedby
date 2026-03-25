export const COMPANY_NAME = "Drafted By";
export const FOUNDER_NAME = "JD Michael Casanova";
export const SITE_URL = "https://draftedby.com";
export const CONTACT_EMAIL = "contact@draftedby.com";
export const COPYRIGHT_YEAR = new Date().getFullYear();
export const DEFAULT_TITLE = "Drafted By — AI Tools for Education";
export const DEFAULT_DESCRIPTION =
  "Drafted By builds AI-powered tools that help teachers plan lessons in minutes. Present in France, UK, US, and Poland.";
export const OPEN_GRAPH_IMAGE = `${SITE_URL}/opengraph-image.png`;

export type ProductSlug =
  | "prepare-mes-cours"
  | "draft-my-lesson"
  | "przygotuj-lekcje";

export type Product = {
  slug: ProductSlug;
  name: string;
  href: string;
  marketLabel: string;
  targetMarket: string;
  shortDescription: string;
  description: string;
  flags: Array<"fr" | "gb" | "us" | "pl">;
  comingSoon?: boolean;
  features: string[];
};

export const primaryNavigation = [
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = [{ label: "Legal", href: "/legal" }] as const;

export const products: Product[] = [
  {
    slug: "prepare-mes-cours",
    name: "Prépare Mes Cours",
    href: "https://preparemescours.fr",
    marketLabel: "France",
    targetMarket: "Teachers in France",
    shortDescription:
      "AI lesson planning for French teachers who want to get their evenings back.",
    description:
      "The French edition of our core lesson-planning product, tuned for the pace, language, and classroom expectations of teachers in France.",
    flags: ["fr"],
    features: [
      "Structured lesson plans in French, ready in minutes.",
      "Printable handouts and classroom exercises.",
      "Flexible outputs that keep the teacher in control.",
      "Localized for French subject and school contexts.",
    ],
  },
  {
    slug: "draft-my-lesson",
    name: "Draft My Lesson",
    href: "https://draftmylesson.com",
    marketLabel: "English-speaking markets",
    targetMarket: "Teachers in the US, UK, Australia, Canada, and New Zealand",
    shortDescription:
      "The English-language version of the same core product for teachers across the US, UK, Australia, Canada, and New Zealand.",
    description:
      "Draft My Lesson brings the platform to English-speaking teachers with copy and workflows written for those classrooms first.",
    flags: ["gb", "us"],
    comingSoon: true,
    features: [
      "Lesson plans and classroom materials in English.",
      "Fast generation for weekly prep and one-off lessons.",
      "Editable structure for real-world teaching needs.",
      "Built for teachers in multiple English-speaking markets.",
    ],
  },
  {
    slug: "przygotuj-lekcje",
    name: "Przygotuj Lekcje",
    href: "https://przygotujlekcje.pl",
    marketLabel: "Poland",
    targetMarket: "Teachers in Poland",
    shortDescription:
      "Polish-language lesson planning for teachers who need speed, clarity, and local fit.",
    description:
      "Przygotuj Lekcje localizes the same core product for Polish teachers and schools, keeping the experience practical and easy to trust.",
    flags: ["pl"],
    comingSoon: true,
    features: [
      "Polish lesson plans generated in minutes.",
      "Printable teaching materials and exercises.",
      "Clear, editable outputs for classroom use.",
      "Localized support for the Polish market.",
    ],
  },
];

export const stats = [
  { label: "Countries", value: "3" },
  { label: "Teachers", value: "500+" },
  { label: "Lessons generated", value: "10,000+" },
] as const;

export const timeline = [
  {
    year: "2025",
    title: "Prépare Mes Cours launches in France",
    description:
      "The first product proves the idea: AI should save teachers time, not replace their judgment.",
  },
  {
    year: "2025",
    title: "Draft My Lesson expands to English-speaking markets",
    description:
      "The same core product is localized for teachers across the US, UK, Australia, Canada, and New Zealand.",
  },
  {
    year: "2026",
    title: "Przygotuj Lekcje brings the tool to Poland",
    description:
      "Drafted By extends the platform again with a Polish-language experience for local teachers.",
  },
] as const;

export const values = [
  {
    title: "Teacher-first design",
    description:
      "We build from the teacher's prep workflow outward, not from a feature list inward.",
  },
  {
    title: "Privacy by default",
    description:
      "The experience stays minimal, with no unnecessary tracking or data collection.",
  },
  {
    title: "Simple over complex",
    description:
      "Clear interfaces and practical outputs are easier to trust and easier to use.",
  },
  {
    title: "Local before global",
    description:
      "Each market gets a version that feels native instead of a one-size-fits-all copy.",
  },
] as const;

export const alternateLinks = [
  { hrefLang: "x-default", href: SITE_URL },
] as const;
