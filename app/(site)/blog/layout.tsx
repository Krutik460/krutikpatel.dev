import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"

import TailwindIndicator from "@/components/TailwindIndicator"
import ThemeProvider from "@/components/ThemeProvider"

interface GuidesLayoutProps {
  children: React.ReactNode
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl px-6 md:px-12">
      {children}
      <Analytics />
    </div>
  )
}
