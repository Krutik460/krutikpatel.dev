"use client"

import Script from "next/script"

export default function UmamiAnalytics() {
  return (
    <>
      <Script
        async
        src="https://umami-krutik-rigjcof4u-krutik460.vercel.app/script.js"
        data-website-id="bb497e0c-7e0e-4e53-a542-35bf60053da4"
      />
    </>
  )
}
