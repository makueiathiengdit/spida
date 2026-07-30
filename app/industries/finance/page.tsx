import type { Metadata } from "next"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, Code2, Plug, Cog, Shield, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Banking & Fintech Software in South Sudan",
  description:
    "Core banking, mobile money, and regulatory reporting systems for banks, SACCOs, and microfinance institutions in South Sudan, built for compliance and security.",
  keywords: [
    "core banking system South Sudan",
    "SACCO software South Sudan",
    "mobile money integration m-GURUSH MoMo",
    "fintech South Sudan",
    "microfinance software Juba",
    "Bank of South Sudan compliance software",
  ],
  alternates: {
    canonical: "/industries/finance",
  },
  openGraph: {
    title: "Finance & Banking Technology Solutions in South Sudan | Spida",
    description:
      "Secure, compliant financial technology for banks, SACCOs, microfinance institutions, and fintech firms operating in South Sudan.",
    url: "/industries/finance",
    images: [{ url: "/images/hero/finance.png", width: 1200, height: 630 }],
  },
}

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Secure, professional banking and fintech websites that build trust and drive conversions.",
    href: "/services/web-design-development"
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Trading platforms, risk management systems, and custom financial applications.",
    href: "/services/custom-software"
  },
  {
    icon: Plug,
    title: "API & Integration",
    description: "Connect with payment gateways, banking APIs, and financial data providers.",
    href: "/services/api-integrations"
  },
  {
    icon: Cog,
    title: "Process Automation",
    description: "Automate compliance workflows, reporting, and back-office operations.",
    href: "/services/api-integrations"
  },
]

const systems = [
  {
    name: "Core Banking & Microfinance Management System",
    description: "Manage customer accounts, savings groups, loans, and daily transactions for banks, SACCOs, and microfinance institutions."
  },
  {
    name: "Mobile Money Integration Platform",
    description: "Connect with m-GURUSH, MTN MoMo, and other regional mobile money providers for deposits, withdrawals, and merchant payments."
  },
  {
    name: "Loan Origination & Credit Scoring System",
    description: "Digitize loan applications, automate credit assessments, and track repayment schedules for lenders and SACCOs."
  },
  {
    name: "Digital Wallet & Remittance Platform",
    description: "A secure platform for domestic and diaspora remittances with real-time transaction tracking and notifications."
  },
  {
    name: "Regulatory Reporting & Compliance Dashboard",
    description: "Automated generation of reports for the Bank of South Sudan and other regulatory bodies, reducing manual compliance work."
  },
]

const benefits = [
  "PCI-DSS compliant solutions",
  "Bank-grade security standards",
  "Real-time transaction processing",
  "Regulatory compliance support",
  "Fraud detection capabilities",
  "Scalable infrastructure",
]

const expertise = [
  { title: "Banking", description: "Core banking systems, mobile banking, and digital transformation" },
  { title: "Insurance", description: "Claims processing, policy management, and customer portals" },
  { title: "Investment", description: "Portfolio management, trading platforms, and analytics" },
  { title: "Payments", description: "Payment processing, digital wallets, and merchant services" },
]

export default function FinancePage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: "Finance & Banking" }]}
        subtitle="Industries We Serve"
        title="Finance & Banking"
        description="We build secure, compliant financial technology solutions that help banks, insurance companies, and fintech firms innovate while maintaining the highest security standards."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/finance.png"
        imageAlt="Modern financial district with a professional using a secure banking app"
      />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services for Finance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade financial technology solutions built with security at the core.
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

      {/* Systems Section */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Systems We Build</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Finance-Specific Systems</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Purpose-built platforms for how banks, lenders, and fintechs actually move money.
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

      {/* Security & Compliance */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Security First</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for Compliance
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Financial services demand the highest levels of security and regulatory compliance. 
                We build solutions that meet industry standards and help you stay ahead of evolving regulations.
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
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="h-12 w-12 text-primary" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Security Standards</h3>
                  <p className="text-muted-foreground">Enterprise-grade protection</p>
                </div>
              </div>
              <div className="space-y-4">
                {expertise.map((item, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {"Let's build secure, compliant solutions that drive your business forward."}
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
