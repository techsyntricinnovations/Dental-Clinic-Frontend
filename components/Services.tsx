"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gem, Sparkles, Ruler, Scissors, Baby, Clock } from "lucide-react";

const services = [
    {
        id: "dental-implants",
        title: "Dental Implants",
        description: "Replace missing teeth with natural-looking implants that are strong and last a lifetime.",
        category: "Replacement",
        icon: Gem
    },
    {
        id: "smile-makeovers",
        title: "Smile Makeovers",
        description: "A mix of whitening and veneers to give you a bright, beautiful, and confident smile.",
        category: "Cosmetic",
        icon: Sparkles
    },
    {
        id: "invisible-braces",
        title: "Invisible Braces",
        description: "Straighten your teeth comfortably with clear aligners that are almost impossible to see.",
        category: "Braces",
        icon: Ruler
    },
    {
        id: "oral-surgery",
        title: "Oral Surgery",
        description: "Safe and painless procedures for tooth removals and correcting jaw issues.",
        category: "Surgery",
        icon: Scissors
    },
    {
        id: "kids-dentistry",
        title: "Kids Dentistry",
        description: "Gentle and fun dental checkups to keep your child's teeth healthy and strong.",
        category: "Care",
        icon: Baby
    },
    {
        id: "emergency-care",
        title: "Emergency Care",
        description: "Fast relief for toothaches or dental accidents, available any time of the day or night.",
        category: "24/7 Support",
        icon: Clock
    }
];

const Services = () => {
    return (
        <section id="services" className="py-16 md:py-24 lg:py-32 bg-[#FAF9F6] relative overflow-hidden">
            {/* Minimalist Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:items-start mb-12 md:mb-20 lg:mb-24">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
                        >
                            Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-[family-name:var(--font-cormorant)] text-secondary italic leading-tight"
                        >
                            The Science of <br />
                            <span className="not-italic font-black text-primary tracking-tighter">Boutique SMILES.</span>
                        </motion.h2>
                    </div>
                    <div className="lg:w-1/2 lg:pt-12">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl"
                        >
                            We treat every procedure as a masterpiece, combining advanced clinical physics with artistic precision.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            id={service.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="group relative p-6 md:p-10 lg:p-12 border-slate-200 hover:bg-white transition-all duration-700
                                       md:border-r md:border-b
                                       [&:nth-child(3n)]:md:border-r-0
                                       [&:nth-last-child(-n+3)]:md:border-b-0
                                       odd:border-r-0 md:odd:border-r
                                       even:border-r-0 md:even:border-r lg:even:border-r"
                        >
                            {/* Animated Accent Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "40px" }}
                                className="h-0.5 bg-primary/20 mb-10 group-hover:w-full group-hover:bg-primary transition-all duration-700"
                            />

                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary transition-colors">
                                        {service.category}
                                    </span>
                                    <span className="text-xl font-[family-name:var(--font-cormorant)] italic text-slate-200 group-hover:text-primary/10 transition-colors">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] italic text-secondary group-hover:text-primary transition-all duration-500">
                                    {service.title}
                                </h3>

                                <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium transition-all group-hover:text-slate-700">
                                    {service.description}
                                </p>
                            </div>

                            {/* Service Icon */}
                            <div className="absolute top-8 right-8 text-primary/25 group-hover:text-primary/40 transition-all duration-500">
                                {React.createElement(service.icon, { size: 28, strokeWidth: 1.25 })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
