"use client";

import { useState } from "react";
import { Cpu, Menu, X } from "lucide-react";
import { Container } from "./container";
import Link from "next/link";
import { useSession } from "next-auth/react";

interface LinkItem {
    href: string;
    label: string;
}

const links: LinkItem[] = [
    { href: "#who", label: "Кто мы" },
    { href: "#what", label: "Что показываем" },
    { href: "#sponsors", label: "Спонсоры" },
    { href: "#location", label: "Где нас найти" },
    { href: "#visit", label: "Посетить" }
];

export default function Header() {
    const { data: session } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
                            <Cpu /> <span>Информационная Россия</span>
                        </h1>
                    </Link>

                    {/* Десктоп меню */}
                    <nav className="hidden md:flex p-2 bg-purple-200 rounded-lg gap-2">
                        {links.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-4 py-2 rounded-lg hover:bg-purple-300 transition-colors text-purple-950 font-medium"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Кнопки профиль/войти для десктопа */}
                    <div className="hidden md:flex gap-2">
                        {session ? (
                            <Link
                                href="/profile"
                                className="px-6 py-2 rounded-lg bg-purple-700 text-white font-medium hover:bg-purple-800 transition-colors flex items-center justify-center"
                            >
                                Профиль
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                className="px-6 py-2 rounded-lg bg-purple-700 text-white font-medium hover:bg-purple-800 transition-colors flex items-center justify-center"
                            >
                                Войти
                            </Link>
                        )}
                    </div>

                    {/* Мобильное меню - иконка гамбургера */}
                    <button
                        className="md:hidden p-2 rounded-md hover:bg-purple-200 transition-colors"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <X className="w-6 h-6 text-purple-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-purple-700" />
                        )}
                    </button>
                </div>

                {/* Мобильное меню - выпадающее */}
                {menuOpen && (
                    <nav className="md:hidden mt-4 flex flex-col bg-purple-100 rounded-lg p-4 gap-3">
                        {links.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)} // закрывать меню по клику
                                className="px-4 py-2 rounded-lg hover:bg-purple-300 transition-colors text-purple-900 font-medium block"
                            >
                                {link.label}
                            </a>
                        ))}

                        {session ? (
                            <Link
                                href="/profile"
                                onClick={() => setMenuOpen(false)}
                                className="px-6 py-2 rounded-lg bg-purple-700 text-white font-medium hover:bg-purple-800 transition-colors text-center"
                            >
                                Профиль
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setMenuOpen(false)}
                                className="px-6 py-2 rounded-lg bg-purple-700 text-white font-medium hover:bg-purple-800 transition-colors text-center"
                            >
                                Войти
                            </Link>
                        )}
                    </nav>
                )}
            </Container>
        </header>
    );
}
