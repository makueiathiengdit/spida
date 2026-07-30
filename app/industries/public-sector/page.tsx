import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, Code2, Plug, BarChart3, Building, Users, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Accessible, citizen-friendly government portals and information sites.",
    href: "/services/web-design-development"
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "e-Government systems, case management, and citizen service platforms.",
    href: "/services/custom-software"
  },
  {
    icon: Plug,
    title: "API & Integration",
    description: "Connect disparate government systems for unified service delivery.",
    href: "/services/api-integrations"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Public data dashboards, performance metrics, and policy analytics.",
    href: "/services/data-analytics"
  },
]

const solutions = [
  { icon: Building, title: "e-Government Portals", description: "One-stop digital services for citizens" },
  { icon: Users, title: "Case Management", description: "Streamlined workflow for government services" },
  { icon: Globe, title: "Open Data Platforms", description: "Transparent data sharing with the public" },
]

const benefits = [
  "Improve citizen satisfaction",
  "Increase operational efficiency",
  "Enhance transparency",
  "Reduce processing times",
  "Enable data-driven policy",
  "Ensure accessibility compliance",
]

export default function PublicSectorPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: "Public Sector" }]}
        subtitle="Industries We Serve"
        title="Public Sector"
        description="We partner with government agencies to deliver digital transformation solutions that improve citizen services, enhance transparency, and increase operational efficiency."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/public-sector.png"
        imageAlt="Modern government building with a citizen using a digital service kiosk"
      />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services for Government</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology solutions that help government agencies serve citizens better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Solutions Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Government Technology</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border/50 text-center">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
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
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Why Partner With Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Digital Government Excellence
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We understand the unique requirements of government agencies, including security, 
                accessibility, and compliance. Our solutions are designed to meet these standards.
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
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Commitment</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground">Security First</h4>
                  <p className="text-muted-foreground text-sm">Enterprise-grade security for sensitive data</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground">Accessibility</h4>
                  <p className="text-muted-foreground text-sm">WCAG compliant solutions for all citizens</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground">Transparency</h4>
                  <p className="text-muted-foreground text-sm">Open, accountable development practices</p>
                </div>
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-foreground">Scalability</h4>
                  <p className="text-muted-foreground text-sm">Solutions that grow with your needs</p>
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
            Ready to Modernize Government Services?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {"Let's discuss how we can help you deliver better services to citizens."}
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
