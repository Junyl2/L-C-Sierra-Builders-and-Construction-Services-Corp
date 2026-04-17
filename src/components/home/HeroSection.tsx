import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3];

let hasPlayedInitialAnimation = false;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const kickerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;
    const kicker = kickerRef.current;
    const title = titleRef.current;
    const bottom = bottomRef.current;

    if (!section || !content || !image || !title) return;

    const ctx = gsap.context(() => {
      if (!hasPlayedInitialAnimation) {
        hasPlayedInitialAnimation = true;

        const tl = gsap.timeline({ delay: 0.2 });

        // Kicker
        if (kicker) {
          tl.fromTo(
            kicker,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
          );
        }

        // Title lines
        const lines = title.querySelectorAll(".hero-title-line");
        tl.fromTo(
          lines,
          { opacity: 0, y: 80, skewY: 3 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 0.9,
            ease: "power4.out",
            stagger: 0.12,
          },
          "-=0.2"
        );

        // Bottom row — description + CTA
        if (bottom) {
          const bottomChildren = bottom.querySelectorAll(".hero-bottom-item");
          tl.fromTo(
            bottomChildren,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.15,
            },
            "-=0.4"
          );
        }
      } else {
        const lines = title.querySelectorAll(".hero-title-line");
        gsap.set(lines, { opacity: 1, y: 0, skewY: 0 });
        if (kicker) gsap.set(kicker, { opacity: 1, y: 0 });
        if (bottom) {
          const bottomChildren = bottom.querySelectorAll(".hero-bottom-item");
          gsap.set(bottomChildren, { opacity: 1, y: 0 });
        }
      }

      gsap.set(content, { y: 0, opacity: 1 });
      gsap.set(image, { y: 0 });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(content, { y: -80 * progress, opacity: 1 - progress * 1.2 });
          gsap.set(image, { y: 120 * progress });
        },
      });
    }, section);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-foreground"
    >
      {/* Background images */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
          >
            <img
              src={img}
              alt={`Electrical and AC service ${index + 1}`}
              className="w-full h-full object-cover scale-105"
              width={1920}
              height={1280}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
      </div>

      {/* Content — spread vertically across full viewport */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-between container mx-auto px-4 pt-32 md:pt-40 pb-12 md:pb-16 will-change-transform"
      >
        {/* Top — Kicker */}
        <div ref={kickerRef} className="flex items-center gap-3" style={{ opacity: 0 }}>
          <span className="block w-10 h-[2px] bg-primary" />
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em]">
            C&B Electric & A/C Services
          </span>
        </div>

        {/* Center — Headline (takes up remaining space, vertically centered) */}
        <div ref={titleRef} className="flex-1 flex items-center">
          <h1 className="mb-0">
            <span
              className="hero-title-line block font-heading font-black text-white uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)", opacity: 0 }}
            >
              Professional
            </span>
            <span
              className="hero-title-line block font-heading font-black text-white uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)", opacity: 0 }}
            >
              Electrical <span className="text-primary">&</span> AC
            </span>
            <span
              className="hero-title-line block font-heading font-black text-primary uppercase leading-[0.92] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)", opacity: 0 }}
            >
              Solutions
            </span>
          </h1>
        </div>

        {/* Bottom — Description left, CTAs right */}
        <div
          ref={bottomRef}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          {/* Description */}
          <p className="hero-bottom-item text-white/60 text-sm sm:text-base leading-relaxed max-w-md" style={{ opacity: 0 }}>
            Reliable electrical and air conditioning repair for residential
            and commercial properties across McAllen, TX and the Rio Grande Valley.
            Open <span className="text-white font-medium">24/7</span>.
          </p>

          {/* CTAs */}
          <div className="hero-bottom-item flex flex-wrap items-center gap-5" style={{ opacity: 0 }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              Schedule Service
            </Link>

            <a
              href="tel:+19567154379"
              className="group inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                <Phone className="w-4 h-4" />
              </span>
              <span className="flex flex-col">
                <span className="text-[11px] uppercase tracking-wider text-white/40 leading-none mb-1">Call Anytime</span>
                <span className="text-base font-semibold leading-none tracking-wide">(956) 715-4379</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
