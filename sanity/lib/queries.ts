// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity"

// Get all blogs
export const blogsQuery = groq`*[_type == "blog"]`

// Get a single blog by its slug
export const blogQuery = groq`*[_type == "blog" && slug.current == $slug][0]`

// Get all post for a blog
export const postsQuery = groq`*[_type == "post" && blog._ref == $_id][]`

// Get a single post by its slug
// Get all post for a blog
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`
