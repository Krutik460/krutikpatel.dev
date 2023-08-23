import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"

import TailwindIndicator from "@/components/tailwind-indicator"
import ThemeProvider from "@/components/theme-provider"

interface GuidesLayoutProps {
  children: React.ReactNode
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl">
      {children}
      <Analytics />
    </div>
  )
}
