"use client"

import { useEffect, useState } from "react"
import { Search, MoreVertical, Edit2, Trash2, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

type Post = {
  id: number;
  caption: string;
  hashtags: string[];
  status: "draft" | "scheduled" | "posted";
}

const INITIAL_MOCK = [
  {
    id: 1,
    caption: "Experience the pristine beaches and crystal clear waters of the Maldives. Our exclusive package offers an overwater bungalow with private access to the ocean.",
    hashtags: ["#Maldives", "#Luxury", "#Honeymoon", "#OceanFront"],
    image_prompt: "Cinematic shot of a luxury overwater bungalow in the Maldives at sunset.",
    status: "posted",
    scheduled_time: null
  },
  {
    id: 2,
    caption: "Get ready for the ultimate Alpine adventure. Skiing, gourmet dining, and private chalet accommodations await you in Switzerland.",
    hashtags: ["#SwissAlps", "#SkiTrip", "#WinterWonderland"],
    image_prompt: "A luxurious log cabin in the snowy Swiss Alps with a warm glowing fireplace visible through the window.",
    status: "scheduled",
    scheduled_time: new Date(Date.now() + 86400000).toISOString()
  }
];

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem('tourism_posts');
    if (saved) {
      setPosts(JSON.parse(saved));
    } else {
      localStorage.setItem('tourism_posts', JSON.stringify(INITIAL_MOCK));
      // @ts-expect-error
      setPosts(INITIAL_MOCK);
    }
  }, [])

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    const newPosts = posts.filter(p => p.id !== id);
    setPosts(newPosts);
    localStorage.setItem('tourism_posts', JSON.stringify(newPosts));
  }

  const filteredPosts = posts.filter(p => 
    p.caption.toLowerCase().includes(search.toLowerCase()) || 
    p.hashtags.some(h => h.toLowerCase().includes(search.toLowerCase()))
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'posted': return <Badge variant="success">Posted</Badge>
      case 'scheduled': return <Badge variant="warning">Scheduled</Badge>
      default: return <Badge variant="secondary">Draft</Badge>
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Content Library</h1>
          <p className="text-gray-500">Manage your generated drafts and scheduled posts.</p>
        </div>
        
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search posts..." 
            className="pl-9 h-10 border-gray-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <div key={post.id} className="group flex flex-col justify-between rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all hover:shadow-hover hover:border-gray-300">
            <div>
              <div className="flex justify-between items-start mb-4">
                {getStatusBadge(post.status)}
                <button className="text-gray-400 hover:text-gray-700 transition-colors">
                  <MoreVertical className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed line-clamp-3 mb-6">
                {post.caption}
              </p>
            </div>
            
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {post.hashtags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
                {post.hashtags.length > 3 && (
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                    +{post.hashtags.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 border-t border-gray-100 pt-4">
                <button className="flex-1 flex items-center justify-center gap-2 text-xs font-medium text-gray-600 hover:text-primary hover:bg-primary/5 py-2 rounded-lg transition-colors">
                  <Edit2 className="h-3.5 w-3.5" /> Edit
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 text-xs font-medium text-gray-600 hover:text-primary hover:bg-primary/5 py-2 rounded-lg transition-colors">
                  <Calendar className="h-3.5 w-3.5" /> Schedule
                </button>
                <button 
                  onClick={() => handleDelete(post.id)}
                  className="flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-200 rounded-2xl">
            <p className="text-gray-500 font-medium">No posts found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
