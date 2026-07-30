import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, Code2, Plug, Radio, Phone, BarChart3, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "High-performance websites for telecom providers and media companies.",
    href: "/services/web-design-development"
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Billing systems, subscriber management, and content delivery platforms.",
    href: "/services/custom-software"
  },
  {
    icon: Radio,
    title: "Network Monitoring & Alerts",
    description: "Real-time monitoring systems to track network performance and detect issues.",
    href: "/services/custom-software"
  },
  {
    icon: Phone,
    title: "VAS Services",
    description: "Missed Call Notification, Call Me Back, and other value-added services.",
    href: "/services/custom-software"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Subscriber analytics, usage patterns, and business intelligence solutions.",
    href: "/services/data-analytics"
  },
]

const vasServices = [
  { title: "Missed Call Notification", description: "Alert subscribers about missed calls when offline or busy" },
  { title: "Call Me Back", description: "Allow callers to request callbacks from busy subscribers" },
  { title: "SMS Gateway", description: "Enterprise SMS solutions for marketing and notifications" },
  { title: "USSD Applications", description: "Interactive mobile services without internet connectivity" },
  { title: "IVR Systems", description: "Automated voice response systems for customer service" },
  { title: "Ringback Tones", description: "Customizable caller tunes for subscribers" },
]

const systems = [
  {
    name: "Subscriber Billing & Charging System",
    description: "A prepaid/postpaid billing engine for mobile and internet service providers, handling rating, invoicing, and payment collection."
  },
  {
    name: "USSD & VAS Platform",
    description: "Build and manage value-added services - missed call alerts, call-me-back, USSD menus - that work on any handset without internet."
  },
  {
    name: "Network Operations & Monitoring Dashboard",
    description: "Real-time visibility into network uptime, outages, and performance across regions to speed up incident response."
  },
  {
    name: "Content Delivery & Streaming Platform",
    description: "Manage and distribute digital media and broadcast content to subscribers across varying network conditions."
  },
  {
    name: "SMS & Bulk Messaging Gateway",
    description: "An enterprise messaging platform for notifications, marketing campaigns, and public alerts at scale."
  },
]

const benefits = [
  "Reduce network downtime",
  "Increase subscriber satisfaction",
  "Generate new revenue streams",
  "Improve operational efficiency",
  "Real-time performance insights",
  "Scalable infrastructure",
]

export default function TelecomMediaPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: "Telecom & Media" }]}
        subtitle="Industries We Serve"
        title="Telecom & Media"
        description="We deliver innovative solutions for telecommunications and media companies, from network monitoring systems to value-added services that enhance subscriber experience."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/telecom.png"
        imageAlt="Telecommunications tower with antennas against a bright sky"
      />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services for Telecom</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions for the telecommunications and media industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
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
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Systems We Build</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Telecom-Specific Systems</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purpose-built software designed around how operators and media companies actually run networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-2">{system.name}</h3>
                <p className="text-muted-foreground">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VAS Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Value Added Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">VAS Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Generate additional revenue with our proven value-added service platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vasServices.map((service, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
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
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Why Partner With Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Telecom Expertise You Can Trust
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team has deep experience in the telecommunications industry, understanding the unique 
                challenges of network operators, MVNOs, and media companies.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">5M+</p>
                  <p className="text-sm text-muted-foreground">Subscribers served</p>
                </div>
                <div className="bg-card/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">System uptime</p>
                </div>
                <div className="bg-card/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Telecom clients</p>
                </div>
                <div className="bg-card/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">Years experience</p>
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
            Ready to Enhance Your Network?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {"Let's discuss how we can help you improve subscriber experience and operational efficiency."}
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
