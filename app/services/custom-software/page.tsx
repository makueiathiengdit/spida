import type { Metadata } from "next"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Layers, Database, Cloud, Cog, Users, LineChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Custom Software Development in South Sudan",
  description:
    "Bespoke enterprise applications, CRM/ERP systems, and legacy modernization built for organizations across South Sudan. From concept to deployment.",
  keywords: [
    "custom software development South Sudan",
    "bespoke software Juba",
    "enterprise application development South Sudan",
    "ERP software South Sudan",
    "legacy system modernization South Sudan",
  ],
  alternates: {
    canonical: "/services/custom-software",
  },
  openGraph: {
    title: "Custom Software Development in South Sudan | Spida",
    description:
      "We build bespoke software solutions that address the unique business challenges of organizations across South Sudan.",
    url: "/services/custom-software",
    images: [{ url: "/images/hero/custom-software.png", width: 1200, height: 630 }],
  },
}

const features = [
  {
    icon: Layers,
    title: "Enterprise Applications",
    description: "Scalable enterprise solutions that streamline your business operations and boost productivity."
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Custom database design and optimization for efficient data management and retrieval."
  },
  {
    icon: Cloud,
    title: "Cloud Applications",
    description: "Cloud-native applications that leverage the power of modern cloud infrastructure."
  },
  {
    icon: Cog,
    title: "Legacy Modernization",
    description: "Transform outdated systems into modern, efficient applications without losing critical data."
  },
  {
    icon: Users,
    title: "CRM & ERP Systems",
    description: "Custom relationship and resource management systems tailored to your workflow."
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description: "Decision-support systems that turn your data into actionable business insights."
  },
]

const benefits = [
  "Tailored to your exact requirements",
  "Scalable architecture for growth",
  "Integration with existing systems",
  "Full ownership of source code",
  "Dedicated support team",
  "Comprehensive documentation",
]

export default function CustomSoftwarePage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Custom Software Development" }]}
        subtitle="Our Services"
        title="Custom Software Development"
        description="We build bespoke software solutions that address your unique business challenges. From concept to deployment, we deliver software that drives efficiency and growth."
        primaryAction={{ label: "Discuss Your Project", href: "/contact" }}
        secondaryAction={{ label: "View Portfolio", href: "/portfolio" }}
        imageSrc="/images/hero/custom-software.png"
        imageAlt="Software developer writing code on a dual-monitor setup"
      />

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">What We Build</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Custom Software Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We develop software that fits your business like a glove, not the other way around.
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

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Why Custom Software</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Benefits of Going Custom</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Off-the-shelf solutions often come with limitations. Custom software is designed specifically 
                for your business processes, giving you a competitive edge and the flexibility to adapt as you grow.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Development Stack</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Backend</h4>
                  <p className="text-muted-foreground text-sm">Node.js, Python, Java, .NET, Go</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
                  <p className="text-muted-foreground text-sm">React, Angular, Vue.js, Next.js</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Mobile</h4>
                  <p className="text-muted-foreground text-sm">React Native, Flutter, Swift, Kotlin</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Database</h4>
                  <p className="text-muted-foreground text-sm">PostgreSQL, MongoDB, MySQL, Redis</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cloud</h4>
                  <p className="text-muted-foreground text-sm">AWS, Azure, Google Cloud, Vercel</p>
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
            Have a Software Idea?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {"Let's turn your vision into reality. Our team is ready to help you build the perfect solution."}
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
