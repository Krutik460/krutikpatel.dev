import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Icons } from "@/components/Icons"
import { Metadata } from "next"

import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/Button"

import { postQuery } from "@/sanity/lib/queries"
import { Post } from "@/types/sanity"
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { urlForImage } from "@/sanity/lib/image"
import { customBlockComponents } from "@/components/blog/PortableTextComponent"
import { PortableText } from "@portabletext/react"
import { showMainImageBlogsIds, showSideImageBogsIds } from "@/config/blog"

interface PostPageProps {
  params: {
    slug: string
    post: string
  }
}

async function getPostFromParams({ params }: PostPageProps) {
  const post: Post = await sanityFetch<Post>({
    query: postQuery,
    params: { slug: params.post },
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
  const post: Post = await sanityFetch<Post>({
    query: postQuery,
    params: { slug: params.post },
  })

  if (!post) {
    notFound()
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href={`/blog/${params.slug}`}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.chevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div>
        {post.publishedAt && (
          <time
            dateTime={post.publishedAt}
            className="block text-sm text-muted-foreground"
          >
            Published on {formatDate(post.publishedAt)}
          </time>
        )}
        <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex space-x-4">
          <Link
            key={1}
            href={`https://twitter.com/krutik460`}
            className="flex items-center space-x-2 text-sm"
          >
            <div className="flex-1 text-left leading-tight">
              <p className="font-medium">Krutik Patel</p>
              <p className="text-[12px] text-muted-foreground">@Krutik460</p>
            </div>
          </Link>
        </div>
      </div>
      {post.mainImage && showMainImageBlogsIds.includes(post.blog._ref) && (
        <Image
          src={urlForImage(post.mainImage).url()}
          alt="test"
          width={720}
          height={405}
          className="my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
      {post.mainImage && showSideImageBogsIds.includes(post.blog._ref) && (
        <hr className="my-8" />
      )}
      <PortableText value={post.body} components={customBlockComponents} />
      <hr className="my-8" />
      {post.mainImage && showSideImageBogsIds.includes(post.blog._ref) && (
        <Link
          href={post.sourceUrl}
          className="flex xl:fixed xl:right-8 xl:top-24 xl:inline-flex"
        >
          <article className="group relative flex items-center space-x-2 xl:h-48 xl:w-[301px] xl:flex-col xl:space-y-2">
            {post.mainImage && (
              <Image
                src={urlForImage(post.mainImage).url()}
                alt=""
                width={301}
                height={169}
                className="h-28 w-48 rounded-md border bg-muted transition-colors sm:h-48 sm:w-80"
              />
            )}
            {post.description && (
              <p className="text-sm font-medium sm:text-base">
                {post.description}
              </p>
            )}
          </article>
        </Link>
      )}
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href={`/blog/${params.slug}`}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>
    </article>
  )
}
