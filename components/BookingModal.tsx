"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, Calendar, MessageSquare, Clock } from "lucide-react";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Booking submitted:", formData);
        // You can add API call here
        onClose();
        // Reset form
        setFormData({
            name: "",
            phone: "",
            email: "",
            date: "",
            time: "",
            message: ""
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 md:px-8 py-6 flex items-center justify-between rounded-t-2xl">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] italic text-secondary">
                                        Book Your Appointment
                                    </h2>
                                    <p className="text-slate-500 text-sm mt-1">Fill in your details and we&apos;ll get back to you</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-600" />
                                </button>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80 flex items-center gap-2">
                                            <User size={12} />
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium placeholder:text-slate-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80 flex items-center gap-2">
                                            <Phone size={12} />
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="+91 9876543210"
                                            className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80 flex items-center gap-2">
                                        <Mail size={12} />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80 flex items-center gap-2">
                                            <Calendar size={12} />
                                            Preferred Date
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            required
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80 flex items-center gap-2">
                                            <Clock size={12} />
                                            Preferred Time
                                        </label>
                                        <select
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium cursor-pointer appearance-none"
                                        >
                                            <option value="">Select time</option>
                                            <option value="09:00">9:00 AM</option>
                                            <option value="10:00">10:00 AM</option>
                                            <option value="11:00">11:00 AM</option>
                                            <option value="12:00">12:00 PM</option>
                                            <option value="14:00">2:00 PM</option>
                                            <option value="15:00">3:00 PM</option>
                                            <option value="16:00">4:00 PM</option>
                                            <option value="17:00">5:00 PM</option>
                                            <option value="18:00">6:00 PM</option>
                                            <option value="19:00">7:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/80 flex items-center gap-2">
                                        <MessageSquare size={12} />
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="Tell us about your dental concern..."
                                        className="w-full bg-slate-50/50 p-4 rounded-none border-0 border-b-2 border-slate-200 focus:border-primary outline-none transition-colors text-secondary font-medium placeholder:text-slate-400 resize-none"
                                    />
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full bg-secondary text-white py-5 font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-slate-800 transition-all duration-500"
                                    >
                                        <span>Confirm Appointment</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BookingModal;
