import "@/styles/globals.css"

interface GuidesLayoutProps {
  children: React.ReactNode
}

export default function GuidesLayout({ children }: GuidesLayoutProps) {
  return <div className="mx-auto max-w-6xl px-6 md:px-12">{children}</div>
}
