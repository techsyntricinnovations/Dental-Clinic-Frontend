import Hero from "@/components/Hero";
import About from "@/components/About";
import DoctorProfile from "@/components/DoctorProfile";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";

import FAQ from "@/components/FAQ";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Vandana Oral and Dental Care",
    "alternateName": "Vandana Dental Clinic Ranchi",
    "description": "Premium dental clinic in Ranchi offering Root Canal Treatment, Dental Implants, and Aesthetic Dentistry led by Dr. Vandana Agarwal.",
    "image": "https://dentalcare-ranchi.com/assetes/logo1.png",
    "@id": "https://dentalcare-ranchi.com",
    "url": "https://dentalcare-ranchi.com",
    "telephone": "+91 98355 00551",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Harmu Road, opposite Santoshi Mata Mandir, Kumhartoli",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.3639,
      "longitude": 85.3117
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
      <Hero />
      <About />
      <DoctorProfile />
      <WhyChooseUs />
      <Services />
      <Process />
      <Testimonials />
      <FAQ />
    </main>
  );
}
