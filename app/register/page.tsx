"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const res = await fetch("/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        setLoading(false);

        if (res.ok) {
            router.push("/login");
        } else {
            const data = await res.json();
            setError(data.error || "Ошибка регистрации");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh] px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4">
                <h2 className="text-2xl font-bold text-purple-700 text-center">Регистрация</h2>

                {error && <p className="text-sm text-red-600 bg-red-100 p-2 rounded text-center">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded text-sm"
                    required
                    disabled={loading}
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full border border-gray-300 p-3 rounded text-sm"
                    required
                    disabled={loading}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded text-white font-medium text-sm transition ${
                        loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
                    }`}
                >
                    {loading ? "Создание аккаунта..." : "Зарегистрироваться"}
                </button>
            </form>
        </div>
    );
}
