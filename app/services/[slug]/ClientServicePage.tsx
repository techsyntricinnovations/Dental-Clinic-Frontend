"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    ArrowLeft,
    Calendar,
    Clock,
    ShieldCheck,
    Stethoscope
} from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";
import { Service } from "@/lib/services";
import Image from "next/image";

export default function ClientServicePage({ service }: { service: Service }) {
    const { openModal } = useBooking();

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="relative h-[90vh] min-h-[700px] flex items-center pt-20 overflow-hidden bg-slate-200">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className={`object-cover ${service.imagePosition || 'object-center'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-sky-950/90 via-sky-950/40 to-transparent" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <Link
                            href="/#services"
                            className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-6 hover:gap-3 transition-all"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Services
                        </Link>
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] text-white italic mb-4">
                            {service.title}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-8">
                            {service.subtitle}
                        </p>
                        <button
                            onClick={openModal}
                            className="bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl flex items-center gap-3 active:scale-95"
                        >
                            <Calendar className="w-5 h-5" />
                            Book Free Consultation
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-6">Overview</h2>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <div className="prose prose-slate prose-lg max-w-none text-slate-600 mb-12">
                                    <p>{service.longDescription}</p>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-extrabold text-secondary mb-8">The Treatment Process</h2>
                                <div className="space-y-8 mb-16 relative">
                                    {/* Animated Vertical Line Background */}
                                    <div className="absolute top-0 left-5 bottom-6 w-0.5 bg-slate-100 hidden md:block" />

                                    {service.process.map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5, delay: i * 0.15 }}
                                            className="group flex gap-6 relative p-4 md:p-6 rounded-3xl transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5"
                                        >
                                            <div className="relative z-10 shrink-0">
                                                <motion.div
                                                    initial={{ scale: 0.8 }}
                                                    whileInView={{ scale: 1 }}
                                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                                    transition={{ type: "spring", stiffness: 300 }}
                                                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black shadow-lg shadow-primary/20 group-hover:bg-secondary group-hover:shadow-secondary/20 transition-all duration-300"
                                                >
                                                    {i + 1}
                                                </motion.div>

                                                {/* Animated connecting line for each segment */}
                                                {i !== service.process.length - 1 && (
                                                    <motion.div
                                                        initial={{ height: 0 }}
                                                        whileInView={{ height: "100%" }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.8, delay: (i * 0.15) + 0.3 }}
                                                        className="absolute top-12 left-5 w-0.5 bg-primary/30 hidden md:block origin-top"
                                                    />
                                                )}
                                            </div>

                                            <div className="space-y-1">
                                                <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                                <p className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                                                    {step.desc}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="sticky top-32 space-y-8"
                            >
                                {/* Benefits Card */}
                                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                                    <h3 className="text-2xl font-bold text-secondary mb-6">Key Benefits</h3>
                                    <ul className="space-y-4">
                                        {service.benefits.map((benefit: string, i: number) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <span className="text-slate-600 font-medium">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Quick Info Card */}
                                <div className="bg-sky-950 p-8 rounded-[2rem] text-white shadow-xl">
                                    <h3 className="text-2xl font-bold mb-6">Quick Info</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                                <Clock className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs uppercase font-bold tracking-widest">Duration</p>
                                                <p className="font-semibold">45 - 90 Minutes</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                                <ShieldCheck className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs uppercase font-bold tracking-widest">Safe & Secure</p>
                                                <p className="font-semibold">Boutique Standard</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                                <Stethoscope className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs uppercase font-bold tracking-widest">Expert Care</p>
                                                <p className="font-semibold">Dr. Vandana Agarwal</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={openModal}
                                        className="w-full bg-primary hover:bg-white hover:text-primary text-white font-bold py-4 rounded-2xl transition-all mt-8 active:scale-95"
                                    >
                                        Inquire Now
                                    </button>
                                </div>
                            </motion.div>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}
