"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    Heart,
    Shield,
    Users,
    Sparkles
} from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Patient-Centric Care",
        desc: "We believe in treating patients, not just teeth. Every treatment is tailored to your unique comfort levels and health goals."
    },
    {
        icon: Shield,
        title: "Standard of Excellence",
        desc: "Our clinic maintains international sterilization protocols and uses only the highest-grade biocompatible materials."
    },
    {
        icon: Sparkles,
        title: "Modern Technology",
        desc: "From digital X-rays to advanced laser dentistry, we invest in technology that makes your visits faster and painless."
    },
    {
        icon: Users,
        title: "Community Trust",
        desc: "Proudly serving the Ranchi community since 2017, building lifelong relationships based on honesty and clinical results."
    }
];

export default function ClientAboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Simple Premium Hero */}
            <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold tracking-[0.5em] uppercase text-xs mb-6 block"
                        >
                            Our Journey
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-7xl font-[family-name:var(--font-cormorant)] text-secondary italic mb-6 md:mb-8"
                        >
                            Crafting Healthy Smiles Since <span className="not-italic font-black text-primary">2017.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
                        >
                            Vandana Oral and Dental Care was founded with a singular vision: to bring world-class, painless dentistry to the heart of Ranchi.
                        </motion.p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
            </section>

            {/* Content Section 1: Philosophy */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg?auto=compress&cs=tinysrgb&w=1200"
                                    alt="Modern Dental Clinic in Ranchi"
                                    width={800}
                                    height={1000}
                                    className="w-full object-cover aspect-[4/5]"
                                />
                                <div className="absolute inset-0 bg-primary/10" />
                            </div>
                        </motion.div>

                        <div className="flex-1 space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary leading-tight"
                            >
                                More Than Just a <br className="hidden sm:block" />
                                <span className="text-primary italic font-medium">Dental Clinic.</span>
                            </motion.h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                At Vandana Oral and Dental Care, we believe that dental visits should be something you look forward to. We have curated an environment that feels more like a boutique lounge than a traditional medical office in Ranchi.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Led by Dr. Vandana Agarwal, our team combines 7+ years of clinical excellence with a passion for aesthetic perfection. We specialize in minimally invasive techniques that preserve your natural tooth structure while achieving stunning results.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                                <div>
                                    <p className="text-4xl font-black text-primary mb-1">2k+</p>
                                    <p className="text-sm font-bold text-secondary uppercase tracking-widest">Happy Patients</p>
                                </div>
                                <div>
                                    <p className="text-4xl font-black text-primary mb-1">07+</p>
                                    <p className="text-sm font-bold text-secondary uppercase tracking-widest">Years Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 md:py-32 bg-secondary text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]" />
                </div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mb-12 md:mb-24">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block"
                        >
                            Our Foundation
                        </motion.span>
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] italic leading-tight">
                            The Principles That <br className="hidden sm:block" /> Guide Every <span className="text-primary not-italic font-black">Smile.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="group relative flex flex-col md:flex-row gap-8 items-start"
                            >
                                <div className="hidden md:block absolute -left-12 top-0 text-7xl font-black text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                                    0{i + 1}
                                </div>

                                <div className="w-16 h-16 shrink-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-2xl">
                                    <value.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                </div>

                                <div className="space-y-4 pt-2">
                                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                                        {value.title}
                                    </h3>
                                    <div className="h-px w-12 bg-primary/30 group-hover:w-full transition-all duration-700" />
                                    <p className="text-slate-400 text-lg leading-relaxed max-w-md group-hover:text-slate-200 transition-colors">
                                        {value.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
