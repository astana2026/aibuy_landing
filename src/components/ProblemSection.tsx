'use client';

import { motion } from 'framer-motion';
import { Clock, MessageSquareX, CalendarX, UserX } from 'lucide-react';

const problems = [
    {
        icon: Clock,
        title: 'Потеря каждого третьего клиента после 19:00',
        description: '40–60% автовладельцев ищут детейлинг вечером. Студия закрыта, администратор спит — конкурент, который ответил первым, забирает клиента. Результат: 0₸ вместо 80–150K₸.',
        color: 'text-red-400',
        bg: 'bg-red-400/10'
    },
    {
        icon: MessageSquareX,
        title: '80% вопросов одинаковые — менеджер стоит 600–800K₸',
        description: '«Сколько полировка?», «Есть время в субботу?», «Сколько часов керамика?» — менеджер тратит 3–4 часа на переписки. Обучение нового сотрудника занимает от 3 месяцев.',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10'
    },
    {
        icon: CalendarX,
        title: 'Клиент записался — и не пришел. 22% слотов пустуют',
        description: 'No-show — скрытая дыра в выручке. Клиент забыл, передумал, записался к двум. Средний чек 80K₸, 8 слотов в день — это потеря 140K₸ ежедневно.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10'
    },
    {
        icon: UserX,
        title: 'Человеческий фактор: забыл, пропустил, нет настроения',
        description: 'Менеджер может забыть ответить, потерять детали, не записать пожелания клиента. Итог: негативные отзывы и клиент больше не возвращается.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10'
    }
];

export default function ProblemSection() {
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-neutral-500">4 главные проблемы</span> <br />
                        студий сегодня
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        То, на что вы теряете время, нервы и миллионы тенге каждый месяц.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:border-primary-500/50 transition-colors duration-300 group"
                        >
                            <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className={`w-7 h-7 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-neutral-200">{item.title}</h3>
                            <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
