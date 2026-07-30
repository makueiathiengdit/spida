import type { Metadata } from "next"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Spida to discuss your software, web, or network infrastructure project. Serving businesses and organizations across Juba and South Sudan.",
  keywords: [
    "contact software company South Sudan",
    "IT consultation Juba",
    "software quote South Sudan",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Spida | Software Company in South Sudan",
    description:
      "Talk to Spida about your software, web, or network infrastructure project in South Sudan.",
    url: "/contact",
    images: [{ url: "/images/hero/contact.png", width: 1200, height: 630 }],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is your typical project timeline?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Project timelines vary based on scope, but typically range from 4-16 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer maintenance and support packages for all our projects.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle project pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide detailed quotes after understanding your requirements through a consultation.",
      },
    },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactForm />
    </>
  )
}
