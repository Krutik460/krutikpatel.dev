import Link from "next/link"
import Image from "next/image"

import { BlogDef, PostDef } from "@/types/sanity"
import { urlForImage } from "@/sanity/lib/image"
import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/Button"
import { Icons } from "@/components/Icons"
import { DocsPageHeader } from "@/components/PageHeader"

export function Blog({
  blogInfo,
  posts,
}: {
  blogInfo: BlogDef
  posts: PostDef[]
}) {
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
              <h2 className="text-xl font-bold">{post.title}</h2>
              {post.publishedAt && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.publishedAt)}
                </p>
              )}
              <Link
                href={`blog/${blogInfo.slug.current}/${post.slug.current}`}
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
