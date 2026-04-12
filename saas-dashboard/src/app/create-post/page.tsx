"use client"

import { useState } from "react"
import { generatePost } from "@/lib/postGenerator"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Bot, Loader2 } from "lucide-react"

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

            <Card className="border-0 shadow-soft bg-white">
                <CardContent className="p-8">
                    <div className="space-y-4">
                        <label className="text-sm font-semibold text-gray-700">What are you promoting?</label>
                        <Textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Describe the travel post (e.g., Goa trip for couples under ₹15k with luxury vibes)"
                            className="min-h-[120px] text-base resize-none border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary shadow-sm"
                        />
                        <div className="flex justify-end">
                            <Button
                                onClick={handleGenerate}
                                disabled={isLoading || !input.trim()}
                                className="gap-2 h-11 px-6 shadow-md"
                            >
                                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Bot className="w-5 h-5" />}
                                Generate Post
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {output && (
                <div className="space-y-6 animate-fade-in">
                    <h2 className="text-xl font-bold tracking-tight border-b border-border-light pb-2">Generated Result</h2>
                    <pre className="whitespace-pre-wrap bg-white border border-border-light shadow-sm p-6 rounded-xl font-sans text-gray-800 leading-relaxed">
                        {output}
                    </pre>
                </div>
            )}
        </div>
    )
}