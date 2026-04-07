import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, Clock, MapPin, Mail, Headphones } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const ContactCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const cards = cardsRef.current;
    const image = imageRef.current;

    if (!section || !content || !cards || !image) return;

    const ctx = gsap.context(() => {
      // Content animation
      const contentElements = content.querySelectorAll(".animate-content");
      gsap.fromTo(
        contentElements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: content,
            start: "top 75%",
            once: true,
          },
        }
      );

      // Cards animation
      const cardItems = cards.querySelectorAll(".contact-card");
      gsap.fromTo(
        cardItems,
        { opacity: 0, x: -40, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cards,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Image reveal animation
      gsap.fromTo(
        image,
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            once: true,
          },
        }
      );

      // Floating badge animation
      const badge = section.querySelector(".floating-badge");
      if (badge) {
        gsap.fromTo(
          badge,
          { opacity: 0, scale: 0.8, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 0.8,
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
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
            backgroundSize: "80px 80px",
          }}
        />
        {/* Large faded text */}
        <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[300px] font-heading font-black text-background/[0.02] leading-none select-none whitespace-nowrap">
          CONTACT
        </span>
        {/* Gradient orb */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Content Side - 6 cols */}
          <div className="lg:col-span-6 text-background">
            <div ref={contentRef}>
              {/* Label */}
              <div className="animate-content flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Get In Touch
                </span>
              </div>

              {/* Heading */}
              <h2 className="animate-content text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-background leading-[0.9] tracking-tight mb-6">
                Ready For
                <br />
                <span className="text-primary">Reliable</span> Service?
              </h2>

              {/* Description */}
              <p className="animate-content text-background/70 text-lg leading-relaxed mb-10 max-w-lg">
                Contact Sona HVAC today for professional heating and air conditioning support in Elk Grove Village and surrounding areas. Fast response, honest pricing.
              </p>

              {/* Contact Cards */}
              <div ref={cardsRef} className="space-y-4 mb-10">
                {/* Phone Card - Primary */}
                <a
                  href="tel:+18473126967"
                  className="contact-card group flex items-center gap-5 p-5 bg-primary hover:bg-primary/90 transition-all"
                >
                  <div className="w-14 h-14 bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/70 mb-1">
                      Call Us Now
                    </p>
                    <p className="text-2xl font-heading font-bold text-primary-foreground">
                      (847) 312-6967
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Info Cards Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="contact-card flex items-center gap-4 p-4 bg-background/10 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-background/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-background text-sm">
                        24/7 Available
                      </p>
                      <p className="text-background/60 text-xs">
                        Emergency service ready
                      </p>
                    </div>
                  </div>
                  <div className="contact-card flex items-center gap-4 p-4 bg-background/10 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-background/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-background text-sm">
                        Elk Grove Village
                      </p>
                      <p className="text-background/60 text-xs">
                        & surrounding areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="animate-content flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3"
                >
                  <span className="px-6 py-4 bg-background text-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-background/90">
                    Request Service
                  </span>
                  <span className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <a
                  href="mailto:info@sonahvac.com"
                  className="inline-flex items-center gap-2 px-6 py-4 border border-background/30 text-background font-semibold text-sm uppercase tracking-wide hover:bg-background/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Image Side - 6 cols */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Main image container */}
              <div
                ref={imageRef}
                className="relative aspect-[4/5] overflow-hidden"
                style={{ clipPath: "inset(0 0 100% 0)" }}
              >
                <img
                  src="/images/services/contact-section.jpg"
                  alt="HVAC technician ready to help"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="floating-badge absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-primary p-6 md:p-8 shadow-2xl shadow-primary/30">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-foreground/20 flex items-center justify-center">
                    <Headphones className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl md:text-4xl font-heading font-black text-primary-foreground leading-none">
                      24/7
                    </p>
                    <p className="text-xs uppercase tracking-widest text-primary-foreground/80 mt-1">
                      Support Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative frame */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-1/2 h-1/2 border-t-4 border-r-4 border-primary pointer-events-none" />

              {/* Accent bar */}
              <div className="absolute top-8 -left-2 md:top-12 md:-left-4 w-1 h-1/3 bg-gradient-to-b from-primary to-primary/40" />
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-background/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Response Time", value: "< 1 Hour" },
              { label: "Licensed", value: "Illinois" },
              { label: "Satisfaction", value: "100%" },
              { label: "Experience", value: "Expert" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <p className="text-2xl md:text-3xl font-heading font-black text-primary leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-widest text-background/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
