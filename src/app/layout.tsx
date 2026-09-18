import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goodasgoldtech.com"),
  icons: {
    icon: "/icon.svg",
  },
  title: {
    default: "Good As Gold Cyber Technologies Inc. | AI, Cybersecurity & Software",
    template: "%s | Good As Gold Cyber Technologies Inc.",
  },
  description:
    "Good As Gold Cyber Technologies Inc. builds AI, cybersecurity, software, data, and digital transformation solutions for organizations worldwide.",
  keywords: [
    "AI solutions",
    "cybersecurity",
    "software engineering",
    "data analytics",
    "digital transformation",
    "IT staff augmentation",
  ],
  openGraph: {
    title: "Good As Gold Cyber Technologies Inc.",
    description:
      "AI, cybersecurity, software, and digital transformation solutions for organizations worldwide.",
    url: "https://goodasgoldtech.com",
    siteName: "Good As Gold Cyber Technologies Inc.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Good As Gold Cyber Technologies Inc.",
    description:
      "Good As Gold Cyber Technologies Inc. builds AI, cybersecurity, software, data, and digital transformation solutions for organizations worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-[#06070a] text-stone-100 antialiased selection:bg-[#d7b57a]/40 selection:text-white">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(215,181,122,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(77,94,121,0.18),transparent_25%)]" />
          <div className="relative z-10">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
