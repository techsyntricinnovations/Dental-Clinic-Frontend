"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Patient",
        text: "The best dental experience I've ever had. Our family finally found a clinic that actually cares about comfort.",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=32"
    },
    {
        name: "Michael Chen",
        role: "Patient",
        text: "Very modern clinic with amazing staff. They explained the whole process clearly and the result was perfect.",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=12"
    },
    {
        name: "Emily Davis",
        role: "Patient",
        text: "I was always afraid of dentists, but the gentle care here changed everything. My new smile looks so natural!",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=44"
    },
    {
        name: "Rahul Verma",
        role: "Patient",
        text: "Best clinic in Ranchi for implants. Painless treatment and very professional behavior by the senior doctors.",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=68"
    },
    {
        name: "Priya Singh",
        role: "Patient",
        text: "Used clear aligners here and the results are unbelievable. No one even noticed I was wearing them!",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=45"
    },
    {
        name: "Ankit Sharma",
        role: "Patient",
        text: "Emergency service was a lifesaver. Had a severe toothache at 10 PM and they handled it with priority.",
        rating: 5,
        img: "https://i.pravatar.cc/100?img=11"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Calculate which 3 testimonials to show based on currentIndex
    const visibleTestimonials = [
        testimonials[currentIndex % testimonials.length],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
    ];

    return (
        <section id="testimonials" className="py-12 md:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block"
                    >
                        Success Stories
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-[family-name:var(--font-cormorant)] text-secondary italic leading-tight"
                    >
                        Smiles that speak for <br />
                        <span className="not-italic font-black text-primary tracking-tighter uppercase">Our Quality.</span>
                    </motion.h2>
                </div>

                <div className="relative group">
                    <div className="flex flex-col md:flex-row gap-6">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {visibleTestimonials.map((item, idx) => (
                                <motion.div
                                    key={`${item.name}-${idx}`}
                                    layout
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className={`flex-1 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden ${idx > 0 ? 'hidden md:block' : ''}`}
                                >
                                    <Quote className="absolute top-6 right-6 text-primary/5 w-16 h-16 -z-0" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        <p className="text-base md:text-lg font-[family-name:var(--font-cormorant)] italic leading-relaxed mb-6 text-secondary flex-grow">
                                            &quot;{item.text}&quot;
                                        </p>

                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20 p-0.5 shadow-md">
                                                <Image
                                                    src={item.img}
                                                    alt={item.name}
                                                    width={40}
                                                    height={40}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-black uppercase tracking-wider text-[10px] text-secondary">
                                                    {item.name}
                                                </h4>
                                                <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-primary">
                                                    {item.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all border border-slate-100"
                        >
                            <ChevronLeft size={20} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all border border-slate-100"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex justify-center gap-2 mt-12"
                >
                    {testimonials.map((_, i) => (
                        <motion.button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className={`h-1 rounded-full transition-all duration-500 ${i === currentIndex ? "w-8 bg-primary" : "w-2 bg-slate-200"
                                }`}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
