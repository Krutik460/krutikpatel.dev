import { PortableTextBlock, Image } from "sanity"

export type Blog = {
  _id: string
  title: string
  slug: {
    current: string
  }
  featured: boolean
  description: string
}

export type Post = {
  _id: string
  title: string
  slug: {
    current: string
  }
  publishedAt: string
  blog: {
    _ref: string
  }
  mainImage: Image
  alt: string
  sourceUrl: string
  body: PortableTextBlock[]
}

export type Category = {
  _id: string
  title: string
}
