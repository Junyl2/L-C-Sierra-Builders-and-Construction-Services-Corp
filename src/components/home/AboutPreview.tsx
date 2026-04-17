import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const AboutPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Headline
      const headline = section.querySelector(".about-headline");
      if (headline) {
        gsap.fromTo(headline, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 0.9, ease: "power4.out",
          scrollTrigger: { trigger: section, start: "top 70%", once: true },
        });
      }

      // Body copy
      const body = section.querySelectorAll(".about-body");
      gsap.fromTo(body, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: section, start: "top 65%", once: true },
      });

      // Image reveal
      const img = section.querySelector(".about-img");
      if (img) {
        gsap.fromTo(img, { clipPath: "inset(100% 0 0 0)" }, {
          clipPath: "inset(0% 0 0 0)", duration: 1.3, ease: "power3.inOut",
          scrollTrigger: { trigger: img, start: "top 80%", once: true },
        });
      }

      // Stats
      const stats = section.querySelectorAll(".about-stat");
      gsap.fromTo(stats, { opacity: 0, y: 20 }, {
        opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: section.querySelector(".about-stats"), start: "top 85%", once: true },
      });

      // Parallax on image
      const imgInner = section.querySelector(".about-img img");
      if (imgInner) {
        gsap.to(imgInner, {
          y: -50, ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.5 },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Asymmetric two-column: text-heavy left, image right */}
        <div className="lg:flex lg:items-stretch lg:gap-0 min-h-[70vh]">

          {/* Left — editorial text block */}
          <div className="lg:w-[55%] flex flex-col justify-center py-20 md:py-28 lg:py-36 lg:pr-16 xl:pr-24">
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-10 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">About Us</span>
            </div>

            {/* Large editorial headline */}
            <h2 className="about-headline text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-heading font-black uppercase leading-[0.92] tracking-tight text-background mb-10">
              Built on hard work.<br />
              Driven by <span className="text-primary">reliability.</span>
            </h2>

            {/* Two-column body text — editorial rhythm */}
            <div className="md:flex md:gap-10 mb-12">
              <p className="about-body text-background/60 text-sm sm:text-base leading-relaxed mb-6 md:mb-0 md:flex-1">
                C&B Electric & A/C Services started with basic wire and cable installations. As experience grew, so did our capabilities — expanding into air conditioning repair, HVAC maintenance, and commercial refrigeration.
              </p>
              <p className="about-body text-background/60 text-sm sm:text-base leading-relaxed md:flex-1">
                Today we handle a wide range of electrical and HVAC projects across the Rio Grande Valley, including urgent jobs and time-sensitive requests. We focus on being reliable, trustworthy, and efficient.
              </p>
            </div>

            {/* Stats strip — horizontal, minimal */}
            <div className="about-stats flex flex-wrap gap-x-10 gap-y-4 mb-12 pt-8 border-t border-background/10">
              {[
                { value: "24/7", label: "Availability" },
                { value: "Residential", label: "& Commercial" },
                { value: "McAllen", label: "Texas" },
              ].map((stat, idx) => (
                <div key={idx} className="about-stat">
                  <p className="text-2xl md:text-3xl font-heading font-black text-primary leading-none">{stat.value}</p>
                  <p className="text-[11px] uppercase tracking-wider text-background/40 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA — minimal underline style */}
            <Link
              to="/about"
              className="about-body group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-background hover:text-primary transition-colors"
            >
              <span className="border-b border-background/30 group-hover:border-primary pb-1 transition-colors">Learn Our Story</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right — full-height image, flush to edge */}
          <div className="lg:w-[45%] relative min-h-[50vh] lg:min-h-0">
            <div
              className="about-img absolute inset-0 overflow-hidden"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <img
                src="/images/about/about-preview.jpg"
                alt="Electrical work in progress"
                className="w-full h-full object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
