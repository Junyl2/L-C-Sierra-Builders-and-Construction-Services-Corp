import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  ArrowUpRight,
  Home,
  Navigation,
  Mountain,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import PageBanner from "@/components/PageBanner";

const mastheadTerms = [
  "Coverage",
  "Boise, Idaho",
  "43.6150° N",
  "116.2023° W",
  "Local Service",
];

const coverageData = [
  { label: "Primary Area", value: "Boise, Idaho" },
  { label: "Also Served", value: "Boise and nearby areas" },
  { label: "Business Type", value: "Family-owned, locally run" },
];

const radiusTiles = [
  {
    image: "/images/service-area/residential-aerial.jpg",
    label: "Residential",
    meta: "Homes & neighborhoods",
    icon: Home,
    idx: "01",
  },
  {
    image: "/images/service-area/neighborhood-drone.jpg",
    label: "Local Streets",
    meta: "Boise-area routes",
    icon: Navigation,
    idx: "02",
  },
  {
    image: "/images/service-area/boise-skyline.jpg",
    label: "City Center",
    meta: "Downtown Boise",
    icon: Mountain,
    idx: "03",
  },
];

const ServiceArea = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Service Area | Komfort iQ HVAC";
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      // Intro
      const introItems = page.querySelectorAll<HTMLElement>(".sa-intro-anim");
      gsap.fromTo(
        introItems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".sa-intro",
            start: "top 80%",
            once: true,
          },
        }
      );

      const introImg = page.querySelector<HTMLElement>(".sa-intro-img");
      if (introImg) {
        gsap.fromTo(
          introImg,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0 0)",
            duration: 1.3,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: introImg,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      const introImgInner =
        page.querySelector<HTMLElement>(".sa-intro-img img");
      if (introImgInner) {
        gsap.to(introImgInner, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: ".sa-intro",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Coverage rows
      const coverageRows =
        page.querySelectorAll<HTMLElement>(".sa-coverage-row");
      const coverageList = page.querySelector<HTMLElement>(".sa-coverage-list");
      if (coverageRows.length && coverageList) {
        gsap.fromTo(
          coverageRows,
          { opacity: 0, x: 24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: coverageList,
              start: "top 88%",
              once: true,
            },
          }
        );
      }

      // Radius section header
      const radiusHeaderItems =
        page.querySelectorAll<HTMLElement>(".sa-radius-anim");
      gsap.fromTo(
        radiusHeaderItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".sa-radius",
            start: "top 82%",
            once: true,
          },
        }
      );

      // Radius tiles
      const tiles = page.querySelectorAll<HTMLElement>(".sa-radius-tile");
      gsap.fromTo(
        tiles,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".sa-radius-grid",
            start: "top 78%",
            once: true,
          },
        }
      );

      // CTA
      const ctaItems = page.querySelectorAll<HTMLElement>(".sa-cta-anim");
      gsap.fromTo(
        ctaItems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".sa-cta",
            start: "top 80%",
            once: true,
          },
        }
      );
    }, page);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <PageBanner
        title="Service Area"
        subtitle="Serving Boise, Idaho and nearby areas"
        backgroundImage="/images/service-area/boise-skyline.jpg"
      />

      {/* ═══════════════ SECTION 1 · Coordinates masthead + editorial intro ═══════════════ */}
      <section className="sa-intro relative overflow-hidden bg-background">
        {/* Coordinates masthead */}
        <div className="border-b border-foreground/15">
          <div className="container mx-auto px-4 py-3.5">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-foreground/55 text-xs font-semibold uppercase tracking-[0.25em] md:justify-start md:gap-x-8">
              <li className="text-primary">— {mastheadTerms[0]}</li>
              {mastheadTerms.slice(1).map((term, i) => (
                <li
                  key={term}
                  className="flex items-center gap-5 md:gap-8"
                >
                  <span>{term}</span>
                  {i < mastheadTerms.length - 2 && (
                    <span
                      aria-hidden="true"
                      className="block h-[2px] w-2 bg-primary/40"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="container mx-auto px-4 py-14 md:py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Image */}
            <div className="lg:col-span-6">
              <div
                className="sa-intro-img relative aspect-[4/5] overflow-hidden bg-secondary"
                style={{ clipPath: "inset(0 0 100% 0)" }}
              >
                <img
                  src="/images/service-area/idaho-road.jpg"
                  alt="Open road through the Idaho landscape"
                  className="h-full w-full scale-110 object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 text-foreground/55 text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                <span>Idaho Landscape · Serving Boise</span>
                <span className="hidden tabular-nums sm:inline">
                  — Fig. 01
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center lg:col-span-6">
              <div
                className="sa-intro-anim mb-8 flex items-center gap-3"
                style={{ opacity: 0 }}
              >
                <span className="block h-[2px] w-10 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                  Local Service — 01
                </span>
              </div>

              <h2
                className="sa-intro-anim mb-10 font-heading font-black uppercase leading-[0.92] tracking-tight text-foreground text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem]"
                style={{ opacity: 0 }}
              >
                Local service,
                <br />
                <span className="text-primary">local team.</span>
              </h2>

              <div className="mb-10 space-y-5">
                <p
                  className="sa-intro-anim text-foreground/70 text-base md:text-lg font-medium leading-relaxed"
                  style={{ opacity: 0 }}
                >
                  Komfort iQ HVAC is based in Boise, Idaho and appears to
                  mainly work within Boise and nearby areas.
                </p>
                <p
                  className="sa-intro-anim text-foreground/70 text-base md:text-lg font-medium leading-relaxed"
                  style={{ opacity: 0 }}
                >
                  Public references suggest visibility in the broader
                  Treasure Valley, but this is not clearly confirmed as an
                  official service area.
                </p>
              </div>

              {/* Coverage Profile spec sheet */}
              <div className="sa-intro-anim" style={{ opacity: 0 }}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="block h-[1px] w-6 bg-foreground/35" />
                  <span className="text-foreground/50 text-xs font-semibold uppercase tracking-[0.3em]">
                    Coverage Profile
                  </span>
                </div>
                <dl className="sa-coverage-list border-t border-foreground/15">
                  {coverageData.map((item, i) => {
                    const idx = String(i + 1).padStart(2, "0");
                    return (
                      <div
                        key={item.label}
                        className="sa-coverage-row flex items-start gap-5 border-b border-foreground/10 py-4"
                        style={{ opacity: 0 }}
                      >
                        <span className="shrink-0 w-8 pt-1 font-heading font-black text-primary text-sm tabular-nums">
                          {idx}
                        </span>
                        <div className="flex-1">
                          <dt className="mb-1 text-foreground/50 text-xs font-semibold uppercase tracking-[0.25em]">
                            {item.label}
                          </dt>
                          <dd className="font-heading font-black uppercase tracking-tight text-foreground text-base md:text-lg">
                            {item.value}
                          </dd>
                        </div>
                      </div>
                    );
                  })}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 2 · Service Radius — image tiles ═══════════════ */}
      <section className="sa-radius relative overflow-hidden border-t border-foreground/15 bg-background py-14 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-14 grid gap-8 md:mb-16 md:grid-cols-12 md:items-end md:gap-12">
            <div className="md:col-span-7">
              <div
                className="sa-radius-anim mb-6 flex items-center gap-3"
                style={{ opacity: 0 }}
              >
                <span className="block h-[2px] w-10 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                  Service Radius — 02
                </span>
              </div>
              <h2
                className="sa-radius-anim font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground text-4xl md:text-5xl lg:text-[3rem]"
                style={{ opacity: 0 }}
              >
                A view from the
                <br />
                <span className="text-primary">ground up.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p
                className="sa-radius-anim text-foreground/65 text-base md:text-lg font-medium leading-relaxed"
                style={{ opacity: 0 }}
              >
                From residential streets to downtown Boise, we serve homes
                and businesses across the area with local, family-owned HVAC
                service.
              </p>
            </div>
          </div>

          {/* Tile grid */}
          <div className="sa-radius-grid grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {radiusTiles.map((tile) => {
              const Icon = tile.icon;
              return (
                <article
                  key={tile.idx}
                  className="sa-radius-tile group relative aspect-[4/5] overflow-hidden bg-foreground"
                  style={{ opacity: 0 }}
                >
                  <img
                    src={tile.image}
                    alt={tile.label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/80 group-hover:via-black/30 group-hover:to-black/0" />

                  {/* Top-left: index */}
                  <div className="absolute left-6 top-6 md:left-7 md:top-7">
                    <span className="block font-heading font-black text-primary text-5xl md:text-6xl leading-none tracking-tight">
                      {tile.idx}
                    </span>
                  </div>

                  {/* Top-right: icon badge */}
                  <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center border border-white/25 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary/20 md:right-7 md:top-7">
                    <Icon className="h-4 w-4 text-white" />
                  </div>

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 lg:p-8">
                    <span className="mb-5 block h-[2px] w-8 bg-primary transition-all duration-500 group-hover:w-16" />
                    <h3 className="mb-2 font-heading font-black uppercase leading-tight tracking-tight text-white text-xl md:text-2xl">
                      {tile.label}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
                      {tile.meta}
                    </p>
                  </div>

                  {/* Bottom edge accent */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ SECTION 3 · CTA ═══════════════ */}
      <section
        className="sa-cta relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <div
                className="sa-cta-anim mb-8 flex items-center gap-3"
                style={{ opacity: 0 }}
              >
                <span className="block h-[2px] w-10 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                  Get Started — 03
                </span>
              </div>
              <h2
                className="sa-cta-anim mb-8 font-heading font-black uppercase leading-[0.92] tracking-tight text-background text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem]"
                style={{ opacity: 0 }}
              >
                Need service
                <br />
                in your <span className="text-primary">area?</span>
              </h2>
              <p
                className="sa-cta-anim mb-10 max-w-lg text-base md:text-lg font-medium leading-relaxed text-background/55"
                style={{ opacity: 0 }}
              >
                Contact us to ask about service availability or request a
                quote. We help with heating, cooling, and general HVAC needs
                in the Boise area.
              </p>
              <div className="sa-cta-anim" style={{ opacity: 0 }}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-primary px-10 py-5 text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0"
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="sa-cta-anim border-t border-background/15 pt-8"
                style={{ opacity: 0 }}
              >
                <span className="mb-6 block text-background/45 text-xs font-semibold uppercase tracking-[0.3em]">
                  Direct Contact
                </span>
                <div className="space-y-6">
                  <a
                    href="tel:+19864974822"
                    className="group flex items-center gap-5"
                  >
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-background/20 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </span>
                    <span>
                      <span className="mb-1 block text-background/45 text-xs font-semibold uppercase tracking-[0.2em]">
                        Call Us
                      </span>
                      <span className="block font-heading font-bold text-background text-xl transition-colors group-hover:text-primary">
                        (986) 497-4822
                      </span>
                    </span>
                  </a>
                  <div className="flex items-center gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-background/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </span>
                    <span>
                      <span className="mb-1 block text-background/45 text-xs font-semibold uppercase tracking-[0.2em]">
                        Based In
                      </span>
                      <span className="block text-base font-semibold text-background">
                        Boise, Idaho
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>

      {/* ═══════════════ Google Map — Boise, Idaho ═══════════════ */}
      <section className="relative" style={{ height: "450px" }}>
        <iframe
          title="Komfort iQ HVAC — Boise, Idaho"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d398895.9697208779!2d-116.4567941!3d43.8630074!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa80fdce1596295e7%3A0xc69ffc9c0ec8b90f!2sKomfort%20iQ%20HVAC!5e1!3m2!1sen!2sph!4v1776698971176!5m2!1sen!2sph"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default ServiceArea;
