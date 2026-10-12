import type { Metadata } from "next"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Spida's portfolio of software, web, and infrastructure projects delivered for NGOs, banks, schools, hotels, retailers, and telecom operators across South Sudan.",
  keywords: [
    "software projects South Sudan",
    "web development portfolio Juba",
    "case studies South Sudan technology",
  ],
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Our Work | Software Projects Delivered in South Sudan",
    description:
      "A selection of Spida's software, web, and infrastructure projects across South Sudan and beyond.",
    url: "/portfolio",
    images: [{ url: "/images/hero/portfolio.png", width: 1200, height: 630 }],
  },
}

const projects = [
  {
    title: "Global Relief Foundation",
    category: "NGO",
    description: "A comprehensive donor management platform with online donation processing and impact reporting.",
    tags: ["React", "Node.js", "PostgreSQL"],
    results: "150% increase in online donations",
  },
  {
    title: "EduConnect LMS",
    category: "Education",
    description: "Learning management system serving 20,000+ students across 15 schools with virtual classrooms.",
    tags: ["Next.js", "Python", "AWS"],
    results: "40% reduction in admin time",
  },
  {
    title: "FinSecure Banking Portal",
    category: "Finance",
    description: "Secure online banking platform with real-time transactions and fraud detection.",
    tags: ["React", "Java", "Kubernetes"],
    results: "99.99% uptime achieved",
  },
  {
    title: "TelcoMonitor Pro",
    category: "Telecom",
    description: "Network monitoring system with real-time alerts serving 5M+ subscribers.",
    tags: ["Vue.js", "Go", "Redis"],
    results: "60% faster issue detection",
  },
  {
    title: "StayEase Booking",
    category: "Hospitality",
    description: "Direct booking engine and property management system for boutique hotels.",
    tags: ["Next.js", "Node.js", "MongoDB"],
    results: "60% more direct bookings",
  },
  {
    title: "RetailHub Commerce",
    category: "Retail",
    description: "Omnichannel e-commerce platform with inventory sync across 50+ locations.",
    tags: ["React", "Node.js", "Elasticsearch"],
    results: "45% revenue increase",
  },
  {
    title: "CitizenPortal",
    category: "Public Sector",
    description: "e-Government portal providing 100+ citizen services with accessible design.",
    tags: ["Angular", "Java", "PostgreSQL"],
    results: "70% digital adoption rate",
  },
  {
    title: "MissedCall Alert System",
    category: "Telecom",
    description: "VAS platform delivering missed call notifications to millions of subscribers.",
    tags: ["Python", "RabbitMQ", "MySQL"],
    results: "Serving 3M+ daily notifications",
  },
]

const categories = ["All", "NGO", "Finance", "Education", "Hospitality", "Retail", "Telecom", "Public Sector"]

export default function PortfolioPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
        subtitle="Our Work"
        title="Portfolio"
        description="Explore our successful projects across diverse industries. Each project represents our commitment to delivering innovative solutions that drive real business results."
        primaryAction={{ label: "Start Your Project", href: "/contact" }}
        imageSrc="/images/hero/portfolio.png"
        imageAlt="Creative team reviewing project work on a wall of screens"
      />

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Featured Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase our expertise and the results we deliver.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-2xl font-bold text-foreground mt-2">{project.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-accent">{project.results}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {"Let's discuss how we can help you achieve similar results for your business."}
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
