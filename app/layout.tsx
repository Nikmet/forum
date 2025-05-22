import "./globals.css";
import { ReactNode } from "react";
import { Montserrat_Alternates } from "next/font/google";
import { Main } from "@/components/main";

export const metadata = {
    title: "Информационная Россия",
    description: "Выставка современных информационных решений"
};

const montserrat = Montserrat_Alternates({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-montserrat-alt",
    display: "swap"
});

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ru">
            <body className={`${montserrat.variable} sans-serif bg-white text-gray-900 min-h-screen`}>
                <Main>{children}</Main>
            </body>
        </html>
    );
}
