"use client";

import { useState } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@spidasystems.com",
    description: "Send us an email anytime",
  },
  // TODO: restore once we have a phone number
  // {
  //   icon: Phone,
  //   title: "Phone",
  //   value: "+1 (555) 123-4567",
  //   description: "Mon-Fri from 9am to 6pm",
  // },
  {
    icon: MapPin,
    title: "Office",
    value: "Spida House",
    description: "Juba, South Sudan",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "9:00 AM - 6:00 PM",
    description: "Monday to Friday",
  },
];

const services = [
  "Web Design & Development",
  "Custom Software Development",
  "API & Integrations",
  "Data Analytics",
  "Web Hosting",
  "Other",
];

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    setIsSubmitted(true);
  };

  return (
    <div>
      <HeroSection
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        subtitle="Get in Touch"
        title="Contact Us"
        description="Ready to start your project? Have questions about our services? We'd love to hear from you. Reach out and let's discuss how we can help you achieve your goals."
        imageSrc="/images/hero/contact.png"
        imageAlt="Business professional on a video call in a bright modern office"
      />

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, need technical consultation,
                or just want to learn more about how we can help your business,
                we are here to assist you.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-foreground">{item.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we will get back to you within
                    24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Your message has been sent successfully. We will get
                        back to you soon.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Smith"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            placeholder="Your Company"
                            value={formState.company}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                company: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interested In</Label>
                          <select
                            id="service"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                            value={formState.service}
                            onChange={(e) =>
                              setFormState({
                                ...formState,
                                service: e.target.value,
                              })
                            }
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>
                                {service}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or inquiry..."
                          rows={5}
                          required
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              message: e.target.value,
                            })
                          }
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Have questions? Here are some common ones we receive.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
            {[
              {
                q: "What is your typical project timeline?",
                a: "Project timelines vary based on scope, but typically range from 4-16 weeks.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes, we offer maintenance and support packages for all our projects.",
              },
              {
                q: "How do you handle project pricing?",
                a: "We provide detailed quotes after understanding your requirements through a consultation.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
