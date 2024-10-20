const siteConfig = {
  name: "MVMNT AGENCY",
  description: "Je partner in digitale groei. Wij creëren niet zomaar websites, maar bouwen complete online fundamenten voor ondernemers.",
  url: "https://mvmnt.nl",
  ogImage: "https://mvmnt.nl/og-image.jpg",
  links: {
    instagram: "https://instagram.com/mvmnt.nl",
  },
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export function generateMetadata({ title, description, image, noIndex }) {
  return {
    ...defaultMetadata,
    title: title || defaultMetadata.title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title || defaultMetadata.openGraph.title,
      description: description || defaultMetadata.openGraph.description,
      images: image ? [{ url: image }] : defaultMetadata.openGraph.images,
    },
    robots: noIndex ? { index: false, follow: false } : defaultMetadata.robots,
  };
}
