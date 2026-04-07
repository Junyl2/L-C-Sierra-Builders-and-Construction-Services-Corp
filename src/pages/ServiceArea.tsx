import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Building2,
  Home,
  ArrowRight,
  Phone,
  Navigation,
  Clock,
  Shield,
} from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import PageBanner from "@/components/PageBanner";

const ServiceArea = () => {
  const introRef = useRef<HTMLElement>(null);
  const areasRef = useRef<HTMLElement>(null);
  const mapSectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  // Areas we serve - factual based on Elk Grove Village location
  const primaryAreas = [
    { name: "Elk Grove Village", isHQ: true },
    { name: "Arlington Heights", isHQ: false },
    { name: "Mount Prospect", isHQ: false },
    { name: "Des Plaines", isHQ: false },
    { name: "Schaumburg", isHQ: false },
    { name: "Rolling Meadows", isHQ: false },
  ];

  const additionalAreas = [
    "Palatine",
    "Hoffman Estates",
    "Itasca",
    "Wood Dale",
    "Bensenville",
    "Roselle",
  ];

  useEffect(() => {
    document.title = "Service Area | Sona HVAC";
  }, []);

  useEffect(() => {
    const intro = introRef.current;
    const areas = areasRef.current;
    const mapSection = mapSectionRef.current;
    const cta = ctaRef.current;

    if (!intro || !areas || !cta) return;

    // Small delay to ensure DOM is ready and Lenis is initialized
    const initTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      // Intro section animations
      const introContent = intro.querySelectorAll(".animate-intro");
      gsap.fromTo(
        introContent,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: intro,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Intro image animation
      const introImage = intro.querySelector(".intro-image");
      gsap.fromTo(
        introImage,
        { opacity: 0, clipPath: "inset(0 100% 0 0)" },
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: intro,
            start: "top 65%",
            once: true,
          },
        }
      );

      // Floating badges
      const badges = intro.querySelectorAll(".floating-badge");
      gsap.fromTo(
        badges,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          delay: 0.5,
          scrollTrigger: {
            trigger: intro,
            start: "top 65%",
            once: true,
          },
        }
      );

      // Areas section header
      const areasHeader = areas.querySelectorAll(".animate-header");
      gsap.fromTo(
        areasHeader,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: areas,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Primary area cards
      const primaryCards = areas.querySelectorAll(".primary-card");
      gsap.fromTo(
        primaryCards,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: areas,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Additional area tags
      const additionalTags = areas.querySelectorAll(".additional-tag");
      gsap.fromTo(
        additionalTags,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.5)",
          stagger: 0.06,
          scrollTrigger: {
            trigger: areas.querySelector(".additional-areas"),
            start: "top 80%",
            once: true,
          },
        }
      );

      // Map section
      if (mapSection) {
        const mapContent = mapSection.querySelectorAll(".animate-map");
        gsap.fromTo(
          mapContent,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: mapSection,
              start: "top 75%",
              once: true,
            },
          }
        );

        // Map visualization animation
        const mapViz = mapSection.querySelector(".map-visualization");
        gsap.fromTo(
          mapViz,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: mapSection,
              start: "top 70%",
              once: true,
            },
          }
        );

        // Location pin animation
        const pin = mapSection.querySelector(".location-pin");
        if (pin) {
          gsap.fromTo(
            pin,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.6,
              ease: "back.out(2)",
              delay: 0.5,
              scrollTrigger: {
                trigger: mapSection,
                start: "top 70%",
                once: true,
              },
            }
          );
        }
      }

      // CTA section
      const ctaContent = cta.querySelectorAll(".animate-cta");
      gsap.fromTo(
        ctaContent,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: cta,
            start: "top 75%",
            once: true,
          },
        }
      );
    });

    return () => {
      clearTimeout(initTimeout);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <PageBanner
        title="Service Area"
        subtitle="Serving Elk Grove Village and nearby suburbs"
        backgroundImage="/images/banners/service-area-banner.jpg"
      />

      {/* Introduction Section */}
      <section ref={introRef} className="relative py-24 md:py-32 overflow-hidden bg-background">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
          <span className="absolute -left-20 top-1/2 -translate-y-1/2 text-[400px] font-heading font-black text-primary/[0.02] leading-none select-none">
            IL
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Side - 5 cols */}
            <div className="lg:col-span-5">
              <div className="animate-intro flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Our Coverage
                </span>
              </div>

              <h2 className="animate-intro text-4xl md:text-5xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-6">
                Local Service,
                <br />
                <span className="text-primary">Local Experts</span>
              </h2>

              <p className="animate-intro text-muted-foreground text-lg leading-relaxed mb-6">
                Sona HVAC is based in Elk Grove Village, Illinois. We provide
                heating and cooling services to homeowners and businesses in Elk
                Grove Village and the surrounding northwest suburban communities.
              </p>

              <p className="animate-intro text-muted-foreground leading-relaxed mb-8">
                Being local means we understand the climate challenges of the
                Chicago suburbs and can respond quickly when you need service.
              </p>

              {/* Service Types */}
              <div className="animate-intro grid grid-cols-2 gap-4 mb-8">
                <div className="group flex items-center gap-4 p-5 bg-accent/30 hover:bg-accent/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm uppercase text-foreground">
                      Residential
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Homes & apartments
                    </p>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-5 bg-accent/30 hover:bg-accent/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm uppercase text-foreground">
                      Commercial
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Offices & businesses
                    </p>
                  </div>
                </div>
              </div>

              {/* Headquarters Card */}
              <div
                className="animate-intro relative p-6 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.95) 100%)",
                }}
              >
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-background/60 mb-1">
                      Headquarters
                    </p>
                    <p className="text-xl font-heading font-bold text-background">
                      1073 Florida Ln
                    </p>
                    <p className="text-background/80">
                      Elk Grove Village, IL 60007
                    </p>
                  </div>
                </div>
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
              </div>
            </div>

            {/* Image Side - 7 cols */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Main image */}
                <div
                  className="intro-image relative aspect-[4/3] overflow-hidden"
                  style={{ clipPath: "inset(0 100% 0 0)" }}
                >
                  <img
                    src="/images/service-area/neighborhood.jpg"
                    alt="Suburban neighborhood we serve"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>

                {/* Decorative frame */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-1/3 h-1/3 border-b-4 border-r-4 border-primary pointer-events-none" />

                {/* Accent bar */}
                <div className="absolute top-8 -left-2 md:top-12 md:-left-4 w-1 h-1/2 bg-gradient-to-b from-primary to-primary/40" />

                {/* Floating badge - Communities */}
                <div className="floating-badge absolute -bottom-6 left-6 md:-bottom-8 md:left-10 bg-primary p-5 md:p-6 shadow-2xl shadow-primary/30">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary-foreground/20 flex items-center justify-center">
                      <Navigation className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-heading font-black text-primary-foreground leading-none">
                        12+
                      </p>
                      <p className="text-xs uppercase tracking-widest text-primary-foreground/80 mt-1">
                        Communities
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating badge - Response */}
                <div className="floating-badge absolute top-6 -right-4 md:top-8 md:-right-8 bg-foreground text-background p-5 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-xl font-heading font-black leading-none">Fast</p>
                      <p className="text-xs text-background/60">Response</p>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section
        ref={areasRef}
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.95) 100%)",
        }}
      >
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="animate-header flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Communities We Serve
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>

            <h2 className="animate-header text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-background leading-[0.95] tracking-tight mb-6">
              Service <span className="text-primary">Areas</span>
            </h2>

            <p className="animate-header text-background/70 text-lg max-w-2xl mx-auto">
              We proudly serve these northwest suburban Chicago communities with
              professional HVAC services.
            </p>
          </div>

          {/* Primary Areas Grid */}
          <div className="mb-16">
            <h3 className="animate-header text-center text-xs font-semibold uppercase tracking-widest text-primary mb-8">
              Primary Service Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {primaryAreas.map((area, idx) => (
                <div
                  key={area.name}
                  className="primary-card group relative p-6 bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-all border-l-4 border-transparent hover:border-primary"
                >
                  {area.isHQ && (
                    <span className="absolute -top-2 -right-2 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                      HQ
                    </span>
                  )}
                  <div className="w-12 h-12 bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-heading font-bold text-sm uppercase text-background group-hover:text-primary transition-colors">
                    {area.name}
                  </p>
                  <span className="absolute bottom-2 right-3 text-4xl font-heading font-black text-background/[0.05] leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Areas */}
          <div className="additional-areas">
            <h3 className="animate-header text-center text-xs font-semibold uppercase tracking-widest text-background/50 mb-8">
              Additional Service Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalAreas.map((area) => (
                <span
                  key={area}
                  className="additional-tag inline-flex items-center gap-2 px-5 py-3 bg-background/5 text-background text-sm font-medium hover:bg-background/10 transition-colors cursor-default"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {area}
                </span>
              ))}
            </div>

            <p className="text-center text-sm text-background/50 mt-10">
              Don't see your area listed? Give us a call — we may still be able to help.
            </p>
          </div>
        </div>
      </section>

      {/* Stylized Map Section */}
      <section ref={mapSectionRef} className="relative py-24 md:py-32 overflow-hidden bg-background">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Map Visualization - 7 cols */}
            <div className="lg:col-span-7 lg:order-2">
              <div className="map-visualization relative aspect-square max-w-[500px] mx-auto">
                {/* Background circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-primary/10" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full border border-primary/20" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full border border-primary/30" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 rounded-full bg-primary/10" />
                </div>

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.3) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Location pin */}
                <div className="location-pin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40">
                      <Navigation className="w-9 h-9 text-primary-foreground" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                    <div className="absolute -inset-4 rounded-full border-2 border-primary/30 animate-pulse" />
                  </div>
                </div>

                {/* Area labels positioned around the map */}
                {primaryAreas.slice(0, 6).map((area, idx) => {
                  const positions = [
                    "top-0 left-1/2 -translate-x-1/2",
                    "top-1/4 right-0",
                    "bottom-1/4 right-0",
                    "bottom-0 left-1/2 -translate-x-1/2",
                    "bottom-1/4 left-0",
                    "top-1/4 left-0",
                  ];
                  return (
                    <div
                      key={area.name}
                      className={`absolute ${positions[idx]} bg-background border border-border p-2 px-3 shadow-lg`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-xs font-semibold text-foreground whitespace-nowrap">
                          {area.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Content Side - 5 cols */}
            <div className="lg:col-span-5 lg:order-1">
              <div className="animate-map flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Coverage Map
                </span>
              </div>

              <h2 className="animate-map text-4xl md:text-5xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-6">
                Northwest
                <br />
                <span className="text-primary">Suburbs</span>
              </h2>

              <p className="animate-map text-muted-foreground text-lg leading-relaxed mb-8">
                Our service area covers the northwest suburbs of Chicago. Based in Elk Grove Village, we can quickly respond to calls throughout the region.
              </p>

              {/* Stats */}
              <div className="animate-map grid grid-cols-2 gap-4 mb-8">
                <div className="p-5 bg-accent/30">
                  <p className="text-3xl font-heading font-black text-primary leading-none mb-1">
                    &lt; 1hr
                  </p>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                </div>
                <div className="p-5 bg-accent/30">
                  <p className="text-3xl font-heading font-black text-primary leading-none mb-1">
                    24/7
                  </p>
                  <p className="text-sm text-muted-foreground">Emergency Service</p>
                </div>
              </div>

              {/* CTA */}
              <div className="animate-map flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90">
                    Check Your Area
                  </span>
                  <span className="w-12 h-12 bg-foreground text-background flex items-center justify-center group-hover:bg-foreground/90 transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary) / 0.03) 0%, hsl(var(--background)) 50%, hsl(var(--accent) / 0.5) 100%)",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="animate-cta flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Get Started
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>

            {/* Heading */}
            <h2 className="animate-cta text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-6">
              Need HVAC Service
              <br />
              <span className="text-primary">In Your Area?</span>
            </h2>

            {/* Description */}
            <p className="animate-cta text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your heating and cooling needs. We're
              ready to help keep your home or business comfortable.
            </p>

            {/* Trust badges */}
            <div className="animate-cta flex flex-wrap justify-center gap-6 mb-10">
              {[
                { icon: Shield, label: "Licensed & Insured" },
                { icon: Clock, label: "Fast Response" },
                { icon: MapPin, label: "Local Service" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="animate-cta flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3"
              >
                <span className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90">
                  Get a Quote
                </span>
                <span className="w-12 h-12 bg-foreground text-background flex items-center justify-center group-hover:bg-foreground/90 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a
                href="tel:+18473126967"
                className="group inline-flex items-center gap-3 px-8 py-4 border border-border text-foreground font-semibold text-sm uppercase tracking-wide hover:bg-accent/50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(847) 312-6967</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="relative" style={{ height: "450px" }}>
        {/* Map header overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background via-background/50 to-transparent h-24 pointer-events-none" />

        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-foreground text-background px-6 py-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-background/60">
                  Find Us
                </p>
                <p className="font-heading font-bold text-background">
                  Elk Grove Village, IL
                </p>
              </div>
            </div>
          </div>
        </div>

        <iframe
          title="Sona HVAC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47424.77762385067!2d-88.02!3d42.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb59b3b9b4e9d%3A0x7c7b7c7c7c7c7c7c!2sElk%20Grove%20Village%2C%20IL!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(20%)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default ServiceArea;
