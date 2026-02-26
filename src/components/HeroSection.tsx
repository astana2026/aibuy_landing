'use client';

import { motion } from 'framer-motion';
import { Bot, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-accent-600/20 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-5xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-primary-500/30 text-primary-400 text-sm font-medium"
                >
                    <Bot size={16} />
                    <span>Студия детейлинга на автопилоте</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8"
                >
                    <span className="text-foreground">Агент автодетейлинга на базе </span>
                    <br className="hidden sm:block" />
                    <span className="text-gradient">Искусственного Интеллекта</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-400 mb-10 leading-relaxed"
                >
                    Удерживайте вечерних клиентов. Исключите пустые слоты. Без найма,
                    обучения и контроля менеджеров. Работает 24/7.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                        Внедрить бесплатно
                        <ArrowRight size={20} />
                    </button>

                    <button className="w-full sm:w-auto px-8 py-4 glass hover:bg-white/5 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                        Смотреть демо
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm text-neutral-500"
                >
                    <div className="flex items-center gap-2">
                        <Zap size={16} className="text-primary-500" />
                        <span>Запуск за 1 день</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-primary-500" />
                        <span>10 сек скорость ответа</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
