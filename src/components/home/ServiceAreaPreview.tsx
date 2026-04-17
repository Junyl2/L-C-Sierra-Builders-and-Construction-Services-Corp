import { useRef, useEffect } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "@/lib/gsap";

const serviceAreas = [
  "McAllen",
  "Edinburg",
  "Mission",
  "Pharr",
  "Weslaco",
  "Harlingen",
];

const ServiceAreaPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Left content
      const leftItems = section.querySelectorAll(".area-left");
      gsap.fromTo(leftItems, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
      });

      // Area pills
      const pills = section.querySelectorAll(".area-pill");
      gsap.fromTo(pills, { opacity: 0, scale: 0.85 }, {
        opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)", stagger: 0.06,
        scrollTrigger: { trigger: section.querySelector(".area-pills"), start: "top 82%", once: true },
      });

      // Map image
      const mapImg = section.querySelector(".area-map");
      if (mapImg) {
        gsap.fromTo(mapImg, { opacity: 0, scale: 0.96 }, {
          opacity: 1, scale: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: mapImg, start: "top 78%", once: true },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg, hsl(var(--accent) / 0.3) 0%, hsl(var(--background)) 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center lg:gap-16 xl:gap-24">

          {/* Left — content */}
          <div className="lg:w-1/2 mb-16 lg:mb-0">
            <div className="area-left flex items-center gap-3 mb-6">
              <span className="block w-10 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Coverage Area</span>
            </div>

            <h2 className="area-left text-4xl md:text-5xl lg:text-[3.4rem] font-heading font-black uppercase text-foreground leading-[0.92] tracking-tight mb-8">
              Serving the<br />
              <span className="text-primary">Rio Grande Valley</span>
            </h2>

            <p className="area-left text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-lg">
              Based in McAllen, Texas, we deliver electrical and AC services
              across the Valley. Local expertise means faster response and
              reliable results for your home or business.
            </p>

            {/* Area pills */}
            <div className="area-pills flex flex-wrap gap-2 mb-10">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="area-pill inline-flex items-center gap-2 px-4 py-2.5 bg-foreground/[0.04] border border-border text-sm font-medium text-foreground"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {area}
                </span>
              ))}
            </div>

            {/* Address + CTA */}
            <div className="area-left flex flex-col sm:flex-row sm:items-end gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Our Location</p>
                <p className="text-foreground font-heading font-bold text-base">6024 South 23rd Street</p>
                <p className="text-muted-foreground text-sm">McAllen, TX 78501</p>
              </div>
              <Link
                to="/service-area"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors"
              >
                <span className="border-b border-primary/30 group-hover:border-primary pb-1 transition-colors">Full Coverage Map</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right — stylized map visualization */}
          <div className="lg:w-1/2">
            <div className="area-map relative aspect-square max-w-[480px] mx-auto lg:mx-0 lg:ml-auto">
              {/* Concentric rings */}
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-primary/[0.06]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] rounded-full border border-primary/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full border border-primary/15" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[25%] h-[25%] rounded-full bg-primary/[0.06]" />
              </div>

              {/* Center pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              </div>

              {/* Area labels positioned around */}
              {serviceAreas.map((area, idx) => {
                const positions = [
                  "top-[5%] left-1/2 -translate-x-1/2",
                  "top-[22%] right-[2%]",
                  "bottom-[22%] right-[2%]",
                  "bottom-[5%] left-1/2 -translate-x-1/2",
                  "bottom-[22%] left-[2%]",
                  "top-[22%] left-[2%]",
                ];
                return (
                  <div
                    key={area}
                    className={`absolute ${positions[idx]} bg-background border border-border px-3 py-1.5 shadow-sm`}
                  >
                    <span className="text-[11px] font-semibold text-foreground whitespace-nowrap">{area}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaPreview;
