// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity"

// Get all blogs
export const blogsQuery = groq`*[_type == "blog"]{
  _id, 
  title, 
  slug, 
  featured, 
  description}`

// Get a single blog by its slug
export const blogQuery = groq`*[_type == "blog" && slug.current == $slug][0]{
  _id, 
  title, 
  slug, 
  featured, 
  description}`

// Get all post for a blog
export const postsQuery = groq`*[_type == "post" && blog._ref == $_id][]{
  _id,
  title,
  slug,
  publishedAt,
  blog,
  mainImage,
  sourceUrl,
  body
}`

// Get a single post by its slug
// Get all post for a blog
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  blog,
  mainImage,
  sourceUrl,
  body
}`
