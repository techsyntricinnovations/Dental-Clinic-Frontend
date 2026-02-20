"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import { useBooking } from "@/contexts/BookingContext";

const serviceLinks = [
    { name: "Root Canal (RCT)", href: "/services/rct" },
    { name: "Dental Implants", href: "/services/dental-implants" },
    { name: "Crowns & Bridges", href: "/services/crowns-bridges" },
    { name: "Gum Therapy", href: "/services/gum-therapy" },
    { name: "Orthodontics", href: "/services/orthodontics" },
    { name: "Teeth Whitening", href: "/services/teeth-whitening" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const { openModal } = useBooking();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showSolidNavbar = !isHomePage || scrolled;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Blogs", href: "/blogs" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showSolidNavbar
                ? "bg-sky-950/95 backdrop-blur-lg border-b border-white/5 shadow-xl shadow-sky-950/50 py-3"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/assetes/logo1.png"
                            alt="Vandana Oral and Dental Care"
                            width={200}
                            height={62}
                            className="h-12 md:h-16 w-auto object-contain group-hover:opacity-90 transition-opacity"
                            priority
                        />
                        <div className="flex flex-col">
                            <span className="text-lg sm:text-2xl font-[family-name:var(--font-cormorant)] font-bold italic tracking-tight text-white leading-none">
                                Vandana Oral
                            </span>
                            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] font-bold text-primary leading-none mt-1">
                                & Dental Care
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        <Link
                            href="/"
                            className="relative text-sm font-semibold transition-colors duration-300 group py-1 text-white/90 hover:text-white"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>

                        {/* Services Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <Link
                                href="/#services"
                                className="relative flex items-center gap-1 text-sm font-semibold transition-colors duration-300 py-1 text-white/90 hover:text-white"
                            >
                                Services
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 pt-2 min-w-[200px]"
                                    >
                                        <div className="bg-sky-950/98 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl py-2 overflow-hidden">
                                            {serviceLinks.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    className="block px-5 py-2.5 text-sm font-medium text-white/90 hover:text-white hover:bg-primary/20 transition-colors"
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {navLinks.slice(1).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-semibold transition-colors duration-300 group py-1 text-white/90 hover:text-white"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="tel:+919835500551"
                            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors"
                        >
                            <Phone className="w-4 h-4 text-primary" />
                            <span>+91 98355 00551</span>
                        </a>
                        <button
                            onClick={openModal}
                            className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 active:scale-95"
                        >
                            <Calendar className="w-4 h-4" />
                            Book Appointment
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-200 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            <Link
                                href="/"
                                className="text-lg font-medium text-slate-700"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <div>
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="flex items-center justify-between w-full text-lg font-medium text-slate-700"
                                >
                                    Services
                                    <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                                </button>
                                <AnimatePresence>
                                    {servicesOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden pl-4 mt-2 space-y-2"
                                        >
                                            {serviceLinks.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    className="block text-base text-slate-600"
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setServicesOpen(false);
                                                    }}
                                                >
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {navLinks.slice(1).map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-700"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-slate-200" />
                            <div className="flex flex-col gap-4">
                                <a
                                    href="tel:+919835500551"
                                    className="flex items-center gap-3 text-lg font-semibold text-secondary"
                                >
                                    <Phone className="w-5 h-5 text-primary" />
                                    <span>+91 98355 00551</span>
                                </a>
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        openModal();
                                    }}
                                    className="bg-primary text-white p-4 rounded-2xl text-center font-bold shadow-lg w-full"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
