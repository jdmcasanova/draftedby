import type { Metadata } from "next";
import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  FOUNDER_NAME,
  OPEN_GRAPH_IMAGE,
  SITE_URL,
} from "@/lib/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: COMPANY_NAME,
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Drafted By",
  },
  description: DEFAULT_DESCRIPTION,
  authors: [{ name: FOUNDER_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon-192.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: OPEN_GRAPH_IMAGE,
        width: 1200,
        height: 630,
        alt: "Drafted By corporate website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OPEN_GRAPH_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type PageMetadataArgs = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataArgs): Metadata {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: COMPANY_NAME,
      title: `${title} | Drafted By`,
      description,
      images: [
        {
          url: OPEN_GRAPH_IMAGE,
          width: 1200,
          height: 630,
          alt: `${COMPANY_NAME} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Drafted By`,
      description,
      images: [OPEN_GRAPH_IMAGE],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  email: CONTACT_EMAIL,
  founder: {
    "@type": "Person",
    name: FOUNDER_NAME,
  },
  sameAs: [
    "https://preparemescours.fr",
    "https://draftmylesson.com",
    "https://przygotujlekcje.pl",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: CONTACT_EMAIL,
    availableLanguage: ["English", "French", "Polish"],
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
  },
  inLanguage: "en",
};
