import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/data/services";

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeService, setActiveService] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const rows = section.querySelectorAll(".svc-row");
      gsap.fromTo(
        rows,
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

      const counter = section.querySelector(".svc-counter");
      if (counter) {
        gsap.fromTo(
          counter,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: { trigger: section, start: "top 75%", once: true },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const current = services[activeService];

  const handleMobileTap = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative bg-background overflow-hidden">
      <div className="lg:flex lg:min-h-[85vh]">
        {/* Left column — service list */}
        <div className="lg:w-[55%] xl:w-[50%] flex flex-col">
          {/* Section header */}
          <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-10 md:pb-14">
            <span className="svc-counter text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-4 block" style={{ opacity: 0 }}>
              {String(activeService + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")} — Services
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black uppercase text-foreground leading-[0.92] tracking-tight">
              What We<br /><span className="text-primary">Do</span>
            </h2>
          </div>

          {/* Service rows */}
          <div className="flex-1 flex flex-col border-t border-border">
            {services.map((service, index) => {
              const isActive = activeService === index;
              const isExpanded = expandedMobile === index;

              return (
                <div key={service.id} className="svc-row border-b border-border" style={{ opacity: 0 }}>
                  {/* ── Desktop: hover row → link ── */}
                  <Link
                    to={`/services/${service.slug}`}
                    className={`hidden lg:flex items-center gap-6 px-16 py-6 transition-colors duration-300 group ${
                      isActive ? "bg-foreground text-background" : "hover:bg-accent/40"
                    }`}
                    onMouseEnter={() => setActiveService(index)}
                  >
                    <span className={`text-xs font-semibold tracking-widest tabular-nums transition-colors ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className={`w-9 h-9 flex items-center justify-center transition-colors ${
                      isActive ? "bg-primary" : "bg-primary/10"
                    }`}>
                      <service.icon className={`w-4 h-4 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                    </div>

                    <span className={`flex-1 font-heading font-bold text-lg uppercase tracking-wide transition-colors ${
                      isActive ? "text-background" : "text-foreground group-hover:text-primary"
                    }`}>
                      {service.shortTitle}
                    </span>

                    <ArrowUpRight className={`w-5 h-5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isActive ? "text-primary" : "text-muted-foreground"
                    }`} />
                  </Link>

                  {/* ── Mobile: accordion ── */}
                  <div className="lg:hidden">
                    {/* Trigger */}
                    <button
                      onClick={() => handleMobileTap(index)}
                      className={`w-full flex items-center gap-4 px-6 md:px-12 py-5 transition-colors duration-300 ${
                        isExpanded ? "bg-foreground" : ""
                      }`}
                    >
                      <span className={`text-xs font-semibold tracking-widest tabular-nums ${
                        isExpanded ? "text-primary" : "text-muted-foreground"
                      }`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className={`w-9 h-9 flex items-center justify-center transition-colors ${
                        isExpanded ? "bg-primary" : "bg-primary/10"
                      }`}>
                        <service.icon className={`w-4 h-4 ${isExpanded ? "text-primary-foreground" : "text-primary"}`} />
                      </div>

                      <span className={`flex-1 text-left font-heading font-bold text-base uppercase tracking-wide transition-colors ${
                        isExpanded ? "text-background" : "text-foreground"
                      }`}>
                        {service.shortTitle}
                      </span>

                      <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${
                        isExpanded ? "text-primary rotate-180" : "text-muted-foreground"
                      }`} />
                    </button>

                    {/* Expanded content */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      <div className="bg-foreground">
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={service.contentImage}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                        </div>

                        {/* Description + CTA */}
                        <div className="px-6 md:px-12 py-6">
                          <p className="text-background/60 text-sm leading-relaxed mb-5">
                            {service.shortDesc}
                          </p>
                          <Link
                            to={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider group"
                          >
                            <span>Learn More</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View all */}
          <div className="px-6 md:px-12 lg:px-16 py-8 md:py-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors group"
            >
              <span>View All Services</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right column — full-bleed featured image (desktop only) */}
        <div className="hidden lg:block lg:w-[45%] xl:w-[50%] relative">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                activeService === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={service.contentImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-foreground/40" />
            </div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center p-10">
            <div className="text-center max-w-md">
              <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-3">{current.shortTitle}</p>
              <p className="text-white/90 text-base leading-relaxed">
                {current.shortDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
