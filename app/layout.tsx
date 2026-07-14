import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Loaded as variable fonts so the full weight range — and Bricolage's optical
// sizing axis — apply, matching the mock's Google Fonts request.
const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = Spline_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travis Shields | Director of Engineering",
  description:
    "Engineering leader — I turn underperforming teams and brittle legacy platforms into high-performing orgs that ship. 10+ years across Vimeo, WeWork and Madison Square Garden.",
  keywords: [
    "Engineering Leadership",
    "Director of Engineering",
    "Platform Architecture",
    "AI-Accelerated Engineering",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Travis Shields" }],
  openGraph: {
    title: "Travis Shields | Director of Engineering",
    description:
      "Engineering leader building high-performing teams and modern platforms that deliver measurable business impact.",
    url: "https://www.travis-shields.com",
    siteName: "Travis Shields",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        {/* Without JS, scroll-reveal wrappers never animate in — force them visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
