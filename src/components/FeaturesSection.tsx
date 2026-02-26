'use client';

import { motion } from 'framer-motion';
import { Zap, Moon, Camera, BellRing } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: '10 секунд — агент в диалоге',
        description: 'У конкурента клиент ждет 3–4 минуты. У вас — моментальный ответ. Конверсия растет, потому что вы первые.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10'
    },
    {
        icon: Moon,
        title: '24/7 — и когда администратор дома',
        description: 'После 19:00, в выходные, в праздники — агент онлайн. Ловит те 40–60% заявок, которые вы раньше теряли.',
        color: 'text-indigo-400',
        bg: 'bg-indigo-400/10'
    },
    {
        icon: Camera,
        title: 'Видит фото → собирает карточку мастеру',
        description: 'Клиент прислал фото — агент анализирует состояние, предлагает услугу, записывает марку авто и детали. Мастер получает всё готовое.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10'
    },
    {
        icon: BellRing,
        title: 'Напоминания и подтверждение записи',
        description: 'За день и утром — автоматическое напоминание. Отменился → слот из листа ожидания. No-show падает, выручка растет.',
        color: 'text-rose-400',
        bg: 'bg-rose-400/10'
    }
];

export default function FeaturesSection() {
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
                        <span className="text-gradient">КЛЮЧЕВЫЕ ВОЗМОЖНОСТИ</span>
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Понимает голос · 50 языков (QZ/RU/EN) · Передает диалог менеджеру с полной историей
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-full blur-[50px] group-hover:bg-primary-500/10 transition-colors" />

                            <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 relative z-10`}>
                                <feature.icon className={`w-6 h-6 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-neutral-200 relative z-10">{feature.title}</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
