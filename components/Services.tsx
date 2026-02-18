"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CircleDot,
    Sparkles,
    Smile,
    Microscope,
    Activity,
    Clock,
    ArrowRight
} from "lucide-react";

const services = [
    {
        title: "General Dentistry",
        description: "Comprehensive checkups, cleanings, and preventative care for all ages.",
        icon: Smile,
        color: "bg-blue-500",
    },
    {
        title: "Dental Implants",
        description: "Restore your smile with permanent, natural-looking tooth replacements.",
        icon: CircleDot,
        color: "bg-sky-500",
    },
    {
        title: "Cosmetic Dentistry",
        description: "Professional whitening, veneers, and smile makeovers for a perfect look.",
        icon: Sparkles,
        color: "bg-indigo-500",
    },
    {
        title: "Oral Surgery",
        description: "Expert surgical procedures including extractions and bone grafting.",
        icon: Microscope,
        color: "bg-cyan-500",
    },
    {
        title: "Orthodontics",
        description: "Traditional braces and clear aligners to straighten your teeth.",
        icon: Activity,
        color: "bg-blue-600",
    },
    {
        title: "Emergency Care",
        description: "Same-day appointments for dental emergencies and pain relief.",
        icon: Clock,
        color: "bg-sky-600",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
                    >
                        Our Expertise
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-secondary dark:text-white mb-6"
                    >
                        Personalized Dental <span className="text-primary italic">Solutions</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 dark:text-slate-400 text-lg"
                    >
                        We offer a wide range of services to meet all your dental needs, using the most advanced techniques in modern dentistry.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-2xl hover:shadow-primary/10 transition-all group"
                        >
                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                <service.icon className="text-white w-8 h-8" />
                            </div>
                            <h4 className="text-2xl font-bold text-secondary dark:text-white mb-4">
                                {service.title}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                                {service.description}
                            </p>
                            <button className="flex items-center gap-2 text-primary font-bold group/btn">
                                Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
