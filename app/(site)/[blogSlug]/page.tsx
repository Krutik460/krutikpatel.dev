import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { Metadata } from "next"

import { Blog } from "@/components/blog/Blog"
import { BlogDef, PostDef } from "@/types/sanity"
import { blogQuery, postsQuery } from "@/sanity/lib/queries"
import { sanityFetch, token } from "@/sanity/lib/sanityFetch"
import PreviewProvider from "@/components/PreviewProvider"
import PreviewBlog from "@/components/blog/PreviewBlog"

interface BlogPageProps {
  params: {
    blogSlug: string
  }
}

async function getBlogFromParams({ params }: BlogPageProps) {
  const blog: BlogDef = await sanityFetch<BlogDef>({
    query: blogQuery,
    params: { slug: params.blogSlug },
  })
  if (!blog) {
    return null
  }
  return blog
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogFromParams({ params })

  if (!blog) {
    return {}
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog: BlogDef = await sanityFetch<BlogDef>({
    query: blogQuery,
    params: { slug: params.blogSlug },
  })
  if (!blog) {
    return notFound()
  }

  const posts: PostDef[] = await sanityFetch<PostDef[]>({
    query: postsQuery,
    params: { _id: blog._id },
  })
  const isDraftMode = draftMode().isEnabled

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewBlog blogInfo={blog} posts={posts} />
      </PreviewProvider>
    )
  }

  return <Blog blogInfo={blog} posts={posts} />
}
