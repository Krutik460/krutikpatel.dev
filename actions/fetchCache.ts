"use server"

import { CacheDef } from "@/types/sanity"
import { cacheCountQuery, cacheQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"

interface BlogPageProps {
  params: {
    publishedAt: string | null
    lastId: number | null
  }
}

export async function fetchCache({ params }: BlogPageProps) {
  if (params.lastId === null) {
    return []
  }

  const cache: CacheDef = await sanityFetch<CacheDef>({
    query: cacheQuery,
    params: { lastPublishedAt: params.publishedAt, lastId: params.lastId },
  })
}

export async function fetchCacheCount() {
  const cacheCount = await sanityFetch({
    query: cacheCountQuery,
  })
  console.log("cacheCount", cacheCount)

  return "cacheCount"
}
