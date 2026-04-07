import { useRef, useEffect } from "react";
import { MapPin, ArrowRight, Navigation, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const serviceAreas = [
  "Elk Grove Village",
  "Arlington Heights",
  "Mount Prospect",
  "Des Plaines",
  "Schaumburg",
  "Rolling Meadows",
];

const ServiceAreaPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const map = mapRef.current;
    const areas = areasRef.current;

    if (!section || !content || !map || !areas) return;

    const ctx = gsap.context(() => {
      // Content animation
      const contentElements = content.querySelectorAll(".animate-content");
      gsap.fromTo(
        contentElements,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: content,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Map container animation
      gsap.fromTo(
        map,
        { opacity: 0, scale: 0.95, clipPath: "inset(10% 10% 10% 10%)" },
        {
          opacity: 1,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: map,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Pulse animation for location pin
      const pin = map.querySelector(".location-pin");
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
              trigger: map,
              start: "top 70%",
              once: true,
            },
          }
        );
      }

      // Area tags animation
      const areaTags = areas.querySelectorAll(".area-tag");
      gsap.fromTo(
        areaTags,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.5)",
          stagger: 0.08,
          scrollTrigger: {
            trigger: areas,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.95) 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orb */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Side - 5 cols */}
          <div ref={contentRef} className="lg:col-span-5 text-background">
            {/* Label */}
            <div className="animate-content flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Coverage Area
              </span>
            </div>

            {/* Heading */}
            <h2 className="animate-content text-4xl md:text-5xl lg:text-5xl font-heading font-black uppercase text-background leading-[0.95] tracking-tight mb-6">
              Serving
              <br />
              <span className="text-primary">Your Area</span>
            </h2>

            {/* Description */}
            <p className="animate-content text-background/70 text-lg leading-relaxed mb-8">
              Based in Elk Grove Village, Illinois, we provide HVAC services throughout the northwest suburbs. Fast response times and local expertise for your home or business.
            </p>

            {/* Location Card */}
            <div className="animate-content bg-background/10 backdrop-blur-sm p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-heading font-bold text-background text-lg mb-1">
                    Headquarters
                  </p>
                  <p className="text-background/70 text-sm">
                    1073 Florida Ln
                    <br />
                    Elk Grove Village, IL 60007
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="animate-content flex flex-wrap gap-4">
              <Link
                to="/service-area"
                className="group inline-flex items-center gap-3"
              >
                <span className="px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90">
                  View Full Coverage
                </span>
                <span className="w-12 h-12 bg-background text-foreground flex items-center justify-center group-hover:bg-background/90 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a
                href="tel:+18473126967"
                className="inline-flex items-center gap-2 px-6 py-4 border border-background/30 text-background font-semibold text-sm uppercase tracking-wide hover:bg-background/10 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Map Side - 7 cols */}
          <div className="lg:col-span-7">
            <div ref={mapRef} className="relative">
              {/* Map Container */}
              <div className="relative aspect-[4/3] bg-background/5 overflow-hidden">
                {/* Stylized map background */}
                <div className="absolute inset-0">
                  {/* Map grid lines */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `
                        linear-gradient(hsl(var(--background) / 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(var(--background) / 0.5) 1px, transparent 1px)
                      `,
                      backgroundSize: "40px 40px",
                    }}
                  />

                  {/* Radial zones */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[400px] h-[400px] rounded-full border border-primary/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[280px] h-[280px] rounded-full border border-primary/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[160px] h-[160px] rounded-full border border-primary/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    <div className="w-[80px] h-[80px] rounded-full bg-primary/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Location pin */}
                  <div className="location-pin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40">
                        <Navigation className="w-7 h-7 text-primary-foreground" />
                      </div>
                      {/* Pulse rings */}
                      <div className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                      <div className="absolute -inset-4 rounded-full border-2 border-primary/30 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating info badge */}
                <div className="absolute top-6 left-6 bg-background p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        Based in
                      </p>
                      <p className="font-heading font-bold text-foreground">
                        Elk Grove Village
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coverage badge */}
                <div className="absolute bottom-6 right-6 bg-primary text-primary-foreground p-4 shadow-xl">
                  <p className="text-3xl font-heading font-black leading-none">
                    {serviceAreas.length}+
                  </p>
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/80">
                    Areas Served
                  </p>
                </div>
              </div>

              {/* Service Areas Tags */}
              <div ref={areasRef} className="mt-6 flex flex-wrap gap-2">
                {serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="area-tag inline-flex items-center gap-2 px-4 py-2 bg-background/10 text-background text-sm font-medium hover:bg-background/20 transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {area}
                  </span>
                ))}
                <Link
                  to="/service-area"
                  className="area-tag inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaPreview;
