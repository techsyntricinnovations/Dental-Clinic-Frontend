"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Shield } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <Image
                                src="/assetes/c2.webp"
                                alt="Modern Dental Clinic"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10" />
                        </div>

                        {/* Experience Card */}
                        <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-3xl shadow-2xl hidden md:block">
                            <p className="text-4xl font-extrabold text-white mb-1">15+</p>
                            <p className="text-sky-400 font-bold tracking-wider uppercase text-xs">Years of Excellence</p>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                        >
                            About Our Clinic
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight"
                        >
                            The Art of Dentistry, <br />
                            <span className="text-primary italic font-medium">Redefined.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-slate-600 mb-8 text-lg leading-relaxed"
                        >
                            Located in the heart of Ranchi, our clinic is built on the philosophy that every smile is a blank canvas. We merge traditional care with futuristic dental technology to provide a painless, luxurious experience.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            {[
                                { icon: Heart, title: "Patient First", text: "Compassionate care tailored to your comfort and health." },
                                { icon: Shield, title: "Safe & Sterile", text: "Highest international standards of hygiene and sterilization." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex gap-4"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500 leading-snug">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-secondary text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200"
                        >
                            Explore Our Story
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
