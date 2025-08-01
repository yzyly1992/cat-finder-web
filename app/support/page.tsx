import { Metadata } from 'next'
import Support from "../../support"

export const metadata: Metadata = {
  title: "Support & Help",
  description: "Get help with Cat Finder app. Contact support for questions about finding your lost cat with our special sounds feature.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page() {
  return <Support />
}