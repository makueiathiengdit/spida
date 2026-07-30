import type { Metadata } from "next"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Server, Shield, Zap, Clock, HeadphonesIcon, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Web Hosting Services in South Sudan",
  description:
    "Reliable, secure, and locally-supported web hosting plans for websites and applications serving businesses across Juba and South Sudan.",
  keywords: [
    "web hosting South Sudan",
    "website hosting Juba",
    "managed hosting South Sudan",
    "server hosting South Sudan",
  ],
  alternates: {
    canonical: "/services/web-hosting",
  },
  openGraph: {
    title: "Web Hosting Services in South Sudan | Spida",
    description:
      "Reliable, secure, and scalable hosting solutions that keep websites and applications running smoothly for businesses in South Sudan.",
    url: "/services/web-hosting",
    images: [{ url: "/images/hero/web-hosting.png", width: 1200, height: 630 }],
  },
}

const features = [
  {
    icon: Server,
    title: "Managed Hosting",
    description: "Fully managed server infrastructure so you can focus on your business."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "SSL certificates, firewalls, and regular security updates to protect your site."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Optimized servers with SSD storage and caching for blazing-fast load times."
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Reliable hosting with guaranteed uptime to keep your business running."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock technical support from our expert team."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivery network for fast loading speeds worldwide."
  },
]

const plans = [
  {
    name: "Starter",
    description: "Perfect for small websites and blogs",
    features: ["5GB Storage", "50GB Bandwidth", "Free SSL", "Daily Backups", "Email Support"]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    features: ["25GB Storage", "Unlimited Bandwidth", "Free SSL", "Daily Backups", "Priority Support", "Staging Environment"]
  },
  {
    name: "Enterprise",
    description: "For high-traffic applications",
    features: ["100GB+ Storage", "Unlimited Bandwidth", "Free SSL", "Real-time Backups", "24/7 Phone Support", "Dedicated Resources", "Custom Solutions"]
  },
]

export default function WebHostingPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Web Hosting" }]}
        subtitle="Our Services"
        title="Web Hosting"
        description="Reliable, secure, and scalable hosting solutions that keep your websites and applications running smoothly around the clock."
        primaryAction={{ label: "Get Hosted", href: "/contact" }}
        secondaryAction={{ label: "View Plans", href: "#plans" }}
        imageSrc="/images/hero/web-hosting.png"
        imageAlt="Modern data center corridor with illuminated server racks"
      />

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Why Our Hosting</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hosting Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade hosting infrastructure at competitive prices.
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

      {/* Plans Section */}
      <section id="plans" className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hosting Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that fits your needs. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`border-border/50 ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader className="text-center">
                  {index === 1 && (
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Most Popular</span>
                  )}
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <ul className="mt-6 space-y-3 text-left">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-foreground">
                        <ArrowRight className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full" variant={index === 1 ? "default" : "outline"}>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Custom Hosting Solutions?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            We offer tailored hosting packages for businesses with specific requirements.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
