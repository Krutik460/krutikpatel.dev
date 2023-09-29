"use client"

import { useParams } from "next/navigation"

import { BlogDef, PostDef } from "@/types/sanity"
import { Post } from "@/components/blog/Post"

import { useLiveQuery } from "@sanity/preview-kit"
import { postQuery } from "@/sanity/lib/queries"

export default function PreviewBlogPage({
  blogSlug,
  postInfo,
}: {
  blogSlug: string
  postInfo: PostDef
}) {
  const params = useParams()
  console.log(params)
  const localParams = { slug: params.postSlug }
  const [data] = useLiveQuery(postInfo, postQuery, localParams)

  return <Post postInfo={data} blogSlug={blogSlug} />
}
