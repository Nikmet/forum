export interface ISponsorsProps {
    className?: string;
}

export const Sponsors = ({ className }: ISponsorsProps): React.JSX.Element => {
    return (
        <section id="sponsors" className={`${className} bg-purple-50 p-8 rounded-xl shadow space-y-8`}>
            <h2 className="text-3xl font-bold text-purple-800 text-center">Наши спонсоры</h2>
            <p className="text-purple-900 text-lg text-center max-w-2xl mx-auto">
                Мы благодарим наших партнёров, поддержавших проведение выставки. Благодаря им мы реализуем самые
                амбициозные идеи!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Спонсор 1 */}
                <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-center text-center">
                    <img src="images/locman.webp" alt="Логотип Спонсора 1" className="h-16 mb-4 object-contain" />
                    <h3 className="text-xl font-semibold text-purple-800 mb-1">Лоцман Бизнес-технологии</h3>
                    <p className="text-sm text-purple-900">
                        Лидер в разработке бизнес решений и систем хранения данных.
                    </p>
                </div>

                {/* Спонсор 2 */}
                <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-center text-center">
                    <img src="images/altenar.webp" alt="Логотип Спонсора 2" className="h-16 mb-4 object-contain" />
                    <h3 className="text-xl font-semibold text-purple-800 mb-1">Альтенар Владимир</h3>
                    <p className="text-sm text-purple-900">
                        Интегратор цифровых решений для госструктур и образования.
                    </p>
                </div>

                {/* Спонсор 3 */}
                <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition flex flex-col items-center text-center">
                    <img src="images/vidinet.png" alt="Логотип Спонсора 3" className="h-16 mb-4 object-contain" />
                    <h3 className="text-xl font-semibold text-purple-800 mb-1">Vidinet</h3>
                    <p className="text-sm text-purple-900">
                        Поставщик решений в области информационной безопасности и аналитики.
                    </p>
                </div>
            </div>
        </section>
    );
};
