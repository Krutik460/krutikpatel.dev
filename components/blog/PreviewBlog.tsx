"use client"

import { BlogDef, PostDef } from "@/types/sanity"
import { Blog } from "@/components/blog/Blog"

import { useLiveQuery } from "@sanity/preview-kit"
import { postsQuery } from "@/sanity/lib/queries"

export default function PreviewBlogPage({
  blogInfo,
  posts = [],
}: {
  blogInfo: BlogDef
  posts: PostDef[]
}) {
  const localParams = { _id: blogInfo._id }
  const [data] = useLiveQuery(posts, postsQuery, localParams)

  return <Blog blogInfo={blogInfo} posts={data} />
}
