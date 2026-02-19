"use client";

import { motion } from "framer-motion";

const ContactPageHero = () => {
    return (
        <section className="pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12 lg:pb-16 bg-sky-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-900/50 to-sky-950" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-end lg:justify-between">
                    <div className="lg:w-2/3">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-sky-400 font-bold tracking-[0.5em] uppercase text-[10px] mb-3 block"
                        >
                            Reach Out
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-cormorant)] text-white italic leading-tight"
                        >
                            We&apos;re Here <br />
                            <span className="not-italic font-black text-sky-400 tracking-tighter">To Listen.</span>
                        </motion.h1>
                    </div>

                    <div className="lg:w-1/3">
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-sky-100/90 text-base md:text-lg font-medium leading-relaxed"
                        >
                            Questions about your treatment? Ready to book? Our team is just a message away.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPageHero;
