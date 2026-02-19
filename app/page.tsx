import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DoctorProfile from "@/components/DoctorProfile";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

import FAQ from "@/components/FAQ";

import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "DentalCare Clinic Ranchi",
    "image": "https://dentalcare-ranchi.com/logo.png",
    "@id": "https://dentalcare-ranchi.com",
    "url": "https://dentalcare-ranchi.com",
    "telephone": "+91 651 2345678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Beside Main Road, near Lalpur Chowk",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.3441,
      "longitude": 85.3096
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://facebook.com/dentalcare-ranchi",
      "https://instagram.com/dentalcare-ranchi"
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <About />
      <DoctorProfile />
      <WhyChooseUs />
      <Services />
      <Process />
      <Testimonials />

      <FAQ />

      <Footer />
    </main>
  );
}
