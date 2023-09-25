import { Blog, Post } from "@/types/sanity"
import { blogsQuery, postsQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"

const URL = process.env.SITE_URL

interface PostUrl {
  url: string
  lastModified: string
}

export default async function sitemap() {
  const blogs: Blog[] = await sanityFetch<Blog[]>({ query: blogsQuery })

  const blogsUrl = blogs.map(({ slug }) => ({
    url: `${URL}/blog/${slug.current}`,
    lastModified: new Date(2023, 5, 4).toISOString(),
  }))

  const postsUrl = blogs.map(async (blog) => {
    const posts: Post[] = await sanityFetch<Post[]>({
      query: postsQuery,
      params: { _id: blog._id },
    })
    const tempPostsUrl = posts.map((post) => ({
      url: `${URL}/blog/${blog.slug.current}/${post.slug.current}`,
      lastModified: post.publishedAt,
    }))
    return tempPostsUrl
  })
  const postsUrlFlat = (await Promise.all(postsUrl)).flat()

  const routes = ["", "/blog"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date(2023, 5, 4).toISOString(),
  }))

  return [...routes, ...blogsUrl, ...postsUrlFlat]
}
