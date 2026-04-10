"use client"

import { useEffect, useState } from "react"
import { Calendar as CalendarIcon, Clock, ArrowRight } from "lucide-react"

type Post = {
  id: number;
  caption: string;
  status: "draft" | "scheduled" | "posted";
  scheduled_time: string | null;
}

export default function SchedulerPage() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    fetch("/api/posts").then(res => res.json()).then(setPosts)
  }, [])

  const scheduled = posts.filter(p => p.status === "scheduled" && p.scheduled_time)
                         .sort((a, b) => new Date(a.scheduled_time!).getTime() - new Date(b.scheduled_time!).getTime())

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Content Scheduler</h1>
        <p className="text-gray-500">Plan and visualize your upcoming campaigns.</p>
      </div>

      <div className="bg-white border border-border-light rounded-2xl shadow-sm p-8">
        <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
          <CalendarIcon className="w-5 h-5 text-primary" /> Upcoming Queue
        </h2>
        
        {scheduled.length > 0 ? (
          <div className="relative border-l-2 border-primary/20 ml-3 space-y-8">
            {scheduled.map((post) => (
              <div key={post.id} className="relative pl-8">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2 ring-4 ring-white" />
                <div className="bg-sidebar-bg border border-border-light rounded-xl p-5 hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary mb-3">
                    <Clock className="w-4 h-4" />
                    {new Date(post.scheduled_time!).toLocaleString(undefined, {
                      weekday: 'long', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    &quot;{post.caption.substring(0, 100)}...&quot;
                  </p>
                  <button className="text-xs font-medium text-gray-500 flex items-center gap-1 hover:text-primary transition-colors group-hover:translate-x-1 duration-200">
                    View full post <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-gray-500">
            <CalendarIcon className="w-12 h-12 mx-auto text-gray-200 mb-4" />
            <p>Your schedule is empty. Generate some posts to fill it up.</p>
          </div>
        )}
      </div>
    </div>
  )
}
