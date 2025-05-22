"use client";

import { useEffect, useState } from "react";

export interface ISliderProps {
    className?: string;
}

//TODO: ПОИСКАТЬ КАРТИНКИ

const images = ["/images/slide1.jpg", "/images/slide2.jpg", "/images/slide3.jpg"];

export const Slider = ({ className }: ISliderProps): React.JSX.Element => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % images.length);
        }, 5000); // каждые 5 секунд

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`relative h-96 overflow-hidden rounded-xl shadow-lg ${className}`}>
            {images.map((src, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                    style={{
                        backgroundImage: `url(${src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-4xl font-bold z-20 text-center">
                Выставка информационных технологий <br /> &quot;Информационная Россия&quot;
            </div>
        </section>
    );
};
