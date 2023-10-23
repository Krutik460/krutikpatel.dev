import Image from "next/image"

import { fetchCache, fetchCacheCount } from "@/actions/fetchCache"
import { DocsPageHeader } from "@/components/PageHeader"
import { CacheDef } from "@/types/sanity"

export default async function CuriosityPage() {
  const cacheCount: number = await fetchCacheCount()
  const cache: CacheDef[] = await fetchCache(0, 15)

  if (cacheCount === 0) {
    return (
      <div className="py-6 lg:py-10">
        <DocsPageHeader heading="No Blogs Published" text="Check back soon!" />
      </div>
    )
  } else {
    return (
      <div className="columns-3xs">
        <Image className="... aspect-video w-full" src="" alt="" />
        <Image className="... aspect-square w-full" src="" alt="" />
      </div>
    )
  }
}
