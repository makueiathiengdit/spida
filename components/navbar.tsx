"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  Globe,
  Code2,
  Plug,
  BarChart3,
  Server,
  HeartHandshake,
  Landmark,
  GraduationCap,
  Hotel,
  ShoppingCart,
  Radio,
  Building2,
  Stethoscope,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

type MenuItem = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

const services: MenuItem[] = [
  {
    name: "Web Design & Development",
    href: "/services/web-design-development",
    description:
      "Responsive, high-performance websites and web apps built to convert.",
    icon: Globe,
    image: "/images/hero/web-design.png",
  },
  {
    name: "Custom Software Development",
    href: "/services/custom-software",
    description:
      "Tailored applications engineered around your unique business logic.",
    icon: Code2,
    image: "/images/hero/custom-software.png",
  },
  {
    name: "API & Integrations",
    href: "/services/api-integrations",
    description:
      "Connect your systems with secure, scalable APIs and integrations.",
    icon: Plug,
    image: "/images/hero/api-integrations.png",
  },
  {
    name: "Data Analytics",
    href: "/services/data-analytics",
    description:
      "Turn raw data into dashboards and insights that drive decisions.",
    icon: BarChart3,
    image: "/images/hero/data-analytics.png",
  },
  {
    name: "Web Hosting",
    href: "/services/web-hosting",
    description:
      "Reliable managed hosting with monitoring, backups, and security.",
    icon: Server,
    image: "/images/hero/web-hosting.png",
  },
  {
    name: "Network Infrastructure",
    href: "/services/network-infrastructure",
    description: "LAN, WAN, wireless, cabling, and security - we do it all.",
    icon: Network,
    image: "/images/hero/network1.webp",
  },

  // {
  //   name: "Event Ticketing ",
  //   href: "/services/ticketing",
  //   description: "Book tickets for sport events, shows, festivals and concepts",
  //   icon: Network,
  //   image: "/images/hero/telecom.png",
  // },
];

const industries: MenuItem[] = [
  {
    name: "NGO",
    href: "/industries/ngo",
    description:
      "Donor platforms and impact tools for non-profit organizations.",
    icon: HeartHandshake,
    image: "/images/hero/ngo.png",
  },
  {
    name: "Finance",
    href: "/industries/finance",
    description: "Secure, compliant solutions for banking and fintech.",
    icon: Landmark,
    image: "/images/hero/finance.png",
  },
  {
    name: "Education",
    href: "/industries/education",
    description: "Learning platforms and student management systems.",
    icon: GraduationCap,
    image: "/images/hero/education.png",
  },
  {
    name: "Hospitality",
    href: "/industries/hospitality",
    description: "Booking, guest experience, and operations software.",
    icon: Hotel,
    image: "/images/hero/hospitality.png",
  },
  {
    name: "Retail",
    href: "/industries/retail",
    description: "E-commerce, POS, and inventory solutions that scale.",
    icon: ShoppingCart,
    image: "/images/hero/retail.png",
  },
  {
    name: "Telecom & Media",
    href: "/industries/telecom",
    description: "Streaming, content delivery, and subscriber platforms.",
    icon: Radio,
    image: "/images/hero/telecom.png",
  },
  {
    name: "Public Sector",
    href: "/industries/public-sector",
    description: "Citizen services and digital government infrastructure.",
    icon: Building2,
    image: "/images/hero/public-sector.png",
  },
  {
    name: "Healthcare",
    href: "/industries/healthcare",
    description: "Patient-centered platforms and secure clinical systems.",
    icon: Stethoscope,
    image: "/images/hero/pharmacy.webp",
  },
];

function MegaMenu({
  label,
  items,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  items: MenuItem[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div onMouseEnter={onOpen} onMouseLeave={onClose} className="static">
      <Button
        variant="ghost"
        className="flex items-center gap-1 font-medium"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </Button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="w-full overflow-hidden rounded-b-lg border border-t-0 border-border bg-popover shadow-xl">
              <div className="flex items-center justify-between border-b border-border bg-secondary/60 px-6 py-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  {label}
                </p>
                <Link
                  href={label === "Services" ? "/services" : "/industries"}
                  className="text-sm font-medium text-primary hover:underline"
                  onClick={onClose}
                >
                  View all
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
                {items.map((item) => {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center gap-4 rounded-md p-3 transition-colors hover:bg-secondary"
                    >
                      <span className="relative h-16 w-24 shrink-0 overflow-hidden rounded-md bg-secondary">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="96px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "industries" | null>(
    null,
  );
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = (menu: "services" | "industries") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden md:block border-b border-border bg-foreground text-background">
        <div className="container mx-auto flex h-9 items-center justify-end gap-6 px-4 lg:px-8 text-xs">
          <a
            href="mailto:contact@spida.com"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            contact@spida.com
          </a>
          <a
            href="tel:+15551234567"
            className="flex items-center gap-1.5 hover:text-primary transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            +1 (555) 123-4567
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <div className="relative border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/spida-logo-navy.png"
              alt="Spida"
              width={1400}
              height={220}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            <MegaMenu
              label="Services"
              items={services}
              isOpen={openMenu === "services"}
              onOpen={() => open("services")}
              onClose={scheduleClose}
            />
            <MegaMenu
              label="Industries"
              items={industries}
              isOpen={openMenu === "industries"}
              onOpen={() => open("industries")}
              onClose={scheduleClose}
            />

            <Button variant="ghost" className="font-medium" asChild>
              <Link href="/portfolio">Case Studies</Link>
            </Button>
            <Button variant="ghost" className="font-medium" asChild>
              <Link href="/about">About</Link>
            </Button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button asChild className="font-semibold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>
      </div>

      {/* Announcement banner (IBM-style) */}
      <Link
        href="/about"
        className="group block bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
      >
        <div className="container mx-auto flex items-center justify-center gap-2 px-4 lg:px-8 py-2.5 text-center text-sm">
          <span className="font-semibold">Engineering the future</span>
          <span className="hidden sm:inline text-primary-foreground/85">
            Spida recognized among top custom software partners of 2026
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-background max-h-[calc(100vh-6.5rem)] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="space-y-1">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Services
              </p>
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex gap-3 py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      <span className="block font-medium">{service.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {service.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="space-y-1 border-t border-border pt-4">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Industries
              </p>
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <Link
                    key={industry.href}
                    href={industry.href}
                    className="flex gap-3 py-2 text-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>
                      <span className="block font-medium">{industry.name}</span>
                      <span className="block text-xs text-muted-foreground">
                        {industry.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="space-y-2 border-t border-border pt-4">
              <Link
                href="/portfolio"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>

            <div className="border-t border-border pt-4">
              <Button asChild className="w-full font-semibold">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
