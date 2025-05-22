export interface IWhereProps {
    className?: string;
}

export const Where = ({ className }: IWhereProps): React.JSX.Element => {
    return (
        <section id="location" className={`${className} space-y-6 bg-purple-100 p-8 rounded-xl shadow`}>
            <h2 className="text-3xl font-bold text-purple-800">Где нас найти</h2>
            <p className="text-purple-900 text-lg">Адрес выставки: г. Владимир, Октябрьский просп., д. 11</p>

            <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A297af122334819c7ad4753c8afe9dd69803714788be9ed4d4413f40a65b7ddb3&amp;source=constructor"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
};
