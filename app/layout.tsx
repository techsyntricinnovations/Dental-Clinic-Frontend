import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Cormorant_Garamond } from "next/font/google";
import { BookingProvider } from "@/contexts/BookingContext";
import BookingModalWrapper from "@/components/BookingModalWrapper";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Vandana Oral and Dental Care - Best Dentist in Ranchi | Top Dental Clinic",
    template: "%s | Vandana Oral and Dental Care Ranchi"
  },
  description: "Vandana Oral and Dental Care is the best dental clinic in Ranchi, Jharkhand. Led by Dr. Vandana Agarwal, we offer advanced implants, painless RCT, and aesthetic dentistry. Book an appointment with Ranchi's top dentist today!",
  keywords: [
    "best dentist in ranchi",
    "dental clinic in ranchi",
    "top dental clinic ranchi",
    "dentist in lalpur ranchi",
    "dental implants ranchi",
    "root canal specialist ranchi",
    "teeth whitening ranchi",
    "dr vandana agarwal dentist",
    "painless dentistry ranchi",
    "orthodontist in ranchi"
  ],
  authors: [{ name: "Dr. Vandana Agarwal" }],
  creator: "Dr. Vandana Agarwal",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dentalcare-ranchi.com",
    title: "Vandana Oral and Dental Care - Ranchi's Most Advanced Dental Clinic",
    description: "Experience painless dentistry at Ranchi's premier dental destination. Specializing in implants, aesthetic surgery, and family dental care.",
    siteName: "Vandana Oral and Dental Care",
    images: [{
      url: '/assetes/logo1.png',
      width: 1200,
      height: 630,
      alt: 'Vandana Oral and Dental Care Ranchi'
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dentist in Ranchi | Vandana Oral and Dental Care",
    description: "Advanced dental care and aesthetic transformations in Ranchi, Jharkhand.",
    images: ['/assetes/logo1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dentalcare-ranchi.com',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/assetes/logo1.png',
    shortcut: '/assetes/logo1.png',
    apple: '/assetes/logo1.png',
  }
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${cormorant.variable} antialiased`}
      >
        <BookingProvider>
          <Navbar />
          {children}
          <Footer />
          <BookingModalWrapper />
        </BookingProvider>
      </body>
    </html>
  );
}
