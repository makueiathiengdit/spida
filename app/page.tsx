import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  Landmark,
  Heart,
  ShoppingBag,
  Radio,
  Building,
  Stethoscope,
  Network,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Beautiful, responsive websites that engage users and drive conversions.",
    href: "/services/web-design-development",
    image: "/images/hero/web-design.png",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your unique business requirements.",
    href: "/services/custom-software",
    image: "/images/hero/custom-software.png",
  },
  {
    title: "API & Integrations",
    description:
      "Seamless integration of systems and third-party services to streamline operations.",
    href: "/services/api-integrations",
    image: "/images/hero/api-integrations.png",
  },
  {
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights that drive strategic decisions.",
    href: "/services/data-analytics",
    image: "/images/hero/data-analytics.png",
  },
  {
    title: "Web Hosting",
    description:
      "Reliable, secure, and scalable hosting solutions for your applications.",
    href: "/services/web-hosting",
    image: "/images/hero/web-hosting.png",
  },
  {
    title: "Network Infrastructure",
    description:
      "LAN, WAN, wireless, cabling, and security - we design, build, and support it all.",
    href: "/services/network-infrastructure",
    image: "/images/hero/network-infrastructure.png",
  },
];

const industries = [
  { icon: Heart, name: "NGO", href: "/industries/ngo" },
  { icon: Landmark, name: "Finance", href: "/industries/finance" },
  { icon: GraduationCap, name: "Education", href: "/industries/education" },
  { icon: Building2, name: "Hospitality", href: "/industries/hospitality" },
  { icon: ShoppingBag, name: "Retail", href: "/industries/retail" },
  { icon: Radio, name: "Telecom & Media", href: "/industries/telecom-media" },
  { icon: Building, name: "Public Sector", href: "/industries/public-sector" },
  { icon: Stethoscope, name: "Healthcare", href: "/industries/healthcare" },
];

export const metadata: Metadata = {
  title: "Software Development Company in South Sudan",
  description:
    "Spida builds custom software, websites, network infrastructure, and data systems for businesses, NGOs, banks, schools, and government agencies across Juba and South Sudan.",
  keywords: [
    "software development company South Sudan",
    "software company Juba",
    "IT company South Sudan",
    "web design South Sudan",
    "custom software development Juba",
    "network infrastructure South Sudan",
    "digital transformation South Sudan",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Spida | Software Development Company in South Sudan",
    description:
      "Custom software, websites, network infrastructure, and data systems for businesses, NGOs, banks, schools, and government agencies across South Sudan.",
    url: "/",
    images: [{ url: "/images/hero/home.png", width: 1200, height: 630 }],
  },
};

const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

const features = [
  "Expert team with deep industry knowledge",
  "Agile development methodology",
  "Transparent communication",
  "On-time delivery guarantee",
  "Post-launch support included",
  "Competitive pricing",
];

function HeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
      <Image
        src="/images/app-image.png"
        alt="Spida-built operations dashboard"
        width={2868}
        height={1630}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}

export default function HomePage() {
  const title = "Foundational Systems for South Sudan";
  const desc =
    "Spida crafts mission-critical software and digital infrastructure designed to power businesses, empower public systems, and accelerate South Sudan’s digital economy from the ground up.";

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        subtitle="Spida Systems"
        title={title}
        description={desc}
        primaryAction={{ label: "Get Started", href: "/contact" }}
        // secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        visual={<HeroVisual />}
      />

      {/* Industry quick links */}
      <section className="border-b border-border bg-background py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm font-medium text-muted-foreground mr-2">
              Industries we serve:
            </span>
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                {industry.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              What We Do
            </p>
            <h2 className=" text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of software development services to
              help businesses thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative flex min-h-[26rem] flex-col items-center justify-end overflow-hidden rounded-2xl bg-foreground px-8 pb-10 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/10"
                  aria-hidden="true"
                />
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-5 text-balance">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary transition-colors group-hover:bg-white/90">
                    Learn More
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </span>
                  <p className="mt-5 text-white/85 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Industries We Serve
            </p>
            <h2 className=" text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expertise Across Sectors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bring specialized knowledge and experience to deliver tailored
              solutions for diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group bg-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border"
              >
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <industry.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className=" text-4xl md:text-5xl font-bold text-background mb-2">
                  {stat.value}
                </p>
                <p className="text-background/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Why Choose Spida
              </p>
              <h2 className=" text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Trusted Technology Partner
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience delivering successful projects,
                Spida has established itself as a reliable technology partner
                for businesses of all sizes. We combine technical expertise with
                industry knowledge to create solutions that drive real results.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="font-semibold">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-secondary rounded-2xl border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <Image
                    src="/images/logo/navy-logo.png"
                    alt="Spida"
                    width={1400}
                    height={1400}
                    className="h-32 w-32 rounded-2xl mx-auto mb-6"
                  />
                  <p className=" text-2xl font-semibold text-foreground mb-2">
                    Innovation Driven
                  </p>
                  <p className="text-muted-foreground">Results Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className=" text-3xl md:text-4xl font-bold text-background mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-8">
            {
              "Let's discuss how Spida can help you achieve your business goals with our innovative software solutions."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {/* <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
            >
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  );
}
