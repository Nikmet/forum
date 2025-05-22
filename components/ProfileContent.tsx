"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";

interface Ticket {
    qrCode: string;
}

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const [ticket, setTicket] = useState<Ticket | null>(null);

    useEffect(() => {
        if (session?.user?.email) {
            fetch(`/api/ticket?email=${session.user.email}`)
                .then(res => res.json())
                .then(data => setTicket(data));
        }
    }, [session]);

    if (status === "loading") return <p>Загрузка...</p>;
    if (!session) return redirect("/login");

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Профиль</h1>
            <p>Email: {session.user?.email}</p>
            <p className="mt-4 mb-2 font-semibold">Ваш электронный билет:</p>

            {ticket?.qrCode ? (
                <div className="bg-white p-4 shadow-md rounded">
                    <QRCode value={ticket.qrCode} size={200} />
                    <p className="text-sm mt-2 text-gray-600 break-all">{ticket.qrCode}</p>
                </div>
            ) : (
                <p>Билет не найден</p>
            )}
        </div>
    );
}
