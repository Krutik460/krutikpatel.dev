import Link from "next/link"

import { DocsPageHeader } from "@/components/page-header"

export const metadata = {
  title: "Blogs",
  description: "This section includes blogs written by Krutik Patel.",
}

export default function BlogsPage() {
  return (
    <div className="py-6 lg:py-10">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <article
          key={1}
          className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg"
        >
          {/* FEATURED */}
          {/* <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
            Featured
          </span> */}

          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-medium tracking-tight">
                Knowledge Nuggets: Books, Podcasts, Articles & Beyond
              </h2>
              <p className="text-muted-foreground">
                Dive into my intellectual journey as I share enlightening reads,
                thought-provoking podcasts, and insightful articles that expand
                my horizons. Join me in exploring the realms of knowledge, and
                perhaps find your next inspirational source.
              </p>
            </div>
          </div>
          <Link href="blogs/knowledge-nuggets" className="absolute inset-0">
            <span className="sr-only">View</span>
          </Link>
        </article>
      </div>
    </div>
  )
}
