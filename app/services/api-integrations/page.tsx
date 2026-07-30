import type { Metadata } from "next"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Link2, RefreshCw, Shield, Zap, Code, Database } from "lucide-react"

export const metadata: Metadata = {
  title: "API & Systems Integration Services in South Sudan",
  description:
    "Connect payment gateways, mobile money, CRMs, and legacy systems with secure API development and integration services for businesses across South Sudan.",
  keywords: [
    "API integration services South Sudan",
    "mobile money integration South Sudan",
    "system integration Juba",
    "API development company South Sudan",
    "workflow automation South Sudan",
  ],
  alternates: {
    canonical: "/services/api-integrations",
  },
  openGraph: {
    title: "API & Integrations in South Sudan | Spida",
    description:
      "Connect your systems, automate workflows, and unlock the full potential of your technology stack with expert API development and integration services.",
    url: "/services/api-integrations",
    images: [{ url: "/images/hero/api-integrations.png", width: 1200, height: 630 }],
  },
}

const features = [
  {
    icon: Link2,
    title: "Third-Party Integrations",
    description: "Connect your systems with popular services like Salesforce, HubSpot, Stripe, and more."
  },
  {
    icon: Code,
    title: "Custom API Development",
    description: "Build robust, well-documented APIs that enable seamless communication between applications."
  },
  {
    icon: RefreshCw,
    title: "Data Synchronization",
    description: "Keep data consistent across all your platforms with real-time sync solutions."
  },
  {
    icon: Shield,
    title: "Secure Connections",
    description: "Implement OAuth, API keys, and encryption to ensure secure data transfer."
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks by connecting your tools and triggering actions automatically."
  },
  {
    icon: Database,
    title: "Legacy System Integration",
    description: "Bridge the gap between modern applications and existing legacy systems."
  },
]

const integrations = [
  "Payment Gateways", "CRM Systems", "ERP Solutions", "Email Marketing",
  "Social Media", "Analytics Platforms", "Cloud Storage", "Communication Tools",
  "E-commerce Platforms", "Accounting Software"
]

export default function APIIntegrationsPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "API & Integrations" }]}
        subtitle="Our Services"
        title="API & Integrations"
        description="Connect your systems, automate workflows, and unlock the full potential of your technology stack with our expert API development and integration services."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Portfolio", href: "/portfolio" }}
        imageSrc="/images/hero/api-integrations.png"
        imageAlt="Data center servers with glowing network connectivity"
      />

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Our Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Integration Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We help businesses connect their digital ecosystem for improved efficiency and data flow.
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

      {/* Integration Partners */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">We Integrate With</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Platforms</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-card rounded-full text-foreground font-medium border border-border/50"
              >
                {integration}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Integrate</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Assess", desc: "Analyze your current systems and integration needs" },
              { step: "2", title: "Design", desc: "Create a robust integration architecture" },
              { step: "3", title: "Build", desc: "Develop secure, scalable API connections" },
              { step: "4", title: "Monitor", desc: "Ensure ongoing performance and reliability" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need to Connect Your Systems?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {"Let's discuss how we can help you create a seamless, integrated technology ecosystem."}
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">
              Talk to Our Experts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
