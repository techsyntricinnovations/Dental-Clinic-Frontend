"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ChevronLeft, Share2, Printer, Sparkles } from "lucide-react";
import { getBlogBySlug } from "@/lib/strapi";

interface StrapiImage {
    url?: string;
    data?: {
        attributes?: {
            url?: string;
        };
    };
}

interface BlogAttributes {
    id: number;
    title: string;
    content: string | object; // Strapi 5 Blocks (string or block array)
    publishedAt: string;
    author?: string;
    image?: StrapiImage;
}

import Image from "next/image";

export default function BlogDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [blog, setBlog] = useState<BlogAttributes | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlog() {
            const data = await getBlogBySlug(slug);
            if (data) {
                setBlog(data);
            } else {
                // Mock data for demo if slug matches our mock slugs
                const mocks: Record<string, BlogAttributes> = {
                    "regular-checkups": {
                        id: 1,
                        title: "The Importance of Regular Dental Checkups",
                        content: "Proper dental care is essential for maintaining overall health. Regular checkups allow dentists to detect problems early when they are easier to treat. During a visit, your dentist will clean your teeth, check for cavities, and examine your gums for signs of disease. Skipping these appointments can lead to serious complications like gum disease, tooth loss, and even systemic health issues. We recommend visiting Dr. Vandana's clinic at least twice a year to keep your smile in peak condition.",
                        publishedAt: "2024-03-20T10:00:00Z",
                        author: "Dr. Vandana Agarwal",
                        image: { url: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg" }
                    },
                    "invisalign-guide": {
                        id: 2,
                        title: "Revolutionizing Smiles with Invisalign",
                        content: "Invisalign has transformed the world of orthodontics. Unlike traditional metal braces, Invisalign uses a series of custom-made, clear plastic aligners to gradually shift your teeth into the desired position. They are virtually invisible, removable for eating and cleaning, and generally more comfortable than wires and brackets. At Vandana Oral and Dental Care, we specialize in high-precision Invisalign treatments that fit seamlessly into your lifestyle while delivering professional-grade results.",
                        publishedAt: "2024-03-15T10:00:00Z",
                        author: "Dr. Vandana Agarwal",
                        image: { url: "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg" }
                    }
                };
                setBlog(mocks[slug] || mocks["regular-checkups"]);
            }
            setLoading(false);
        }
        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!blog) return null;

    const { title, content, publishedAt, author, image } = blog;
    const date = new Date(publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    // In Strapi 5, the image might be direct or still nested depending on the provider
    const imageUrl = image?.url || image?.data?.attributes?.url || "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200";
    const finalImageUrl = imageUrl.startsWith('http') ? imageUrl : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;

    // Helper to render content (Strapi 5 uses blocks by default)
    const renderContent = () => {
        if (typeof content === 'string') {
            return <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br/>') }} />;
        }
        // If content is Strapi Blocks, we'd normally use a blocks renderer
        return <div className="space-y-4">{typeof content === 'object' ? "Article content loaded from CMS..." : content}</div>;
    };

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* Article Hero */}
            <header className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
                        >
                            <Link href="/blogs" className="flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                                <ChevronLeft size={14} />
                                Back to Insights
                            </Link>
                            <span className="text-slate-300">/</span>
                            <span>Expert Article</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] text-secondary italic leading-tight mb-8 md:mb-10"
                        >
                            {title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap items-center gap-8 border-t border-slate-100 pt-8"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <User size={18} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Authored By</p>
                                    <p className="text-sm font-black text-secondary uppercase">{author || "Dr. Vandana Agarwal"}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                                    <Calendar size={18} className="text-slate-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Published On</p>
                                    <p className="text-sm font-black text-secondary uppercase text-nowrap">{date}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </header>

            {/* Main Content Area */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex-1 max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 mb-16 h-[300px] sm:h-[400px] md:h-[600px]"
                        >
                            <Image
                                src={finalImageUrl}
                                alt={title}
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="prose prose-lg md:prose-xl prose-slate max-w-none"
                        >
                            {renderContent()}

                            <p className="mt-12 text-slate-500 italic border-l-4 border-primary/20 pl-6 py-2">
                                For personalized advice or to discuss how this topic applies to your dental health, please book an appointment for a one-on-one consultation with our specialists.
                            </p>
                        </motion.div>

                        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button className="p-3 rounded-full hover:bg-slate-50 text-slate-400 hover:text-primary transition-colors border border-slate-100">
                                    <Share2 size={20} />
                                </button>
                                <button className="p-3 rounded-full hover:bg-slate-50 text-slate-400 hover:text-primary transition-colors border border-slate-100">
                                    <Printer size={20} />
                                </button>
                            </div>
                            <Link
                                href="/contact"
                                className="bg-primary text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                            >
                                <Sparkles size={16} />
                                Book Consultation
                            </Link>
                        </div>
                    </div>

                    <aside className="lg:w-80 space-y-12">
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 sticky top-32">
                            <h3 className="text-xl font-bold text-secondary mb-6 tracking-tight">Need Urgent Care?</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                If you&apos;re experiencing dental pain or an emergency, don&apos;t wait. We provide priority care for urgent cases.
                            </p>
                            <div className="space-y-4">
                                <a href="tel:+919835500551" className="block w-full text-center py-4 bg-white border border-slate-200 rounded-2xl text-secondary font-bold text-sm hover:border-primary hover:text-primary transition-all">
                                    Call +91 98355 00551
                                </a>
                                <Link href="/contact" className="block w-full text-center py-4 bg-secondary text-white rounded-2xl font-bold text-sm hover:bg-primary transition-all">
                                    Visit Clinic
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}

