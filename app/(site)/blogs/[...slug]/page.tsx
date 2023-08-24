import Link from "next/link"
import { notFound } from "next/navigation"

import { Icons } from "@/components/icons"
import { DocsPageHeader } from "@/components/page-header"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface BlogPageProps {
  params: {
    slug: string[]
  }
}

export default async function GuidePage({ params }: BlogPageProps) {
  const blog = {
    title: "Knowledge Nuggets: Books, Podcasts, Articles & Beyond",
    description:
      "Dive into my intellectual journey as I share enlightening reads, thought-provoking podcasts, and insightful articles that expand my horizons. Join me in exploring the realms of knowledge, and perhaps find your next inspirational source.",
  }

  if (!blog) {
    notFound()
  }

  return (
    <div className="container mx-auto flex max-w-5xl  flex-row py-6 lg:py-10">
      <div className="basis-1/4 justify-center py-6 lg:py-10">
        <Link href="/blogs" className={cn(buttonVariants({ variant: "link" }))}>
          <Icons.chevronLeft className="mr-2 h-8 w-8 text-muted-foreground hover:text-accent-foreground" />
        </Link>
      </div>
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <DocsPageHeader heading={blog.title} text={blog.description} />
      </div>
    </div>
  )
}
