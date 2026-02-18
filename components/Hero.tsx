"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Shield, Award, Users } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-28 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 w-[400px] h-[400px] bg-sky-400/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
                        >
                            <Shield className="w-4 h-4" />
                            <span>Certified Dental Professionals</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-secondary dark:text-white leading-[1.1] mb-6"
                        >
                            Experience a <br />
                            <span className="text-primary italic">Brighter</span> Smile
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            We provide world-class dental care with a gentle touch. Our modern clinic is equipped with the latest technology to ensure your comfort and satisfaction.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                                Book Your Visit <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-secondary dark:text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                                View Services
                            </button>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8"
                        >
                            <div className="flex items-center gap-2">
                                <Users className="text-primary w-5 h-5" />
                                <span className="text-secondary dark:text-white font-semibold">10k+ Happy Patients</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="text-primary w-5 h-5" />
                                <span className="text-secondary dark:text-white font-semibold">5 Star Reviews</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Visual Component */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full max-w-2xl"
                    >
                        <div className="relative group">
                            {/* Glass Card */}
                            <div className="absolute -top-10 -left-10 glass p-6 rounded-3xl shadow-xl z-20 animate-bounce-slow">
                                <div className="flex items-center gap-3">
                                    <div className="bg-green-500 p-2 rounded-full">
                                        <CheckCircle2 className="text-white w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Next Appointment</p>
                                        <p className="text-lg font-bold text-secondary dark:text-white line-clamp-1">Tomorrow, 10:00 AM</p>
                                    </div>
                                </div>
                            </div>

                            {/* Main Image Placeholder / Styled Box */}
                            <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-primary to-primary-dark overflow-hidden relative shadow-2xl">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-xl z-20">
                                <div className="flex -space-x-4 mb-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Satisfied dental patient ${i}`} />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-800 bg-primary flex items-center justify-center text-white text-xs font-bold leading-none">
                                        +1k
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-secondary dark:text-white">Trusted by 1000+ local patients</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
