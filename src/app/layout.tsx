import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { FooterSection } from "@/components/sections/footer-section";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://duylang.dev",
  ),
  title: "DUYLANG - Full Stack Developer Portfolio",
  description:
    "Portfolio of DUYLANG - ReactJS Developer specializing in modern web development with React, Next.js, Node.js, and TypeScript.",
  keywords: [
    "DUYLANG",
    "Full Stack Developer",
    "ReactJS Developer",
    "Frontend Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "DUYLANG" }],
  creator: "DUYLANG",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://duylang.dev",
    siteName: "DUYLANG Portfolio",
    title: "DUYLANG - Full Stack Developer Portfolio",
    description:
      "Portfolio of DUYLANG - ReactJS Developer specializing in modern web development.",
    images: [
      {
        url: "/avatar.svg",
        width: 1200,
        height: 630,
        alt: "DUYLANG Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DUYLANG - Full Stack Developer Portfolio",
    description:
      "Portfolio of DUYLANG - ReactJS Developer specializing in modern web development.",
    images: ["/avatar.svg"],
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
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;

  return (
    <html lang="en" className={theme === "dark" ? "dark" : ""}>
      <head>
        <link
          rel="preload"
          href="/assets/lottie/header.json"
          as="fetch"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary focus:text-primary-foreground focus:font-medium"
        >
          Skip to content
        </a>
        <ScrollProgress />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
