import React from "react";
import Link from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Stethoscope
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary p-2 rounded-xl">
                                <Stethoscope className="text-white w-6 h-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">
                                Dental<span className="text-primary">Care</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed md:max-w-xs">
                            Providing exceptional dental care since 2010. We pride ourselves on creating a comfortable environment for all our patients.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-700"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            {["Home", "Services", "About Us", "Our Team", "Pricing", "FAQ"].map((link) => (
                                <li key={link}>
                                    <Link href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Services</h4>
                        <ul className="flex flex-col gap-4">
                            {["Teeth Whitening", "Oral Surgery", "Dental Implants", "Orthodontics", "Kids Dentistry", "Root Canal"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="hover:text-primary transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                        <ul className="flex flex-col gap-6">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary w-5 h-5 shrink-0 mt-1" />
                                <span>Beside Main Road, near Lalpur Chowk<br />Ranchi, Jharkhand 834001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary w-5 h-5 shrink-0" />
                                <span>+91 651 2345678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary w-5 h-5 shrink-0" />
                                <span>info@dentalcare-ranchi.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-slate-800 mb-10" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} DentalCare. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Decorative Blob */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
        </footer>
    );
};

export default Footer;
