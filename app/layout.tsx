import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cat Finder - Find Your Lost Cat with Special Sounds",
    template: "%s | Cat Finder"
  },
  description: "Lost your cat? Cat Finder app plays special sounds that cats love to help guide them back home. Download now for iOS and Android. 15,000+ happy reunions!",
  keywords: [
    "find lost cat",
    "cat finder app",
    "lost cat sounds",
    "missing cat",
    "cat rescue",
    "find missing pet",
    "cat calling sounds",
    "lost pet finder",
    "cat finder iOS",
    "cat finder Android"
  ],
  authors: [{ name: "Cat Finder Team" }],
  creator: "Cat Finder",
  publisher: "Cat Finder",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://catfinder.qzz.io",
    siteName: "Cat Finder",
    title: "Cat Finder - Find Your Lost Cat with Special Sounds",
    description: "Lost your cat? Cat Finder app plays special sounds that cats love to help guide them back home. Download now for iOS and Android. 15,000+ happy reunions!",
    images: [
      {
        url: "/cute-cat-with-owner.webp",
        width: 1200,
        height: 630,
        alt: "Cat Finder App - Find Your Lost Cat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Finder - Find Your Lost Cat with Special Sounds",
    description: "Lost your cat? Cat Finder app plays special sounds that cats love to help guide them back home. Download now!",
    creator: "@catfinderapp",
    images: ["/cute-cat-with-owner.webp"],
  },
  alternates: {
    canonical: "https://catfinder.qzz.io",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
  category: "Pets & Animals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
