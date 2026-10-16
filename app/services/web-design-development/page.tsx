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

export const metadata: Metadata = {
  title: "Web Design & Development in South Sudan",
  description:
    "Responsive, high-performance websites and web applications built for businesses in Juba and across South Sudan. SEO-ready, mobile-friendly, and built to convert.",
  keywords: [
    "web design South Sudan",
    "web development Juba",
    "website design company South Sudan",
    "responsive website design South Sudan",
    "business website South Sudan",
  ],
  alternates: {
    canonical: "/services/web-design-development",
  },
  openGraph: {
    title: "Web Design & Development in South Sudan | Spida",
    description:
      "Stunning, high-performance websites that engage users and drive conversions for businesses across South Sudan.",
    url: "/services/web-design-development",
    images: [{ url: "/images/hero/web-design.png", width: 1200, height: 630 }],
  },
};
import {
  CheckCircle2,
  ArrowRight,
  Palette,
  Code,
  Smartphone,
  Zap,
  Search,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Unique, brand-aligned designs that reflect your identity and resonate with your audience.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Well-structured, maintainable code following industry best practices and standards.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Websites that look and work perfectly on all devices, from mobile to desktop.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description:
      "Fast-loading pages optimized for speed and excellent user experience.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description:
      "Built with search engine optimization in mind to improve your online visibility.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Implementing security best practices to protect your website and user data.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understanding your business goals, target audience, and requirements.",
  },
  {
    step: "02",
    title: "Design",
    description: "Creating wireframes and visual designs for your approval.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building your website with clean, efficient code.",
  },
  {
    step: "04",
    title: "Testing",
    description: "Rigorous testing across devices and browsers.",
  },
  {
    step: "05",
    title: "Launch",
    description:
      "Deploying your website and ensuring everything runs smoothly.",
  },
  {
    step: "06",
    title: "Support",
    description: "Ongoing maintenance and support to keep your site updated.",
  },
];

export default function WebDesignDevelopmentPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
          { label: "Web Design & Development" },
        ]}
        subtitle="Our Services"
        title="Web Design & Development"
        description="We create stunning, high-performance websites that captivate your audience and drive business growth. From simple landing pages to complex web applications."
        primaryAction={{ label: "Start Your Project", href: "/contact" }}
        // secondaryAction={{ label: "View Portfolio", href: "/portfolio" }}
        imageSrc="/images/hero/web-design.png"
        imageAlt="UX designer working on website wireframes and layouts"
      />

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Web Design Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine creativity with technical expertise to deliver websites
              that stand out.
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

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven development process ensures your project is delivered
              on time and exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <span className="text-4xl font-bold text-primary/20">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              Technologies
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tools We Use
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-secondary rounded-full text-foreground font-medium border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Build Your Website?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {
              "Let's create a website that truly represents your brand and helps you achieve your goals."
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
