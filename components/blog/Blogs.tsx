import Link from "next/link"

import { BlogDef } from "@/types/sanity"
import { DocsPageHeader } from "@/components/PageHeader"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Separator } from "@/components/ui/separator"

export function Blogs({ blogs = [] }: { blogs: BlogDef[] }) {
  return (
    <div className="py-6 lg:py-10">
      {blogs?.length ? (
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
            {blogs.map((blog) => (
              <article
                key={blog._id}
                className="group relative rounded-lg border p-6 shadow-md shadow-muted transition-shadow hover:shadow-xl hover:shadow-muted"
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
                {blog.slug && (
                  <Link
                    href={`blog/${blog.slug.current}`}
                    className="absolute inset-0"
                  >
                    <span className="sr-only">View</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
          <div className="flex flex-col">
            <Separator className="mb-2 mt-8 hidden sm:block" />
            <ToggleGroup type="single">
              <ToggleGroupItem value="" aria-label="Recent Articles">
                Recent
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      ) : (
        <DocsPageHeader heading="No Blogs Published" text="Check back soon!" />
      )}
    </div>
  )
}
