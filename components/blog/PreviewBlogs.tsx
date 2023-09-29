"use client"

import { Blog } from "@/types/sanity"
import { useLiveQuery } from "@sanity/preview-kit"
import { blogsQuery } from "@/sanity/lib/queries"
import { Blogs } from "@/components/blog/Blogs"

export default function PreviewBlogs({ blogs = [] }: { blogs: Blog[] }) {
  const [data] = useLiveQuery(blogs, blogsQuery)

  return <Blogs blogs={data} />
}
