import "@/styles/globals.css"

import { revalidatePath } from "next/cache"

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  revalidatePath("/")
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
