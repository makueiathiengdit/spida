import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, Code2, Plug, BookOpen, Users, CheckCircle2 } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Engaging educational websites and student portals that enhance the learning experience.",
    href: "/services/web-design-development"
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "University management systems, school ERPs, and learning management platforms.",
    href: "/services/custom-software"
  },
  {
    icon: Plug,
    title: "API & Integration",
    description: "Connect student information systems, payment gateways, and learning tools.",
    href: "/services/api-integrations"
  },
]

const solutions = [
  {
    icon: BookOpen,
    title: "Learning Management Systems",
    description: "Custom LMS platforms for online courses, assessments, and student progress tracking."
  },
  {
    icon: Users,
    title: "Student Information Systems",
    description: "Comprehensive systems for admissions, enrollment, grades, and academic records."
  },
  {
    icon: Globe,
    title: "Virtual Classrooms",
    description: "Interactive online learning environments with video, chat, and collaboration tools."
  },
]

const benefits = [
  "Improved student engagement",
  "Streamlined administrative processes",
  "Better communication with parents",
  "Real-time progress tracking",
  "Secure data management",
  "Mobile-friendly access",
]

export default function EducationPage() {
  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }, { label: "Education" }]}
        subtitle="Industries We Serve"
        title="Education"
        description="We empower educational institutions with technology that enhances learning outcomes, streamlines administration, and connects students, teachers, and parents effectively."
        primaryAction={{ label: "Get Started", href: "/contact" }}
        secondaryAction={{ label: "View Our Work", href: "/portfolio" }}
        imageSrc="/images/hero/education.png"
        imageAlt="Students using laptops in a modern university learning space"
      />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services for Education</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technology solutions designed to transform the educational experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education Technology</h2>
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
                Transform Your Institution
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We understand the unique needs of educational institutions. Our solutions help schools, 
                colleges, and universities deliver better educational outcomes while reducing administrative burden.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Case Study</h3>
              <p className="text-muted-foreground mb-4">
                We developed a comprehensive school management system for a network of 15 schools, 
                serving 20,000+ students and 1,500+ staff members.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">40%</p>
                  <p className="text-sm text-muted-foreground">Admin time saved</p>
                </div>
                <div className="bg-card/50 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">User satisfaction</p>
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
            Ready to Transform Education?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {"Let's build technology that empowers educators and inspires students."}
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
