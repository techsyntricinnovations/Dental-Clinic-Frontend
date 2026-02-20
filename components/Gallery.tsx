"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, Camera } from "lucide-react";

const Gallery = () => {
    const images = [
        { url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop", title: "Modern Op-Theatre", tag: "Facility" },
        { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", title: "Comfort Lounge", tag: "Environment" },
        { url: "https://images.unsplash.com/photo-1445522932250-35294334954a?q=80&w=2070&auto=format&fit=crop", title: "Advanced X-Ray", tag: "Technology" },
        { url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974&auto=format&fit=crop", title: "Smile Design Lab", tag: "Studio" },
        { url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop", title: "Patient Suite", tag: "Luxury" },
        { url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop", title: "Sterilization Bay", tag: "Safety" }
    ];

    return (
        <section id="gallery" className="py-12 md:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6"
                    >
                        <Camera className="w-4 h-4" />
                        <span>Visual Tour</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-secondary mb-6"
                    >
                        Where Perfection <br />
                        <span className="text-primary italic font-medium">Becomes Reality.</span>
                    </motion.h2>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-[2rem] cursor-pointer"
                        >
                            <Image
                                src={img.url}
                                alt={img.title}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{img.tag}</span>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-bold text-white uppercase">{img.title}</h3>
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                        <Maximize2 className="text-white w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white border border-slate-200 text-secondary px-10 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm"
                    >
                        View Full Experience
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Gallery;
