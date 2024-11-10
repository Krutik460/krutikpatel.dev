import { Icons } from "@/components/Icons"

export const customBlockComponents = {
  marks: {
    // Ex. 2: rendering a custom `link` annotation
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined
      return (
        <a
          className="ont-medium underline underline-offset-4"
          href={value?.href}
          target={target}
        >
          <Icons.link className="mr-1 inline h-4 w-4" />
          {children}
        </a>
      )
    },
  },
  block: {
    normal: ({ value, children }: any) => (
      <p id={value["_key"]} className="scroll-m-20 [&:not(:first-child)]:mt-4">
        {children}
      </p>
    ),
    h1: ({ value, children }: any) => (
      <h1
        id={value["_key"]}
        className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight"
      >
        {children}
      </h1>
    ),
    h2: ({ value, children }: any) => (
      <h2
        id={value["_key"]}
        className="mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0"
      >
        {children}
      </h2>
    ),
    h3: ({ value, children }: any) => (
      <h3
        id={value["_key"]}
        className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      >
        {children}
      </h3>
    ),
    h4: ({ value, children }: any) => (
      <h4
        id={value["_key"]}
        className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      >
        {children}
      </h4>
    ),
    li: ({ children }: any) => <li className="mt-2">{children}</li>,
    blockquote: ({ children }: any) => (
      <blockquote className="mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground">
        {children}
      </blockquote>
    ),
    code: ({ children }: any) => (
      <code className="relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm">
        {children}
      </code>
    ),
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <ul className="my-6 ml-6 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="my-6 ml-6 list-decimal">{children}</ol>
    ),
  },
}
