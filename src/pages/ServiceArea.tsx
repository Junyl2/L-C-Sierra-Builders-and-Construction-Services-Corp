import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Building2,
  Home,
  ArrowRight,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import PageBanner from "@/components/PageBanner";

const ServiceArea = () => {
  const introRef = useRef<HTMLElement>(null);
  const areasRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // Areas we serve - factual based on Elk Grove Village location
  const primaryAreas = [
    "Elk Grove Village",
    "Arlington Heights",
    "Mount Prospect",
    "Des Plaines",
    "Schaumburg",
    "Rolling Meadows",
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
    const cta = ctaRef.current;
    const map = mapRef.current;

    if (!intro || !areas || !cta || !map) return;

    const ctx = gsap.context(() => {
      // Intro section
      const introContent = intro.querySelector(".intro-content");
      const introImage = intro.querySelector(".intro-image");

      gsap.fromTo(
        introContent,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        introImage,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Decorative elements
      const decorElements = intro.querySelectorAll(".decor-element");
      gsap.fromTo(
        decorElements,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.5)",
          stagger: 0.1,
          delay: 0.3,
          scrollTrigger: {
            trigger: intro,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Areas section header
      const areasHeader = areas.querySelector(".areas-header");
      gsap.fromTo(
        areasHeader,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: areas,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Area cards
      const areaCards = areas.querySelectorAll(".area-card");
      gsap.fromTo(
        areaCards,
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
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA section
      gsap.fromTo(
        cta,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cta,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Map section
      gsap.fromTo(
        map,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: map,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageBanner
        title="Service Area"
        subtitle="Serving Elk Grove Village and nearby suburbs"
        backgroundImage="/images/banners/service-area-banner.jpg"
      />

      {/* Introduction Section */}
      <section ref={introRef} className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="intro-content opacity-0">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Our Coverage
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase text-foreground mt-3 mb-6">
                Local Service,<br />
                <span className="text-primary">Local Experts</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-6">
                Sona HVAC is based in Elk Grove Village, Illinois. We provide
                heating and cooling services to homeowners and businesses in Elk
                Grove Village and the surrounding northwest suburban communities.
              </p>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8">
                Being local means we understand the climate challenges of the
                Chicago suburbs and can respond quickly when you need service.
              </p>

              {/* Service Types */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 bg-card border border-border rounded">
                  <div className="w-10 h-10 rounded bg-accent flex items-center justify-center">
                    <Home className="w-5 h-5 text-primary" />
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
                <div className="flex items-center gap-3 p-4 bg-card border border-border rounded">
                  <div className="w-10 h-10 rounded bg-accent flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-primary" />
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

              {/* Headquarters */}
              <div className="flex items-start gap-4 p-5 bg-secondary text-secondary-foreground rounded">
                <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-secondary-foreground/60 mb-1">
                    Headquarters
                  </p>
                  <p className="font-heading font-bold text-lg">
                    1073 Florida Ln
                  </p>
                  <p className="text-secondary-foreground/80">
                    Elk Grove Village, IL 60007
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="intro-image relative opacity-0">
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded bg-secondary">
                  <img
                    src="/images/service-area/neighborhood.jpg"
                    alt="Suburban neighborhood we serve"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="decor-element absolute -bottom-5 -left-4 md:-left-8 bg-primary text-primary-foreground p-5 rounded shadow-lg">
                  <p className="text-3xl md:text-4xl font-heading font-bold">
                    12+
                  </p>
                  <p className="text-xs uppercase tracking-wider opacity-80">
                    Communities Served
                  </p>
                </div>

                {/* Corner accent */}
                <div className="decor-element absolute -top-4 -right-4 w-20 h-20 border-r-4 border-t-4 border-primary/40 rounded-tr" />
              </div>

              {/* Background shape */}
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-accent/50 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section
        ref={areasRef}
        className="py-24 md:py-32 overflow-hidden"
        style={{ background: "hsl(var(--section-warm))" }}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="areas-header text-center mb-16 opacity-0">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Communities We Serve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase text-foreground mt-3">
              Service Areas
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We proudly serve these northwest suburban Chicago communities with
              professional HVAC services.
            </p>
          </div>

          {/* Primary Areas */}
          <div className="mb-12">
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-primary mb-6">
              Primary Service Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {primaryAreas.map((area, idx) => (
                <div
                  key={area}
                  className="area-card group relative p-5 bg-card border border-border rounded text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-heading font-bold text-sm uppercase text-foreground group-hover:text-primary transition-colors">
                    {area}
                  </p>
                  {idx === 0 && (
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary text-primary-foreground text-[10px] font-bold uppercase rounded">
                      HQ
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Areas */}
          <div>
            <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
              Additional Service Areas
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {additionalAreas.map((area) => (
                <div
                  key={area}
                  className="area-card group p-5 bg-card/50 border border-border/50 rounded text-center hover:bg-card hover:border-border hover:shadow-md transition-all duration-300 opacity-0"
                >
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <p className="font-heading font-semibold text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <p className="text-center text-sm text-muted-foreground mt-10">
            Don't see your area listed? Give us a call — we may still be able to help.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-secondary overflow-hidden opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold uppercase text-secondary-foreground mb-4">
              Need HVAC Service in Your Area?
            </h2>
            <p className="text-secondary-foreground/80 text-base md:text-lg mb-8">
              Contact us today to discuss your heating and cooling needs. We're
              ready to help keep your home or business comfortable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide rounded hover:bg-primary/90 transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+18473126967"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary-foreground/10 text-secondary-foreground font-semibold text-sm uppercase tracking-wide rounded hover:bg-secondary-foreground/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(847) 312-6967</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <div
        ref={mapRef}
        className="relative opacity-0"
        style={{ height: "500px" }}
      >
        {/* Map header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-background to-transparent h-20 pointer-events-none" />

        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-card border border-border text-foreground px-6 py-3 rounded shadow-lg">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <p className="text-sm font-semibold uppercase tracking-wider">
              Find Us on the Map
            </p>
          </div>
        </div>

        <iframe
          title="Sona HVAC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47424.77762385067!2d-88.02!3d42.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fb59b3b9b4e9d%3A0x7c7b7c7c7c7c7c7c!2sElk%20Grove%20Village%2C%20IL!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default ServiceArea;
