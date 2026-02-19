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
    default: "DentalCare - Best Dentist in Ranchi, Jharkhand | Advanced Dental Clinic",
    template: "%s | DentalCare Ranchi"
  },
  description: "Advanced dental clinic in Ranchi, Jharkhand. Experience world-class dental care with top dentists in Ranchi. Specializing in implants, root canals, and cosmetic dentistry. Book your appointment today!",
  keywords: [
    "best dentist in ranchi",
    "dental clinic in ranchi",
    "dentist in jharkhand",
    "teeth whitening ranchi",
    "dental implants ranchi",
    "root canal specialist ranchi",
    "best dental clinic Ranchi",
    "orthodontist in ranchi"
  ],
  authors: [{ name: "DentalCare Ranchi" }],
  creator: "DentalCare Ranchi",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://dentalcare-ranchi.com",
    title: "Best Dental Clinic in Ranchi | DentalCare",
    description: "Your partner in achieving a healthy, beautiful smile in Ranchi. State-of-the-art dental care for the whole family in Jharkhand.",
    siteName: "DentalCare Ranchi",
  },
  twitter: {
    card: "summary_large_image",
    title: "DentalCare Ranchi - Top Dental Clinic in Jharkhand",
    description: "State-of-the-art dental care for the whole family in Ranchi.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://dentalcare-ranchi.com',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${cormorant.variable} antialiased`}
      >
        <BookingProvider>
          {children}
          <BookingModalWrapper />
        </BookingProvider>
      </body>
    </html>
  );
}
