'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
    const t = useTranslations('FAQ');
    const items = t.raw('items') as Array<{ q: string, a: string }>;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative overflow-hidden bg-neutral-950 block">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center md:text-left mb-16 flex flex-col items-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground uppercase tracking-tight text-center">
                        {t('title')}
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="glass rounded-2xl overflow-hidden hover:border-primary-500/20 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                >
                                    <h3 className="text-lg font-bold text-neutral-200 pr-8">{item.q}</h3>
                                    <ChevronDown
                                        className={`w-5 h-5 text-primary-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 pt-0 text-neutral-400 leading-relaxed border-t border-neutral-800/50 mt-2">
                                        <br />
                                        {item.a}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
