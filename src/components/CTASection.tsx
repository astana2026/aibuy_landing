'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-black pointer-events-none" />

            {/* Decorative Blur Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-600/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="glass p-12 sm:p-16 rounded-[3rem] border border-primary-500/30 shadow-2xl relative overflow-hidden"
                >
                    {/* subtle inside glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 to-transparent pointer-events-none" />

                    <Sparkles className="w-16 h-16 text-primary-500 mx-auto mb-8 animate-pulse" />

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        Больше записей. <br className="hidden md:block" />
                        <span className="text-gradient">Меньше пустых слотов.</span>
                    </h2>

                    <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
                        Начните завтра. Настройка 1 день. Подключение 0₸. <br className="hidden md:block" />
                        Результат с первого вечера.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <button className="w-full sm:w-auto px-10 py-5 bg-white text-black hover:bg-neutral-200 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                            Бесплатное подключение
                            <ArrowRight size={24} />
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400 font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>Астана — 3 места</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span>Алматы — 3 места</span>
                        </div>
                    </div>
                    <p className="mt-4 text-xs text-primary-400 font-bold tracking-widest uppercase">
                        В марте бесплатная настройка
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
