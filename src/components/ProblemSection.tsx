'use client';

import { motion } from 'framer-motion';
import { Clock, Moon, ImageOff, MessageSquareX, PhoneMissed } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProblemSection() {
    const t = useTranslations('Problem');

    // Make type-safe fetching of the items
    const items = t.raw('items') as Array<{ title: string, description: string, impact: string }>;

    const problemDesignOptions = [
        { icon: Clock, color: 'text-red-400', bg: 'bg-red-400/10' },
        { icon: Moon, color: 'text-orange-400', bg: 'bg-orange-400/10' },
        { icon: ImageOff, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
        { icon: MessageSquareX, color: 'text-purple-400', bg: 'bg-purple-400/10' },
        { icon: PhoneMissed, color: 'text-pink-400', bg: 'bg-pink-400/10' }
    ];

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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">
                        <span className="text-neutral-500">{t('title1')}</span> <br />
                        <span className="text-foreground">{t('title2')}</span>
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        {t('subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                    {items.map((item, index) => {
                        const Icon = problemDesignOptions[index].icon;
                        const color = problemDesignOptions[index].color;
                        const bg = problemDesignOptions[index].bg;

                        // Give different sizes: 2 items on row 1, 3 items on row 2 (or a masonry style)
                        const isMain = index < 2;
                        const colSpanClasses = isMain ? 'lg:col-span-3' : 'lg:col-span-2';

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`glass p-8 rounded-2xl hover:border-primary-500/50 transition-colors duration-300 group ${colSpanClasses} flex flex-col`}
                            >
                                <div className={`w-14 h-14 rounded-xl ${bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon className={`w-7 h-7 ${color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-neutral-200">{item.title}</h3>
                                <p className="text-neutral-400 leading-relaxed  mb-6">{item.description}</p>
                                <div className="mt-auto inline-flex px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-sm font-medium text-neutral-300 w-fit">
                                    🚨 {item.impact}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
