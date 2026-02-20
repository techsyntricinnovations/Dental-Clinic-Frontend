"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, ArrowRight, Sparkles } from "lucide-react";
import { getBlogs } from "@/lib/strapi";
import Image from "next/image";

// Types for Strapi Data
interface Blog {
    id: number;
    attributes: {
        title: string;
        slug: string;
        excerpt: string;
        publishedAt: string;
        author?: string;
        image?: {
            data: {
                attributes: {
                    url: string;
                }
            }
        }
    }
}

export default function BlogsPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogs() {
            const data = (await getBlogs()) as Blog[];
            if (data && data.length > 0) {
                setBlogs(data);
            } else {
                // Mock data for demo if Strapi is not connected
                setBlogs([
                    {
                        id: 1,
                        attributes: {
                            title: "The Importance of Regular Dental Checkups",
                            slug: "regular-checkups",
                            excerpt: "Discover why visiting your dentist twice a year is crucial for maintaining a healthy smile and preventing major dental issues.",
                            publishedAt: "2024-03-20T10:00:00Z",
                            author: "Dr. Vandana Agarwal",
                            image: { data: { attributes: { url: "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg" } } }
                        }
                    },
                    {
                        id: 2,
                        attributes: {
                            title: "Revolutionizing Smiles with Invisalign",
                            slug: "invisalign-guide",
                            excerpt: "Everything you need to know about clear aligners and how they can transform your smile without the discomfort of traditional braces.",
                            publishedAt: "2024-03-15T10:00:00Z",
                            author: "Dr. Vandana Agarwal",
                            image: { data: { attributes: { url: "https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg" } } }
                        }
                    },
                    {
                        id: 3,
                        attributes: {
                            title: "Teeth Whitening: Facts vs. Myths",
                            slug: "teeth-whitening-myths",
                            excerpt: "Professional teeth whitening vs. home remedies. We separate fact from fiction to help you achieve a brighter, safer smile.",
                            publishedAt: "2024-03-10T10:00:00Z",
                            author: "Dr. Vandana Agarwal",
                            image: { data: { attributes: { url: "https://images.pexels.com/photos/4269490/pexels-photo-4269490.jpeg" } } }
                        }
                    }
                ] as Blog[]);
            }
            setLoading(false);
        }
        fetchBlogs();
    }, []);

    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block"
                        >
                            Dental Knowledge
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl sm:text-5xl md:text-7xl font-[family-name:var(--font-cormorant)] text-secondary italic mb-8"
                        >
                            Insights for a <span className="not-italic font-black text-primary">Radiant Smile.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed"
                        >
                            Explore our latest articles on oral health, advanced treatments, and tips for maintaining a healthy lifestyle.
                        </motion.p>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </section>

            {/* Blogs Grid */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                            {blogs.map((blog, i) => {
                                const { title, slug, excerpt, publishedAt, author, image } = blog.attributes;
                                const date = new Date(publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                });
                                const imageUrl = image?.data?.attributes?.url || "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800";
                                // If imageUrl is relative (Strapi fallback), prepend Strapi URL
                                const finalImageUrl = imageUrl.startsWith('http') ? imageUrl : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${imageUrl}`;

                                return (
                                    <motion.article
                                        key={blog.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="group"
                                    >
                                        <Link href={`/blogs/${slug}`} className="block space-y-6">
                                            {/* Image Container */}
                                            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200">
                                                <Image
                                                    src={finalImageUrl}
                                                    alt={title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                {/* Date Badge */}
                                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                                                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{date}</p>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="space-y-4 px-2">
                                                <div className="flex items-center gap-3 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                                                    <Sparkles size={12} />
                                                    <span>Clinical Insights</span>
                                                </div>
                                                <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-cormorant)] italic text-secondary leading-tight group-hover:text-primary transition-colors">
                                                    {title}
                                                </h2>
                                                <p className="text-slate-500 line-clamp-2 text-sm md:text-base leading-relaxed">
                                                    {excerpt}
                                                </p>

                                                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                            <User size={14} className="text-primary" />
                                                        </div>
                                                        <span className="text-xs font-bold text-secondary uppercase tracking-wider">{author || "Vandana Clinic"}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                                        Read More
                                                        <ArrowRight size={14} />
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.article>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
