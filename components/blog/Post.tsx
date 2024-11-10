import Link from "next/link"
import Image from "next/image"
import { Icons } from "@/components/Icons"

import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/Button"
import { Separator } from "@/components/ui/separator"

import { PostDef } from "@/types/sanity"
import { urlForImage } from "@/sanity/lib/image"
import { customBlockComponents } from "@/components/blog/PortableTextComponent"
import { PortableText } from "@portabletext/react"
import { PortableTextBlock } from "sanity"

export function Post({
  blogSlug,
  postInfo,
}: {
  blogSlug: string
  postInfo: PostDef
}) {
  const index: { key: string; title: any; level: string }[] = []
  postInfo.body.forEach((element: PortableTextBlock) => {
    if (
      element.style === "h1" ||
      element.style === "h2" ||
      element.style === "h3" ||
      element.style === "h4"
    ) {
      index.push({
        key: element._key,
        title: (element.children as any)[0].text,
        level: element.style.replace("h", ""),
      })
    }
  })
  // Create list of unique levels
  const levels = [...new Set(index.map((item) => item.level))]

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
          <h1 className="font-heading mt-2 inline-block text-3xl leading-tight md:text-4xl lg:text-5xl">
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
        {postInfo.mainImage && (
          <>
            <Separator className="my-8 hidden xl:block" />
            <div className="my-8 xl:hidden">
              <Image
                src={urlForImage(postInfo.mainImage).url()}
                alt="test"
                width={720}
                height={405}
                className="my-8 rounded-md border bg-muted transition-colors"
                priority
              />
              <h4 className="text-lg font-medium">Table of Contents</h4>
              <div className="list-disc">
                {index.map((item, idx) => (
                  <a
                    key={idx}
                    href={`#${item.key}`}
                    className={`block text-muted-foreground ms-${
                      levels.indexOf(item.level) * 4
                    }`}
                  >
                    {item.title.replace(":", "")}
                  </a>
                ))}
                <Separator className="my-8" />
              </div>
            </div>
          </>
        )}
        <PortableText
          value={postInfo.body}
          components={customBlockComponents}
        />
        <Separator className="my-8" />
        {postInfo.mainImage && (
          <article className="hidden xl:fixed xl:right-8 xl:top-24 xl:inline-flex xl:h-48 xl:w-[301px] xl:flex-col xl:space-y-2">
            {postInfo.mainImage && (
              <>
                <Image
                  src={urlForImage(postInfo.mainImage).url()}
                  alt=""
                  width={301}
                  height={169}
                  className="h-28 w-48 rounded-md border bg-muted transition-colors sm:h-48 sm:w-80"
                />
                <div className="my-8">
                  <h4 className="text-lg font-medium">Table of Contents</h4>
                  <div className="list-disc">
                    {index.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.key}`}
                        className={`block text-muted-foreground ms-${
                          levels.indexOf(item.level) * 4
                        }`}
                      >
                        {item.title.replace(":", "")}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </article>
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
