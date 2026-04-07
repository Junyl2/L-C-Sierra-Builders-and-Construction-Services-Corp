import { useEffect, useRef } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  Shield,
  ArrowUpRight,
} from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { getServiceBySlug, services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const mainRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Sona HVAC`;
    }
  }, [service]);

  useEffect(() => {
    if (!service) return;

    const main = mainRef.current;
    const intro = introRef.current;
    const features = featuresRef.current;
    const benefits = benefitsRef.current;
    const image = imageRef.current;
    const cta = ctaRef.current;

    if (!main) return;

    // Small delay to ensure DOM is ready and Lenis is initialized
    const initTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      // Intro animation
      if (intro) {
        const introElements = intro.querySelectorAll(".animate-intro");
        gsap.fromTo(
          introElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: intro,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Features animation
      if (features) {
        const featureItems = features.querySelectorAll(".feature-item");
        gsap.fromTo(
          featureItems,
          { opacity: 0, x: -30, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: features,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

      // Benefits animation
      if (benefits) {
        gsap.fromTo(
          benefits.querySelector(".benefits-content"),
          { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: benefits,
              start: "top 70%",
              once: true,
            },
          }
        );

        const benefitItems = benefits.querySelectorAll(".benefit-item");
        gsap.fromTo(
          benefitItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.12,
            delay: 0.4,
            scrollTrigger: {
              trigger: benefits,
              start: "top 70%",
              once: true,
            },
          }
        );
      }

      // Image animation
      if (image) {
        gsap.fromTo(
          image.querySelector(".main-image"),
          { opacity: 0, scale: 1.1, clipPath: "inset(100% 0 0 0)" },
          {
            opacity: 1,
            scale: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: image,
              start: "top 70%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          image.querySelector(".image-badge"),
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.6,
            scrollTrigger: {
              trigger: image,
              start: "top 70%",
              once: true,
            },
          }
        );
      }

      // CTA animation
      if (cta) {
        const ctaElements = cta.querySelectorAll(".animate-cta");
        gsap.fromTo(
          ctaElements,
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
      }

      // Sidebar animation
      const sidebarCards = main.querySelectorAll(".sidebar-card");
      gsap.fromTo(
        sidebarCards,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: main,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Sidebar pin with ScrollTrigger (works with Lenis)
      const contentWrapper = contentWrapperRef.current;
      const sidebar = sidebarRef.current;

      if (contentWrapper && sidebar && window.innerWidth >= 1024) {
        const sidebarHeight = sidebar.offsetHeight;
        const contentHeight = contentWrapper.offsetHeight;

        // Only pin if content is taller than sidebar
        if (contentHeight > sidebarHeight) {
          ScrollTrigger.create({
            trigger: contentWrapper,
            start: "top 112px", // Account for navbar height
            end: () => `+=${contentHeight - sidebarHeight}`,
            pin: sidebar,
            pinSpacing: false,
          });
        }
      }
    }, main);

    return () => {
      clearTimeout(initTimeout);
      ctx.revert();
    };
  }, [service]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;
  const otherServices = services.filter((s) => s.id !== service.id);
  const serviceIndex = services.findIndex((s) => s.id === service.id);

  return (
    <>
      <PageBanner
        title={service.title}
        subtitle={service.shortDesc}
        backgroundImage={service.bannerImage}
      />

      {/* Main Content */}
      <section ref={mainRef} className="relative py-20 md:py-28 overflow-hidden bg-background">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
          <span className="absolute -right-20 top-1/4 text-[400px] font-heading font-black text-primary/[0.02] leading-none select-none">
            {String(serviceIndex + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Back link */}
          <div className="mb-10">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="w-8 h-8 bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </span>
              <span>Back to All Services</span>
            </Link>
          </div>

          <div ref={contentWrapperRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Content - 8 columns */}
            <div className="lg:col-span-8 space-y-16">
              {/* Intro Section */}
              <div ref={introRef}>
                <div className="animate-intro flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary flex items-center justify-center">
                    <ServiceIcon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-widest">
                    {String(serviceIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="animate-intro text-3xl md:text-4xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-6">
                  About This <span className="text-primary">Service</span>
                </h2>

                <p className="animate-intro text-lg text-muted-foreground leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Features Section */}
              <div ref={featuresRef}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                    What We Offer
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="feature-item group relative flex items-start gap-4 p-5 bg-accent/30 hover:bg-accent/60 border-l-4 border-transparent hover:border-primary transition-all"
                    >
                      <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <span className="text-foreground font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                      {/* Number overlay */}
                      <span className="absolute top-2 right-3 text-4xl font-heading font-black text-primary/[0.05] leading-none">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div ref={benefitsRef}>
                <div
                  className="benefits-content relative p-8 md:p-10 overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.95) 100%)",
                  }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                    <span className="absolute -right-8 -bottom-8 text-[200px] font-heading font-black text-background/[0.03] leading-none select-none">
                      +
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-px w-12 bg-primary" />
                      <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                        Key Benefits
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-heading font-black uppercase text-background leading-[0.95] tracking-tight mb-8">
                      Why Choose This <span className="text-primary">Service</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="benefit-item flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-heading font-bold text-primary-foreground">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <p className="text-background/80 leading-relaxed pt-2">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Image */}
              <div ref={imageRef} className="relative">
                <div
                  className="main-image relative aspect-[16/9] overflow-hidden"
                  style={{ clipPath: "inset(100% 0 0 0)" }}
                >
                  <img
                    src={service.contentImage}
                    alt={`${service.title} service`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>

                {/* Decorative frame */}
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-1/3 h-1/3 border-b-4 border-r-4 border-primary pointer-events-none" />

                {/* Floating badge */}
                <div className="image-badge absolute -bottom-6 left-6 md:-bottom-8 md:left-10 bg-primary p-5 md:p-6 shadow-2xl shadow-primary/30">
                  <div className="flex items-center gap-4">
                    <ServiceIcon className="w-8 h-8 text-primary-foreground" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-primary-foreground/70">
                        Expert
                      </p>
                      <p className="text-xl font-heading font-black text-primary-foreground leading-none">
                        {service.shortTitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Accent bar */}
                <div className="absolute top-8 -left-2 md:top-12 md:-left-4 w-1 h-1/2 bg-gradient-to-b from-primary to-primary/40" />
              </div>
            </div>

            {/* Sidebar - 4 columns */}
            <div className="lg:col-span-4">
              <div ref={sidebarRef} className="space-y-6">
                {/* Quick Contact Card */}
                <div
                  className="sidebar-card relative overflow-hidden p-6 md:p-8"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.95) 100%)",
                  }}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-background/60">
                          Need This Service?
                        </p>
                        <p className="text-lg font-heading font-bold text-background">
                          Contact Us
                        </p>
                      </div>
                    </div>

                    <p className="text-background/70 text-sm leading-relaxed mb-6">
                      Ready to discuss your {service.shortTitle.toLowerCase()} needs? Our team is here to help.
                    </p>

                    <a
                      href="tel:+18473126967"
                      className="group flex items-center justify-between w-full p-4 bg-primary hover:bg-primary/90 transition-colors mb-3"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-widest text-primary-foreground/70">
                          Call Now
                        </p>
                        <p className="text-xl font-heading font-bold text-primary-foreground">
                          (847) 312-6967
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform" />
                    </a>

                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 w-full py-4 border border-background/30 text-background font-semibold text-sm uppercase tracking-wide hover:bg-background/10 transition-colors"
                    >
                      Contact Form
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Service Info Card */}
                <div className="sidebar-card bg-accent/50 p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground">
                      Why Sona HVAC?
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: Clock, label: "Fast Response Time" },
                      { icon: MapPin, label: "Local to Elk Grove Village" },
                      { icon: Shield, label: "Licensed & Insured" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-background flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other Services Card */}
                <div className="sidebar-card bg-background border border-border p-6">
                  <h4 className="font-heading font-bold text-foreground mb-5 flex items-center gap-2">
                    <span className="w-8 h-1 bg-primary" />
                    Other Services
                  </h4>

                  <nav className="space-y-2">
                    {otherServices.map((s, idx) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="group flex items-center gap-4 p-3 hover:bg-accent/50 border-l-2 border-transparent hover:border-primary transition-all"
                      >
                        <div className="w-10 h-10 bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                          <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">
                            {s.shortTitle}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Service Area Card */}
                <div className="sidebar-card relative overflow-hidden bg-primary p-6">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                      <h4 className="font-heading font-bold text-primary-foreground">
                        Service Area
                      </h4>
                    </div>
                    <p className="text-primary-foreground/80 text-sm mb-4">
                      We provide {service.shortTitle.toLowerCase()} services in Elk Grove Village and surrounding communities.
                    </p>
                    <Link
                      to="/service-area"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                    >
                      View Full Coverage
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  {/* Decorative */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-primary-foreground/10 rounded-full" />
                </div>
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
          <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[300px] font-heading font-black text-background/[0.02] leading-none select-none whitespace-nowrap">
            CONTACT
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="lg:col-span-6 text-background">
              <div className="animate-cta flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Get Started
                </span>
              </div>

              <h2 className="animate-cta text-4xl md:text-5xl font-heading font-black uppercase text-background leading-[0.95] tracking-tight mb-6">
                Ready For
                <br />
                <span className="text-primary">{service.shortTitle}?</span>
              </h2>

              <p className="animate-cta text-background/70 text-lg leading-relaxed mb-10 max-w-lg">
                Contact us today to discuss your {service.shortTitle.toLowerCase()} needs. We provide professional service throughout Elk Grove Village and surrounding areas.
              </p>

              {/* Contact Info */}
              <div className="animate-cta grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <a
                  href="tel:+18473126967"
                  className="group flex items-center gap-4 p-4 bg-background/10 hover:bg-background/15 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-background/60">
                      Call Us
                    </p>
                    <p className="text-lg font-heading font-bold text-background group-hover:text-primary transition-colors">
                      (847) 312-6967
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-background/10">
                  <div className="w-12 h-12 bg-background/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-background/60">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-background">
                      Elk Grove Village, IL
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="animate-cta flex flex-wrap gap-4">
                <a
                  href="tel:+18473126967"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </span>
                </a>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="px-6 py-4 bg-background text-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-background/90">
                    Contact Form
                  </span>
                  <span className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/images/services/contact-section.jpg"
                    alt="HVAC technician ready to help"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-primary p-6 md:p-8 shadow-2xl shadow-primary/30">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary-foreground/20 flex items-center justify-center">
                      <Clock className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-3xl md:text-4xl font-heading font-black text-primary-foreground leading-none">
                        24/7
                      </p>
                      <p className="text-xs uppercase tracking-widest text-primary-foreground/80 mt-1">
                        Service Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative frame */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-1/2 h-1/2 border-t-4 border-r-4 border-primary pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
