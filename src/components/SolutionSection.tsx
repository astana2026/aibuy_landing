'use client';

import { motion } from 'framer-motion';

const chatMessages = [
    { sender: 'client', text: 'Здравствуйте, сколько стоит полировка BMW 5 серии?', time: '19:47' },
    { sender: 'ai', text: 'Добрый вечер! BMW 5 — отличный выбор. Цена зависит от состояния лака. Пришлите фото кузова — я назову точную цену за 1 минуту.', time: '19:47' },
    { sender: 'client', text: 'Вложил фото двери и капота 📸', time: '19:48' },
    { sender: 'ai', text: 'Посмотрел фото. На двери потертость, на капоте мелкие царапины. Рекомендую двухфазную полировку. Цена: от 80 000₸. Время: 6–8 часов. На когда удобно записать? Я передам детали мастеру.', time: '19:48' },
    { sender: 'client', text: 'Давайте на субботу утро', time: '19:49' },
    { sender: 'ai', text: 'Записал на субботу утро! Завтра отправлю подтверждение. Если планы изменятся — напишите, найдем другое время. До встречи!', time: '19:49' },
];

export default function SolutionSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="text-gradient">AI-СОТРУДНИК</span> <br />
                            вашей студии
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                            Он не просто отвечает — он выявляет потребности, консультирует по фото и доводит до записи. Мастер получает готовую карточку со всеми деталями.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {['Отвечает за 10 секунд', 'Анализирует фото повреждений', 'Записывает марку, состояние, пожелания', 'Работает 24/7 без выходных'].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-neutral-300">
                                    <div className="w-6 h-6 rounded-full bg-primary-600/20 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary-500" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Chat Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-primary-600/10 blur-[100px] rounded-full" />

                        <div className="relative glass rounded-[2rem] p-4 sm:p-6 border border-neutral-800 bg-[#0a0a0a]/80 shadow-2xl overflow-hidden max-w-md mx-auto">
                            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                                        AI
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Агент AIBUY</h4>
                                        <p className="text-xs text-primary-400">Онлайн</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {chatMessages.map((msg, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                                        className={`flex flex-col ${msg.sender === 'client' ? 'items-end' : 'items-start'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.sender === 'client'
                                                    ? 'bg-neutral-800 text-neutral-200 rounded-br-sm'
                                                    : 'bg-primary-600 text-white rounded-bl-sm'
                                                }`}
                                        >
                                            <p className="text-sm leading-relaxed">{msg.text}</p>
                                        </div>
                                        <span className="text-[10px] text-neutral-500 mt-1 px-1">{msg.time}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
