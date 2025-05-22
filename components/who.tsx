export interface IWhoProps {
    className?: string;
}

export const Who = ({ className }: IWhoProps): React.JSX.Element => {
    return (
        <section
            id="who"
            className={`${className} bg-gradient-to-br from-purple-200 to-purple-100 p-12 rounded-2xl shadow-lg`}
        >
            <h2 className="text-4xl font-bold text-purple-800">Кто мы</h2>
            <div className="flex gap-12 items-center">
                {/* Фото организатора */}
                <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20"></div>
                    <img
                        src="/images/organizer.jpg"
                        alt="Организатор выставки"
                        className="relative w-[400px] h-[500px] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300"
                    />
                </div>

                {/* Цитата */}
                <blockquote className="text-purple-900 text-lg max-w-3xl backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-xl">
                    <div className="text-6xl text-purple-600 opacity-30 mb-4">&quot;</div>
                    <p className="italic text-xl mb-6 leading-relaxed">
                        «Выставка &quot;Информационная Россия&quot; — это не просто мероприятие, это наша общая точка
                        притяжения, где технологии встречаются с людьми. Мы хотим показать, как цифровые решения могут
                        менять жизнь — в государстве, бизнесе, образовании и повседневной практике.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Мы верим, что открытость, взаимодействие и обмен опытом — основа прогресса. Наша миссия —
                        предоставить платформу для демонстрации новых идей, дать возможность молодым разработчикам
                        заявить о себе, а представителям организаций — увидеть, как технологии могут быть полезны прямо
                        сегодня.
                    </p>
                    <p className="mb-4 leading-relaxed">
                        Каждый год мы растём, и в этом году вас ждёт ещё больше участников, секций, мастер-классов и
                        живого общения. Приходите, чтобы вдохновиться, найти партнёров и построить цифровое будущее
                        вместе с нами!»
                    </p>
                    <footer className="mt-6 flex items-center gap-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                        <span className="text-purple-800 font-semibold">Алексей Иванов, организатор выставки</span>
                    </footer>
                </blockquote>
            </div>
        </section>
    );
};
