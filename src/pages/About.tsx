import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, MessageSquare, Phone, Mail, MapPin, CheckCircle2, Clock, Users } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import PageBanner from "@/components/PageBanner";

const About = () => {
  const introRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      desc: "We show up when you need us and deliver consistent, dependable service.",
    },
    {
      icon: Heart,
      title: "Comfort",
      desc: "Your comfort is our priority — we ensure your HVAC system keeps your space just right.",
    },
    {
      icon: MessageSquare,
      title: "Honesty",
      desc: "Straightforward communication and transparent service you can count on.",
    },
  ];

  const highlights = [
    "Licensed & Insured Technicians",
    "Residential & Commercial Service",
    "Transparent Pricing",
    "Local to Elk Grove Village",
    "Fast Response Times",
    "Quality Workmanship",
  ];

  const stats = [
    { value: "100%", label: "Licensed & Insured" },
    { value: "24/7", label: "Emergency Service" },
    { value: "Local", label: "Family Business" },
    { value: "IL", label: "State Licensed" },
  ];

  useEffect(() => {
    document.title = "About | Sona HVAC";
  }, []);

  useEffect(() => {
    const intro = introRef.current;
    const mission = missionRef.current;
    const valuesSection = valuesRef.current;
    const statsSection = statsRef.current;
    const contact = contactRef.current;

    if (!intro || !mission || !valuesSection || !statsSection || !contact) return;

    const ctx = gsap.context(() => {
      // Intro section animations
      const introContent = intro.querySelectorAll(".animate-intro");
      gsap.fromTo(
        introContent,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: intro,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Intro image
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

      // Floating elements in intro
      const floatingElements = intro.querySelectorAll(".floating-element");
      gsap.fromTo(
        floatingElements,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          delay: 0.6,
          scrollTrigger: {
            trigger: intro,
            start: "top 65%",
            once: true,
          },
        }
      );

      // Mission section
      const missionContent = mission.querySelectorAll(".animate-mission");
      gsap.fromTo(
        missionContent,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: mission,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Mission highlight items
      const highlightItems = mission.querySelectorAll(".highlight-item");
      gsap.fromTo(
        highlightItems,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: mission,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Values section header
      const valuesHeader = valuesSection.querySelectorAll(".animate-values-header");
      gsap.fromTo(
        valuesHeader,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: valuesSection,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Values cards
      const valueCards = valuesSection.querySelectorAll(".value-card");
      gsap.fromTo(
        valueCards,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: valuesSection,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Stats section
      const statItems = statsSection.querySelectorAll(".stat-item");
      gsap.fromTo(
        statItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsSection,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Contact section
      const contactContent = contact.querySelectorAll(".animate-contact");
      gsap.fromTo(
        contactContent,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: contact,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Contact cards
      const contactCards = contact.querySelectorAll(".contact-card");
      gsap.fromTo(
        contactCards,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: contact,
            start: "top 70%",
            once: true,
          },
        }
      );

      // Contact image
      const contactImage = contact.querySelector(".contact-image");
      gsap.fromTo(
        contactImage,
        { opacity: 0, clipPath: "inset(100% 0 0 0)" },
        {
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: contact,
            start: "top 65%",
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
        title="About Us"
        subtitle="Local HVAC service you can trust"
        backgroundImage="/images/banners/about-banner.jpg"
      />

      {/* Introduction Section */}
      <section ref={introRef} className="relative py-24 md:py-32 lg:py-40 bg-background overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
          <span className="absolute -right-20 top-1/4 text-[400px] font-heading font-black text-primary/[0.02] leading-none select-none">
            01
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Side - 5 cols */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* Label */}
              <div className="animate-intro flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Who We Are
                </span>
              </div>

              {/* Heading */}
              <h2 className="animate-intro text-4xl md:text-5xl lg:text-5xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-6">
                Your Local
                <br />
                <span className="text-primary">HVAC Partner</span>
              </h2>

              {/* Description */}
              <div className="animate-intro space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
                <p>
                  Sona HVAC is a local heating and air conditioning business based
                  in Elk Grove Village, Illinois. We provide reliable HVAC support
                  for homeowners and businesses throughout the area.
                </p>
                <p>
                  The business is associated publicly with Haresh Shah and serves
                  the Elk Grove Village community. We focus on general HVAC work
                  including heating and cooling installations, repairs, and
                  maintenance.
                </p>
              </div>

              {/* CTA */}
              <div className="animate-intro flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90">
                    Our Services
                  </span>
                  <span className="w-12 h-12 bg-foreground text-background flex items-center justify-center group-hover:bg-foreground/90 transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Image Side - 7 cols */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative">
                {/* Main image */}
                <div
                  className="intro-image relative aspect-[4/3] overflow-hidden"
                  style={{ clipPath: "inset(0 100% 0 0)" }}
                >
                  <img
                    src="/images/about/about-main.jpg"
                    alt="Sona HVAC service van"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
                </div>

                {/* Floating badge - Location */}
                <div className="floating-element absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-foreground text-background p-6 md:p-8 shadow-2xl">
                  <p className="text-3xl md:text-4xl font-heading font-black leading-none mb-1">
                    IL
                  </p>
                  <p className="text-xs uppercase tracking-widest text-background/60">
                    Licensed in
                  </p>
                  <p className="text-sm font-semibold mt-1">Illinois</p>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary" />
                </div>

                {/* Floating badge - Service */}
                <div className="floating-element absolute top-6 -right-4 md:top-8 md:-right-6 bg-primary text-primary-foreground p-5 shadow-xl">
                  <p className="text-xs uppercase tracking-wider text-primary-foreground/80">
                    Serving
                  </p>
                  <p className="text-lg font-heading font-bold">
                    Elk Grove Village
                  </p>
                  <p className="text-xs text-primary-foreground/70 mt-1">
                    & Nearby Areas
                  </p>
                </div>

                {/* Decorative frame */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-1/3 h-1/3 border-t-4 border-r-4 border-primary pointer-events-none" />

                {/* Accent bar */}
                <div className="absolute top-12 -left-2 md:-left-4 w-1 h-1/2 bg-gradient-to-b from-primary to-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & What We Do Section */}
      <section
        ref={missionRef}
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.95) 100%)",
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
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Content Side - 6 cols */}
            <div className="lg:col-span-6 text-background">
              {/* Label */}
              <div className="animate-mission flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  What We Do
                </span>
              </div>

              {/* Heading */}
              <h2 className="animate-mission text-4xl md:text-5xl lg:text-5xl font-heading font-black uppercase text-background leading-[0.95] tracking-tight mb-6">
                Keeping You
                <br />
                <span className="text-primary">Comfortable</span>
              </h2>

              {/* Description */}
              <p className="animate-mission text-background/70 text-lg leading-relaxed mb-10">
                We serve Elk Grove Village and nearby suburbs, providing
                dependable heating and air conditioning support for homes and
                local properties. From installations to repairs to maintenance,
                we handle it all.
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="highlight-item flex items-center gap-3 p-4 bg-background/10 backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-background font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Preview - 6 cols */}
            <div className="lg:col-span-6">
              <div className="space-y-4">
                {[
                  { title: "Heating Services", desc: "Furnace repair, installation, and maintenance to keep you warm." },
                  { title: "Cooling Services", desc: "Air conditioning solutions for comfortable summers." },
                  { title: "Maintenance Plans", desc: "Regular tune-ups to prevent breakdowns and extend system life." },
                ].map((service, idx) => (
                  <div
                    key={idx}
                    className="animate-mission group p-6 bg-background/5 border border-background/10 hover:bg-background/10 hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-start gap-5">
                      <span className="text-5xl font-heading font-black text-primary/30 leading-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-background mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-background/60 text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90">
                    View All Services
                  </span>
                  <span className="w-12 h-12 bg-background text-foreground flex items-center justify-center group-hover:bg-background/90 transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--accent) / 0.3) 100%)",
        }}
      >
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
          <span className="absolute -left-20 top-1/2 -translate-y-1/2 text-[500px] font-heading font-black text-primary/[0.02] leading-none select-none">
            03
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-20">
            <div className="max-w-xl">
              <div className="animate-values-header flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Our Values
                </span>
              </div>
              <h2 className="animate-values-header text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-foreground leading-[0.9] tracking-tight">
                What
                <br />
                <span className="text-primary">Drives Us</span>
              </h2>
            </div>
            <p className="animate-values-header text-muted-foreground text-lg max-w-md lg:text-right lg:pb-2">
              The principles that guide our work and commitment to you.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, idx) => (
              <div
                key={value.title}
                className="value-card group relative"
              >
                <div className="relative bg-background border border-border p-8 md:p-10 h-full overflow-hidden transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xl group-hover:-translate-y-1">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Large number background */}
                  <span className="absolute -top-4 -right-2 text-9xl font-heading font-black text-primary/[0.05] leading-none select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative mb-6 inline-block">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
                      <value.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-foreground text-background text-sm font-bold flex items-center justify-center shadow-md">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-xl uppercase text-foreground mb-3 tracking-wide group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.desc}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={statsRef}
        className="relative py-16 md:py-20 bg-primary overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item text-center">
                <p className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-none mb-2">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm uppercase tracking-widest text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        ref={contactRef}
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(var(--accent) / 0.5) 0%, hsl(var(--background)) 50%, hsl(var(--primary) / 0.03) 100%)",
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Content Side - 6 cols */}
            <div className="lg:col-span-6">
              {/* Label */}
              <div className="animate-contact flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Get In Touch
                </span>
              </div>

              {/* Heading */}
              <h2 className="animate-contact text-4xl md:text-5xl lg:text-5xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-6">
                Ready to Talk?
                <br />
                <span className="text-primary">We're Here</span>
              </h2>

              {/* Description */}
              <p className="animate-contact text-muted-foreground text-lg leading-relaxed mb-10">
                Whether you need a new installation, repair, or just have questions
                about your HVAC system, our team is ready to help. Reach out today
                and let's discuss how we can keep you comfortable.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-10">
                <a
                  href="tel:+18473126967"
                  className="contact-card group flex items-center gap-5 p-5 bg-foreground text-background hover:bg-foreground/90 transition-all"
                >
                  <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-background/60 mb-1">
                      Call Us
                    </p>
                    <p className="text-xl font-heading font-bold text-background">
                      (847) 312-6967
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-background/60 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:info@sonahvac.com"
                  className="contact-card group flex items-center gap-5 p-5 bg-accent hover:bg-accent/80 transition-all"
                >
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Email Us
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground">
                      info@sonahvac.com
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="contact-card flex items-center gap-5 p-5 bg-accent/50">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground">
                      1073 Florida Ln
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Elk Grove Village, IL 60007
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="animate-contact">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90">
                    Contact Us Now
                  </span>
                  <span className="w-12 h-12 bg-foreground text-background flex items-center justify-center group-hover:bg-foreground/90 transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Image Side - 6 cols */}
            <div className="lg:col-span-6">
              <div className="relative">
                {/* Main image */}
                <div
                  className="contact-image relative aspect-[4/5] overflow-hidden"
                  style={{ clipPath: "inset(100% 0 0 0)" }}
                >
                  <img
                    src="/images/about/contact-cta.jpg"
                    alt="Contact us"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="floating-element absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-primary p-6 md:p-8 shadow-2xl shadow-primary/30">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-3xl font-heading font-black text-primary-foreground leading-none">
                        24/7
                      </p>
                      <p className="text-xs uppercase tracking-widest text-primary-foreground/80 mt-1">
                        Support Available
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-1/3 h-1/3 border-t-4 border-l-4 border-primary pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
