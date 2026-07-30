import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Spida is a technology company delivering custom software, web, and network infrastructure solutions to businesses, NGOs, and government agencies across South Sudan.",
  keywords: [
    "software company South Sudan",
    "IT company Juba",
    "technology partner South Sudan",
    "about Spida",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Spida | Software Company Serving South Sudan",
    description:
      "Meet Spida, a technology company delivering custom software, web, and network infrastructure solutions across South Sudan.",
    url: "/about",
    images: [{ url: "/images/hero/about.png", width: 1200, height: 630 }],
  },
};
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Clock,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every project, delivering solutions that exceed expectations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with honesty and transparency, building trust with our clients and partners.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with our clients, treating every project as a true partnership.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description:
      "We embrace new technologies and approaches to deliver cutting-edge solutions.",
  },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "25+", label: "Team Members" },
];

const timeline = [
  {
    year: "2009",
    title: "Founded",
    description:
      "Spida was established with a vision to deliver innovative software solutions.",
  },
  {
    year: "2012",
    title: "Expansion",
    description: "Expanded our team and opened our first international office.",
  },
  {
    year: "2016",
    title: "Enterprise Focus",
    description:
      "Started serving enterprise clients across finance and telecom sectors.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Helped numerous organizations adapt to the digital-first world.",
  },
  {
    year: "2024",
    title: "Today",
    description:
      "Continuing to innovate and deliver exceptional solutions worldwide.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        subtitle="About Us"
        title="Building Digital Excellence Since 2009"
        description="Spida is a leading software development company dedicated to helping businesses transform through technology. We combine technical expertise with industry knowledge to deliver solutions that drive real results."
        primaryAction={{ label: "Work With Us", href: "/contact" }}
        secondaryAction={{ label: "View Portfolio", href: "/portfolio" }}
        imageSrc="/images/hero/about.png"
        imageAlt="Diverse software company team standing together in a modern office"
      />

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-secondary rounded-2xl p-8">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with innovative software solutions that
                streamline operations, enhance customer experiences, and drive
                sustainable growth. We are committed to delivering excellence in
                every project while maintaining the highest standards of
                integrity and professionalism.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the trusted technology partner of choice for organizations
                seeking to transform their businesses through digital
                innovation. We envision a future where technology enables every
                business to reach its full potential and create meaningful
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-border/50">
                <CardHeader>
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              Our Journey
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Company Timeline
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {
              "Let's discuss how Spida can help you achieve your technology goals."
            }
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
