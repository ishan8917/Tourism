import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET all customers
export async function GET() {
    const customers = await prisma.customer.findMany({
        include: { trips: true }
    })
    return NextResponse.json(customers)
}

// CREATE customer
export async function POST(req: Request) {
    const body = await req.json()

    const customer = await prisma.customer.create({
        data: body
    })

    return NextResponse.json(customer)
}