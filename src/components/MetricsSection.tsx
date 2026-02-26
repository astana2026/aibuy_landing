'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function MetricsSection() {
    const t = useTranslations('Metrics');
    const items = t.raw('items') as Array<{ val: string, label: string }>;

    return (
        <section className="py-24 relative overflow-hidden bg-black text-center border-t border-b border-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight uppercase">
                        {t('title')}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center justify-center p-6 glass rounded-2xl hover:border-primary-500/30 transition-colors"
                        >
                            <span className="text-4xl md:text-5xl font-black text-primary-500 mb-4 tracking-tighter">
                                {item.val}
                            </span>
                            <span className="text-neutral-400 font-medium text-sm md:text-base leading-snug">
                                {item.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
