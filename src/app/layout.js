import localFont from "next/font/local";
import "./globals.css";
import Navigation from '@/components/common/Navigation';
import Footer from '@/components/common/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "MVMNT AGENCY",
    template: "%s | MVMNT AGENCY",
  },
  description: "MVMNT AGENCY - Your partner in digital growth. We create not just websites, but complete online foundations for entrepreneurs.",
  keywords: ["web design", "SEO", "digital marketing", "MVMNT AGENCY"],
  openGraph: {
    title: "MVMNT AGENCY",
    description: "Your partner in digital growth",
    url: "https://yourdomain.com",
    siteName: "MVMNT AGENCY",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
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
  twitter: {
    title: "MVMNT AGENCY",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-purple-900 font-sans`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
