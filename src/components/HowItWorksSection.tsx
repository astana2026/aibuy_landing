'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Заполняете анкету',
        description: 'Услуги, цены, частые вопросы, расписание. Занимает 20–30 минут.'
    },
    {
        num: '02',
        title: 'Настраиваем агента',
        description: 'Обучаем под вашу студию. Подключаем к WhatsApp. Настраиваем напоминания.'
    },
    {
        num: '03',
        title: 'Тестируем вместе',
        description: 'Пишете как клиент — проверяете ответы. При необходимости корректируем.'
    },
    {
        num: '04',
        title: 'Агент начинает работу',
        description: 'В тот же день принимает первые заявки. Вечерние клиенты больше не теряются.'
    }
];

export default function HowItWorksSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        КАК ПОДКЛЮЧИТЬ — <span className="text-gradient">4 ШАГА</span>
                    </h2>
                    <p className="text-primary-500 font-semibold text-lg uppercase tracking-wider">
                        Запуск за 1 день. Всё делаем сами.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-neutral-800 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="w-24 h-24 mx-auto md:mx-0 rounded-full bg-neutral-900 border-4 border-neutral-800 flex items-center justify-center text-3xl font-black text-neutral-600 mb-6 relative z-10 group-hover:border-primary-500 transition-colors shadow-2xl">
                                    {step.num}
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 rounded-full bg-primary-600/0 hover:bg-primary-600/20 transition-colors blur-md" />
                                </div>

                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
