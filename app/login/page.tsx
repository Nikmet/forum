"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false
        });

        setLoading(false);

        if (res?.ok) {
            router.push("/profile");
        } else {
            setError("Неверный email или пароль");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-[80vh] px-4">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md space-y-4">
                <h1 className="text-2xl font-bold text-purple-700 text-center">Вход</h1>

                {error && <p className="text-sm text-red-600 bg-red-100 p-2 rounded text-center">{error}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 p-3 rounded text-sm"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    disabled={loading}
                />

                <input
                    type="password"
                    placeholder="Пароль"
                    className="w-full border border-gray-300 p-3 rounded text-sm"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    disabled={loading}
                />

                <button
                    type="submit"
                    className={`w-full py-3 rounded text-white font-medium text-sm transition ${
                        loading ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 hover:bg-purple-700"
                    }`}
                    disabled={loading}
                >
                    {loading ? "Входим..." : "Войти"}
                </button>
            </form>
        </div>
    );
}
