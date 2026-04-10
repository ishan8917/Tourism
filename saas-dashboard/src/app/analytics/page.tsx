"use client"

import { TrendingUp, Users, Activity, Eye, ArrowUpRight } from "lucide-react"

export default function AnalyticsPage() {
  const stats = [
    { name: "Total Reach", value: "84.2K", change: "+12.5%", icon: Eye },
    { name: "Engagement Rate", value: "5.4%", change: "+1.2%", icon: Activity },
    { name: "Follower Growth", value: "+244", change: "+4.1%", icon: Users },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Performance Overview</h1>
        <p className="text-gray-500">Track how your AI-generated campaigns are performing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-border-light rounded-2xl p-6 shadow-sm hover:shadow-hover transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary">
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                <TrendingUp className="w-3 h-3" /> {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.name}</h3>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-border-light rounded-2xl p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8 border-b border-border-light pb-4">
          <h2 className="text-lg font-bold">Top Performing Posts (Mocked)</h2>
          <button className="text-sm font-medium text-primary flex items-center gap-1 hover:underline">
            View All Report <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-6">
          {[
            { tag: "Luxury Maldives Honeymoon", reach: "12,450", clicks: "450" },
            { tag: "Swiss Alps Adventure", reach: "8,320", clicks: "320" },
            { tag: "Bali Private Villa", reach: "6,105", clicks: "215" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center bg-sidebar-bg p-4 rounded-xl border border-border-light hover:border-gray-300 cursor-pointer transition-colors">
              <div>
                <p className="font-semibold text-sm text-gray-900 mb-1">{item.tag}</p>
                <div className="flex gap-4 text-xs font-medium text-gray-500">
                  <span>Reach: <span className="text-gray-800">{item.reach}</span></span>
                  <span>Interactions: <span className="text-gray-800">{item.clicks}</span></span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-primary font-bold text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
