"use client"

import { useState } from "react"
import { Bot, Save, Calendar as CalendarIcon, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function CreatePostPage() {
  const router = useRouter()
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  
  const [result, setResult] = useState<{
    caption: string;
    hashtags: string[];
    image_prompt: string;
  } | null>(null)

  const handleGenerate = async () => {
    if (!prompt.trim()) return
    setIsLoading(true)
    try {
      await new Promise(r => setTimeout(r, 2000))
      setResult({
        caption: `Discover the ultimate escape with our exclusive package. Whether you're looking for breathtaking landscapes, cultural immersion, or pure relaxation, we've carefully curated every detail. ✈️🌍✨\n\nBased on your prompt: "${prompt}"`,
        hashtags: ['#LuxuryTravel', '#Wanderlust', '#TravelGoals', '#BoutiqueExperience', '#VacationMode'],
        image_prompt: 'A stunning ultra-high resolution cinematic shot of a luxury boutique resort blending seamlessly into a dramatic mountainous landscape at sunset. Warm golden lighting, highly detailed, soft shadows.'
      })
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSave = async (status: "draft" | "scheduled") => {
    if (!result) return
    setIsSaving(true)
    try {
      await new Promise(r => setTimeout(r, 500))
      const savedPosts = JSON.parse(localStorage.getItem('tourism_posts') || '[]')
      const newPost = {
        ...result,
        id: Date.now(),
        status,
        scheduled_time: status === "scheduled" ? new Date().toISOString() : null
      }
      savedPosts.unshift(newPost)
      localStorage.setItem('tourism_posts', JSON.stringify(savedPosts))
      
      alert("Post Saved!")
      router.push("/posts")
    } catch (err) {
      console.error(err)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Create Content</h1>
        <p className="text-gray-500">Let the AI Travel Agent draft your next high-converting social media post.</p>
      </div>

      <Card className="border-0 shadow-soft bg-white">
        <CardContent className="p-8">
          <div className="space-y-4">
            <label className="text-sm font-semibold text-gray-700">What are you promoting?</label>
            <Textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the travel post (e.g., Goa trip for couples under ₹15k with luxury vibes)"
              className="min-h-[120px] text-base resize-none border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
            />
            <div className="flex justify-end">
              <Button 
                onClick={handleGenerate} 
                disabled={isLoading || !prompt.trim()}
                className="gap-2 h-11 px-6 shadow-md"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Bot className="w-5 h-5" />}
                Generate Post
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-xl font-bold tracking-tight border-b border-border-light pb-2">Generated Result</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-none border-border-light">
              <CardContent className="p-6 space-y-4">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Caption</label>
                <Textarea 
                  value={result.caption}
                  onChange={(e) => setResult({...result, caption: e.target.value})}
                  className="min-h-[200px] border-none bg-sidebar-bg focus-visible:ring-0 resize-none"
                />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="shadow-none border-border-light">
                <CardContent className="p-6 space-y-4">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Hashtags</label>
                  <div className="flex flex-wrap gap-2">
                    {result.hashtags.map((tag, i) => (
                      <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-none border-border-light">
                <CardContent className="p-6 space-y-4 bg-amber-50/50">
                  <label className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Midjourney Image Prompt</label>
                  <p className="text-sm text-gray-700 leading-relaxed italic border-l-2 border-amber-300 pl-4">
                    {result.image_prompt}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-6">
            <Button variant="outline" size="lg" disabled={isSaving} onClick={() => handleSave("draft")}>
              <Save className="w-4 h-4 mr-2 text-gray-500" />
              Save as Draft
            </Button>
            <Button size="lg" disabled={isSaving} onClick={() => handleSave("scheduled")}>
              <CalendarIcon className="w-4 h-4 mr-2" />
              Schedule Post
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
