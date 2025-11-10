import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travis Shields | Director of Engineering",
  description: "Director of Engineering at Vimeo. Building high-performing engineering teams and modern platforms that deliver measurable business impact.",
  keywords: ["Engineering Leadership", "Director of Engineering", "Platform Architecture", "Next.js", "React", "TypeScript"],
  authors: [{ name: "Travis Shields" }],
  icons: {
    icon: "/favicon-96x96.png",
  },
  openGraph: {
    title: "Travis Shields | Director of Engineering",
    description: "Building high-performing engineering teams and modern platforms that deliver measurable business impact.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
