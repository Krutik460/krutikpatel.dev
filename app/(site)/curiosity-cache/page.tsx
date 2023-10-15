"use client"
import { draftMode } from "next/headers"

import { token } from "@/sanity/lib/sanityFetch"
import PreviewProvider from "@/components/provider/PreviewProvider"

export const metadata = {
  title: "Blogs",
  description: "This section includes blogs written by Krutik Patel.",
}

export default async function BlogPage() {
  const isDraftMode = draftMode().isEnabled

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <h1>Hello</h1>
      </PreviewProvider>
    )
  }

  return <h1>Real</h1>
}
