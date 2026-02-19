"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const Process = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const steps = [
        {
            title: "First Meeting",
            desc: "Chat with our friendly doctors to talk about your dental needs.",
            phase: "Step 01"
        },
        {
            title: "Digital Checkup",
            desc: "We use advanced 3D scans to see exactly how to fix your dental issues.",
            phase: "Step 02"
        },
        {
            title: "Plan Design",
            desc: "Our doctors create a special treatment plan made just for your unique smile.",
            phase: "Step 03"
        },
        {
            title: "The Big Reveal",
            desc: "Get your treatment done with care and walk out with a confident, new smile.",
            phase: "Step 04"
        }
    ];

    return (
        <section ref={containerRef} className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="max-w-3xl mx-auto text-center mb-32">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
                    >
                        The Clinical Path
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-[family-name:var(--font-cormorant)] text-secondary italic leading-tight"
                    >
                        Your journey to a <br />
                        <span className="not-italic font-black text-primary tracking-tighter uppercase">Masterpiece.</span>
                    </motion.h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* The "Flow Chart" Animated Path Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 md:-translate-x-1/2">
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute inset-0 bg-primary/40"
                        />
                    </div>

                    <div className="space-y-12 md:space-y-32 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                {/* Content Block */}
                                <div className={`w-full md:w-1/2 pl-12 md:px-8 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.8, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className="space-y-3 md:space-y-4"
                                    >
                                        <span className="text-[10px] font-black tracking-[0.3em] text-primary uppercase">
                                            {step.phase}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-[family-name:var(--font-cormorant)] italic text-secondary group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed font-medium max-w-md md:mx-auto md:mx-0">
                                            {step.desc}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Flow Node (The Center Circle) */}
                                <div className="relative z-20 -ml-2 md:ml-0">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 12, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-primary flex items-center justify-center shadow-xl shadow-primary/20"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    </motion.div>

                                    {/* Animated Horizontal Connector */}
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "40px" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className={`hidden md:block absolute top-1/2 h-[1px] bg-primary/30 ${i % 2 === 0 ? 'right-full' : 'left-full'}`}
                                    />
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block w-1/2 px-12" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Flow Completion Accent */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 md:mt-40 flex flex-col items-center"
                >
                    <div className="px-6 py-2 rounded-full border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
                        Phase Complete
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
