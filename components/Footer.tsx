"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin
} from "lucide-react";

const Footer = () => {
    const quickLinks = ["Home", "Services", "About Us", "Our Team", "Pricing", "FAQ"];

    return (
        <footer className="bg-sky-950 text-slate-400 pt-20 pb-10 overflow-hidden relative border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/assetes/logo1.png"
                                alt="Vandana Oral and Dental Care"
                                width={240}
                                height={80}
                                className="h-16 md:h-20 w-auto object-contain"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] font-bold italic tracking-tight text-white leading-none">
                                    Vandana Oral
                                </span>
                                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary leading-none mt-1">
                                    & Dental Care
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-400 leading-relaxed md:max-w-xs">
                            Providing exceptional dental care since 2017. We pride ourselves on creating a comfortable environment for all our patients.
                        </p>
                        <div className="flex items-center gap-3">
                            <a href="#" className="group w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/30">
                                <Facebook size={18} className="text-slate-300 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="group w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30">
                                <Instagram size={18} className="text-slate-300 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="group w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-black transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/30">
                                <Twitter size={18} className="text-slate-300 group-hover:text-white transition-colors" />
                            </a>
                            <a href="#" className="group w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-[#0A66C2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/30">
                                <Linkedin size={18} className="text-slate-300 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            {quickLinks.map((link, i) => (
                                <motion.li
                                    key={link}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                                >
                                    <Link
                                        href={link === "About Us" ? "/about" : link === "Blogs" ? "/blogs" : link === "Home" ? "/" : link === "Contact" ? "/contact" : `/#${link.toLowerCase().replace(" ", "")}`}
                                        className="text-slate-400 hover:text-primary transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { name: "Root Canal (RCT)", slug: "rct" },
                                { name: "Dental Implants", slug: "dental-implants" },
                                { name: "Crowns & Bridges", slug: "crowns-bridges" },
                                { name: "Gum Therapy", slug: "gum-therapy" },
                                { name: "Orthodontics", slug: "orthodontics" },
                                { name: "Teeth Whitening", slug: "teeth-whitening" }
                            ].map((service, i) => (
                                <motion.li
                                    key={service.slug}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.05) }}
                                >
                                    <Link href={`/services/${service.slug}`} className="text-slate-400 hover:text-primary transition-colors">
                                        {service.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="flex flex-col gap-6">
                            {[
                                { icon: MapPin, text: "Kumhar Toli Rd, Kumhartoli\nRanchi, Jharkhand 834001", delay: 0.4 },
                                { icon: Phone, text: "+91 98355 00551", delay: 0.5 },
                                { icon: Mail, text: "drvandanaagarwal29@gmail.com", delay: 0.6 }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: item.delay }}
                                    className={`flex ${item.icon === MapPin ? "items-start" : "items-center"} gap-3`}
                                >
                                    <item.icon className="text-primary w-5 h-5 shrink-0 mt-1" />
                                    <span className={item.icon === MapPin ? "whitespace-pre-line" : ""}>{item.text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                <motion.hr
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="border-white/10 mb-10"
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400"
                >
                    <p>© {new Date().getFullYear()} Vandana Oral and Dental Care. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center md:text-right mt-6 text-sm md:text-base text-slate-400"
                >
                    Powered by{" "}
                    <a
                        href="https://www.techsyntricinnovations.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-sky-400 transition-colors font-semibold"
                    >
                        Techsyntric Innovations
                    </a>
                </motion.div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        </footer>
    );
};

export default Footer;
