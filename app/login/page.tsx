"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        });

        if (res?.ok) {
            router.push("/profile");
        } else {
            alert("Неверные данные");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <h1 className="text-2xl font-bold">Вход</h1>
            <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Пароль"
                className="w-full border p-2 rounded"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
                Войти
            </button>
        </form>
    );
}
