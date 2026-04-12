import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    try {
        const { postId } = await req.json()

        const post = await prisma.post.findUnique({
            where: { id: postId }
        })

        if (!post) {
            return NextResponse.json({ error: "Post not found" }, { status: 404 })
        }

        const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN
        const IG_USER_ID = process.env.INSTAGRAM_USER_ID

        // Step 1: Create media container
        const createRes = await fetch(
            `https://graph.facebook.com/v19.0/${IG_USER_ID}/media`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    image_url: post.imageUrl,
                    caption: `${post.caption} ${post.hashtags}`,
                    access_token: ACCESS_TOKEN
                })
            }
        )

        const createData = await createRes.json()

        // Step 2: Publish
        const publishRes = await fetch(
            `https://graph.facebook.com/v19.0/${IG_USER_ID}/media_publish`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    creation_id: createData.id,
                    access_token: ACCESS_TOKEN
                })
            }
        )

        const publishData = await publishRes.json()

        return NextResponse.json(publishData)

    } catch (err) {
        return NextResponse.json({ error: "Failed to publish" }, { status: 500 })
    }
}