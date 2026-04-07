import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import heroImage from "@/assets/hero-hvac.jpg";

// Track if initial animation has played
let hasPlayedInitialAnimation = false;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!section || !content || !image || !title || !subtitle) return;

    const ctx = gsap.context(() => {
      // Only play entrance animation on first visit
      if (!hasPlayedInitialAnimation) {
        hasPlayedInitialAnimation = true;

        const tl = gsap.timeline();
        tl.fromTo(
          title,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        ).fromTo(
          subtitle,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4"
        );
      } else {
        // If already played, just set to final state immediately
        gsap.set(title, { opacity: 1, y: 0 });
        gsap.set(subtitle, { opacity: 1, y: 0 });
      }

      // Reset scroll-based transforms when navigating back
      // This prevents the "split" visual issue
      gsap.set(content, { y: 0, opacity: 1 });
      gsap.set(image, { y: 0 });
      if (image.querySelector("img")) {
        gsap.set(image.querySelector("img"), { scale: 1 });
      }

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
          if (image.querySelector("img")) {
            gsap.set(image.querySelector("img"), {
              scale: 1 + 0.1 * progress,
            });
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Hero image - right side on desktop */}
      <div
        ref={imageRef}
        className="absolute top-0 right-0 w-full md:w-1/2 h-full will-change-transform"
      >
        <img
          src={heroImage}
          alt="HVAC technician servicing air conditioning unit"
          className="w-full h-full object-cover will-change-transform"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-background/40 md:bg-transparent" />
      </div>

      <div
        ref={contentRef}
        className="container mx-auto px-4 relative z-10 will-change-transform"
      >
        {/* Row 1 - Title */}
        <h1
          ref={titleRef}
          className="font-heading font-black text-foreground uppercase leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(2rem, 7vw, 6rem)", opacity: 0 }}
        >
          TOTAL HVAC SOLUTIONS
        </h1>

        {/* Row 2 - Subtitle + CTA */}
        <div
          ref={subtitleRef}
          className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          style={{ opacity: 0 }}
        >
          <p className="text-muted-foreground text-base md:text-lg max-w-md">
            Installation, repair, and maintenance for homes and businesses in Elk Grove Village, IL.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-foreground font-semibold text-sm tracking-wide uppercase"
          >
            <span className="relative">
              REQUEST SERVICE
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary group-hover:h-0.5 transition-all" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
