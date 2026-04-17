"use client"

import { useState } from "react"
import { generatePost } from "@/lib/postGenerator"
import { GlassCard } from "@/components/ui/GlassCard"
import { Textarea } from "@/components/ui/textarea"
import { MagicButton } from "@/components/ui/MagicButton"
import { Bot, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

export default function CreatePost() {
    const [input, setInput] = useState("")
    const [output, setOutput] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleGenerate = async () => {
        setIsLoading(true);
        // Small artificial delay for the loader effect
        await new Promise(r => setTimeout(r, 600));
        const result = generatePost(input)
        setOutput(result)
        setIsLoading(false);
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Create Instagram Post</h1>
                <p className="text-gray-500">Let the AI Travel Agent draft your next high-converting social media post.</p>
            </div>

            <GlassCard className="p-8 border-white/60">
                <div className="space-y-4">
                    <label className="text-sm font-semibold text-gray-700">What are you promoting?</label>
                    <Textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Describe the travel post (e.g., Goa trip for couples under ₹15k with luxury vibes)"
                        className="min-h-[120px] text-base resize-none border-gray-200/50 bg-white/50 backdrop-blur-md focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary shadow-inner rounded-xl"
                    />
                    <div className="flex justify-end pt-2">
                        <MagicButton
                            onClick={handleGenerate}
                            disabled={isLoading || !input.trim()}
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Bot className="w-5 h-5" />}
                            Generate Post
                        </MagicButton>
                    </div>
                </div>
            </GlassCard>

            {output && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    <h2 className="text-xl font-bold tracking-tight border-b border-gray-200/50 pb-2">Generated Result</h2>
                    <pre className="whitespace-pre-wrap bg-white/60 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 rounded-2xl font-sans text-gray-800 leading-relaxed">
                        {output}
                    </pre>
                </motion.div>
            )}
        </div>
    )
}