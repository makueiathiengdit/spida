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
  Cog,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Solutions for NGOs in South Sudan",
  description:
    "Donor management, volunteer coordination, and impact tracking systems built for NGOs and non-profits operating in South Sudan, with mobile money giving integration.",
  keywords: [
    "NGO software South Sudan",
    "donor management system South Sudan",
    "mobile money donation m-GURUSH",
    "field data collection app South Sudan",
    "non-profit technology Juba",
  ],
  alternates: {
    canonical: "/industries/ngo",
  },
  openGraph: {
    title: "NGO & Non-Profit Technology Solutions in South Sudan | Spida",
    description:
      "Donor management, volunteer coordination, and impact tracking systems for non-profits operating in South Sudan.",
    url: "/industries/ngo",
    images: [{ url: "/images/hero/ngo.png", width: 1200, height: 630 }],
  },
};

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Engaging websites that showcase your mission and drive donor engagement.",
    href: "/services/web-design-development",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Donor management systems, volunteer coordination platforms, and impact tracking tools.",
    href: "/services/custom-software",
  },
  {
    icon: Plug,
    title: "API & Integration",
    description:
      "Connect your CRM, donation platforms, and communication tools seamlessly.",
    href: "/services/api-integrations",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description:
      "Automate repetitive tasks to free up your team for mission-critical work.",
    href: "/services/api-integrations",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Track impact metrics, donor trends, and program effectiveness with clear insights.",
    href: "/services/data-analytics",
  },
];

const systems = [
  {
    name: "Donor & Grants Management System (DGMS)",
    description:
      "A centralized donor database with grant tracking, automated receipt generation, and integrated mobile money giving via m-GURUSH and MoMo.",
  },
  {
    name: "Volunteer & Field Staff Coordination Platform",
    description:
      "Scheduling, task assignment, and check-in tools for volunteers and field teams working across remote program areas.",
  },
  {
    name: "Program & Impact Monitoring (M&E) System",
    description:
      "Track beneficiaries, log activity data, and generate donor-ready reports aligned with common humanitarian reporting formats.",
  },
  {
    name: "Beneficiary Registration & Case Management System",
    description:
      "A secure digital registry for aid distribution that prevents duplicate beneficiary records across multiple programs.",
  },
  {
    name: "Offline-First Field Data Collection App",
    description:
      "A mobile app for community and field officers to capture survey and household data without continuous internet access, syncing once back online.",
  },
];

const benefits = [
  "Increase donor retention and engagement",
  "Streamline volunteer management",
  "Track and report impact effectively",
  "Reduce administrative overhead",
  "Improve communication with stakeholders",
  "Scale your operations efficiently",
];

const caseStudies = [
  {
    title: "Global Relief Foundation",
    description:
      "Built a donor portal that increased online donations by 150% in the first year.",
  },
  {
    title: "Youth Education Initiative",
    description:
      "Developed a volunteer management system serving 500+ active volunteers.",
  },
  {
    title: "Environmental Action Network",
    description:
      "Created an impact dashboard tracking 50+ sustainability metrics.",
  },
];

export default function NGOPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
          { label: "NGO & Non-Profit" },
        ]}
        subtitle="Industries We Serve"
        title="NGO & Non-Profit Organizations"
        description="We help non-profit organizations amplify their impact through technology. From donor management to volunteer coordination, we build solutions that support your mission."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        // secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/ngo.png"
        imageAlt="Volunteers collaborating at an outdoor charity event with digital tools"
      />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services for NGOs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tailored technology solutions designed specifically for the
              non-profit sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            {/* <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">NGO-Specific Systems</h2> */}
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purpose-built software designed around how non-profits actually
              operate in the field.
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

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
                Why Partner With Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Technology That Amplifies Impact
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We understand the unique challenges faced by non-profit
                organizations. Our solutions are designed to maximize your
                resources, engage stakeholders, and help you focus on what
                matters most - your mission.
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
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border/50"
                >
                  <h3 className="font-semibold text-foreground mb-2">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {study.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Amplify Your Impact?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {
              "Let's discuss how technology can help your organization achieve its mission more effectively."
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
