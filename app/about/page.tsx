import React from "react";
import ClientAboutPage from "./ClientAboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Dr. Vandana Agarwal | Best Dentist in Ranchi",
    description: "Learn about Vandana Oral and Dental Care, Ranchi's premier dental clinic. Led by Dr. Vandana Agarwal, we've been crafting healthy smiles in Jharkhand since 2017.",
    alternates: {
        canonical: 'https://dentalcare-ranchi.com/about',
    }
};

export default function AboutPage() {
    return <ClientAboutPage />;
}
