// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity"

// Get all blogs
export const blogsQuery = groq`*[_type == "blog"]`

// Get a single blog by its slug
export const blogQuery = groq`*[_type == "blog" && slug.current == $slug][0]`

// // Get all post slugs
// export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
//     "params": { "slug": slug.current }
//   }`
