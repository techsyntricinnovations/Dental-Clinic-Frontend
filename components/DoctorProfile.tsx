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
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 md:px-10 py-5 md:py-6 rounded-3xl shadow-xl w-[90%] md:w-auto text-center border border-slate-100">
                            <h3 className="text-xl md:text-2xl font-extrabold text-secondary mb-1">Dr. Vandana Agarwal</h3>
                            <p className="text-primary font-bold text-[10px] md:text-sm tracking-widest uppercase">Senior Implantologist & Aesthetic Surgeon</p>
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
                            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight"
                        >
                            Expertise Built on <br className="hidden sm:block" />
                            <span className="text-primary italic font-medium">7 Years of Passion.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-slate-600 mb-10 text-lg leading-relaxed"
                        >
                            Dr. Vandana Agarwal is a highly skilled dental surgeon specializing in aesthetic dentistry and oral care. With a focus on patient comfort and advanced treatments, she believes that dentistry is a blend of science and fine arts.
                        </motion.p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
                                    <GraduationCap className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary mb-1">Education</h4>
                                    <p className="text-sm text-slate-500">BDS from Kalinga Institute of Dental Sciences, KIIT University, Bhubaneswar.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
                                    <Award className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary mb-1">Specialization</h4>
                                    <p className="text-sm text-slate-500">FAAD (Fellowship in Advance Aesthetic Dentistry) from ILAMED, Delhi.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
                                    <Star className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary mb-1">Experience</h4>
                                    <p className="text-sm text-slate-500">7+ years of clinical excellence in advanced oral healthcare.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center shrink-0">
                                    <BookOpen className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary mb-1">Approach</h4>
                                    <p className="text-sm text-slate-500">Dedicated to minimally invasive and patient-centric dentistry.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorProfile;
