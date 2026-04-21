import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, MapPin } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

const Services = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Services | Komfort iQ HVAC";
  }, []);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      // Intro
      const intro = page.querySelectorAll<HTMLElement>(".svc-intro");
      gsap.fromTo(
        intro,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: ".svc-intro-wrap", start: "top 85%", once: true },
        }
      );

      // Index ToC rows
      const indexRows = page.querySelectorAll<HTMLElement>(".svc-index-row");
      gsap.fromTo(
        indexRows,
        { opacity: 0, x: 24 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: { trigger: ".svc-index", start: "top 80%", once: true },
        }
      );

      // Per-service blocks
      const blocks = page.querySelectorAll<HTMLElement>(".svc-block");
      blocks.forEach((block) => {
        const header = block.querySelector<HTMLElement>(".svc-block-header");
        const content = block.querySelectorAll<HTMLElement>(".svc-block-content");
        const image = block.querySelector<HTMLElement>(".svc-block-image");
        const features = block.querySelectorAll<HTMLElement>(".svc-block-feature");
        const featWrap = block.querySelector<HTMLElement>(".svc-block-features");

        if (header) {
          gsap.fromTo(
            header,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: { trigger: block, start: "top 80%", once: true },
            }
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.0,
              ease: "power3.inOut",
              scrollTrigger: { trigger: image, start: "top 80%", once: true },
            }
          );
        }

        if (content.length) {
          gsap.fromTo(
            content,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: { trigger: block, start: "top 72%", once: true },
            }
          );
        }

        if (features.length && featWrap) {
          gsap.fromTo(
            features,
            { opacity: 0, x: 20 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power3.out",
              stagger: 0.08,
              scrollTrigger: { trigger: featWrap, start: "top 85%", once: true },
            }
          );
        }
      });

      // Bottom CTA
      const ctaItems = page.querySelectorAll<HTMLElement>(".cta-animate");
      gsap.fromTo(
        ctaItems,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".cta-section", start: "top 80%", once: true },
        }
      );
    }, page);

    return () => ctx.revert();
  }, []);

  const serviceCount = String(services.length).padStart(2, "0");

  return (
    <div ref={pageRef}>
      <PageBanner
        title="Our Services"
        subtitle="Heating, cooling, and general HVAC for the Boise area"
        backgroundImage="/images/services/services-banner.jpg"
      />

      {/* ═══════════════ Intro + Service Index ═══════════════ */}
      <section className="svc-intro-wrap bg-background py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          {/* Kicker */}
          <div
            className="svc-intro mb-6 flex items-center gap-3"
            style={{ opacity: 0 }}
          >
            <span className="block h-[2px] w-10 bg-primary" />
            <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
              What We Do
            </span>
          </div>

          {/* Headline */}
          <h2
            className="svc-intro mb-6 max-w-3xl font-heading font-black uppercase leading-[0.92] tracking-tight text-foreground text-4xl md:text-5xl lg:text-6xl"
            style={{ opacity: 0 }}
          >
            HVAC services for homes
            <br />
            &amp; businesses in{" "}
            <span className="text-primary">Boise.</span>
          </h2>

          {/* Intro paragraph */}
          <p
            className="svc-intro mb-20 max-w-2xl text-base md:text-lg font-medium leading-relaxed text-foreground/70"
            style={{ opacity: 0 }}
          >
            A family-owned heating and air company focused on dependable local
            service. We help with heating, cooling, and general HVAC needs in
            Boise, Idaho and nearby areas.
          </p>

          {/* Service Index — Table of Contents */}
          <div className="svc-index">
            <div className="mb-6 flex items-center gap-3">
              <span className="block h-[1px] w-6 bg-foreground/35" />
              <span className="text-foreground/50 text-xs font-semibold uppercase tracking-[0.3em]">
                Index — {serviceCount}
              </span>
            </div>

            <nav className="border-y border-foreground/15">
              {services.map((s, i) => {
                const idx = String(i + 1).padStart(2, "0");
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#service-${s.slug}`}
                    className="svc-index-row group flex items-center gap-4 border-b border-foreground/10 py-5 transition-colors last:border-b-0 hover:bg-muted/40 md:gap-6 md:py-6"
                    style={{ opacity: 0 }}
                  >
                    <span className="shrink-0 w-10 font-heading font-black text-primary text-sm tabular-nums">
                      {idx}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                    <span className="flex-1 font-heading font-black uppercase tracking-tight text-foreground text-base transition-colors group-hover:text-primary md:text-xl">
                      {s.title}
                    </span>
                    <span className="hidden text-foreground/45 text-xs font-semibold uppercase tracking-[0.2em] transition-colors group-hover:text-primary md:inline-block">
                      View Section
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/45 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </section>

      {/* ═══════════════ Per-service "Chapter" blocks ═══════════════ */}
      <section className="bg-background">
        <div className="container mx-auto px-4">
          {services.map((s, i) => {
            const isOdd = i % 2 === 1;
            const idx = String(i + 1).padStart(2, "0");
            return (
              <article
                key={s.id}
                id={`service-${s.slug}`}
                className="svc-block scroll-mt-32 border-t border-foreground/15 py-14 md:py-20 lg:py-28"
              >
                {/* Chapter header rail */}
                <div
                  className="svc-block-header mb-14 md:mb-16"
                  style={{ opacity: 0 }}
                >
                  <div className="flex items-end gap-6">
                    <span className="font-heading font-black text-primary leading-[0.85] tabular-nums tracking-tight text-6xl md:text-7xl lg:text-8xl">
                      {idx}
                    </span>
                    <span className="mb-4 block h-[2px] flex-1 bg-primary/30 md:mb-5" />
                    <span className="mb-4 hidden shrink-0 text-foreground/45 text-xs font-semibold uppercase tracking-[0.3em] md:inline-block md:mb-5">
                      Chapter {idx} / {serviceCount}
                    </span>
                  </div>
                </div>

                {/* Body grid */}
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                  {/* Image */}
                  <div
                    className={`lg:col-span-7 ${isOdd ? "lg:order-2" : ""}`}
                  >
                    <div
                      className="svc-block-image relative aspect-[16/10] overflow-hidden bg-secondary"
                      style={{ clipPath: "inset(0 100% 0 0)" }}
                    >
                      <img
                        src={s.contentImage}
                        alt={s.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Magazine-style caption */}
                    <div className="mt-3 flex items-center justify-between gap-4 text-foreground/50 text-xs font-semibold uppercase tracking-[0.2em]">
                      <span>{s.shortTitle} · Boise, Idaho</span>
                      <span className="tabular-nums">— 00{i + 1}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col lg:col-span-5 ${
                      isOdd ? "lg:order-1" : ""
                    }`}
                  >
                    <div
                      className="svc-block-content mb-5 flex items-center gap-3"
                      style={{ opacity: 0 }}
                    >
                      <span className="block h-[2px] w-8 bg-primary" />
                      <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                        {s.shortTitle}
                      </span>
                    </div>

                    <h3
                      className="svc-block-content mb-6 font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground text-3xl md:text-4xl lg:text-5xl"
                      style={{ opacity: 0 }}
                    >
                      {s.title}
                    </h3>

                    <p
                      className="svc-block-content mb-10 text-sm md:text-base font-medium leading-relaxed text-foreground/70"
                      style={{ opacity: 0 }}
                    >
                      {s.fullDesc}
                    </p>

                    {/* Features */}
                    <div className="svc-block-features mb-8">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="block h-[1px] w-6 bg-foreground/35" />
                        <span className="text-foreground/50 text-xs font-semibold uppercase tracking-[0.3em]">
                          What's Included
                        </span>
                      </div>
                      <ol className="border-y border-foreground/15">
                        {s.features.map((feat, fi) => (
                          <li
                            key={fi}
                            className="svc-block-feature flex items-start gap-5 border-b border-foreground/10 py-3.5 last:border-b-0"
                            style={{ opacity: 0 }}
                          >
                            <span className="shrink-0 w-8 pt-0.5 font-heading font-black text-primary text-sm tabular-nums">
                              {String(fi + 1).padStart(2, "0")}
                            </span>
                            <span className="flex-1 text-sm md:text-base font-medium leading-relaxed text-foreground">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Meta + CTA */}
                    <div
                      className="svc-block-content mt-auto flex flex-wrap items-center gap-4 border-t border-foreground/15 pt-6"
                      style={{ opacity: 0 }}
                    >
                      <span className="text-foreground/50 text-xs font-semibold uppercase tracking-[0.3em]">
                        Family-Owned · Boise, ID
                      </span>
                      <Link
                        to={`/services/${s.slug}`}
                        className="group ml-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-primary"
                      >
                        <span className="border-b-2 border-foreground/25 pb-1 transition-colors group-hover:border-primary">
                          View Detail
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ═══════════════ Bottom CTA ═══════════════ */}
      <section
        className="cta-section relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)",
        }}
      >
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="lg:flex lg:items-end lg:justify-between lg:gap-16">
            <div className="mb-14 lg:mb-0 lg:max-w-2xl">
              <div
                className="cta-animate mb-8 flex items-center gap-3"
                style={{ opacity: 0 }}
              >
                <span className="block h-[2px] w-10 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                  Get Started
                </span>
              </div>

              <h2
                className="cta-animate mb-8 font-heading font-black uppercase leading-[0.92] tracking-tight text-background text-4xl sm:text-5xl md:text-6xl lg:text-[4rem]"
                style={{ opacity: 0 }}
              >
                Need help with your
                <br />
                <span className="text-primary">heating or cooling?</span>
              </h2>

              <p
                className="cta-animate mb-10 max-w-lg text-base md:text-lg font-medium leading-relaxed text-background/55"
                style={{ opacity: 0 }}
              >
                Contact us to ask about service or request a quote. We help
                with heating, cooling, and general HVAC needs in the Boise
                area.
              </p>

              <div className="cta-animate" style={{ opacity: 0 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary px-10 py-5 text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex-shrink-0 lg:w-auto">
              <div className="space-y-8">
                <a
                  href="tel:+19864974822"
                  className="cta-animate group flex items-center gap-5"
                  style={{ opacity: 0 }}
                >
                  <span className="flex h-14 w-14 items-center justify-center border border-background/15 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/10">
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

                <div
                  className="cta-animate flex items-center gap-5"
                  style={{ opacity: 0 }}
                >
                  <span className="flex h-14 w-14 items-center justify-center border border-background/15">
                    <MapPin className="h-5 w-5 text-primary" />
                  </span>
                  <span>
                    <span className="mb-1 block text-background/45 text-xs font-semibold uppercase tracking-[0.2em]">
                      Location
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

        <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>
    </div>
  );
};

export default Services;
