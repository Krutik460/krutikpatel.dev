import "@/styles/globals.css"
import { Analytics } from "@vercel/analytics/react"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import TailwindIndicator from "@/components/tailwind-indicator"
import ThemeProvider from "@/components/theme-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative flex min-h-screen flex-col">
        <div className="flex-1">
          {children}
          <Analytics />
        </div>
      </div>
      <TailwindIndicator />
    </ThemeProvider>
  )
}
