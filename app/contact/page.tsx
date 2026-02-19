import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactPageHero from "@/components/ContactPageHero";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with DentalCare Ranchi. Visit our clinic, call us, or send a message. We're here to help with all your dental needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactPageHero />
      <ContactSection />
      <Footer />
    </main>
  );
}
