import { draftMode } from "next/headers"
import { notFound } from "next/navigation"
import { Metadata } from "next"

import { Post } from "@/components/blog/Post"
import { postQuery } from "@/sanity/lib/queries"
import { PostDef } from "@/types/sanity"
import { sanityFetch, token } from "@/sanity/lib/sanityFetch"
import PreviewProvider from "@/components/PreviewProvider"
import PreviewPost from "@/components/blog/PreviewPost"

interface PostPageProps {
  params: {
    blogSlug: string
    postSlug: string
  }
}

async function getPostFromParams({ params }: PostPageProps) {
  const post: PostDef = await sanityFetch<PostDef>({
    query: postQuery,
    params: { slug: params.postSlug },
  })

  if (!post) {
    notFound()
  }
  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams({ params })

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const post: PostDef = await sanityFetch<PostDef>({
    query: postQuery,
    params: { slug: params.postSlug },
  })

  if (!post) {
    notFound()
  }
  const isDraftMode = draftMode().isEnabled

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost postInfo={post} blogSlug={params.blogSlug} />
      </PreviewProvider>
    )
  }

  return <Post postInfo={post} blogSlug={params.blogSlug} />
}
