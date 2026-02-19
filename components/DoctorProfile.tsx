"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, Star, BookOpen } from "lucide-react";

const DoctorProfile = () => {
    return (
        <section id="doctor" className="py-12 md:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                    {/* Doctor Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative">
                            <Image
                                src="/assetes/Dr.webp"
                                alt="Dr. Vandana Agarwal"
                                width={400}
                                height={500}
                                className="w-full h-full object-cover transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-primary/5" />
                        </div>

                        {/* Name Card */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-10 py-6 rounded-3xl shadow-xl w-[90%] text-center">
                            <h3 className="text-2xl font-extrabold text-secondary mb-1">Dr. Vandana Agarwal</h3>
                            <p className="text-primary font-bold text-sm tracking-widest uppercase">Senior Implantologist & Aesthetic Surgeon</p>
                        </div>
                    </motion.div>

                    {/* Dr Info */}
                    <div className="flex-1">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
                        >
                            Meet Your Architect of Smiles
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight"
                        >
                            Expertise Built on <br />
                            <span className="text-primary italic font-medium">Decades of Passion.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-slate-600 mb-10 text-lg leading-relaxed"
                        >
                            Dr. Vandana Agarwal is a globally recognized dentist specializing in full-mouth rehabilitation and veneers. She believes that dentistry is a blend of science and fine arts.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { icon: GraduationCap, title: "Education", text: "MDS - Implantology, Harvard School of Dental Medicine." },
                                { icon: Award, title: "Certifications", text: "Diplomate, International Congress of Oral Implantologists." },
                                { icon: Star, title: "Experience", text: "Successfully completed 5000+ aesthetic smile designs." },
                                { icon: BookOpen, title: "Research", text: "Published 15+ papers on minimally invasive dentistry." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
                                        <item.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary mb-1">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorProfile;
