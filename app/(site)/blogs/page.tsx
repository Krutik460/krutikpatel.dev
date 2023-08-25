import Link from "next/link"

import { SanityDocument } from "next-sanity"
import { blogsQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"

export const metadata = {
  title: "Blogs",
  description: "This section includes blogs written by Krutik Patel.",
}

export default async function BlogsPage() {
  const blogs = await sanityFetch<SanityDocument[]>({ query: blogsQuery })

  return (
    <div className="py-6 lg:py-10">
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        {blogs.map((blog) => (
          <article
            key={1}
            className="group relative rounded-lg border p-6 shadow-md shadow-muted transition-shadow hover:shadow-lg hover:shadow-muted"
          >
            {blog.featured && (
              <span className="absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-medium">
                Featured
              </span>
            )}
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight">
                  {blog.title}
                </h2>
                <p className="text-muted-foreground">{blog.description}</p>
              </div>
            </div>
            <Link
              href={"blogs/" + blog.slug.current}
              className="absolute inset-0"
            >
              <span className="sr-only">View</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
