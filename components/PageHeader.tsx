import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  text?: string
}

export function DocsPageHeader({
  heading,
  text,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn("space-y-4", className)} {...props}>
        <h1 className="font-heading inline-block text-2xl md:text-4xl lg:text-5xl">
          {heading}
        </h1>
        {text && (
          <p className="text-lg text-muted-foreground md:text-xl">{text}</p>
        )}
      </div>
      <Separator className="my-4" />
    </>
  )
}
