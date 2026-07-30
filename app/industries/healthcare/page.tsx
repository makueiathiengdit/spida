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

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description:
      "Accessible, patient-friendly websites and portals that build trust from the first visit.",
    href: "/services/web-design-development",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Patient records, scheduling, and clinical workflow systems built around how your staff actually work.",
    href: "/services/custom-software",
  },
  {
    icon: Plug,
    title: "API & Integration",
    description:
      "Connect EHR, billing, and lab systems securely so data moves without manual re-entry.",
    href: "/services/api-integrations",
  },
  {
    icon: Cog,
    title: "Process Automation",
    description:
      "Automate intake, appointment reminders, and referrals to reduce administrative burden.",
    href: "/services/api-integrations",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turn patient and operational data into dashboards that support better care decisions.",
    href: "/services/data-analytics",
  },
];

const systems = [
  {
    name: "Electronic Health Records (EHR) System",
    description:
      "A centralized, secure patient records platform accessible across clinics and referral facilities, reducing lost paperwork and duplicate testing.",
  },
  {
    name: "Patient Appointment & Scheduling Portal",
    description:
      "Online and SMS-based booking with automated reminders, built to work reliably even for patients on basic feature phones.",
  },
  {
    name: "Telemedicine & Remote Consultation Platform",
    description:
      "Video and audio consultation tools connecting patients in remote counties with doctors and specialists in Juba and beyond.",
  },
  {
    name: "Health Facility & Supply Chain Management System",
    description:
      "Real-time tracking of drug stock, cold-chain vaccines, and medical supplies across facilities to prevent shortages and stockouts.",
  },
  {
    name: "Community Health Worker (CHW) Data Collection App",
    description:
      "An offline-capable mobile app for CHWs to log home visits, immunizations, and maternal health data in the field, syncing once connectivity is available.",
  },
]

const benefits = [
  "Improve patient access and engagement",
  "Reduce administrative and scheduling overhead",
  "Keep sensitive health data secure and compliant",
  "Connect clinical and operational systems",
  "Track outcomes with clear, actionable reporting",
  "Scale care delivery as demand grows",
];

const caseStudies = [
  {
    title: "Community Health Network",
    description:
      "Built a patient portal that cut phone-based scheduling volume by 40%.",
  },
  {
    title: "Regional Clinic Group",
    description:
      "Integrated records across five clinics into a single secure system.",
  },
  {
    title: "Maternal Health Initiative",
    description:
      "Delivered a field data platform used by 200+ community health workers.",
  },
];

export default function HealthcarePage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
          { label: "Healthcare" },
        ]}
        subtitle="Industries We Serve"
        title="Healthcare"
        description="We help healthcare providers and health-focused organizations deliver better care through technology. From patient portals to clinical data systems, we build solutions that support your patients and your staff."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/healthcare.webp"
        imageAlt="Heartbeat monitor line representing healthcare technology"
      />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Services for Healthcare
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology solutions built for the realities of patient care and
              clinical operations.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Healthcare-Specific Systems
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purpose-built software designed around the realities of
              delivering care - from clinic floor to remote outreach.
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
                Technology That Supports Better Care
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We understand the unique demands of healthcare - patient
                privacy, clinical accuracy, and staff already stretched thin.
                Our solutions are designed to reduce friction so your team can
                focus on patients, not paperwork.
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
            Ready to Modernize Patient Care?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {
              "Let's discuss how technology can help your organization deliver better care, more efficiently."
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
