import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, ArrowUpRight, Facebook } from "lucide-react";
import { gsap } from "@/lib/gsap";
import contactSectionImage from "@/assets/contact-about/contact-section.jpg";

const ContactCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = section.querySelectorAll<HTMLElement>(".cta-animate");
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
        }
      );

      const img = section.querySelector<HTMLElement>(".cta-img");
      if (img) {
        gsap.fromTo(
          img,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0 0 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: { trigger: img, start: "top 80%", once: true },
          }
        );
      }

      // Subtle parallax inside the photo
      const imgInner = section.querySelector<HTMLElement>(".cta-img img");
      if (imgInner) {
        gsap.to(imgInner, {
          y: -40,
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
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)",
      }}
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

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-16 xl:gap-20">
          {/* ═══════ LEFT · Contact plate image ═══════ */}
          <div className="lg:col-span-6">
            <div className="relative h-full">
              {/* Tag above image */}
              <div className="mb-3 flex items-center justify-between gap-4 text-background/50 text-xs font-semibold uppercase tracking-[0.25em]">
                <span className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="block h-[2px] w-6 bg-primary"
                  />
                  <span>Contact · Cebu City</span>
                </span>
                <span className="tabular-nums">— Fig. 06</span>
              </div>

              {/* Image plate */}
              <div
                className="cta-img relative aspect-[4/5] overflow-hidden bg-secondary lg:aspect-auto lg:h-[calc(100%-3.5rem)] lg:min-h-[520px]"
                style={{ clipPath: "inset(0 100% 0 0)" }}
              >
                <img
                  src={contactSectionImage}
                  alt="L C Sierra Builders and Construction Services Corporation structural construction site"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/20" />

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

                {/* Floating label — bottom-left on image */}
                <div className="absolute bottom-8 left-8">
                  <span className="mb-2 block text-white/70 text-xs font-semibold uppercase tracking-[0.3em]">
                    On-site service
                  </span>
                  <span className="block font-heading font-black uppercase tracking-tight text-white text-lg md:text-xl">
                    Cebu City
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ═══════ RIGHT · Contact content ═══════ */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div
              className="cta-animate mb-8 flex items-center gap-3"
              style={{ opacity: 0 }}
            >
              <span className="block h-[2px] w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                Get In Touch — 06
              </span>
            </div>

            <h2
              className="cta-animate mb-8 font-heading font-black uppercase leading-[0.9] tracking-tight text-background text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem]"
              style={{ opacity: 0 }}
            >
              Ready when
              <br />
              you are.
              <br />
              <span className="text-primary">Let's talk.</span>
            </h2>

            <p
              className="cta-animate mb-10 max-w-lg text-base md:text-lg font-medium leading-relaxed text-background/60"
              style={{ opacity: 0 }}
            >
              Contact us to ask about service availability or request a quote
              for general construction and structural strengthening needs.
            </p>

            {/* Phone — hero treatment */}
            <a
              href="tel:+639176360922"
              className="cta-animate group mb-8 block border-y border-background/15 py-6 transition-colors hover:border-primary"
              style={{ opacity: 0 }}
            >
              <div className="mb-3 flex items-center justify-between gap-4">
                <span className="flex items-center gap-3 text-background/50 text-xs font-semibold uppercase tracking-[0.3em]">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  Direct Line
                </span>
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Tap to Call ↗
                </span>
              </div>
              <span className="block font-heading font-black tabular-nums leading-none tracking-tight text-background text-4xl md:text-5xl lg:text-[3.2rem] transition-colors group-hover:text-primary">
                0917 636 0922
              </span>
            </a>

            {/* Location row */}
            <div
              className="cta-animate mb-10 flex items-center gap-5 border-b border-background/15 pb-6"
              style={{ opacity: 0 }}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-background/20">
                <MapPin className="h-5 w-5 text-primary" />
              </span>
              <div className="flex-1">
                <span className="mb-0.5 block text-background/50 text-xs font-semibold uppercase tracking-[0.25em]">
                  Based In
                </span>
                <span className="block font-heading font-bold text-background text-lg">
                  Room 307-A WDC Building, Osmena St., cor., P. Burgos St., Cebu City, Philippines, 6000
                </span>
              </div>
              <span className="hidden text-background/40 text-xs font-semibold uppercase tracking-[0.25em] sm:inline">
                Local Service
              </span>
            </div>

            {/* CTA + Facebook */}
            <div
              className="cta-animate flex flex-wrap items-center gap-6"
              style={{ opacity: 0 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-primary px-10 py-5 text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 active:translate-y-0"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://web.facebook.com/build.sheracon/?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 text-background/70 text-sm font-medium transition-colors hover:text-primary"
                aria-label="L C Sierra Builders and Construction Services Corporation on Facebook"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-background/20 transition-colors group-hover:border-primary group-hover:bg-primary/10">
                  <Facebook className="h-4 w-4 text-primary" />
                </span>
                <span>
                  Facebook:{" "}
                  <span className="font-semibold text-background group-hover:text-primary transition-colors">
                    L C Sierra Builders and Construction Services Corporation
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default ContactCTA;
