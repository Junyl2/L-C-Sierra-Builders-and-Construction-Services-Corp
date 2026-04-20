import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { services } from "@/data/services";

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const header = section.querySelector<HTMLElement>(".services-header");
      const tiles = section.querySelectorAll<HTMLElement>(".svc-tile");

      if (header) {
        gsap.fromTo(
          header,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 75%", once: true },
          }
        );
      }

      gsap.fromTo(
        tiles,
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: section, start: "top 70%", once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-secondary"
    >
      {/* Thin primary rule — top-edge accent */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-24 bg-primary md:w-32"
      />

      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-32">
        {/* ── Header ── */}
        <div
          className="services-header mb-14 flex flex-col gap-10 md:mb-20 md:flex-row md:items-end md:justify-between"
          style={{ opacity: 0 }}
        >
          <div>
            <span className="mb-5 inline-flex items-center gap-3 text-primary text-xs font-semibold uppercase tracking-[0.25em]">
              <span className="block h-[2px] w-10 bg-primary" />
              Our Services
            </span>
            <h2 className="max-w-3xl font-heading font-black uppercase leading-[0.95] tracking-tight text-white text-4xl md:text-5xl lg:text-6xl">
              HVAC services for
              <br />
              Boise-area{" "}
              <span className="text-primary">homes &amp; businesses.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-semibold uppercase tracking-wider text-white/90 transition-colors hover:text-primary md:self-end"
          >
            View All Services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* ── Tiles ── */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const idx = String(i + 1).padStart(2, "0");
            return (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="svc-tile group relative block aspect-[4/5] overflow-hidden bg-foreground"
                style={{ opacity: 0 }}
                aria-label={`${service.title} — learn more`}
              >
                {/* Image */}
                <img
                  src={service.contentImage}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10 transition-all duration-500 group-hover:from-black/80 group-hover:via-black/30 group-hover:to-black/0" />

                {/* Top-left: Massive numeral */}
                <div className="absolute left-6 top-6 md:left-7 md:top-7">
                  <span className="block font-heading font-black text-primary leading-none tracking-tight text-5xl md:text-6xl">
                    {idx}
                  </span>
                </div>

                {/* Top-right: Icon badge */}
                <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-white/25 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary/20 md:right-7 md:top-7">
                  <Icon className="h-4 w-4 text-white" />
                </div>

                {/* Bottom: content */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 lg:p-8">
                  <span className="mb-5 block h-[2px] w-8 bg-primary transition-all duration-500 group-hover:w-16" />

                  <h3 className="mb-3 font-heading font-black uppercase leading-tight tracking-tight text-white text-xl md:text-2xl">
                    {service.shortTitle}
                  </h3>

                  <p className="mb-5 line-clamp-3 text-sm font-medium leading-relaxed text-white/70">
                    {service.shortDesc}
                  </p>

                  <div className="inline-flex items-center gap-2 text-primary text-xs font-semibold uppercase tracking-wider">
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {/* Hover edge accent — bottom orange line grows */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-[3px] w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Thin primary rule — bottom-right accent */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[2px] w-24 bg-primary md:w-32"
      />
    </section>
  );
};

export default ServicesOverview;
