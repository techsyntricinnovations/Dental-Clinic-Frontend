"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Patient",
        text: "The best dental experience I've ever had. The staff is incredibly friendly and professional.",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=32"
    },
    {
        name: "Michael Chen",
        role: "Patient",
        text: "Very modern clinic with state of the art equipment. Highly recommend for any dental work.",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=12"
    },
    {
        name: "Emily Davis",
        role: "Patient",
        text: "I was always afraid of dentists, but the gentle care here changed everything. Thank you!",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=44"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Reviews</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-secondary dark:text-white mb-6">What Our Patients Say</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none relative"
                        >
                            <Quote className="absolute top-6 right-6 text-primary/10 w-16 h-16" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 italic relative z-10">
                                "{item.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary dark:text-white">{item.name}</h4>
                                    <p className="text-sm text-slate-500">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
