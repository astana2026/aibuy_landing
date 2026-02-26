'use client';

import { motion } from 'framer-motion';
import { Zap, Moon, Camera, Mic, Share2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FeaturesSection() {
    const t = useTranslations('Solution');
    const features = t.raw('features') as Array<{ title: string, desc: string }>;

    const featureIcons = [
        { icon: Zap, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
        { icon: Moon, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
        { icon: Camera, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
        { icon: Mic, color: 'text-sky-400', bg: 'bg-sky-400/10' },
        { icon: Share2, color: 'text-rose-400', bg: 'bg-rose-400/10' }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-neutral-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = featureIcons[index].icon;
                        const color = featureIcons[index].color;
                        const bg = featureIcons[index].bg;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-600/5 rounded-full blur-[50px] group-hover:bg-primary-500/10 transition-colors" />

                                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-6 relative z-10`}>
                                    <Icon className={`w-6 h-6 ${color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-200 relative z-10">{feature.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
