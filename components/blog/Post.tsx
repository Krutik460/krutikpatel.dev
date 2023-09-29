import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Icons } from "@/components/Icons"

import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/Button"

import { PostDef } from "@/types/sanity"
import { urlForImage } from "@/sanity/lib/image"
import { customBlockComponents } from "@/components/blog/PortableTextComponent"
import { PortableText } from "@portabletext/react"
import { showMainImageBlogsIds, showSideImageBogsIds } from "@/config/blog"

export function Post({
  blogSlug,
  postInfo,
}: {
  blogSlug: string
  postInfo: PostDef
}) {
  return (
    <>
      <article className="container relative max-w-3xl py-6 lg:py-10">
        <Link
          href={`/blog/${blogSlug}`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[-200px] top-14 hidden xl:inline-flex"
          )}
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
        <div>
          {postInfo.publishedAt && (
            <time
              dateTime={postInfo.publishedAt}
              className="block text-sm text-muted-foreground"
            >
              Published on {formatDate(postInfo.publishedAt)}
            </time>
          )}
          <h1 className="font-heading mt-2 inline-block text-4xl leading-tight lg:text-5xl">
            {postInfo.title}
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
        {postInfo.mainImage &&
          showMainImageBlogsIds.includes(postInfo.blog._ref) && (
            <Image
              src={urlForImage(postInfo.mainImage).url()}
              alt="test"
              width={720}
              height={405}
              className="my-8 rounded-md border bg-muted transition-colors"
              priority
            />
          )}
        {postInfo.mainImage &&
          showSideImageBogsIds.includes(postInfo.blog._ref) && (
            <hr className="my-8" />
          )}
        <PortableText
          value={postInfo.body}
          components={customBlockComponents}
        />
        <hr className="my-8" />
        {postInfo.mainImage &&
          showSideImageBogsIds.includes(postInfo.blog._ref) && (
            <Link
              href={postInfo.sourceUrl}
              className="flex xl:fixed xl:right-8 xl:top-24 xl:inline-flex"
            >
              <article className="group relative flex items-center space-x-2 xl:h-48 xl:w-[301px] xl:flex-col xl:space-y-2">
                {postInfo.mainImage && (
                  <Image
                    src={urlForImage(postInfo.mainImage).url()}
                    alt=""
                    width={301}
                    height={169}
                    className="h-28 w-48 rounded-md border bg-muted transition-colors sm:h-48 sm:w-80"
                  />
                )}
                {postInfo.description && (
                  <p className="text-sm font-medium sm:text-base">
                    {postInfo.description}
                  </p>
                )}
              </article>
            </Link>
          )}
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href={`/blog/${blogSlug}`}
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            See all posts
          </Link>
        </div>
      </article>
    </>
  )
}
