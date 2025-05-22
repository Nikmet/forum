import { Cpu } from "lucide-react";
import { Container } from "./container";
import Link from "next/link";

interface Link {
    href: string;
    label: string;
}

const links: Link[] = [
    { href: "#who", label: "Кто мы" },
    { href: "#what", label: "Что показываем" },
    { href: "#sponsors", label: "Спонсоры" },
    { href: "#location", label: "Где нас найти" },
    { href: "#visit", label: "Посетить" }
];

export default function Header() {
    return (
        <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-purple-700 flex items-center gap-2">
                        <Cpu /> <span>Информационная Россия</span>
                    </h1>
                    <div className="flex gap-2">
                        <nav className="flex p-2 bg-purple-200 rounded-lg">
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
                        <Link
                            href="/register"
                            className="px-6 py-2 rounded-lg bg-purple-700 text-white font-medium hover:bg-purple-800 transition-colors text-center flex items-center justify-center"
                        >
                            Войти
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
}
