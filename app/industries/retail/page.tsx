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
import {
  ArrowRight,
  Globe,
  Code2,
  Plug,
  BarChart3,
  ShoppingCart,
  Package,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Retail & POS Software in South Sudan",
  description:
    "Point-of-sale, inventory, and e-commerce systems with mobile money payments built for shops and distributors in Juba and across South Sudan.",
  keywords: [
    "POS system South Sudan",
    "retail software Juba",
    "inventory management system South Sudan",
    "e-commerce South Sudan",
    "mobile money payments retail South Sudan",
  ],
  alternates: {
    canonical: "/industries/retail",
  },
  openGraph: {
    title: "Retail Technology Solutions in South Sudan | Spida",
    description:
      "E-commerce platforms, POS, and inventory management systems that help retailers thrive across South Sudan.",
    url: "/industries/retail",
    images: [{ url: "/images/hero/retail.png", width: 1200, height: 630 }],
  },
};

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "E-commerce websites that convert visitors into customers.",
    href: "/services/web-design-development",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "POS systems, inventory management, and omnichannel solutions.",
    href: "/services/custom-software",
  },
  {
    icon: Plug,
    title: "API & Integration",
    description:
      "Connect your store with payment gateways, shipping, and marketplaces.",
    href: "/services/api-integrations",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Sales analytics, customer insights, and inventory optimization.",
    href: "/services/data-analytics",
  },
];

const solutions = [
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description: "Custom online stores built for conversion",
  },
  {
    icon: Package,
    title: "Inventory Systems",
    description: "Real-time stock management across channels",
  },
  {
    icon: Globe,
    title: "Omnichannel Solutions",
    description: "Unified commerce across online and offline",
  },
];

const systems = [
  {
    name: "Point-of-Sale & Inventory Management System",
    description:
      "An offline-capable POS with real-time inventory sync across multiple shop locations, so sales keep ringing up during outages.",
  },
  {
    name: "Mobile Money Payment Gateway",
    description:
      "Accept m-GURUSH, MoMo, and card payments both in-store and online through a single integrated checkout.",
  },
  {
    name: "Supply Chain & Distributor Portal",
    description:
      "Track stock movement from warehouse to retail outlet, reducing stockouts and improving reorder accuracy.",
  },
  {
    name: "E-commerce & Delivery Platform",
    description:
      "An online storefront with delivery logistics tracking built for urban markets like Juba.",
  },
  {
    name: "Loyalty & Customer Rewards Platform",
    description:
      "Track customer purchases and manage rewards programs that keep shoppers coming back.",
  },
];

const benefits = [
  "Increase online sales",
  "Optimize inventory levels",
  "Improve customer experience",
  "Streamline operations",
  "Enable data-driven decisions",
  "Scale your business",
];

export default function RetailPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
          { label: "Retail" },
        ]}
        subtitle="Industries We Serve"
        title="Retail"
        description="We help retailers thrive in the digital age with e-commerce platforms, inventory management systems, and omnichannel solutions that drive sales and improve efficiency."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/retail.png"
        imageAlt="Modern retail store with a shopper and point-of-sale system"
      />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services for Retail
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology solutions that help retailers compete and win in the
              digital marketplace.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              Systems We Build
            </p>
            {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Retail-Specific Systems</h2> */}
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purpose-built software designed around how shops and distributors
              actually move product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {system.name}
                </h3>
                <p className="text-muted-foreground">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              Our Solutions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Retail Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50 text-center"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
                Why Partner With Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Grow Your Retail Business
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                The retail landscape is evolving rapidly. We help you stay ahead
                with technology solutions that enhance customer experience and
                operational efficiency.
              </p>
              <ul className="space-y-4">
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
            <div className="bg-primary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Success Story
              </h3>
              <p className="text-muted-foreground mb-6">
                We built an omnichannel solution for a fashion retailer that
                unified their online and in-store operations, resulting in
                significant revenue growth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">45%</p>
                  <p className="text-sm text-muted-foreground">
                    Revenue increase
                  </p>
                </div>
                <div className="bg-card/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">30%</p>
                  <p className="text-sm text-muted-foreground">
                    Stock optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Retail Business?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {
              "Let's discuss how we can help you compete and win in the digital marketplace."
            }
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
