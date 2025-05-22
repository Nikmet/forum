import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma-client";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    if (!email) return NextResponse.json({ error: "Email is required" }, { status: 400 });

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const ticket = await prisma.ticket.findUnique({
        where: { userId: user.id },
        select: { qrCode: true }
    });

    if (!ticket) return NextResponse.json({ error: "Ticket not found" }, { status: 404 });

    return NextResponse.json(ticket);
}
