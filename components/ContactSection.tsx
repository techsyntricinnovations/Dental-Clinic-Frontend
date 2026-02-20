"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const contactItems = [
    { icon: MapPin, title: "Our Location", content: ["Beside Main Road, near Lalpur Chowk,", "Ranchi, Jharkhand 834001"], delay: 0.1 },
    { icon: Phone, title: "Phone Number", content: ["+91 98355 00551", "+91 651 2345678"], delay: 0.2 },
    { icon: Mail, title: "Email Address", content: ["drvandanaagarwal29@gmail.com"], delay: 0.3 },
    { icon: Clock, title: "Opening Hours", content: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sunday: Closed"], delay: 0.4 }
];

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 md:py-24 lg:py-32 bg-[#FAF9F6] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:50px_50px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-12 md:mb-16 lg:mb-20">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-[family-name:var(--font-cormorant)] text-secondary italic leading-tight mb-6"
                    >
                        Visit Ranchi&apos;s Most <br className="hidden sm:block" />
                        <span className="not-italic font-black text-primary tracking-tighter">Advanced Clinic.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed"
                    >
                        We&apos;d love to hear from you. Reach out for appointments, queries, or simply to say hello.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    {/* Contact Details */}
                    <div className="lg:w-2/5 space-y-6 md:space-y-8">
                        {contactItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: item.delay }}
                                className="group flex items-start gap-5"
                            >
                                <div className="p-3 bg-primary/5 group-hover:bg-primary transition-all duration-500 rounded-sm shrink-0">
                                    <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h4 className="font-[family-name:var(--font-cormorant)] text-xl italic text-secondary mb-2 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h4>
                                    {item.content.map((line, idx) => (
                                        <p key={idx} className={`text-slate-500 text-sm leading-relaxed font-medium ${idx === item.content.length - 1 && item.title === "Opening Hours" ? "text-primary font-semibold" : ""}`}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-3/5"
                    >
                        <div className="bg-white border border-slate-200 p-6 md:p-10 lg:p-14 rounded-none shadow-sm">
                            <div className="mb-10">
                                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] italic text-secondary mb-3">
                                    Message Us Directly
                                </h3>
                                <p className="text-slate-500 text-base font-medium leading-relaxed">
                                    We usually respond within 2 hours during business hours.
                                </p>
                            </div>

                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your full name"
                                            className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80">
                                            Subject
                                        </label>
                                        <select className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium cursor-pointer appearance-none">
                                            <option>General Inquiry</option>
                                            <option>Treatment Cost</option>
                                            <option>Insurance Question</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80">
                                        Your Message
                                    </label>
                                    <textarea
                                        rows={5}
                                        placeholder="Write your concern here..."
                                        className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium placeholder:text-slate-400 resize-none"
                                    />
                                </div>
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-secondary text-white py-5 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-slate-800 transition-all duration-500 group"
                                    >
                                        <span>Send Inquiry</span>
                                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
