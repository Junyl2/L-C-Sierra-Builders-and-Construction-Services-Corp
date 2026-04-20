import { useRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { services } from "@/data/services";
import heroImage1 from "@/assets/hero-1.jpg";
import heroImage2 from "@/assets/hero-2.jpg";
import heroImage3 from "@/assets/hero-3.jpg";

const heroImages = [heroImage1, heroImage2, heroImage3];

let hasPlayedInitialAnimation = false;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
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
    if (!section) return;

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll<HTMLElement>(".bento-card");
      const heroLines = section.querySelectorAll<HTMLElement>(".hero-title-line");
      const mobileKicker = section.querySelector<HTMLElement>(".mobile-kicker");
      const mobileBottomItems = section.querySelectorAll<HTMLElement>(".mobile-bottom-item");

      if (!hasPlayedInitialAnimation) {
        hasPlayedInitialAnimation = true;

        const tl = gsap.timeline({ delay: 0.2 });

        if (mobileKicker) {
          tl.fromTo(
            mobileKicker,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            0
          );
        }

        if (cards.length) {
          tl.fromTo(
            cards,
            { opacity: 0, y: 48 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.12,
            },
            0
          );
        }

        tl.fromTo(
          heroLines,
          { opacity: 0, y: 40, skewY: 3 },
          {
            opacity: 1,
            y: 0,
            skewY: 0,
            duration: 0.8,
            ease: "power4.out",
            stagger: 0.08,
          },
          "-=0.55"
        );

        if (mobileBottomItems.length) {
          tl.fromTo(
            mobileBottomItems,
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
        gsap.set(cards, { opacity: 1, y: 0 });
        gsap.set(heroLines, { opacity: 1, y: 0, skewY: 0 });
        if (mobileKicker) gsap.set(mobileKicker, { opacity: 1, y: 0 });
        gsap.set(mobileBottomItems, { opacity: 1, y: 0 });
      }
    }, section);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <section ref={sectionRef} className="relative w-full bg-background">
      {/* ═══════════════════ MOBILE / TABLET HERO (original layout) ═══════════════════ */}
      <div className="relative h-screen overflow-hidden bg-foreground lg:hidden">
        {/* Background carousel */}
        <div className="absolute inset-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
              style={{ opacity: currentImageIndex === idx ? 1 : 0 }}
            >
              <img
                src={img}
                alt={`HVAC heating and air service in Boise, Idaho ${idx + 1}`}
                className="h-full w-full scale-105 object-cover"
                width={1920}
                height={1280}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto flex h-full flex-col justify-between px-4 pb-12 pt-32 md:pb-16 md:pt-40">
          {/* Kicker */}
          <div
            className="mobile-kicker flex items-center gap-3"
            style={{ opacity: 0 }}
          >
            <span className="block h-[2px] w-10 bg-primary" />
            <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-[0.2em]">
              Boise, Idaho — Heating &amp; Air
            </span>
          </div>

          {/* Headline */}
          <div className="flex flex-1 items-center">
            <h1 className="mb-0">
              <span
                className="hero-title-line block font-heading font-black uppercase leading-[0.92] tracking-tight text-white"
                style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)", opacity: 0 }}
              >
                Heating and Air
              </span>
              <span
                className="hero-title-line block font-heading font-black uppercase leading-[0.92] tracking-tight text-white"
                style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)", opacity: 0 }}
              >
                Services <span className="text-primary">for</span> Homes
              </span>
              <span
                className="hero-title-line block font-heading font-black uppercase leading-[0.92] tracking-tight text-primary"
                style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)", opacity: 0 }}
              >
                &amp; Businesses
              </span>
            </h1>
          </div>

          {/* Bottom */}
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div
              className="mobile-bottom-item max-w-md"
              style={{ opacity: 0 }}
            >
              <p className="text-sm font-medium leading-relaxed text-white/70 sm:text-base">
                Komfort iQ HVAC is a family-owned heating and air company
                serving customers in the Boise area. We provide HVAC support
                with a practical, straightforward approach and a focus on
                comfort.
              </p>
              <p className="mt-3 text-xs font-medium tracking-wide text-white/50 sm:text-sm">
                On-site HVAC service in the Boise area.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {[
                  "Heating services",
                  "Air conditioning services",
                  "General HVAC services",
                ].map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center border border-white/20 px-3 py-1.5 text-xs font-medium tracking-wide text-white/80"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="mobile-bottom-item flex flex-wrap items-center gap-5"
              style={{ opacity: 0 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary px-8 py-4 text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0"
              >
                Contact Us
              </Link>
              <a
                href="tel:+19864974822"
                className="group inline-flex items-center gap-3 text-white/80 transition-colors hover:text-white"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="flex flex-col">
                  <span className="mb-1 text-xs font-semibold uppercase tracking-wider leading-none text-white/60">
                    Call
                  </span>
                  <span className="text-base font-semibold leading-none tracking-wide">
                    (986) 497-4822
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════ DESKTOP BENTO (lg+) ═══════════════════ */}
      <div className="hidden lg:block pt-36 pb-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 grid-rows-2 gap-5 min-h-[calc(100vh-10rem)]">
            {/* Card C — Primary hero (right column, spans both rows) */}
            <article
              className="bento-card group relative overflow-hidden bg-foreground col-start-2 row-start-1 row-span-2"
              style={{ opacity: 0 }}
            >
              <div className="absolute inset-0">
                {heroImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
                    style={{ opacity: currentImageIndex === idx ? 1 : 0 }}
                  >
                    <img
                      src={img}
                      alt={`HVAC heating and air service in Boise, Idaho ${idx + 1}`}
                      className="h-full w-full object-cover transition-transform duration-[1800ms] group-hover:scale-105"
                      width={1920}
                      height={1280}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/55 to-black/25" />
              </div>

              <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-14">
                <div className="flex items-center gap-3">
                  <span className="block h-[2px] w-10 bg-primary" />
                  <span className="text-primary font-semibold text-xs uppercase tracking-[0.25em]">
                    Komfort iQ HVAC
                  </span>
                </div>

                <div>
                  <h1 className="font-heading font-black uppercase leading-[0.95] tracking-tight text-white">
                    <span
                      className="hero-title-line block"
                      style={{ fontSize: "clamp(2rem, 4.6vw, 4.5rem)", opacity: 0 }}
                    >
                      Heating &amp; Air
                    </span>
                    <span
                      className="hero-title-line block"
                      style={{ fontSize: "clamp(2rem, 4.6vw, 4.5rem)", opacity: 0 }}
                    >
                      Services <span className="text-primary">for</span> Homes
                    </span>
                    <span
                      className="hero-title-line block text-primary"
                      style={{ fontSize: "clamp(2rem, 4.6vw, 4.5rem)", opacity: 0 }}
                    >
                      &amp; Businesses
                    </span>
                  </h1>
                  <p className="mt-6 max-w-xl text-base font-medium tracking-wide text-white/70">
                    On-site HVAC service in the Boise area.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-primary px-8 py-4 text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="tel:+19864974822"
                    className="group/phone inline-flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover/phone:border-primary group-hover/phone:bg-primary/10">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="mb-1 text-xs font-semibold uppercase tracking-wider leading-none text-white/60">
                        Call
                      </span>
                      <span className="text-base font-semibold leading-none tracking-wide">
                        (986) 497-4822
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </article>

            {/* Card A — Brand intro (top-left) */}
            <article
              className="bento-card group relative overflow-hidden bg-secondary col-start-1 row-start-1"
              style={{ opacity: 0 }}
            >
              <img
                src="/images/about/about-main.jpg"
                alt="HVAC equipment at Komfort iQ HVAC"
                className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-[1200ms] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/75 to-secondary/20" />
              <div className="relative z-10 flex h-full flex-col justify-between p-9">
                <div className="flex items-center gap-3">
                  <span className="block h-[2px] w-8 bg-primary" />
                  <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
                    Boise, Idaho
                  </span>
                </div>
                <div>
                  <h2 className="font-heading font-black uppercase leading-[0.95] tracking-tight text-white text-[2rem]">
                    Family-Owned
                    <br />
                    HVAC Service
                  </h2>
                  <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-white/75">
                    Komfort iQ HVAC is a family-owned heating and air company
                    serving the Boise area with a practical, straightforward
                    approach and a focus on comfort.
                  </p>
                </div>
              </div>
            </article>

            {/* Card B — Services (bottom-left) */}
            <article
              className="bento-card group relative overflow-hidden bg-secondary col-start-1 row-start-2"
              style={{ opacity: 0 }}
            >
              <img
                src="/images/services/hvac-systems-content.jpg"
                alt="HVAC systems installation"
                className="absolute inset-0 h-full w-full object-cover opacity-30 transition-transform duration-[1200ms] group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/95 via-secondary/85 to-primary/15" />
              <div className="relative z-10 flex h-full flex-col justify-between p-9">
                <div className="flex items-center gap-3">
                  <span className="block h-[2px] w-8 bg-primary" />
                  <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">
                    Our Services
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <li key={service.id}>
                        <Link
                          to={`/services/${service.slug}`}
                          className="group/item flex items-center gap-3 py-2 text-white/85 transition-colors hover:text-white"
                        >
                          <span className="flex h-8 w-8 items-center justify-center border border-white/10 bg-white/5 transition-colors group-hover/item:border-primary/60 group-hover/item:bg-primary/15">
                            <Icon className="h-4 w-4 text-primary" />
                          </span>
                          <span className="flex-1 text-sm font-semibold uppercase tracking-wider">
                            {service.shortTitle}
                          </span>
                          <ArrowRight className="h-4 w-4 text-white/40 transition-all group-hover/item:translate-x-1 group-hover/item:text-primary" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
