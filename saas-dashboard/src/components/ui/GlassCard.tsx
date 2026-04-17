import { cn } from "@/lib/utils"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
}

export function GlassCard({ children, className, interactive = true, ...props }: GlassCardProps) {
  return (
    <div 
      className={cn(
        "relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)]",
        "overflow-hidden transition-all duration-300",
        interactive && "hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:bg-white/80",
        className
      )}
      {...props}
    >
      {/* Subtle shine effect wrapper if needed */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  )
}
