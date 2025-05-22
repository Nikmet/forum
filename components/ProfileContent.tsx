"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProfileContent() {
    const { data: session } = useSession();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Профиль</h1>
            <p>Email: {session.user?.email}</p>
            <p>Ваш электронный билет появится здесь</p>
        </div>
    );
}
