export interface ICtaProps {
    className?: string;
}

export const Cta = ({ className = "" }: ICtaProps): React.JSX.Element => {
    return (
        <section
            id="visit"
            className={`${className} text-center py-12 md:py-16 px-4 md:px-0 bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-xl shadow-lg text-white`}
        >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Хотите посетить выставку?</h2>
            <a
                href="/register"
                className="inline-block bg-white text-purple-700 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-100 transition"
            >
                Зарегистрироваться
            </a>
        </section>
    );
};
