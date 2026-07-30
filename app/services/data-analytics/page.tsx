import type { Metadata } from "next"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, PieChart, TrendingUp, Database, Target, Brain } from "lucide-react"

export const metadata: Metadata = {
  title: "Data Analytics & Business Intelligence in South Sudan",
  description:
    "Turn your organization's data into dashboards, reports, and predictive insights with Spida's data analytics and business intelligence services in South Sudan.",
  keywords: [
    "data analytics South Sudan",
    "business intelligence Juba",
    "data visualization South Sudan",
    "predictive analytics South Sudan",
    "KPI dashboards South Sudan",
  ],
  alternates: {
    canonical: "/services/data-analytics",
  },
  openGraph: {
    title: "Data Analytics Services in South Sudan | Spida",
    description:
      "Unlock the power of your data with comprehensive analytics solutions that help organizations in South Sudan make data-driven decisions.",
    url: "/services/data-analytics",
    images: [{ url: "/images/hero/data-analytics.png", width: 1200, height: 630 }],
  },
}

const features = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Transform raw data into meaningful insights with custom dashboards and reports."
  },
  {
    icon: PieChart,
    title: "Data Visualization",
    description: "Interactive charts and graphs that make complex data easy to understand."
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Use historical data to forecast trends and make informed business decisions."
  },
  {
    icon: Database,
    title: "Data Warehousing",
    description: "Centralize your data from multiple sources for comprehensive analysis."
  },
  {
    icon: Target,
    title: "KPI Tracking",
    description: "Monitor key performance indicators in real-time to stay on track with your goals."
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Leverage AI to uncover patterns and automate data-driven decisions."
  },
]

const useCases = [
  { title: "Sales Analytics", description: "Track revenue, conversions, and sales team performance" },
  { title: "Customer Insights", description: "Understand customer behavior and preferences" },
  { title: "Operational Efficiency", description: "Identify bottlenecks and optimize processes" },
  { title: "Financial Reporting", description: "Automate financial reports and forecasting" },
  { title: "Marketing ROI", description: "Measure campaign effectiveness across channels" },
  { title: "Supply Chain", description: "Optimize inventory and logistics decisions" },
]

export default function DataAnalyticsPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }, { label: "Data Analytics" }]}
        subtitle="Our Services"
        title="Data Analytics"
        description="Unlock the power of your data with our comprehensive analytics solutions. We help you make data-driven decisions that propel your business forward."
        primaryAction={{ label: "Start Analyzing", href: "/contact" }}
        secondaryAction={{ label: "View Portfolio", href: "/portfolio" }}
        imageSrc="/images/hero/data-analytics.png"
        imageAlt="Analyst reviewing data dashboards and charts on large screens"
      />

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Our Solutions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Analytics Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From basic reporting to advanced machine learning, we cover all your analytics needs.
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

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Applications</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Use Cases</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">Technology</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Tools We Use</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {["Power BI", "Tableau", "Python", "R", "SQL", "Apache Spark", "Google Analytics", "Looker", "Metabase", "Grafana"].map((tool, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-secondary rounded-full text-foreground font-medium border border-border/50"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 hero-pattern">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Harness Your Data?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {"Let's transform your data into actionable insights that drive business growth."}
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            <Link href="/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
