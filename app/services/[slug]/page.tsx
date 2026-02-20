import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceData } from "@/lib/services";
import ClientServicePage from "./ClientServicePage";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} in Ranchi | Vandana Oral and Dental Care`,
        description: `Looking for ${service.title} in Ranchi? Dr. Vandana Agarwal offers professional, painless ${service.title.toLowerCase()} with advanced technology. Book your appointment today!`,
        alternates: {
            canonical: `https://dentalcare-ranchi.com/services/${slug}`,
        }
    };
}

export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug: slug,
    }));
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        notFound();
    }

    return <ClientServicePage service={service} />;
}
