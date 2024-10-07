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
  title: "MVMNT AGENCY",
  description: "van gabriel voor jou",
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
