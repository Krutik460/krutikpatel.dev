"use client"

import Script from "next/script"

const UMAMI_WEBSITE_ID = process.env.UMAMI_WEBSITE_ID

export default function UmamiAnalytics() {
  console.log(process.env.UMAMI_WEBSITE_ID)
  return (
    <>
      <Script
        async
        src="https://www.analytics.krutikpatel.dev/script.js"
        data-website-id={process.env.UMAMI_WEBSITE_ID}
      />
    </>
  )
}
