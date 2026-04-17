import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

const Services = () => {
  const servicesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "Services | C&B Electric & A/C Services";
  }, []);

  useEffect(() => {
    const servicesSection = servicesRef.current;
    const cta = ctaRef.current;

    if (!servicesSection || !cta) return;

    const ctx = gsap.context(() => {
      // Stagger service rows
      const rows = servicesSection.querySelectorAll(".service-row");
      rows.forEach((row) => {
        const content = row.querySelector(".service-content");
        const image = row.querySelector(".service-image");

        gsap.fromTo(
          content,
          { opacity: 0, y: 48 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          image,
          { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0%)",
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: row,
              start: "top 70%",
              once: true,
            },
          }
        );
      });

      // CTA section
      const ctaItems = cta.querySelectorAll(".cta-animate");
      gsap.fromTo(
        ctaItems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
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
        subtitle="Electrical, HVAC, and refrigeration — built for South Texas"
        backgroundImage="/images/services/services-banner.jpg"
      />

      {/* Services — editorial line listing */}
      <section ref={servicesRef} className="py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-4">
          {/* Section kicker */}
          <div className="flex items-center gap-3 mb-6">
            <span className="block w-10 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
              What We Do
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-16 md:mb-20 max-w-2xl">
            Full-service electrical
            <br />
            &amp; climate solutions
          </h2>

          {/* Service rows */}
          <div className="border-t border-foreground/10">
            {services.map((service, index) => {
              const isOdd = index % 2 !== 0;
              const number = String(index + 1).padStart(2, "0");

              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="service-row group block border-b border-foreground/10 py-12 md:py-16 lg:py-20 transition-colors hover:bg-muted/30"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                      isOdd ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    {/* Content side */}
                    <div
                      className={`service-content lg:col-span-5 order-2 lg:order-1 ${
                        isOdd ? "[direction:ltr]" : ""
                      }`}
                    >
                      {/* Number + icon row */}
                      <div className="flex items-center gap-4 mb-5">
                        <span className="text-sm font-mono text-muted-foreground">
                          {number}
                        </span>
                        <span className="block w-6 h-[1px] bg-foreground/20" />
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-md">
                        {service.shortDesc}
                      </p>

                      {/* Features — compact list */}
                      <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-2"
                          >
                            <span className="block w-1 h-1 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Inline link CTA */}
                      <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">
                        View Service
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                    {/* Image side */}
                    <div
                      className={`lg:col-span-7 order-1 lg:order-2 ${
                        isOdd ? "[direction:ltr]" : ""
                      }`}
                    >
                      <div className="service-image relative aspect-[16/10] overflow-hidden">
                        <img
                          src={service.contentImage}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA — dark editorial close */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
            {/* Left — headline */}
            <div className="lg:max-w-2xl mb-14 lg:mb-0">
              <div className="cta-animate flex items-center gap-3 mb-8">
                <span className="block w-10 h-[2px] bg-primary" />
                <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
                  Get Started
                </span>
              </div>

              <h2 className="cta-animate text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-black uppercase text-background leading-[0.92] tracking-tight mb-8">
                Need help with your
                <br />
                <span className="text-primary">electrical or AC?</span>
              </h2>

              <p className="cta-animate text-background/50 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                Contact us today to discuss your electrical and AC needs. We
                provide professional service throughout McAllen and the Rio
                Grande Valley.
              </p>

              <div className="cta-animate">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Schedule Service
                </Link>
              </div>
            </div>

            {/* Right — contact details */}
            <div className="lg:w-auto flex-shrink-0">
              <div className="space-y-8">
                {/* Phone */}
                <a
                  href="tel:+19567154379"
                  className="cta-animate group flex items-center gap-5"
                >
                  <span className="flex items-center justify-center w-14 h-14 border border-background/15 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <Phone className="w-5 h-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-background/40 mb-1">
                      Call Anytime
                    </span>
                    <span className="block text-xl font-heading font-bold text-background group-hover:text-primary transition-colors">
                      (956) 715-4379
                    </span>
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:carloselectric1@yahoo.com"
                  className="cta-animate group flex items-center gap-5"
                >
                  <span className="flex items-center justify-center w-14 h-14 border border-background/15 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                    <Mail className="w-5 h-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-background/40 mb-1">
                      Email Us
                    </span>
                    <span className="block text-base font-semibold text-background group-hover:text-primary transition-colors">
                      carloselectric1@yahoo.com
                    </span>
                  </span>
                </a>

                {/* Location */}
                <div className="cta-animate flex items-center gap-5">
                  <span className="flex items-center justify-center w-14 h-14 border border-background/15">
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-wider text-background/40 mb-1">
                      Location
                    </span>
                    <span className="block text-base font-semibold text-background">
                      6024 S 23rd St, McAllen, TX
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom edge accent */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>
    </>
  );
};

export default Services;
