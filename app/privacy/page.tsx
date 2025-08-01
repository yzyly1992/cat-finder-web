import { Metadata } from 'next'
import PrivacyPolicy from "../../privacy-policy"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cat Finder privacy policy - Learn how we protect your data while helping you find your lost cat.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page() {
  return <PrivacyPolicy />
}
