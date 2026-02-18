"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, Mail, Phone, MessageSquare } from "lucide-react";

const Appointment = () => {
    return (
        <section id="appointment" className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-dental-gradient rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative shadow-2xl">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
                        {/* Info */}
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Smile?</h2>
                            <p className="text-xl text-sky-50 mb-8 opacity-90">
                                Book your appointment today and take the first step towards a healthier, more beautiful smile.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Phone, text: "+91 651 2345678", label: "Emergency Line" },
                                    { icon: Mail, text: "info@dentalcare-ranchi.com", label: "Email Support" },
                                    { icon: Calendar, text: "Mon-Sat: 9am - 8pm", label: "Opening Hours" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-sky-100 uppercase tracking-widest font-bold opacity-75">{item.label}</p>
                                            <p className="text-lg font-bold">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 w-full max-w-xl bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl"
                        >
                            <h3 className="text-secondary text-2xl font-bold mb-8">Request Callback</h3>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-slate-500 text-sm font-bold flex items-center gap-2">
                                            <User size={14} /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-slate-500 text-sm font-bold flex items-center gap-2">
                                            <Phone size={14} /> Phone
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="(123) 456-7890"
                                            className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-slate-500 text-sm font-bold flex items-center gap-2">
                                        <Calendar size={14} /> Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-slate-500 text-sm font-bold flex items-center gap-2">
                                        <MessageSquare size={14} /> Message (Optional)
                                    </label>
                                    <textarea
                                        placeholder="How can we help?"
                                        rows={3}
                                        className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                    />
                                </div>

                                <button className="w-full bg-primary hover:bg-primary-dark text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 mt-4">
                                    Book Appointment Now
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
