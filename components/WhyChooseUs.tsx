"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Medal, Sparkles } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Certified Safety",
        description: "We adhere to the highest international standards of sterilization and hygiene protocols for your safety."
    },
    {
        icon: Medal,
        title: "Expert Specialists",
        description: "Our team consists of highly qualified dental specialists with over 15+ years of clinical excellence."
    },
    {
        icon: Sparkles,
        title: "Advanced Technology",
        description: "Equipped with the latest digital X-rays, intraoral cameras, and laser dentistry for precise treatments."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50/50 via-white to-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:60px_60px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header Section - Asymmetric Layout */}
                <div className="flex flex-col lg:flex-row gap-16 lg:items-start mb-20">
                    <div className="lg:w-2/5">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
                        >
                            Our Difference
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] text-secondary italic leading-tight mb-6"
                        >
                            Why Patients <br />
                            <span className="not-italic font-black text-primary tracking-tighter">Choose Us</span>
                        </motion.h2>
                    </div>
                    <div className="lg:w-3/5 lg:pt-12">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
                        >
                            We combine clinical expertise with a compassionate approach to deliver confident, healthy smiles.
                        </motion.p>
                    </div>
                </div>

                {/* Features Grid - Horizontal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="group relative"
                        >
                            <div className="bg-white p-10 rounded-none border border-slate-200 hover:border-primary/30 transition-all duration-500 hover:shadow-lg h-full flex flex-col">
                                {/* Icon Container */}
                                <div className="mb-8 relative">
                                    <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary/5 group-hover:bg-primary/10 transition-all duration-500 rounded-sm" />
                                    <div className="relative p-4 bg-primary/5 group-hover:bg-primary transition-all duration-500 rounded-sm w-fit">
                                        {React.createElement(feature.icon, { 
                                            size: 32, 
                                            strokeWidth: 1.5,
                                            className: "text-primary group-hover:text-white transition-colors duration-500"
                                        })}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] italic text-secondary group-hover:text-primary transition-colors duration-500 mb-4">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 text-base leading-relaxed font-medium group-hover:text-slate-700 transition-colors duration-500">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Accent Line */}
                                <div className="mt-8 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
