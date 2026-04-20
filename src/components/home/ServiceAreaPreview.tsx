import { useRef, useEffect } from "react";
import { MapPin, ArrowUpRight, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";

const coverageFacts = [
  { label: "Based In", value: "Boise, Idaho" },
  { label: "Coverage", value: "Boise & nearby areas" },
  { label: "Status", value: "Family-owned, local" },
];

const ServiceAreaPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const leftItems = section.querySelectorAll<HTMLElement>(".area-left");
      gsap.fromTo(
        leftItems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
        }
      );

      const plate = section.querySelector<HTMLElement>(".area-plate");
      if (plate) {
        gsap.fromTo(
          plate,
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: plate, start: "top 78%", once: true },
          }
        );
      }

      const imgInner = section.querySelector<HTMLElement>(".area-img img");
      if (imgInner) {
        gsap.to(imgInner, {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-foreground py-24 md:py-32 lg:py-40"
    >
      {/* Corner editorial rules */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-24 bg-primary md:w-32"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[2px] w-24 bg-primary md:w-32"
      />

      <div className="container mx-auto px-4">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-20 lg:items-center">
          {/* ── Left: editorial content ── */}
          <div className="lg:col-span-5">
            <div
              className="area-left mb-6 flex items-center gap-3"
              style={{ opacity: 0 }}
            >
              <span className="block h-[2px] w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                Service Area — 05
              </span>
            </div>

            <h2
              className="area-left mb-8 font-heading font-black uppercase leading-[0.92] tracking-tight text-white text-4xl md:text-5xl lg:text-[3.4rem]"
              style={{ opacity: 0 }}
            >
              Serving
              <br />
              <span className="text-primary">Boise, Idaho.</span>
            </h2>

            <p
              className="area-left mb-5 max-w-lg text-base md:text-lg font-medium leading-relaxed text-white/70"
              style={{ opacity: 0 }}
            >
              Komfort iQ HVAC is based in Boise, Idaho and mainly serves Boise
              and nearby areas.
            </p>

            <p
              className="area-left mb-10 max-w-lg text-sm md:text-base font-medium leading-relaxed text-white/55"
              style={{ opacity: 0 }}
            >
              Public references suggest visibility in the broader Treasure
              Valley, but this is not officially confirmed.
            </p>

            {/* Coverage facts — inline spec */}
            <dl
              className="area-left mb-10 grid grid-cols-3 gap-4 border-y border-white/15 py-5"
              style={{ opacity: 0 }}
            >
              {coverageFacts.map((fact) => (
                <div key={fact.label}>
                  <dt className="mb-1.5 text-white/45 text-xs font-semibold uppercase tracking-[0.2em]">
                    {fact.label}
                  </dt>
                  <dd className="font-heading font-black uppercase tracking-tight text-white text-sm md:text-base">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* CTA */}
            <div
              className="area-left flex flex-wrap items-center gap-6"
              style={{ opacity: 0 }}
            >
              <Link
                to="/service-area"
                className="group inline-flex items-center gap-2 bg-primary px-8 py-4 text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0"
              >
                View Service Area
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="tel:+19864974822"
                className="group inline-flex items-center gap-2 text-white/80 text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary"
              >
                <span className="border-b-2 border-white/25 pb-1 transition-colors group-hover:border-primary">
                  Call (986) 497-4822
                </span>
              </a>
            </div>
          </div>

          {/* ── Right: framed photo survey plate ── */}
          <div className="lg:col-span-7">
            <div className="area-plate relative" style={{ opacity: 0 }}>
              {/* Coordinate overlay — above plate */}
              <div className="mb-3 flex items-center justify-between gap-4 text-white/50 text-xs font-semibold uppercase tracking-[0.25em]">
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="block h-[2px] w-6 bg-primary"
                  />
                  <span>Coverage Plate · Boise, ID</span>
                </span>
                <span className="tabular-nums">43.6150° N · 116.2023° W</span>
              </div>

              {/* Photo container with technical framing */}
              <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                {/* Background photo */}
                <div className="area-img absolute inset-0">
                  <img
                    src="/images/service-area/boise-skyline.jpg"
                    alt="Downtown Boise, Idaho with the foothills in the background"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  {/* Subtle dark overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />
                </div>

                {/* Corner crop marks */}
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-4 block h-5 w-5 border-l-2 border-t-2 border-primary"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 block h-5 w-5 border-r-2 border-t-2 border-primary"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 left-4 block h-5 w-5 border-b-2 border-l-2 border-primary"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-4 right-4 block h-5 w-5 border-b-2 border-r-2 border-primary"
                />

                {/* Compass cluster — top-right inside plate */}
                <div className="absolute right-8 top-8 hidden items-center gap-2 md:flex">
                  <span className="flex h-8 w-8 items-center justify-center border border-white/30 bg-black/40 backdrop-blur-sm">
                    <Navigation className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="text-white/85 text-[10px] font-semibold uppercase tracking-[0.3em]">
                    N
                  </span>
                </div>

                {/* Center pin */}
                <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative flex h-14 w-14 items-center justify-center bg-primary shadow-lg shadow-primary/30">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-ping bg-primary/30"
                  />
                </div>

                {/* Boise label — below pin */}
                <div className="absolute left-1/2 top-[calc(50%+3rem)] -translate-x-1/2 bg-background px-4 py-2">
                  <span className="text-foreground text-xs font-semibold uppercase tracking-[0.25em] whitespace-nowrap">
                    Boise, ID
                  </span>
                </div>

                {/* Scale bar — bottom-right */}
                <div className="absolute bottom-10 right-10 hidden items-center gap-2 md:flex">
                  <span
                    aria-hidden="true"
                    className="block h-[2px] w-12 bg-primary"
                  />
                  <span className="text-white/70 text-[10px] font-semibold uppercase tracking-[0.3em] tabular-nums">
                    Boise Area
                  </span>
                </div>
              </div>

              {/* Caption below plate */}
              <div className="mt-3 flex items-center justify-between gap-4 text-white/50 text-xs font-semibold uppercase tracking-[0.25em]">
                <span>Boise, Idaho · Downtown & Foothills</span>
                <span className="tabular-nums">— Fig. 05</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaPreview;
