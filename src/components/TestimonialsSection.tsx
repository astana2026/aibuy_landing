'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Раньше после 19:00 мы теряли каждого третьего клиента. Сейчас агент записывает, пока я еду домой. За первую неделю — 8 дополнительных записей.",
        author: "Владелец детейлинг-студии",
        city: "Астана",
    },
    {
        quote: "После включения напоминалок no-show сократился вдвое. Раньше было по 2 пустых слота в день — теперь максимум 1 в неделю.",
        author: "Руководитель детейлинг-центра",
        city: "Алматы",
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                        РЕЗУЛЬТАТЫ <span className="text-gradient">КЛИЕНТОВ</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass p-8 rounded-3xl relative"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary-500/20" />
                            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed relative z-10">
                                «{testimonial.quote}»
                            </p>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.author}</h4>
                                    <p className="text-sm text-primary-400">{testimonial.city}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
