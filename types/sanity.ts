import { PortableTextBlock, Image } from "sanity"

export type CacheDef = {
  _id: string
  title: string
  url: string
  publishedAt: string
}

export type BlogDef = {
  _id: string
  title: string
  slug: {
    current: string
  }
  featured: boolean
  description: string
}

export type PostDef = {
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
  description: string
  sourceUrl: string
  body: PortableTextBlock[]
}

export type CategoryDef = {
  _id: string
  title: string
}
