import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { PortableTextBlock } from "sanity"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

/**
 * Get the index of the headings in a PortableText block
 *
 * @param elements - An array of PortableTextBlock elements
 * @returns An array of objects with the key, title, and level of the headings
 */
export function getIndex(elements: PortableTextBlock[]) {
  const index: { key: string; title: any; level: string }[] = []
  elements.forEach((element: PortableTextBlock) => {
    if (
      element.style === "h1" ||
      element.style === "h2" ||
      element.style === "h3" ||
      element.style === "h4"
    ) {
      index.push({
        key: element._key,
        title: (element.children as any)[0].text,
        level: element.style.replace("h", ""),
      })
    }
  })
  const levels = [...new Set(index.map((item) => item.level))]

  // Add Introduction as the first item in the index
  index.unshift({
    key: elements[0]._key,
    title: "Introduction",
    level: levels[0],
  })

  return { index, levels }
}
