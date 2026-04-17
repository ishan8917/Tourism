import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// GET all customers
export async function GET() {
    const customers = await prisma.customer.findMany()
    return NextResponse.json(customers)
}

// CREATE customer
export async function POST(req: Request) {
    const body = await req.json()

    const customer = await prisma.customer.create({
        data:{
            name: body.name,
            email: body.email,
            phone: body.phone,
            status: "New Lead",
            ltv:0

        }
    })

    return NextResponse.json(customer)
}

// UPDATE customer
export async function PUT(req: Request) {
    const body = await req.json()
    const { id, name, email, phone, status, ltv } = body

    if (!id) {
        return NextResponse.json({ error: "Customer ID is required" }, { status: 400 })
    }

    const customer = await prisma.customer.update({
        where: { id },
        data: {
            name,
            email,
            phone,
            ...(status ? { status } : {}),
            ...(ltv !== undefined ? { ltv } : {})
        }
    })

    return NextResponse.json(customer)
}