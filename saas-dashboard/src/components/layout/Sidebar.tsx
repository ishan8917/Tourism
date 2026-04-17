"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  Bot,
  PenSquare,
  Files,
  Calendar,
  BarChart3,
  Settings,
  Users,
  Map,
  DollarSign,
  UserPlus
} from "lucide-react"
import { cn } from "@/lib/utils"

const navigationGroups = [
  {
    label: "Marketing",
    items: [
      { name: "Create Post", href: "/create-post", icon: PenSquare },
      { name: "Posts", href: "/posts", icon: Files },
      { name: "Scheduler", href: "/scheduler", icon: Calendar },
      { name: "Analytics", href: "/analytics", icon: BarChart3 },
    ]
  },
  {
    label: "Agency OS",
    items: [
      { name: "Customers", href: "/customers", icon: Users },
      { name: "Trips", href: "/trips", icon: Map },
      { name: "Finances", href: "/finances", icon: DollarSign },
      { name: "Agents", href: "/agents", icon: UserPlus },
    ]
  },
  {
    label: "Platform",
    items: [
      { name: "Settings", href: "/settings", icon: Settings },
    ]
  }
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r border-white/50 bg-white/70 backdrop-blur-2xl shadow-[4px_0_24px_rgb(0,0,0,0.02)] px-4 py-8 overflow-y-auto z-10">
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="flex h-10 w-10 relative items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-blue-500 text-white shadow-lg shadow-primary/30">
          <div className="absolute inset-0 rounded-xl ring-1 ring-white/40 inset-ring pointer-events-none" />
          <Bot className="h-6 w-6" />
        </div>
        <span className="text-lg font-bold tracking-tight text-foreground">AI Travel Agent</span>
      </div>

      <nav className="flex-1 space-y-6">
        {navigationGroups.map((group) => (
          <div key={group.label} className="space-y-1">
            <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              {group.label}
            </h3>
            {group.items.map((item) => {
              const isActive = pathname === item.href || (pathname === '/' && item.href === '/create')
              return (
              <motion.div
                key={item.name}
                whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  "rounded-lg overflow-hidden",
                  isActive ? "bg-white shadow-sm ring-1 ring-black/5" : "hover:bg-white/50"
                )}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-gray-500 hover:text-gray-900"
                  )}
                >
                  <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-gray-400")} />
                  {item.name}
                </Link>
              </motion.div>
              )
            })}
          </div>
        ))}
      </nav>

      <div className="mt-8 px-3">
        <motion.div 
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-white/60 bg-white/50 backdrop-blur-md p-4 shadow-sm"
        >
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Usage</p>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Credits</span>
            <span className="text-primary font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">84 / 100</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200/50">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "84%" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
