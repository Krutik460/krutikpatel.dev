import Link from "next/link"

import { Blog } from "@/types/sanity"
import { blogsQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"
import { DocsPageHeader } from "@/components/page-header"

export const metadata = {
  title: "Blogs",
  description: "This section includes blogs written by Krutik Patel.",
}

export default async function BlogPage() {
  const blogs: Blog[] = await sanityFetch<Blog[]>({ query: blogsQuery })

  return (
    <div className="py-6 lg:py-10">
      {blogs?.length ? (
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {blogs.map((blog) => (
            <article
              key={blog._id}
              className="group relative rounded-lg border p-6 shadow-md shadow-muted transition-shadow hover:shadow-lg hover:shadow-muted"
            >
              {blog.featured && (
                <span className="absolute right-2 top-2 rounded-full px-3 py-1 text-xs font-medium">
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
                href={`blog/${blog.slug.current}`}
                className="absolute inset-0"
              >
                <span className="sr-only">View</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <DocsPageHeader heading="No Blogs Published" text="Check back soon!" />
      )}
    </div>
  )
}
