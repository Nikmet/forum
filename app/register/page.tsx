"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (res.ok) {
            // Редирект на страницу входа
            router.push("/login");
        } else {
            const data = await res.json();
            setError(data.error || "Ошибка регистрации");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-purple-800">Регистрация</h2>
            {error && <p className="text-red-600">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border p-2 rounded"
                required
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border p-2 rounded"
                required
            />
            <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                Зарегистрироваться
            </button>
        </form>
    );
}
