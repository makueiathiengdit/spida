import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Software & IT Services",
  description:
    "Web design, custom software, API integrations, data analytics, web hosting, and network infrastructure — Spida delivers full-stack IT services across South Sudan.",
  keywords: [
    "IT services South Sudan",
    "software services Juba",
    "web design and development South Sudan",
    "network infrastructure South Sudan",
    "web hosting South Sudan",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Software & IT Services in South Sudan | Spida",
    description:
      "From web platforms to custom software, integrations, analytics, hosting, and networking — the full stack of digital services businesses in South Sudan need to grow.",
    url: "/services",
    images: [{ url: "/images/hero/api-integrations.png", width: 1200, height: 630 }],
  },
};
import {
  ArrowRight,
  Globe,
  Code2,
  Plug,
  BarChart3,
  Server,
  Network,
} from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Responsive, high-performance websites and web apps built to convert.",
    href: "/services/web-design-development",
    image: "/images/hero/web-design.png",
    icon: Globe,
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored applications engineered around your unique business logic.",
    href: "/services/custom-software",
    image: "/images/hero/custom-software.png",
    icon: Code2,
  },
  {
    title: "API & Integrations",
    description:
      "Connect your systems with secure, scalable APIs and integrations.",
    href: "/services/api-integrations",
    image: "/images/hero/api-integrations.png",
    icon: Plug,
  },
  {
    title: "Data Analytics",
    description:
      "Turn raw data into dashboards and insights that drive decisions.",
    href: "/services/data-analytics",
    image: "/images/hero/data-analytics.png",
    icon: BarChart3,
  },
  {
    title: "Web Hosting",
    description:
      "Reliable managed hosting with monitoring, backups, and security.",
    href: "/services/web-hosting",
    image: "/images/hero/web-hosting.png",
    icon: Server,
  },
  {
    title: "Network Infrastructure",
    description:
      "LAN, WAN, wireless, cabling, and security - we do it all.",
    href: "/services/network-infrastructure",
    image: "/images/hero/network-infrastructure.png",
    icon: Network,
  },
];

export default function ServicesPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        subtitle="What We Do"
        title="Our Services"
        description="From web platforms to custom software, integrations, analytics, and hosting — Spida delivers the full stack of digital services businesses need to grow."
        primaryAction={{ label: "Start a Project", href: "/contact" }}
        // secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/api-integrations.png"
        imageAlt="Developer working on API integrations"
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg sm:flex-row"
                >
                  <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-2/5">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 40vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {service.description}
                    </p>
                    <span className="mt-auto inline-flex items-center font-medium text-primary">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Tell us about your goals and we&apos;ll recommend the right mix of
            services to get you there.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">
              Talk to Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
