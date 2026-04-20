import { useEffect, useRef } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { getServiceBySlug, services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

/** Split a string into two roughly equal paragraphs at the period nearest the middle. */
function splitDescription(text: string): [string, string] {
  const mid = Math.floor(text.length / 2);
  const periodAfter = text.indexOf(".", mid);
  const periodBefore = text.lastIndexOf(".", mid);

  let splitIdx: number;
  if (periodAfter === -1 && periodBefore === -1) return [text, ""];
  if (periodAfter === -1) splitIdx = periodBefore;
  else if (periodBefore === -1) splitIdx = periodAfter;
  else
    splitIdx =
      mid - periodBefore <= periodAfter - mid ? periodBefore : periodAfter;

  const first = text.slice(0, splitIdx + 1).trim();
  const second = text.slice(splitIdx + 1).trim();
  return [first, second];
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const pageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const otherRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Komfort iQ HVAC`;
    }
  }, [service]);

  useEffect(() => {
    if (!service) return;

    const page = pageRef.current;
    if (!page) return;

    const refreshTimeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    const ctx = gsap.context(() => {
      /* --- Intro --- */
      if (introRef.current) {
        const els = introRef.current.querySelectorAll(".anim-intro");
        gsap.fromTo(
          els,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: introRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      /* --- Image clip-path reveal + parallax --- */
      if (imageRevealRef.current) {
        const img = imageRevealRef.current.querySelector("img");

        gsap.fromTo(
          imageRevealRef.current,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: imageRevealRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: imageRevealRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      }

      /* --- Features rows --- */
      if (featuresRef.current) {
        const rows = featuresRef.current.querySelectorAll(".feature-row");
        gsap.fromTo(
          rows,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );

        // Stacked images reveal
        const featureImgs = featuresRef.current.querySelectorAll(".features-img");
        gsap.fromTo(
          featureImgs,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 72%",
              once: true,
            },
          }
        );
      }

      /* --- Benefits --- */
      if (benefitsRef.current) {
        const items = benefitsRef.current.querySelectorAll(".benefit-item");
        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: benefitsRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );
      }

      /* --- Other services --- */
      if (otherRef.current) {
        const cards = otherRef.current.querySelectorAll(".other-card");
        gsap.fromTo(
          cards,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: otherRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      /* --- CTA --- */
      if (ctaRef.current) {
        const els = ctaRef.current.querySelectorAll(".anim-cta");
        gsap.fromTo(
          els,
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );
      }
    }, page);

    return () => {
      clearTimeout(refreshTimeout);
      ctx.revert();
    };
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const serviceIndex = services.findIndex((s) => s.id === service.id);
  const serviceNumber = String(serviceIndex + 1).padStart(2, "0");
  const otherServices = services.filter((s) => s.id !== service.id);
  const [descFirst, descSecond] = splitDescription(service.fullDesc);

  return (
    <div ref={pageRef}>
      {/* 1 ---- PageBanner ---- */}
      <PageBanner
        title={service.title}
        subtitle={service.shortDesc}
        backgroundImage={service.bannerImage}
      />

      {/* 2 ---- Back link ---- */}
      <div className="bg-background">
        <div className="container mx-auto px-4 pt-10 md:pt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <span aria-hidden>&larr;</span>
            <span>All Services</span>
          </Link>
        </div>
      </div>

      {/* 3 ---- Intro section ---- */}
      <section ref={introRef} className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Kicker */}
          <div className="anim-intro flex items-center gap-3 mb-6">
            <span className="block w-10 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
              Service {serviceNumber}
            </span>
          </div>

          {/* Headline */}
          <h2 className="anim-intro text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground mb-10 md:mb-14 max-w-4xl">
            {service.title}
          </h2>

          {/* Two-column body text */}
          <div className="anim-intro grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {descFirst}
            </p>
            {descSecond && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {descSecond}
              </p>
            )}
          </div>

          {/* Full-width image with clip-path reveal */}
          <div
            ref={imageRevealRef}
            className="relative w-full aspect-[16/9] overflow-hidden"
            style={{ clipPath: "inset(100% 0 0 0)" }}
          >
            <img
              src={service.contentImage}
              alt={`${service.title} service`}
              className="w-full h-full object-cover will-change-transform"
            />
          </div>
        </div>
      </section>

      {/* 4 ---- Features section — text + image ---- */}
      <section className="bg-background border-t border-border py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="container mx-auto px-4">
          <div ref={featuresRef}>
            <div className="lg:flex lg:items-center lg:gap-16 xl:gap-20">

              {/* Left — kicker + features list */}
              <div className="lg:flex-1">
                <div className="flex items-center gap-3 mb-8 md:mb-10">
                  <span className="block w-10 h-[2px] bg-primary" />
                  <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
                    What We Offer
                  </span>
                </div>

                <h3 className="feature-row text-3xl md:text-4xl font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground mb-10 md:mb-14">
                  Capabilities <span className="text-primary">&</span> Scope
                </h3>

                <div className="border-t border-border">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="feature-row flex items-center gap-5 md:gap-8 py-5 md:py-6 border-b border-border group"
                    >
                      <span className="text-xs font-heading font-bold text-primary tabular-nums shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px w-6 bg-border group-hover:bg-primary/40 transition-colors shrink-0" />
                      <span className="text-base md:text-lg text-foreground font-medium group-hover:text-primary transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — single image */}
              <div className="lg:w-[42%] xl:w-[40%] flex-shrink-0 mt-12 lg:mt-0">
                <div className="features-img relative aspect-[3/4] overflow-hidden">
                  <img
                    src={service.detailImage}
                    alt={`${service.shortTitle} equipment detail`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 5 ---- Benefits section (dark) ---- */}
      <section
        ref={benefitsRef}
        className="py-16 md:py-24"
        style={{ background: "hsl(var(--foreground))" }}
      >
        <div className="container mx-auto px-4">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
              Key Benefits
            </span>
          </div>

          {/* Headline */}
          <h3 className="benefit-item text-3xl md:text-4xl lg:text-5xl font-heading font-black uppercase leading-[0.95] tracking-tight text-background mb-12 md:mb-16 max-w-2xl">
            Why Choose{" "}
            <span className="text-primary">{service.shortTitle}</span>
          </h3>

          {/* Benefits 2-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="benefit-item flex items-start gap-5">
                <span className="text-3xl font-heading font-black text-primary leading-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-background/75 text-lg leading-relaxed pt-1">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 ---- Other Services section ---- */}
      <section ref={otherRef} className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Kicker */}
          <div className="flex items-center gap-3 mb-12 md:mb-16">
            <span className="block w-10 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
              Explore More
            </span>
          </div>

          {/* Grid of other services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border border border-border">
            {otherServices.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  className="other-card group flex flex-col items-start gap-4 p-6 md:p-8 bg-background hover:bg-accent/40 transition-colors"
                >
                  <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                    {s.shortTitle}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary transition-colors mt-auto" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7 ---- CTA section (dark) ---- */}
      <section
        ref={ctaRef}
        className="py-20 md:py-32"
        style={{ background: "hsl(var(--foreground))" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            {/* Kicker */}
            <div className="anim-cta flex items-center gap-3 mb-6">
              <span className="block w-10 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
                Get Started
              </span>
            </div>

            {/* Headline */}
            <h2 className="anim-cta text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase leading-[0.95] tracking-tight text-background mb-10">
              Ready for{" "}
              <span className="text-primary">{service.shortTitle}?</span>
            </h2>

            {/* Contact details */}
            <div className="anim-cta flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 mb-12 text-background/70">
              <a
                href="tel:+19864974822"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">(986) 497-4822</span>
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Boise, ID</span>
              </span>
            </div>

            {/* CTA button */}
            <Link
              to="/contact"
              className="anim-cta inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-primary/90 transition-colors"
            >
              Schedule Service
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
