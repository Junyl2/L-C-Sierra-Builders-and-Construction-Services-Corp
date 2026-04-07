import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const AboutPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  const values = [
    {
      icon: Shield,
      title: "Reliable Service",
      desc: "Dependable solutions you can count on",
    },
    {
      icon: Clock,
      title: "Timely Response",
      desc: "Quick service when you need it most",
    },
    {
      icon: Users,
      title: "Local Expertise",
      desc: "Serving Elk Grove Village community",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const imageContainer = imageContainerRef.current;
    const content = contentRef.current;
    const valuesContainer = valuesRef.current;

    if (!section || !imageContainer || !content || !valuesContainer) return;

    const ctx = gsap.context(() => {
      // Image container animation with reveal effect
      gsap.fromTo(
        imageContainer,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Decorative elements animation
      const decorElements = imageContainer.querySelectorAll(".decor-element");
      gsap.fromTo(
        decorElements,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
          stagger: 0.15,
          delay: 0.4,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        content,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Values cards stagger animation
      const valueCards = valuesContainer.querySelectorAll(".value-card");
      gsap.fromTo(
        valueCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: valuesContainer,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Subtle parallax on image
      gsap.to(imageContainer.querySelector("img"), {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "hsl(var(--section-warm))" }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side with Decorative Elements */}
          <div ref={imageContainerRef} className="relative opacity-0">
            {/* Main image container */}
            <div className="relative">
              {/* Image with overlay treatment */}
              <div className="relative aspect-[4/3] overflow-hidden rounded bg-secondary">
                <img
                  src="/images/about/about-preview.jpg"
                  alt="Professional HVAC technician with tools"
                  className="w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-secondary/60 via-transparent to-transparent" />
              </div>

              {/* Decorative floating card - Experience */}
              <div className="decor-element absolute -bottom-6 -right-4 md:-right-8 bg-card border border-border p-4 md:p-5 rounded shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-heading font-bold text-primary">
                      S
                    </span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      Serving
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground">
                      Elk Grove Village
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative accent line */}
              <div className="decor-element absolute -top-4 -left-4 w-24 h-24 border-l-4 border-t-4 border-primary/30 rounded-tl" />
            </div>

            {/* Background decorative shape */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-primary/5 rounded" />
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="opacity-0">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              About Us
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase text-foreground mt-3 mb-6">
              Local HVAC Experts<br />
              <span className="text-primary">You Can Trust</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4 text-base md:text-lg">
              Sona HVAC is a local heating and air conditioning business based
              in Elk Grove Village, Illinois. We provide reliable HVAC support
              for homeowners and businesses in the area.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
              Our focus is on delivering comfort you can count on — from
              installations and repairs to ongoing system maintenance.
            </p>

            {/* Values Grid */}
            <div ref={valuesRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="value-card group p-4 bg-card border border-border rounded hover:border-primary/30 hover:shadow-md transition-all duration-300 opacity-0"
                >
                  <div className="w-10 h-10 rounded bg-accent flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-colors">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-sm uppercase text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Link */}
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 px-6 py-3 bg-secondary text-secondary-foreground font-semibold text-sm tracking-wide uppercase rounded hover:bg-secondary/90 transition-colors"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
