import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Network Infrastructure & LAN/WAN Setup in South Sudan",
  description:
    "LAN, WAN, wireless, structured cabling, and network security design, installation, and support for offices and multi-site organizations across South Sudan.",
  keywords: [
    "network infrastructure South Sudan",
    "LAN WAN setup Juba",
    "structured cabling South Sudan",
    "wireless network installation South Sudan",
    "IT networking company Juba",
    "network security South Sudan",
  ],
  alternates: {
    canonical: "/services/network-infrastructure",
  },
  openGraph: {
    title: "Network Infrastructure in South Sudan | Spida",
    description:
      "LAN, WAN, wireless, cabling, and security - we design, build, and support networks across South Sudan, from a single office to multi-site connectivity.",
    url: "/services/network-infrastructure",
    images: [{ url: "/images/hero/network-infrastructure.png", width: 1200, height: 630 }],
  },
};
import {
  ArrowRight,
  Network,
  Router,
  Wifi,
  Shield,
  Cable,
  Activity,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Network,
    title: "LAN Design & Installation",
    description:
      "Structured local area networks built for reliable, high-speed connectivity across your offices and facilities.",
  },
  {
    icon: Router,
    title: "WAN & Multi-Site Connectivity",
    description:
      "Wide area network links that connect branch offices, warehouses, and remote sites into one unified network.",
  },
  {
    icon: Wifi,
    title: "Wireless Network Deployment",
    description:
      "Enterprise Wi-Fi design and installation with coverage planning for large or multi-floor facilities.",
  },
  {
    icon: Shield,
    title: "Network Security & Firewalls",
    description:
      "Firewalls, VPNs, and access controls that keep your network perimeter secure.",
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    description:
      "Professional cabling and rack setup for data centers, server rooms, and office networks.",
  },
  {
    icon: Activity,
    title: "Monitoring & Support",
    description:
      "Ongoing network monitoring with proactive alerts and rapid incident response.",
  },
];

const scope = [
  {
    title: "LAN",
    subtitle: "Local Area Network",
    description:
      "In-building and campus networks connecting workstations, printers, servers, and devices with fast, reliable wired and wireless connectivity.",
  },
  {
    title: "WAN",
    subtitle: "Wide Area Network",
    description:
      "Site-to-site links, VPNs, and internet connectivity that tie multiple offices, branches, or facilities into a single, unified network.",
  },
];

const benefits = [
  "Minimize downtime and network outages",
  "Scale your network as your organization grows",
  "Centralized visibility and management",
  "Secure remote access for staff and sites",
  "Faster, more reliable connectivity",
  "Proactive issue detection and resolution",
];

export default function NetworkInfrastructurePage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Network Infrastructure" },
        ]}
        subtitle="Our Services"
        title="Network Infrastructure"
        description="We do it all - LAN, WAN, wireless, cabling, and security. From a single office network to multi-site connectivity across the country, we design, build, and support networks that just work."
        primaryAction={{ label: "Start Your Project", href: "/contact" }}
        // secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/network-infrastructure.png"
        imageAlt="Network topology diagram showing connected LAN and WAN nodes"
      />

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Network Infrastructure Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end network infrastructure, from design and installation
              to ongoing monitoring and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LAN & WAN Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              We Do It All
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              From a Single Office to Multi-Site Networks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need a network for one building or a network that
              spans the whole country, we&apos;ve got it covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scope.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-border/50"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="text-3xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              Why It Matters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A Network You Can Rely On
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-foreground"
              >
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build a Network That Just Works?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {
              "Let's design and build the LAN and WAN infrastructure your organization needs to run without interruption."
            }
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
