"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactItems = [
    { icon: MapPin, title: "Our Location", content: ["Kumhar Toli Rd, Kumhartoli,", "Ranchi, Jharkhand 834001"], delay: 0.1 },
    { icon: Phone, title: "Phone Number", content: ["+91 98355 00551"], delay: 0.2 },
    { icon: Mail, title: "Email Address", content: ["drvandanaagarwal29@gmail.com"], delay: 0.3 },
    { icon: Clock, title: "Opening Hours", content: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: Closed"], delay: 0.4 }
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

                            <ContactForm />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Separate client component to handle form state
function ContactForm() {
    const [name, setName] = React.useState("");
    const [subject, setSubject] = React.useState("General Inquiry");
    const [message, setMessage] = React.useState("");
    const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/send-whatsapp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, subject, message }),
            });

            if (res.ok) {
                setStatus("success");
                setName("");
                setSubject("General Inquiry");
                setMessage("");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80">
                        Name
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium placeholder:text-slate-400"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80">
                        Subject
                    </label>
                    <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium cursor-pointer appearance-none"
                    >
                        <option>General Inquiry</option>
                        <option>Treatment Cost</option>
                        <option>Insurance Question</option>
                        <option>Book Appointment</option>
                        <option>Emergency</option>
                    </select>
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80">
                    Your Message
                </label>
                <textarea
                    rows={5}
                    required
                    placeholder="Write your concern here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium placeholder:text-slate-400 resize-none"
                />
            </div>
            {status === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 text-sm font-medium rounded-sm">
                    ✅ Your message has been sent successfully!
                </div>
            )}
            {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-sm">
                    ❌ Failed to send message. Please try again or call us directly.
                </div>
            )}
            <div className="pt-4">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-secondary hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed text-white py-5 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all duration-500 group"
                >
                    {status === "loading" ? (
                        <>
                            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            <span>Send Message</span>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}

export default ContactSection;
