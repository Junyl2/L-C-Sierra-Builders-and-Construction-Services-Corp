import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const AboutPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const highlights = [
    "Licensed & Insured Technicians",
    "Residential & Commercial Service",
    "Transparent Pricing",
    "Local to Elk Grove Village",
  ];


  useEffect(() => {
    const section = sectionRef.current;
    const imageContainer = imageContainerRef.current;
    const content = contentRef.current;

    if (!section || !imageContainer || !content) return;

    const ctx = gsap.context(() => {
      // Image layers animation
      const mainImage = imageContainer.querySelector(".main-image");
      const secondaryImage = imageContainer.querySelector(".secondary-image");
      const floatingCard = imageContainer.querySelector(".floating-card");
      const accentBar = imageContainer.querySelector(".accent-bar");

      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          once: true,
        },
      });

      imageTl
        .fromTo(
          mainImage,
          { opacity: 0, scale: 1.1, clipPath: "inset(100% 0 0 0)" },
          { opacity: 1, scale: 1, clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power3.inOut" }
        )
        .fromTo(
          secondaryImage,
          { opacity: 0, x: 60, y: 60 },
          { opacity: 1, x: 0, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .fromTo(
          accentBar,
          { scaleY: 0 },
          { scaleY: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          floatingCard,
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
          "-=0.3"
        );

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

      // Parallax on images
      gsap.to(mainImage?.querySelector("img"), {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-background"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient mesh */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-30"
          style={{
            background: "radial-gradient(ellipse at 70% 20%, hsl(var(--primary) / 0.08) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-40"
          style={{
            background: "radial-gradient(ellipse at 30% 80%, hsl(var(--accent)) 0%, transparent 50%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image Composition - 7 cols */}
          <div ref={imageContainerRef} className="lg:col-span-7 relative">
            <div className="relative">
              {/* Primary accent bar */}
              <div
                className="accent-bar absolute -left-4 md:-left-8 top-12 bottom-12 w-1.5 bg-gradient-to-b from-primary via-primary to-primary/40 origin-top"
                style={{ transform: "scaleY(0)" }}
              />

              {/* Main image */}
              <div className="main-image relative aspect-[4/3] overflow-hidden">
                <img
                  src="/images/about/about-preview.jpg"
                  alt="Professional HVAC technician with tools"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>

              {/* Secondary image - offset */}
              <div className="secondary-image absolute -bottom-8 -right-4 md:-right-12 w-2/5 aspect-square border-4 border-background shadow-2xl overflow-hidden">
                <img
                  src="/images/services/heating-content.jpg"
                  alt="HVAC equipment installation"
                  className="w-full h-full object-cover"
                />
                {/* Primary overlay tint */}
                <div className="absolute inset-0 bg-primary/10" />
              </div>

              {/* Floating stats card */}
              <div className="floating-card absolute top-6 -right-4 md:top-8 md:-right-8 bg-foreground text-background p-5 md:p-6 shadow-2xl max-w-[200px]">
                <div className="text-4xl md:text-5xl font-heading font-black leading-none mb-1">
                  IL
                </div>
                <div className="text-xs uppercase tracking-widest text-background/60">
                  Licensed in
                </div>
                <div className="text-sm font-semibold mt-1">
                  Illinois
                </div>
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-primary" />
              </div>

              {/* Bottom decorative line */}
              <div className="absolute -bottom-4 left-0 right-1/3 h-1 bg-gradient-to-r from-primary to-transparent" />
            </div>
          </div>

          {/* Content Side - 5 cols */}
          <div ref={contentRef} className="lg:col-span-5 lg:pl-8">
            {/* Label */}
            <div className="animate-content flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                About Sona HVAC
              </span>
            </div>

            {/* Heading */}
            <h2 className="animate-content text-4xl md:text-5xl lg:text-5xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-6">
              Local Experts
              <br />
              <span className="relative">
                You Can
                <span className="text-primary"> Trust</span>
                {/* Underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8 T200,8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="animate-content text-muted-foreground text-lg leading-relaxed mb-6">
              Sona HVAC is a local heating and air conditioning business based
              in Elk Grove Village, Illinois. We provide reliable HVAC support
              for homeowners and businesses throughout the area.
            </p>

            {/* Highlights checklist */}
            <div className="animate-content grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-content">
              <Link
                to="/about"
                className="group inline-flex items-center gap-3"
              >
                <span className="px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90 group-hover:shadow-lg group-hover:shadow-primary/25">
                  Learn More About Us
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
  );
};

export default AboutPreview;
