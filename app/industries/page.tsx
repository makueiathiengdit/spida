import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  HeartHandshake,
  Landmark,
  GraduationCap,
  Hotel,
  ShoppingCart,
  Radio,
  Building2,
  Stethoscope,
} from "lucide-react";

const industries = [
  {
    name: "NGO",
    description:
      "Donor platforms and impact tools for non-profit organizations.",
    href: "/industries/ngo",
    image: "/images/hero/ngo.png",
    icon: HeartHandshake,
  },
  {
    name: "Finance",
    description: "Secure, compliant solutions for banking and fintech.",
    href: "/industries/finance",
    image: "/images/hero/finance.png",
    icon: Landmark,
  },
  {
    name: "Education",
    description: "Learning platforms and student management systems.",
    href: "/industries/education",
    image: "/images/hero/education.png",
    icon: GraduationCap,
  },
  {
    name: "Hospitality",
    description: "Booking, guest experience, and operations software.",
    href: "/industries/hospitality",
    image: "/images/hero/hospitality.png",
    icon: Hotel,
  },
  {
    name: "Retail",
    description: "E-commerce, POS, and inventory solutions that scale.",
    href: "/industries/retail",
    image: "/images/hero/retail.png",
    icon: ShoppingCart,
  },
  {
    name: "Telecom & Media",
    description: "Streaming, content delivery, and subscriber platforms.",
    href: "/industries/telecom",
    image: "/images/hero/telecom.png",
    icon: Radio,
  },
  {
    name: "Public Sector",
    description: "Citizen services and digital government infrastructure.",
    href: "/industries/public-sector",
    image: "/images/hero/public-sector.png",
    icon: Building2,
  },
  {
    name: "Healthcare",
    description: "Patient-centered platforms and secure clinical systems.",
    href: "/industries/healthcare",
    image: "/images/hero/pharmacy.webp",
    icon: Stethoscope,
  },
];

export default function IndustriesPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
        subtitle="Industries We Serve"
        title="Industries"
        description="We bring specialized knowledge and experience to deliver tailored technology solutions across a wide range of sectors."
        primaryAction={{ label: "Start a Project", href: "/contact" }}
        secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/telecom.png"
        imageAlt="Telecommunications tower with antennas against a bright sky"
      />

      {/* Industries Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg sm:flex-row"
                >
                  <div className="relative h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-2/5">
                    <Image
                      src={industry.image}
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
                      {industry.name}
                    </h3>
                    <p className="mb-4 text-muted-foreground">
                      {industry.description}
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
            Don&apos;t see your industry?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We work with organizations across many sectors. Tell us about
            your industry and we&apos;ll show you what&apos;s possible.
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
