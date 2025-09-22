import * as React from "react"
import { cn } from "@/lib/utils"

const GdsaCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-2xl border bg-card text-card-foreground shadow-sm", className)} {...props} />
  ),
)
GdsaCard.displayName = "GdsaCard"

const GdsaCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 py-7 px-7", className)} {...props} />,
)
GdsaCardContent.displayName = "GdsaCardContent"

export { GdsaCard, GdsaCardContent }
