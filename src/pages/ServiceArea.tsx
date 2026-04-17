import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowUpRight, Phone, Mail } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import PageBanner from "@/components/PageBanner";

const primaryAreas = [
  { name: "McAllen", isHQ: true },
  { name: "Edinburg", isHQ: false },
  { name: "Mission", isHQ: false },
  { name: "Pharr", isHQ: false },
  { name: "Weslaco", isHQ: false },
  { name: "Harlingen", isHQ: false },
];

const additionalAreas = [
  "San Juan",
  "Alamo",
  "Donna",
  "Mercedes",
  "Brownsville",
  "Rio Grande City",
];

const ServiceArea = () => {
  const introRef = useRef<HTMLElement>(null);
  const areasRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "Service Area | C&B Electric & A/C Services";
  }, []);

  useEffect(() => {
    const intro = introRef.current;
    const areas = areasRef.current;
    const gallery = galleryRef.current;
    const cta = ctaRef.current;

    if (!intro || !areas || !cta) return;

    const initTimeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    const ctx = gsap.context(() => {
      // Intro
      const introEls = intro.querySelectorAll(".anim");
      gsap.fromTo(introEls, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: intro, start: "top 72%", once: true },
      });

      const introImg = intro.querySelector(".intro-img");
      if (introImg) {
        gsap.fromTo(introImg, { clipPath: "inset(0 100% 0 0)" }, {
          clipPath: "inset(0 0% 0 0)", duration: 1.3, ease: "power3.inOut",
          scrollTrigger: { trigger: introImg, start: "top 78%", once: true },
        });
      }

      // Areas — rows
      const areaRows = areas.querySelectorAll(".area-row");
      gsap.fromTo(areaRows, { opacity: 0, x: -20 }, {
        opacity: 1, x: 0, duration: 0.5, ease: "power3.out", stagger: 0.07,
        scrollTrigger: { trigger: areas, start: "top 72%", once: true },
      });

      const areaPills = areas.querySelectorAll(".area-pill");
      gsap.fromTo(areaPills, { opacity: 0, scale: 0.85 }, {
        opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.4)", stagger: 0.06,
        scrollTrigger: { trigger: areas.querySelector(".pills-wrap"), start: "top 82%", once: true },
      });

      // Gallery images
      if (gallery) {
        const imgs = gallery.querySelectorAll(".gallery-img");
        gsap.fromTo(imgs, { opacity: 0, y: 40, scale: 0.97 }, {
          opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: gallery, start: "top 75%", once: true },
        });
      }

      // CTA
      const ctaEls = cta.querySelectorAll(".anim");
      gsap.fromTo(ctaEls, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: cta, start: "top 72%", once: true },
      });
    });

    return () => { clearTimeout(initTimeout); ctx.revert(); };
  }, []);

  return (
    <>
      <PageBanner
        title="Service Area"
        subtitle="Serving McAllen and the Rio Grande Valley"
        backgroundImage="/images/banners/service-area-banner.jpg"
      />

      {/* ───── SECTION 1: Introduction — editorial split ───── */}
      <section ref={introRef} className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:items-stretch min-h-[60vh]">
            {/* Text */}
            <div className="lg:w-[55%] flex flex-col justify-center py-20 md:py-28 lg:py-36 lg:pr-16 xl:pr-24">
              <div className="anim flex items-center gap-3 mb-8">
                <span className="block w-10 h-[2px] bg-primary" />
                <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Our Coverage</span>
              </div>

              <h2 className="anim text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-heading font-black uppercase leading-[0.92] tracking-tight text-foreground mb-10">
                Local service,<br />
                <span className="text-primary">local experts.</span>
              </h2>

              <div className="md:flex md:gap-10 mb-12">
                <p className="anim text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 md:mb-0 md:flex-1">
                  C&B Electric & A/C Services is based in McAllen, Texas. We provide electrical and AC services to homeowners and businesses throughout the Rio Grande Valley region.
                </p>
                <p className="anim text-muted-foreground text-sm sm:text-base leading-relaxed md:flex-1">
                  Being local means we understand the South Texas climate challenges and can respond quickly when you need service — available 24/7 for urgent and scheduled projects alike.
                </p>
              </div>

              {/* Stats */}
              <div className="anim flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t border-border">
                {[
                  { value: "12+", label: "Communities" },
                  { value: "24/7", label: "Availability" },
                  { value: "Residential", label: "& Commercial" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl md:text-3xl font-heading font-black text-primary leading-none">{stat.value}</p>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image — full height */}
            <div className="lg:w-[45%] relative min-h-[50vh] lg:min-h-0">
              <div className="intro-img absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0 100% 0 0)" }}>
                <img
                  src="/images/service-area/neighborhood.jpg"
                  alt="Residential neighborhood with palm trees"
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 2: Areas listing — dark, editorial rows ───── */}
      <section
        ref={areasRef}
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)" }}
      >
        <div className="container mx-auto px-4">
          {/* Header — spread */}
          <div className="lg:flex lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-xl mb-8 lg:mb-0">
              <div className="anim flex items-center gap-3 mb-6">
                <span className="block w-10 h-[2px] bg-primary" />
                <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Communities</span>
              </div>
              <h2 className="anim text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-background leading-[0.92] tracking-tight">
                Where We <span className="text-primary">Serve</span>
              </h2>
            </div>
            <p className="anim text-background/50 text-base md:text-lg max-w-md lg:text-right leading-relaxed">
              Professional electrical and AC services across the Rio Grande Valley.
            </p>
          </div>

          {/* Primary areas — divider rows */}
          <div className="border-t border-background/10 mb-16">
            {primaryAreas.map((area, idx) => (
              <div
                key={area.name}
                className="area-row flex items-center gap-6 md:gap-10 py-6 md:py-8 border-b border-background/10 group"
              >
                <span className="text-xs font-heading font-bold text-primary tabular-nums shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="h-px w-6 bg-background/15 shrink-0" />
                <div className="flex-1 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-lg md:text-xl font-heading font-bold text-background uppercase tracking-wide group-hover:text-primary transition-colors">
                    {area.name}
                  </span>
                </div>
                {area.isHQ && (
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground bg-primary px-3 py-1">
                    HQ
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Additional areas — pills */}
          <div className="pills-wrap">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background/40 mb-6">
              Additional Areas
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {additionalAreas.map((area) => (
                <span
                  key={area}
                  className="area-pill inline-flex items-center gap-2 px-4 py-2.5 border border-background/10 text-sm font-medium text-background/70 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {area}
                </span>
              ))}
            </div>
            <p className="text-sm text-background/40">
              Don't see your area? Give us a call — we may still be able to help.
            </p>
          </div>
        </div>
      </section>

      {/* ───── SECTION 3: Visual gallery — three images, staggered ───── */}
      <section ref={galleryRef} className="bg-background py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-12 md:mb-16">
            <span className="block w-10 h-[2px] bg-primary" />
            <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">The Valley</span>
          </div>

          {/* Asymmetric image grid */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-end">
            {/* Tall image */}
            <div className="gallery-img md:w-[40%] aspect-[3/4] overflow-hidden">
              <img
                src="/images/service-area/residential.jpg"
                alt="Residential properties with palm trees"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Two stacked images */}
            <div className="md:w-[60%] flex flex-col gap-4 md:gap-6">
              <div className="gallery-img aspect-[16/9] overflow-hidden">
                <img
                  src="/images/service-area/city-aerial.jpg"
                  alt="Aerial view of the Valley at sunset"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="gallery-img flex-1 aspect-square overflow-hidden">
                  <img
                    src="/images/service-area/neighborhood.jpg"
                    alt="Neighborhood street view"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                {/* Address block instead of fourth image */}
                <div className="flex-1 bg-foreground flex flex-col justify-center px-6 py-8 md:px-8">
                  <MapPin className="w-6 h-6 text-primary mb-4" />
                  <p className="text-[11px] uppercase tracking-wider text-background/40 mb-2">Our Location</p>
                  <p className="text-base md:text-lg font-heading font-bold text-background leading-snug">
                    6024 South 23rd Street
                  </p>
                  <p className="text-sm text-background/60 mt-1">McAllen, TX 78501</p>
                  <div className="h-px bg-background/10 my-5" />
                  <p className="text-sm text-background/50">Open 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── SECTION 4: CTA — dark editorial close ───── */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)" }}
      >
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
            {/* Left — headline */}
            <div className="lg:max-w-2xl mb-14 lg:mb-0">
              <div className="anim flex items-center gap-3 mb-8">
                <span className="block w-10 h-[2px] bg-primary" />
                <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Get Started</span>
              </div>

              <h2 className="anim text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-black uppercase text-background leading-[0.92] tracking-tight mb-8">
                Need service<br />
                in your <span className="text-primary">area?</span>
              </h2>

              <p className="anim text-background/50 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                Contact us today to discuss your electrical and AC needs. We're ready to help keep your home or business running smoothly across the Rio Grande Valley.
              </p>

              <div className="anim">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
                >
                  Schedule Service
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — contact details */}
            <div className="lg:w-auto flex-shrink-0 space-y-8">
              <a href="tel:+19567154379" className="anim group flex items-center gap-5">
                <span className="flex items-center justify-center w-14 h-14 border border-background/15 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <Phone className="w-5 h-5 text-primary" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-background/40 mb-1">Call Anytime</span>
                  <span className="block text-xl font-heading font-bold text-background group-hover:text-primary transition-colors">(956) 715-4379</span>
                </span>
              </a>

              <a href="mailto:carloselectric1@yahoo.com" className="anim group flex items-center gap-5">
                <span className="flex items-center justify-center w-14 h-14 border border-background/15 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300">
                  <Mail className="w-5 h-5 text-primary" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-background/40 mb-1">Email Us</span>
                  <span className="block text-base font-semibold text-background group-hover:text-primary transition-colors">carloselectric1@yahoo.com</span>
                </span>
              </a>

              <div className="anim flex items-center gap-5">
                <span className="flex items-center justify-center w-14 h-14 border border-background/15">
                  <MapPin className="w-5 h-5 text-primary" />
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-wider text-background/40 mb-1">Location</span>
                  <span className="block text-base font-semibold text-background">6024 S 23rd St, McAllen, TX</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* ───── Google Map ───── */}
      <section className="relative" style={{ height: "450px" }}>
        <iframe
          title="C&B Electric & A/C Services Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14620203.109348014!2d-99.3571293!3d30.5719527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a72e27895ec7%3A0xc053aa4993fb2234!2sC%26B%20Electric%20%26%20A%2FC%20Services!5e1!3m2!1sen!2sph!4v1776397271828!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default ServiceArea;
