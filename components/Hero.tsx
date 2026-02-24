"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useBooking } from "@/contexts/BookingContext";

const Hero = () => {
    const { openModal } = useBooking();

    return (
        <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/assetes/Dvideo2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Premium Overlays */}
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20 z-[1]" />

            {/* Background Shapes for extra depth */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-3xl opacity-30 pointer-events-none z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">


                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                        Elevating the <br className="hidden sm:block" />
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-sky-400 italic font-medium inline-block"
                        >
                            Art
                        </motion.span> of Your Smile
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base md:text-lg text-blue-50/80 mb-8 max-w-2xl opacity-90 leading-relaxed font-light"
                    >
                        Where clinical precision meets artisan care. Discover Ranchi&apos;s premier dental destination for advanced implants and aesthetic transformations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center gap-5"
                    >
                        <button
                            onClick={openModal}
                            className="group bg-white text-secondary px-6 md:px-10 py-3 md:py-4 rounded-full font-bold flex items-center gap-2 text-sm md:text-base transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10 hover:shadow-white/20 w-full sm:w-auto justify-center"
                        >
                            Book Consultation
                            <div className="bg-primary p-1 rounded-full group-hover:rotate-45 transition-transform">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </div>
                        </button>
                        <Link
                            href="/#process"
                            className="bg-white/5 backdrop-blur-md border border-white/30 text-white px-6 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-white/10 transition-all active:scale-95 w-full sm:w-auto text-center flex items-center justify-center"
                        >
                            Our Method
                        </Link>
                    </motion.div>


                </div>
            </div>
        </section>
    );
};

export default Hero;
