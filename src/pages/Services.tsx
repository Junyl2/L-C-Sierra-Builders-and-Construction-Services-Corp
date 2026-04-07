import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "Services | Sona HVAC";
  }, []);

  useEffect(() => {
    const servicesSection = servicesRef.current;
    const cta = ctaRef.current;

    if (!servicesSection || !cta) return;

    const ctx = gsap.context(() => {
      // Animate each service block
      const serviceBlocks = servicesSection.querySelectorAll(".service-block");
      serviceBlocks.forEach((block, index) => {
        const isEven = index % 2 === 0;
        const content = block.querySelector(".service-content");
        const image = block.querySelector(".service-image");
        const number = block.querySelector(".service-number");

        // Content animation
        gsap.fromTo(
          content,
          { opacity: 0, x: isEven ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 70%",
              once: true,
            },
          }
        );

        // Image animation
        gsap.fromTo(
          image,
          { opacity: 0, clipPath: isEven ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)" },
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0%)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: block,
              start: "top 65%",
              once: true,
            },
          }
        );

        // Number animation
        gsap.fromTo(
          number,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.3,
            scrollTrigger: {
              trigger: block,
              start: "top 65%",
              once: true,
            },
          }
        );
      });

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

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive HVAC solutions for your comfort"
        backgroundImage="/images/services/services-banner.jpg"
      />

      {/* Services Section - Alternating Layout */}
      <section ref={servicesRef} className="relative overflow-hidden">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              className={`service-block relative py-20 md:py-28 lg:py-32 overflow-hidden ${
                isEven ? "bg-background" : ""
              }`}
              style={
                !isEven
                  ? {
                      background:
                        "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.95) 100%)",
                    }
                  : undefined
              }
            >
              {/* Background elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className={`absolute inset-0 ${isEven ? "opacity-[0.02]" : "opacity-[0.03]"}`}
                  style={{
                    backgroundImage: `linear-gradient(${
                      isEven ? "hsl(var(--foreground))" : "hsl(var(--background))"
                    } 1px, transparent 1px), linear-gradient(90deg, ${
                      isEven ? "hsl(var(--foreground))" : "hsl(var(--background))"
                    } 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                  }}
                />
                {/* Large faded number */}
                <span
                  className={`service-number absolute ${
                    isEven ? "-right-10" : "-left-10"
                  } top-1/2 -translate-y-1/2 text-[300px] md:text-[400px] font-heading font-black leading-none select-none ${
                    isEven ? "text-primary/[0.03]" : "text-background/[0.03]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="container mx-auto px-4 relative z-10">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div
                    className={`service-content lg:col-span-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    } ${!isEven ? "text-background" : ""}`}
                  >
                    {/* Number badge */}
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 flex items-center justify-center ${
                          isEven ? "bg-primary" : "bg-primary"
                        }`}
                      >
                        <span className="text-2xl font-heading font-black text-primary-foreground">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="h-px flex-1 bg-primary/30" />
                    </div>

                    {/* Icon & Label */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 flex items-center justify-center ${
                          isEven ? "bg-primary/10" : "bg-background/10"
                        }`}
                      >
                        <service.icon
                          className={`w-6 h-6 ${isEven ? "text-primary" : "text-primary"}`}
                        />
                      </div>
                      <span
                        className={`text-sm font-semibold uppercase tracking-widest ${
                          isEven ? "text-primary" : "text-primary"
                        }`}
                      >
                        {service.shortTitle}
                      </span>
                    </div>

                    {/* Heading */}
                    <h2
                      className={`text-3xl md:text-4xl lg:text-5xl font-heading font-black uppercase leading-[0.95] tracking-tight mb-6 ${
                        isEven ? "text-foreground" : "text-background"
                      }`}
                    >
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p
                      className={`text-lg leading-relaxed mb-8 ${
                        isEven ? "text-muted-foreground" : "text-background/70"
                      }`}
                    >
                      {service.shortDesc}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle2
                            className={`w-5 h-5 flex-shrink-0 ${
                              isEven ? "text-primary" : "text-primary"
                            }`}
                          />
                          <span
                            className={`text-sm font-medium ${
                              isEven ? "text-foreground" : "text-background/90"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      to={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-3"
                    >
                      <span
                        className={`px-6 py-4 font-semibold text-sm uppercase tracking-wide transition-all ${
                          isEven
                            ? "bg-primary text-primary-foreground group-hover:bg-primary/90"
                            : "bg-background text-foreground group-hover:bg-background/90"
                        }`}
                      >
                        Learn More
                      </span>
                      <span
                        className={`w-12 h-12 flex items-center justify-center transition-colors ${
                          isEven
                            ? "bg-foreground text-background group-hover:bg-foreground/90"
                            : "bg-primary text-primary-foreground group-hover:bg-primary/90"
                        }`}
                      >
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </div>

                  {/* Image Side */}
                  <div
                    className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <div className="relative">
                      {/* Main image */}
                      <div
                        className="service-image relative aspect-[4/3] overflow-hidden"
                        style={{
                          clipPath: isEven ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)",
                        }}
                      >
                        <img
                          src={service.contentImage}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${
                            isEven
                              ? "from-foreground/30 via-transparent to-transparent"
                              : "from-foreground/50 via-transparent to-transparent"
                          }`}
                        />
                      </div>

                      {/* Decorative frame */}
                      <div
                        className={`absolute w-1/3 h-1/3 border-4 border-primary pointer-events-none ${
                          isEven
                            ? "-bottom-4 -right-4 md:-bottom-6 md:-right-6 border-b-4 border-r-4 border-t-0 border-l-0"
                            : "-bottom-4 -left-4 md:-bottom-6 md:-left-6 border-b-4 border-l-4 border-t-0 border-r-0"
                        }`}
                      />

                      {/* Accent bar */}
                      <div
                        className={`absolute top-12 w-1 h-1/2 bg-gradient-to-b from-primary to-primary/40 ${
                          isEven ? "-right-2 md:-right-4" : "-left-2 md:-left-4"
                        }`}
                      />

                      {/* Floating icon badge */}
                      <div
                        className={`absolute bg-primary p-5 shadow-2xl shadow-primary/30 ${
                          isEven
                            ? "-bottom-6 -left-6 md:-bottom-8 md:-left-8"
                            : "-bottom-6 -right-6 md:-bottom-8 md:-right-8"
                        }`}
                      >
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
        {/* Background elements */}
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
              Need Help With Your
              <br />
              <span className="text-primary">HVAC System?</span>
            </h2>

            {/* Description */}
            <p className="animate-cta text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Contact us today to discuss your heating and cooling needs. We provide
              professional service throughout Elk Grove Village and surrounding areas.
            </p>

            {/* CTAs */}
            <div className="animate-cta flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18473126967"
                className="group inline-flex items-center justify-center gap-3"
              >
                <span className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (847) 312-6967
                </span>
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3"
              >
                <span className="px-8 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-foreground/90">
                  Request Service
                </span>
                <span className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
