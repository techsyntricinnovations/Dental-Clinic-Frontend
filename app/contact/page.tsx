import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import ContactPageHero from "@/components/ContactPageHero";

export const metadata: Metadata = {
  title: "Contact Best Dentist in Ranchi | Book Appointment",
  description: "Get in touch with Vandana Oral and Dental Care in Ranchi. Visit our Harmu Road clinic, call us at +91 98355 00551, or book your dental consultation online.",
  alternates: {
    canonical: 'https://dentalcare-ranchi.com/contact',
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactPageHero />
      <ContactSection />
    </main>
  );
}
