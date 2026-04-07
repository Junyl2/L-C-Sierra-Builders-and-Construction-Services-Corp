import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3];

// Track if initial animation has played
let hasPlayedInitialAnimation = false;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-transition images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const badge = badgeRef.current;

    if (!section || !content || !image || !title || !subtitle) return;

    const ctx = gsap.context(() => {
      // Only play entrance animation on first visit
      if (!hasPlayedInitialAnimation) {
        hasPlayedInitialAnimation = true;

        const tl = gsap.timeline();

        // Title lines animation
        const titleLines = title.querySelectorAll(".title-line");
        tl.fromTo(
          titleLines,
          { opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
          }
        );

        // Subtitle animation
        tl.fromTo(
          subtitle,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );

        // Badge animation
        if (badge) {
          tl.fromTo(
            badge,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          );
        }
      } else {
        // If already played, just set to final state immediately
        const titleLines = title.querySelectorAll(".title-line");
        gsap.set(titleLines, { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" });
        gsap.set(subtitle, { opacity: 1, y: 0 });
        if (badge) gsap.set(badge, { opacity: 1, x: 0 });
      }

      // Reset scroll-based transforms when navigating back
      gsap.set(content, { y: 0, opacity: 1 });
      gsap.set(image, { y: 0 });

      // Scroll-based parallax and fade
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(content, {
            y: -100 * progress,
            opacity: 1 - progress,
          });
          gsap.set(image, {
            y: 150 * progress,
          });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-16 md:pb-24 lg:pb-32 overflow-hidden bg-foreground"
    >
      {/* Full background hero images with crossfade */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
          >
            <img
              src={img}
              alt={`HVAC service ${index + 1}`}
              className="w-full h-full object-cover"
              width={1920}
              height={1280}
            />
          </div>
        ))}
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-60 hidden lg:block" />

      {/* Floating badge - top right */}
      <div
        ref={badgeRef}
        className="absolute top-24 md:top-32 right-4 md:right-8 lg:right-16 z-20 hidden md:block"
        style={{ opacity: 0 }}
      >
        <div className="bg-foreground text-background p-5 shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-background/60">
                Serving
              </p>
              <p className="font-heading font-bold text-background">
                Elk Grove Village
              </p>
            </div>
          </div>
          <div className="h-px w-full bg-background/10 my-3" />
          <a
            href="tel:+18473126967"
            className="flex items-center gap-2 text-primary font-semibold text-sm group"
          >
            <Phone className="w-4 h-4" />
            <span className="group-hover:underline">(847) 312-6967</span>
          </a>
        </div>
        {/* Decorative corner */}
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex items-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-8 h-1 transition-all duration-300 ${
              currentImageIndex === index
                ? "bg-primary"
                : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main content */}
      <div
        ref={contentRef}
        className="container mx-auto px-4 relative z-10 will-change-transform"
      >
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            HVAC Excellence
          </span>
        </div>

        {/* Title - Two Lines */}
        <h1
          ref={titleRef}
          className="font-heading font-black text-white uppercase leading-[0.9] tracking-tight mb-8"
        >
          <span
            className="title-line block"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              opacity: 0,
              clipPath: "inset(100% 0 0 0)",
            }}
          >
            Total HVAC
          </span>
          <span
            className="title-line block text-primary"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 7rem)",
              opacity: 0,
              clipPath: "inset(100% 0 0 0)",
            }}
          >
            Solutions
          </span>
        </h1>

        {/* Subtitle + CTA Row */}
        <div
          ref={subtitleRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
          style={{ opacity: 0 }}
        >
          {/* Left - Description + Stats */}
          <div className="max-w-lg">
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
              Installation, repair, and maintenance for homes and businesses in
              Elk Grove Village and surrounding suburbs.
            </p>

            {/* Quick stats */}
            <div className="flex items-center gap-6">
              <div>
                <p className="text-3xl font-heading font-black text-white leading-none">
                  24/7
                </p>
                <p className="text-xs text-white/60 uppercase tracking-wider mt-1">
                  Emergency
                </p>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <p className="text-3xl font-heading font-black text-white leading-none">
                  Local
                </p>
                <p className="text-xs text-white/60 uppercase tracking-wider mt-1">
                  Service
                </p>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <p className="text-3xl font-heading font-black text-white leading-none">
                  Fast
                </p>
                <p className="text-xs text-white/60 uppercase tracking-wider mt-1">
                  Response
                </p>
              </div>
            </div>
          </div>

          {/* Right - CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3"
            >
              <span className="px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90">
                Request Service
              </span>
              <span className="w-12 h-12 bg-white text-foreground flex items-center justify-center group-hover:bg-white/90 transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <a
              href="tel:+18473126967"
              className="inline-flex items-center gap-2 px-6 py-4 border border-white/30 text-white font-semibold text-sm uppercase tracking-wide hover:bg-white/10 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">(847) 312-6967</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom decorative bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
    </section>
  );
};

export default HeroSection;
