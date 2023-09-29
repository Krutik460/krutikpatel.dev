"use client"

import { BlogDef } from "@/types/sanity"
import { useLiveQuery } from "@sanity/preview-kit"
import { blogsQuery } from "@/sanity/lib/queries"
import { Blogs } from "@/components/blog/Blogs"

export default function PreviewBlogsPage({ blogs = [] }: { blogs: BlogDef[] }) {
  const [data] = useLiveQuery(blogs, blogsQuery)

  return <Blogs blogs={data} />
}
