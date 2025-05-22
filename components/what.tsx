import { Cpu, Globe, Users, ShieldCheck } from "lucide-react";

export interface IWhatProps {
    className?: string;
}

export const What = ({ className }: IWhatProps): React.JSX.Element => {
    return (
        <section id="what" className={`${className} bg-purple-100 p-8 rounded-xl shadow space-y-8`}>
            <h2 className="text-3xl font-bold text-purple-800 text-center">Что мы показываем</h2>
            <p className="text-purple-900 text-lg text-center max-w-3xl mx-auto">
                На выставке &quot;Информационная Россия&quot; представлены современные цифровые решения, которые трансформируют
                государственные, образовательные и бизнес-процессы. Мы объединяем инноваторов, разработчиков и компании,
                чтобы продемонстрировать, каким может быть технологичное завтра.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* Карточка 1 */}
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                    <Cpu className="text-purple-600 w-10 h-10 mb-4" />
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">Инновационные IT-решения</h3>
                    <p className="text-purple-900 text-sm">
                        Искусственный интеллект, автоматизация, цифровизация бизнеса и новые технологические платформы.
                    </p>
                </div>

                {/* Карточка 2 */}
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                    <Globe className="text-purple-600 w-10 h-10 mb-4" />
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">Цифровые госуслуги</h3>
                    <p className="text-purple-900 text-sm">
                        Современные решения для государства и граждан: от порталов до биометрической идентификации.
                    </p>
                </div>

                {/* Карточка 3 */}
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                    <Users className="text-purple-600 w-10 h-10 mb-4" />
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">Проекты молодых команд</h3>
                    <p className="text-purple-900 text-sm">
                        Стартапы и студенческие разработки — свежий взгляд и амбициозные идеи от нового поколения.
                    </p>
                </div>

                {/* Карточка 4 */}
                <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
                    <ShieldCheck className="text-purple-600 w-10 h-10 mb-4" />
                    <h3 className="text-xl font-semibold text-purple-800 mb-2">Безопасность и защита данных</h3>
                    <p className="text-purple-900 text-sm">
                        Решения в области кибербезопасности, соответствие современным стандартам и практикам защиты.
                    </p>
                </div>
            </div>
        </section>
    );
};
