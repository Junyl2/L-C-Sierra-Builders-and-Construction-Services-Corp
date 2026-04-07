import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/data/services";

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Featured service (first one - Heating)
  const featuredService = services[0];
  // Rest of services for the grid
  const gridServices = services.slice(1);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const featured = featuredRef.current;
    const grid = gridRef.current;
    const cta = ctaRef.current;

    if (!section || !header || !featured || !grid || !cta) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(header,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Featured card animation
      gsap.fromTo(featured,
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featured,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Grid cards stagger animation
      const gridCards = grid.querySelectorAll(".service-card");
      gsap.fromTo(gridCards,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: grid,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // CTA animation
      gsap.fromTo(cta,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cta,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 opacity-0">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase text-foreground mt-2">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Comprehensive HVAC solutions for your comfort needs.
          </p>
        </div>

        {/* Featured Service - Large Card */}
        <div ref={featuredRef} className="mb-8 opacity-0">
          <Link
            to={`/services/${featuredService.slug}`}
            className="group block relative overflow-hidden rounded bg-secondary"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 overflow-hidden">
                <img
                  src={featuredService.contentImage}
                  alt={featuredService.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-secondary via-secondary/80 to-transparent lg:from-secondary lg:via-secondary/60" />
              </div>

              {/* Content Side */}
              <div className="relative p-8 md:p-12 lg:p-16 lg:pr-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-6">
                  <featuredService.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                    Featured Service
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-extrabold text-primary-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredService.title}
                </h3>

                <p className="text-secondary-foreground/80 leading-relaxed mb-6 max-w-lg">
                  {featuredService.fullDesc}
                </p>

                {/* Features list */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {featuredService.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-secondary-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Grid Services - Compact Cards */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gridServices.map((service) => (
            <div key={service.id} className="service-card opacity-0">
              <Link
                to={`/services/${service.slug}`}
                className="group block h-full rounded bg-card overflow-hidden border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.contentImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded bg-accent flex items-center justify-center">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-base uppercase text-foreground group-hover:text-primary transition-colors">
                      {service.shortTitle}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                    {service.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="text-center mt-12 opacity-0">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-colors"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
