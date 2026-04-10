import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success" | "warning";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        {
          "bg-primary text-primary-foreground": variant === "default",
          "bg-sidebar-bg text-foreground": variant === "secondary",
          "text-foreground border border-border-light": variant === "outline",
          "bg-green-100 text-green-800": variant === "success",
          "bg-yellow-100 text-yellow-800": variant === "warning",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
