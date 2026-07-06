import { useRef, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Building2, Phone } from "lucide-react";
import { gsap } from "@/lib/gsap";
import heroImageOne from "@/assets/hero/hero-1.jpg";
import heroImageTwo from "@/assets/hero/hero-2.jpg";
import heroImageThree from "@/assets/hero/hero-3.jpg";

const heroImages = [heroImageOne, heroImageTwo, heroImageThree];

let hasPlayedInitialAnimation = false;

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = section.querySelectorAll<HTMLElement>(".hero-animate");

      if (!hasPlayedInitialAnimation) {
        hasPlayedInitialAnimation = true;

        gsap.fromTo(
          items,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.1,
            delay: 0.25,
          }
        );
      } else {
        gsap.set(items, { opacity: 1, y: 0 });
      }
    }, section);

    return () => ctx.revert();
  }, [location.pathname]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex h-[100svh] max-h-[100svh] w-full overflow-hidden bg-foreground text-white"
    >
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 transition-opacity duration-[1800ms] ease-in-out"
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`L C Sierra construction site background ${index + 1}`}
              className="h-full w-full scale-105 object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/74 via-black/38 to-black/14" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/44 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto flex h-full min-h-0 items-end px-4 pb-9 pt-28 sm:pt-32 md:pb-12 md:pt-36 lg:pb-14 lg:pt-36 xl:pb-16">
        <div className="grid w-full min-h-0 gap-6 lg:grid-cols-12 lg:items-end lg:gap-12 xl:gap-16">
          <div className="lg:col-span-8 xl:col-span-7">
            <div
              className="hero-animate mb-4 flex items-center gap-3 sm:mb-5 lg:mb-6"
              style={{ opacity: 0 }}
            >
              <span className="block h-[2px] w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                Cebu City — Since 2020
              </span>
            </div>

            <h1
              className="hero-animate font-heading font-black uppercase leading-[0.9] tracking-tight text-white text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[4.9rem] xl:text-[5.8rem]"
              style={{ opacity: 0 }}
            >
              Commercial
              <br />
              construction
              <br />
              <span className="text-primary">built clearly.</span>
            </h1>

            <p
              className="hero-animate mt-5 hidden max-w-2xl text-sm font-medium leading-relaxed text-white/72 sm:text-base md:block md:text-lg lg:mt-6"
              style={{ opacity: 0 }}
            >
              L C Sierra Builders and Construction Services Corporation
              provides general construction and structural strengthening
              services from Cebu City, Philippines.
            </p>

            <div
              className="hero-animate mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-8"
              style={{ opacity: 0 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0 sm:px-7 sm:py-4 sm:text-sm"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border border-white/25 bg-white/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary active:translate-y-0 sm:px-7 sm:py-4 sm:text-sm"
              >
                View Services
                <Building2 className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="hero-animate border-t border-white/20 pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:col-span-4 xl:col-start-9">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.25em] text-white/45">
                  Cebu-based team
                </span>
                <p className="font-heading text-lg font-black uppercase leading-tight tracking-tight text-white md:text-xl xl:text-2xl">
                  General construction and structural strengthening.
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                  Klarong koordinasyon. Lokal nga serbisyo.
                </p>
              </div>
              <a
                href="tel:+639176360922"
                className="group flex items-center gap-3 text-white transition-colors hover:text-primary sm:gap-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 bg-white/10 backdrop-blur-sm transition-colors group-hover:border-primary group-hover:bg-primary/10 sm:h-12 sm:w-12">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                    Call Us
                  </span>
                  <span className="block font-heading text-lg font-bold tracking-wide sm:text-xl">
                    0917 636 0922
                  </span>
                </span>
              </a>
            </div>
          </aside>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-6">
        {heroImages.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1.5 transition-all duration-300 ${
              currentImageIndex === index
                ? "w-8 bg-primary"
                : "w-4 bg-white/35 hover:bg-white/70"
            }`}
            aria-label={`Show hero image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
