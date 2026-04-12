"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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
    <div className="flex h-full w-64 flex-col border-r border-border-light bg-sidebar-bg px-4 py-8 overflow-y-auto">
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
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
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-white text-primary shadow-sm ring-1 ring-border-light"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <item.icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-gray-400")} />
                  {item.name}
                </Link>
              )
            })}
          </div>
        ))}
      </nav>

      <div className="mt-8 px-3">
        <div className="rounded-xl border border-border-light bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Usage</p>
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Credits</span>
            <span className="text-primary font-bold">84 / 100</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div className="h-full bg-primary rounded-full w-[84%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
