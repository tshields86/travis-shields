import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = Spline_Sans_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
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
    <html lang="en">
      <body className={`${display.variable} ${body.variable} ${mono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
