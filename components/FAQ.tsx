"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const questions = [
        { q: "Is dental implant surgery painful?", a: "Not at all. We use precision anesthesia and laser technology to ensure you feel nothing during the procedure. Post-op discomfort is minimal and managed with mild meds." },
        { q: "How long do porcelain veneers last?", a: "With proper care and regular checkups, high-quality porcelain veneers can last between 10 to 15 years, and sometimes even longer." },
        { q: "Do you offer emergency dental services?", a: "Yes, we prioritize dental emergencies. If you have severe pain or a broken tooth, contact us immediately for a same-day appointment." },
        { q: "Are professional whitening treatments safe?", a: "Absolutely. Our in-office whitening uses medical-grade gels that are safe for enamel and effectively remove deep stains without sensitivity." },
        { q: "What should I expect at my first visit?", a: "Your first visit includes a comprehensive 3D scan, a physical exam by Dr. Sharma, and a detailed discussion about your oral health goals and treatment options." }
    ];

    return (
        <section className="py-12 md:py-20 lg:py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Branding */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Common Doubts</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                                Answers to Your <br />
                                <span className="text-primary italic font-medium">Concerns.</span>
                            </h2>
                            <p className="text-slate-500 mb-8 leading-relaxed">
                                Can&apos;t find what you are looking for? Reach out to our 24/7 concierge desk for immediate help.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-3xl flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0">
                                    <HelpCircle className="w-6 h-6" />
                                </div>
                                <p className="text-sm font-bold text-secondary">Join 5000+ satisfied patients who trusted us.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {questions.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`border rounded-2xl transition-all ${activeIndex === i ? "border-primary bg-slate-50/50 shadow-lg shadow-primary/5" : "border-slate-100 bg-white"}`}
                                >
                                    <button
                                        onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                        className="w-full text-left p-6 flex items-center justify-between gap-4"
                                    >
                                        <span className={`font-bold text-lg ${activeIndex === i ? "text-primary" : "text-secondary"}`}>{item.q}</span>
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === i ? "bg-primary text-white" : "bg-slate-100 text-slate-400"}`}>
                                            {activeIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-slate-100 mt-0 mx-6 mb-6">
                                                    {item.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
