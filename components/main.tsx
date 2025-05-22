"use client";

import { SessionProvider } from "next-auth/react";
import Header from "./header";
import { Container } from "./container";

export interface IMainProps {
    children?: React.ReactNode;
}

export const Main = ({ children }: IMainProps): React.JSX.Element => {
    return (
        <SessionProvider>
            <Header />
            <main className="px-4 py-8">
                <Container>{children}</Container>
            </main>

            <footer className="bg-purple-50 border-t border-purple-200 py-8 md:py-10 text-center text-sm text-purple-700 space-y-4">
                <div className="max-w-4xl mx-auto px-4">
                    <p>
                        <strong>Контакты:</strong> info@inforussia.expo | +7 (495) 123-45-67
                    </p>
                    <p>
                        <strong>Время проведения:</strong> 20–22 июня 2025 года, с 10:00 до 18:00
                    </p>

                    <div className="mt-4 space-x-6">
                        <a
                            href="https://vk.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-1 hover:underline hover:text-purple-900"
                        >
                            ВКонтакте
                        </a>
                        <a
                            href="https://t.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-1 hover:underline hover:text-purple-900"
                        >
                            Telegram
                        </a>
                    </div>

                    <div className="mt-4 text-xs text-purple-500">
                        © {new Date().getFullYear()} Информационная Россия. Все права защищены.
                    </div>
                </div>
            </footer>
        </SessionProvider>
    );
};
