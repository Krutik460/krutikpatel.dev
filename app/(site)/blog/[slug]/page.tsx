import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"

import { SanityDocument } from "next-sanity"
import { blogQuery, postsQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { urlForImage } from "@/sanity/lib/image"

import { Icons } from "@/components/icons"
import { DocsPageHeader } from "@/components/page-header"

import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface BlogPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blogInfo = await sanityFetch<SanityDocument[]>({
    query: blogQuery,
    params: { slug: params.slug },
  })
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
    params: { _id: blogInfo._id },
  })

  if (!blogInfo) {
    return notFound()
  }

  return (
    <div>
      <div className="container mx-auto flex max-w-5xl flex-row py-6 lg:py-10">
        <div className="basis-1/4 justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "link" }))}
          >
            <Icons.chevronLeft className="mr-2 h-5 w-5 text-muted-foreground hover:text-accent-foreground md:h-8 md:w-8" />
          </Link>
        </div>
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <DocsPageHeader
            heading={blogInfo.title}
            text={blogInfo.description}
          />
        </div>
      </div>
      <hr className="my-8" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group relative flex flex-col space-y-2"
            >
              {post.mainImage && (
                <Image
                  src={urlForImage(post.mainImage).url()}
                  alt=""
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.publishedAt && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.publishedAt)}
                </p>
              )}
              <Link
                href={`blog/${params.slug}/${post.slug.current}`}
                className="absolute inset-0"
              >
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
