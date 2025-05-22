import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    const { email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json({ error: "Все поля обязательны" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
        return NextResponse.json({ error: "Пользователь уже существует" }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    });

    await prisma.ticket.create({
        data: {
            userId: user.id,
            qrCode: `https://inforussia.expo/ticket/${user.id}` // или просто user.email
        }
    });

    // Успешный ответ
    return NextResponse.json({ success: true }, { status: 201 });
}
