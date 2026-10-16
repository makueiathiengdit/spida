import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  {
    name: "Web Design & Development",
    href: "/services/web-design-development",
  },
  { name: "Custom Software Development", href: "/services/custom-software" },
  { name: "API & Integrations", href: "/services/api-integrations" },
  { name: "Data Analytics", href: "/services/data-analytics" },
  { name: "Web Hosting", href: "/services/web-hosting" },
  { name: "Network Infrastructure", href: "/services/network-infrastructure" },
];

const industries = [
  { name: "NGO", href: "/industries/ngo" },
  { name: "Finance", href: "/industries/finance" },
  { name: "Education", href: "/industries/education" },
  { name: "Hospitality", href: "/industries/hospitality" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Telecom & Media", href: "/industries/telecom" },
  { name: "Public Sector", href: "/industries/public-sector" },
  { name: "Healthcare", href: "/industries/healthcare" },
];

const company = [
  { name: "About Us", href: "/about" },
  // { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/logo/spida-logo-white.png"
              alt="Spida"
              width={1400}
              height={220}
              className="h-8 w-auto"
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Fooundational Systems for South Sudan
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4 text-background" />
                <span>info@spidasystems.com</span>
              </div>
              {/* TODO: restore once we have a phone number
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4 text-background" />
                <span>+211 912 399 000</span>
              </div>
              */}
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4 text-background" />
                <span>Juba, South Sudan</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.href}>
                  <Link
                    href={industry.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/15">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              &copy; {new Date().getFullYear()} Spida. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
