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
        data-website-id="0b3aba2e-1c7f-4f9b-93e8-e891243c5033"
      />
    </>
  )
}
