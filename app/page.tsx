import { Metadata } from 'next'
import Component from "../cat-finder-landing"

export const metadata: Metadata = {
  title: "Cat Finder - Find Your Lost Cat with Special Sounds | iOS & Android App",
  description: "Lost your cat? Cat Finder app plays special sounds that cats love to help guide them back home. Features cat-approved sounds, voice recording, and search tracking. Download now for iOS and Android. 15,000+ happy reunions!",
  keywords: [
    "find lost cat",
    "cat finder app", 
    "lost cat sounds",
    "missing cat app",
    "cat rescue sounds",
    "find missing pet",
    "cat calling app",
    "lost pet finder iOS",
    "cat finder Android",
    "pet recovery app"
  ],
  openGraph: {
    title: "Cat Finder - Find Your Lost Cat with Special Sounds",
    description: "Lost your cat? Cat Finder app plays special sounds that cats love to help guide them back home. 15,000+ happy reunions!",
    type: "website",
    url: "https://catfinder.qzz.io",
    images: [
      {
        url: "/cute-cat-with-owner.webp",
        width: 1200,
        height: 630,
        alt: "Cat Finder App - Reunite with your lost cat using special sounds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Finder - Find Your Lost Cat with Special Sounds",
    description: "Lost your cat? Download Cat Finder app and use special sounds cats love to guide them home!",
    images: ["/cute-cat-with-owner.webp"],
  },
  alternates: {
    canonical: "https://catfinder.qzz.io",
  },
}

export default function Page() {
  return <Component />
}
