import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Map,
  Wrench,
  Phone,
  MapPin,
  Quote,
  ArrowUpRight,
  Facebook,
} from "lucide-react";
import { gsap } from "@/lib/gsap";
import PageBanner from "@/components/PageBanner";

const mastheadTerms = [
  "Brand Profile",
  "Family-Owned",
  "Heating · Air · HVAC",
  "Boise, Idaho",
  "Est. Local",
  "Vol. 01",
];

const principles = [
  {
    icon: Home,
    title: "Family-Owned",
    description:
      "A family-run business based in Boise, Idaho — locally operated and focused on the communities we serve.",
  },
  {
    icon: Map,
    title: "Local Service",
    description:
      "Being based in Boise means we understand the local climate and what homes and businesses need from a heating and air partner.",
  },
  {
    icon: Wrench,
    title: "Practical Approach",
    description:
      "Straightforward heating, cooling, and general HVAC work, with clear communication and attention to day-to-day comfort.",
  },
];

const About = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "About | Komfort iQ HVAC";
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      // Opener
      const openerItems = page.querySelectorAll<HTMLElement>(".opener-anim");
      gsap.fromTo(
        openerItems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".opener", start: "top 82%", once: true },
        }
      );

      const openerImg = page.querySelector<HTMLElement>(".opener-img");
      if (openerImg) {
        gsap.fromTo(
          openerImg,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.3,
            ease: "power3.inOut",
            scrollTrigger: { trigger: openerImg, start: "top 85%", once: true },
          }
        );
      }

      const openerImgInner = page.querySelector<HTMLElement>(".opener-img img");
      if (openerImgInner) {
        gsap.to(openerImgInner, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: ".opener",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      // Story
      const storyItems = page.querySelectorAll<HTMLElement>(".story-anim");
      gsap.fromTo(
        storyItems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".story", start: "top 78%", once: true },
        }
      );

      // Principles
      const prinHeader =
        page.querySelectorAll<HTMLElement>(".principles-anim");
      gsap.fromTo(
        prinHeader,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".principles", start: "top 80%", once: true },
        }
      );

      const prinCards = page.querySelectorAll<HTMLElement>(".principle-card");
      gsap.fromTo(
        prinCards,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".principles-grid",
            start: "top 80%",
            once: true,
          },
        }
      );

      // CTA
      const ctaItems = page.querySelectorAll<HTMLElement>(".cta-anim");
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
            trigger: ".cta-section",
            start: "top 78%",
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
        title="About Us"
        subtitle="Family-owned heating and air in Boise, Idaho"
        backgroundImage="/images/banners/about-banner.jpg"
      />

      {/* ═══════════════════ SECTION 1 · Editorial Cover / Opener ═══════════════════ */}
      <section className="opener relative overflow-hidden bg-background">
        {/* Masthead strip */}
        <div className="border-b border-foreground/15">
          <div className="container mx-auto px-4 py-3.5">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-foreground/55 text-xs font-semibold uppercase tracking-[0.25em] md:justify-start md:gap-x-8">
              <li className="text-primary">— About</li>
              {mastheadTerms.map((term, i) => (
                <li key={term} className="flex items-center gap-5 md:gap-8">
                  <span>{term}</span>
                  {i < mastheadTerms.length - 1 && (
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
            {/* Left: type */}
            <div className="lg:col-span-7">
              <div
                className="opener-anim mb-8 flex items-center gap-3"
                style={{ opacity: 0 }}
              >
                <span className="block h-[2px] w-10 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                  Who We Are — 01
                </span>
              </div>

              <h1
                className="opener-anim mb-8 font-heading font-black uppercase leading-[0.92] tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]"
                style={{ opacity: 0 }}
              >
                A local heating
                <br />
                and air company
                <br />
                in <span className="text-primary">Boise, Idaho.</span>
              </h1>

              <p
                className="opener-anim max-w-xl text-foreground/70 text-base md:text-lg font-medium leading-relaxed"
                style={{ opacity: 0 }}
              >
                Komfort iQ HVAC is a family-owned heating and air company
                focused on dependable local service and day-to-day comfort for
                homes and businesses in the Boise area.
              </p>
            </div>

            {/* Right: image + caption */}
            <div className="lg:col-span-5">
              <div
                className="opener-img relative aspect-[4/5] overflow-hidden bg-secondary"
                style={{ clipPath: "inset(0 100% 0 0)" }}
              >
                <img
                  src="/images/about/about-main.jpg"
                  alt="HVAC equipment serviced by Komfort iQ HVAC"
                  className="h-full w-full scale-110 object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-foreground/50 text-xs font-semibold uppercase tracking-[0.2em]">
                <span>Komfort iQ HVAC · Boise, Idaho</span>
                <span className="tabular-nums">— Fig. 01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 2 · Long-read story ═══════════════════ */}
      <section className="story relative overflow-hidden bg-foreground text-background">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl">
            {/* Header */}
            <div
              className="story-anim mb-10 flex items-center gap-3"
              style={{ opacity: 0 }}
            >
              <span className="block h-[2px] w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                The Story — 02
              </span>
            </div>

            <h2
              className="story-anim mb-12 font-heading font-black uppercase leading-[0.95] tracking-tight text-background text-4xl md:text-5xl lg:text-[3.5rem]"
              style={{ opacity: 0 }}
            >
              A family business
              <br />
              built on local service.
            </h2>

            {/* Body with drop cap */}
            <div
              className="story-anim mb-14 text-background/75 text-lg md:text-xl font-medium leading-[1.75]"
              style={{ opacity: 0 }}
            >
              <p>
                <span className="float-left mr-4 mt-1 font-heading font-black text-primary text-7xl md:text-8xl leading-[0.85] tracking-tight">
                  K
                </span>
                omfort iQ HVAC is a family-owned heating and air company
                based in Boise, Idaho. Our focus is HVAC services — with an
                emphasis on dependable local service and day-to-day comfort
                for the customers we work with.
              </p>
            </div>

            {/* Pull quote */}
            <blockquote
              className="story-anim relative mb-14 border-l-2 border-primary py-4 pl-8 md:py-6 md:pl-12"
              style={{ opacity: 0 }}
            >
              <Quote
                aria-hidden="true"
                className="absolute -left-3 -top-2 h-8 w-8 bg-foreground text-primary md:-left-4"
                strokeWidth={2.5}
              />
              <p className="font-heading font-black uppercase leading-[1.05] tracking-tight text-background text-2xl md:text-4xl lg:text-5xl">
                Dependable local service.
                <br />
                <span className="text-primary">Day-to-day comfort.</span>
              </p>
              <cite className="not-italic mt-5 block text-background/45 text-xs font-semibold uppercase tracking-[0.25em]">
                — Komfort iQ HVAC
              </cite>
            </blockquote>

            <div
              className="story-anim space-y-6 text-background/70 text-base md:text-lg font-medium leading-[1.75]"
              style={{ opacity: 0 }}
            >
              <p>
                We work with customers who need help with heating, cooling,
                and general HVAC — for homes and businesses throughout the
                Boise area. Our approach is practical and straightforward.
              </p>
              <p>
                Based on available public information, the company mainly
                serves Boise and nearby areas.
              </p>
            </div>

            {/* Signature meta row */}
            <div
              className="story-anim mt-14 flex items-center justify-between gap-4 border-t border-background/15 pt-6 text-background/50 text-xs font-semibold uppercase tracking-[0.25em]"
              style={{ opacity: 0 }}
            >
              <span>Komfort iQ Heating and Air LLC</span>
              <span className="tabular-nums">— 002</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ SECTION 3 · Principles ═══════════════════ */}
      <section className="principles relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          {/* Header */}
          <div className="mb-14 grid gap-10 md:mb-20 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div
                className="principles-anim mb-6 flex items-center gap-3"
                style={{ opacity: 0 }}
              >
                <span className="block h-[2px] w-10 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                  Principles — 03
                </span>
              </div>
              <h2
                className="principles-anim max-w-xl font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground text-4xl md:text-5xl lg:text-[3.2rem]"
                style={{ opacity: 0 }}
              >
                What we <span className="text-primary">focus on.</span>
              </h2>
            </div>
            <div className="md:col-span-5 md:self-end">
              <p
                className="principles-anim text-foreground/65 text-base md:text-lg font-medium leading-relaxed"
                style={{ opacity: 0 }}
              >
                A simple approach rooted in local service and practical
                solutions for homes and businesses in the Boise area.
              </p>
            </div>
          </div>

          {/* Grid of principle cards */}
          <div className="principles-grid grid gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
            {principles.map((p, i) => {
              const Icon = p.icon;
              const idx = String(i + 1).padStart(2, "0");
              return (
                <article
                  key={p.title}
                  className="principle-card group relative flex flex-col justify-between border border-foreground/12 bg-background p-8 transition-colors hover:border-primary/60 lg:p-10 min-h-[340px]"
                  style={{ opacity: 0 }}
                >
                  {/* Top row: number + icon */}
                  <div className="flex items-start justify-between">
                    <span className="font-heading font-black text-primary leading-none tabular-nums tracking-tight text-5xl md:text-6xl">
                      {idx}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-foreground/15 bg-background transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                  </div>

                  {/* Body */}
                  <div>
                    <span className="mb-4 block h-[2px] w-8 bg-primary transition-all duration-500 group-hover:w-16" />
                    <h3 className="mb-3 font-heading font-black uppercase leading-tight tracking-tight text-foreground text-xl md:text-2xl">
                      {p.title}
                    </h3>
                    <p className="text-foreground/65 text-sm md:text-base font-medium leading-relaxed">
                      {p.description}
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

      {/* ═══════════════════ SECTION 4 · Contact CTA ═══════════════════ */}
      <section
        className="cta-section relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-16 xl:gap-20">
            {/* LEFT · Image plate */}
            <div className="lg:col-span-5">
              <div className="relative h-full">
                {/* Tag above image */}
                <div className="mb-3 flex items-center justify-between gap-4 text-background/50 text-xs font-semibold uppercase tracking-[0.25em]">
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="block h-[2px] w-6 bg-primary"
                    />
                    <span>Reach Out · Boise, ID</span>
                  </span>
                  <span className="tabular-nums">— Fig. 04</span>
                </div>

                {/* Image with left-edge primary rule */}
                <div
                  className="cta-anim relative overflow-hidden bg-secondary aspect-[4/5] lg:aspect-auto lg:h-[calc(100%-3.5rem)] lg:min-h-[560px]"
                  style={{ opacity: 0 }}
                >
                  <img
                    src="/images/about/contact-cta.jpg"
                    alt="HVAC equipment serviced by Komfort iQ HVAC"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25" />

                  {/* Vertical orange index rule on left edge */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 block w-[3px] bg-primary"
                  />

                  {/* Top-right corner mark */}
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 block h-5 w-5 border-r-2 border-t-2 border-primary"
                  />

                  {/* Floating label bottom-left */}
                  <div className="absolute bottom-8 left-8">
                    <span className="mb-2 block text-white/70 text-xs font-semibold uppercase tracking-[0.3em]">
                      Family-owned
                    </span>
                    <span className="block font-heading font-black uppercase tracking-tight text-white text-lg md:text-xl">
                      Local Service
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT · Content + Direct Contact */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div
                className="cta-anim mb-8 flex items-center gap-3"
                style={{ opacity: 0 }}
              >
                <span className="block h-[2px] w-10 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                  Get in Touch — 04
                </span>
              </div>

              <h2
                className="cta-anim mb-8 font-heading font-black uppercase leading-[0.92] tracking-tight text-background text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem]"
                style={{ opacity: 0 }}
              >
                Ready to talk
                <br />
                about <span className="text-primary">comfort?</span>
              </h2>

              <p
                className="cta-anim mb-10 max-w-xl text-base md:text-lg font-medium leading-relaxed text-background/55"
                style={{ opacity: 0 }}
              >
                Contact us to ask about service or request a quote. We help
                with heating, cooling, and general HVAC needs in the Boise
                area.
              </p>

              {/* Direct Contact — inline grid */}
              <div
                className="cta-anim mb-10 border-t border-background/15 pt-8"
                style={{ opacity: 0 }}
              >
                <span className="mb-6 block text-background/45 text-xs font-semibold uppercase tracking-[0.3em]">
                  Direct Contact
                </span>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                      <span className="block font-heading font-bold text-background text-lg transition-colors group-hover:text-primary">
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

              {/* CTA + Facebook */}
              <div
                className="cta-anim flex flex-wrap items-center gap-5"
                style={{ opacity: 0 }}
              >
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 bg-primary px-10 py-5 text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0"
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <a
                  href="https://web.facebook.com/profile.php?id=61583999842870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-background/70 text-sm font-medium transition-colors hover:text-primary"
                  aria-label="Komfort iQ HVAC on Facebook"
                >
                  <span className="flex h-10 w-10 items-center justify-center border border-background/20 transition-colors group-hover:border-primary group-hover:bg-primary/10">
                    <Facebook className="h-4 w-4 text-primary" />
                  </span>
                  <span>
                    Find us on Facebook:{" "}
                    <span className="font-semibold text-background group-hover:text-primary transition-colors">
                      Komfort iQ HVAC
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>
    </div>
  );
};

export default About;
