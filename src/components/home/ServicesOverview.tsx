import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/data/services";

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const servicesContainer = servicesRef.current;

    if (!section || !header || !servicesContainer) return;

    const ctx = gsap.context(() => {
      // Header animation
      const headerElements = header.querySelectorAll(".animate-header");
      gsap.fromTo(
        headerElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: header,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Service items animation
      const serviceItems = servicesContainer.querySelectorAll(".service-item");
      gsap.fromTo(
        serviceItems,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: servicesContainer,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Featured image animation (desktop only)
      const featuredImage = servicesContainer.querySelector(".featured-image");
      if (featuredImage) {
        gsap.fromTo(
          featuredImage,
          { opacity: 0, scale: 1.05, clipPath: "inset(0 100% 0 0)" },
          {
            opacity: 1,
            scale: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: servicesContainer,
              start: "top 70%",
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const currentService = services[activeService];

  const handleMobileClick = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--accent) / 0.3) 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large service number */}
        <span className="absolute -left-20 top-1/2 -translate-y-1/2 text-[500px] font-heading font-black text-primary/[0.02] leading-none select-none hidden lg:block">
          {String(activeService + 1).padStart(2, "0")}
        </span>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20"
        >
          <div className="max-w-xl">
            <div className="animate-header flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                What We Offer
              </span>
            </div>
            <h2 className="animate-header text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-foreground leading-[0.9] tracking-tight">
              Our
              <br />
              <span className="text-primary">Services</span>
            </h2>
          </div>
          <p className="animate-header text-muted-foreground text-lg max-w-md lg:text-right lg:pb-2">
            Complete heating, cooling, and ventilation solutions for residential
            and commercial properties.
          </p>
        </div>

        {/* Main Content - Services List + Featured Image */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Services List - Mobile Accordion / Desktop Hover */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="space-y-2">
              {services.map((service, index) => (
                <div key={service.id} className="service-item">
                  {/* Mobile: Accordion trigger */}
                  <div className="lg:hidden">
                    <button
                      onClick={() => handleMobileClick(index)}
                      className={`w-full relative flex items-center gap-4 p-5 transition-all duration-300 ${
                        expandedMobile === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-background border border-border"
                      }`}
                    >
                      {/* Number */}
                      <span
                        className={`text-4xl font-heading font-black leading-none transition-colors ${
                          expandedMobile === index
                            ? "text-primary-foreground/20"
                            : "text-primary/20"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0 text-left">
                        <div className="flex items-center gap-3 mb-1">
                          <service.icon
                            className={`w-5 h-5 flex-shrink-0 ${
                              expandedMobile === index
                                ? "text-primary-foreground"
                                : "text-primary"
                            }`}
                          />
                          <h3 className="font-heading font-bold text-lg uppercase truncate">
                            {service.shortTitle}
                          </h3>
                        </div>
                        <p
                          className={`text-sm line-clamp-1 transition-colors ${
                            expandedMobile === index
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Chevron */}
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                          expandedMobile === index
                            ? "text-primary-foreground rotate-180"
                            : "text-primary"
                        }`}
                      />

                      {/* Active indicator */}
                      {expandedMobile === index && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-foreground" />
                      )}
                    </button>

                    {/* Mobile: Expanded content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedMobile === index
                          ? "max-h-[600px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-accent/30 border border-t-0 border-border">
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={service.contentImage}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                          {/* Number overlay */}
                          <span className="absolute top-4 right-4 text-6xl font-heading font-black text-white/10 leading-none">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* Details */}
                        <div className="p-5">
                          {/* Service badge */}
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-8 h-8 bg-primary flex items-center justify-center">
                              <service.icon className="w-4 h-4 text-primary-foreground" />
                            </div>
                            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                              {service.shortTitle}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                            {service.title}
                          </h3>

                          {/* Features preview */}
                          <ul className="space-y-2 mb-5">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          {/* Link */}
                          <Link
                            to={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide group"
                          >
                            <span>Learn More</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Hover to show in featured area */}
                  <div className="hidden lg:block">
                    <Link
                      to={`/services/${service.slug}`}
                      className={`group relative flex items-center gap-4 p-5 transition-all duration-300 ${
                        activeService === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-background hover:bg-accent/50 border border-border hover:border-primary/20"
                      }`}
                      onMouseEnter={() => setActiveService(index)}
                    >
                      {/* Number */}
                      <span
                        className={`text-4xl font-heading font-black leading-none transition-colors ${
                          activeService === index
                            ? "text-primary-foreground/20"
                            : "text-primary/20"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <service.icon
                            className={`w-5 h-5 flex-shrink-0 ${
                              activeService === index
                                ? "text-primary-foreground"
                                : "text-primary"
                            }`}
                          />
                          <h3 className="font-heading font-bold text-lg uppercase truncate">
                            {service.shortTitle}
                          </h3>
                        </div>
                        <p
                          className={`text-sm line-clamp-1 transition-colors ${
                            activeService === index
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight
                        className={`w-5 h-5 flex-shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                          activeService === index
                            ? "text-primary-foreground"
                            : "text-primary"
                        }`}
                      />

                      {/* Active indicator */}
                      {activeService === index && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-foreground" />
                      )}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* View All CTA */}
            <div className="mt-8">
              <Link
                to="/services"
                className="group inline-flex items-center gap-3"
              >
                <span className="px-6 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-foreground/90">
                  View All Services
                </span>
                <span className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Featured Service Image + Details (Desktop only) */}
          <div className="hidden lg:block lg:col-span-7 xl:col-span-8">
            <div className="featured-image relative h-full min-h-[400px] lg:min-h-[600px]">
              {/* Image container with transition */}
              <div className="absolute inset-0 overflow-hidden">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      activeService === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={service.contentImage}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-auto md:max-w-md">
                <div className="bg-background/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl">
                  {/* Service badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center">
                      <currentService.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      {currentService.shortTitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                    {currentService.title}
                  </h3>

                  {/* Features preview */}
                  <ul className="space-y-2 mb-6">
                    {currentService.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <Link
                    to={`/services/${currentService.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wide group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Large service number overlay */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10">
                <span className="text-7xl md:text-9xl font-heading font-black text-white/10 leading-none">
                  {String(activeService + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
