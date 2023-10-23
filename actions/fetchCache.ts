"use server"

import { CacheDef } from "@/types/sanity"
import { cacheCountQuery, cacheQuery } from "@/sanity/lib/queries"
import { sanityFetch } from "@/sanity/lib/sanityFetch"

export async function fetchCache(start: number, end: number) {
  const cache: CacheDef[] = await sanityFetch<CacheDef[]>({
    query: cacheQuery,
    params: { start: start, end: end },
  })
  return cache
}

export async function fetchCacheCount() {
  const cacheCount: number = await sanityFetch<number>({
    query: cacheCountQuery,
  })

  return cacheCount
}
