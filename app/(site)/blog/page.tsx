import { draftMode } from "next/headers"
import { Suspense } from "react"

import { Blogs } from "@/components/blog/Blogs"
import { BlogDef } from "@/types/sanity"
import { blogsQuery } from "@/sanity/lib/queries"
import { sanityFetch, token } from "@/sanity/lib/sanityFetch"
import PreviewProvider from "@/components/PreviewProvider"
import PreviewBlogs from "@/components/blog/PreviewBlogs"
import { Recommendation } from "@/components/blog/Recommendation"

export const metadata = {
  title: "Blogs",
  description: "This section includes blogs written by Krutik Patel.",
}

export default async function BlogPage() {
  const blogs: BlogDef[] = await sanityFetch<BlogDef[]>({ query: blogsQuery })
  const isDraftMode = draftMode().isEnabled

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <div className="flex flex-col gap-4">
          <PreviewBlogs blogs={blogs} />
          <Recommendation />
        </div>
      </PreviewProvider>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <Blogs blogs={blogs} />
      <Suspense fallback={<p>Loading Recommendation...</p>}>
        <Recommendation />
      </Suspense>
    </div>
  )
}
