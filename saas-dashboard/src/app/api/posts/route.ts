import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET posts
export async function GET() {
    const posts = await prisma.post.findMany()
    return NextResponse.json(posts)
}

// CREATE post
export async function POST(req: Request) {
    const body = await req.json()

    const post = await prisma.post.create({
        data: body
    })

    return NextResponse.json(post)
}