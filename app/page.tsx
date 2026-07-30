import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Code2,
  Plug,
  BarChart3,
  Server,
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
  TrendingUp,
  Activity,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Beautiful, responsive websites that engage users and drive conversions.",
    href: "/services/web-design-development",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to meet your unique business requirements.",
    href: "/services/custom-software",
  },
  {
    icon: Plug,
    title: "API & Integrations",
    description:
      "Seamless integration of systems and third-party services to streamline operations.",
    href: "/services/api-integrations",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Transform raw data into actionable insights that drive strategic decisions.",
    href: "/services/data-analytics",
  },
  {
    icon: Server,
    title: "Web Hosting",
    description:
      "Reliable, secure, and scalable hosting solutions for your applications.",
    href: "/services/web-hosting",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "LAN, WAN, wireless, cabling, and security - we design, build, and support it all.",
    href: "/services/network-infrastructure",
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
    <div className="relative rounded-2xl border border-border bg-card p-4 shadow-xl shadow-primary/5">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
            S
          </div>
          <span className="text-sm font-semibold text-foreground">
            Spida Analytics
          </span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-2 gap-3 py-4">
        <div className="rounded-lg bg-secondary p-3">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <TrendingUp className="h-3.5 w-3.5 text-primary" />
            Revenue
          </div>
          <p className="mt-1 text-xl font-bold text-foreground">$48.2k</p>
          <p className="text-xs text-primary">+12.5%</p>
        </div>
        <div className="rounded-lg bg-secondary p-3">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <Activity className="h-3.5 w-3.5 text-primary" />
            Active Users
          </div>
          <p className="mt-1 text-xl font-bold text-foreground">2,310</p>
          <p className="text-xs text-primary">+4.1%</p>
        </div>
      </div>

      {/* Chart */}
      <div className="rounded-lg bg-secondary p-4">
        <div className="flex items-end justify-between gap-2 h-28">
          {[40, 65, 50, 80, 60, 95, 72].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-primary"
              style={{ height: `${h}%`, opacity: 0.45 + h / 200 }}
            />
          ))}
        </div>
        <div className="mt-3 flex justify-between text-[10px] text-muted-foreground">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
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
        secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
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
              <Card
                key={service.href}
                className="group hover:shadow-lg transition-all duration-300 border-border"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
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
                  <div className="h-24 w-24 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                    <span className=" text-4xl font-bold text-primary-foreground">
                      Spida
                    </span>
                  </div>
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold border-background/30 bg-transparent text-background hover:bg-background hover:text-foreground"
            >
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
