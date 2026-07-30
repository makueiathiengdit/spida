import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  breadcrumbs?: Breadcrumb[];
  imageSrc?: string;
  imageAlt?: string;
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  visual?: ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  description,
  breadcrumbs,
  imageSrc,
  imageAlt,
  primaryAction,
  secondaryAction,
  visual,
}: HeroSectionProps) {
  const hasImage = Boolean(imageSrc);
  const useVisual = !hasImage && Boolean(visual);

  const content = (
    <div className={hasImage ? "lg:w-[54%]" : useVisual ? "" : "max-w-3xl"}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-primary font-medium hover:underline"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-muted-foreground">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-muted-foreground/50" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      {subtitle && (
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
          {subtitle}
        </p>
      )}
      <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-[1.1]">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl text-pretty">
        {description}
      </p>
      {(primaryAction || secondaryAction) && (
        <div className="flex flex-col sm:flex-row gap-4">
          {primaryAction && (
            <Button size="lg" asChild className="font-semibold">
              <Link href={primaryAction.href}>
                {primaryAction.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          {secondaryAction && (
            <Button
              size="lg"
              variant="outline"
              asChild
              className="font-semibold"
            >
              <Link href={secondaryAction.href}>{secondaryAction.label}</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );

  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      {/* Full-bleed hero image on the right that fades into the text area */}
      {hasImage && (
        <div className="relative w-full lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%]">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt || ""}
            className="h-64 w-full object-cover sm:h-80 lg:h-full"
          />
          {/* Wide horizontal fade into the light background (desktop) */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-secondary via-secondary/70 to-transparent lg:block"
            aria-hidden="true"
          />
          {/* Vertical fade for mobile stacking */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-secondary to-transparent lg:hidden"
            aria-hidden="true"
          />
        </div>
      )}

      <div
        className="absolute inset-0 grid-overlay opacity-40"
        aria-hidden="true"
      />

      <div className="container relative mx-auto px-4 lg:px-8 py-12 lg:py-28">
        {useVisual ? (
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {content}
            <div className="relative">{visual}</div>
          </div>
        ) : (
          content
        )}
      </div>
    </section>
  );
}
