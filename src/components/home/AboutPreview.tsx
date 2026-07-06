import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import aboutPreviewImage from "@/assets/contact-about/about-1.jpg";

const brandProfile = [
  {
    label: "Type",
    description: "Commercial construction company.",
  },
  {
    label: "Location",
    description: "Based in Cebu City since 2020.",
  },
  {
    label: "Services",
    description: "General construction and structural strengthening.",
  },
  {
    label: "Approach",
    description:
      "Practical and straightforward, with clear project communication.",
  },
];

const AboutPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const headline = section.querySelector<HTMLElement>(".about-headline");
      if (headline) {
        gsap.fromTo(
          headline,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
            scrollTrigger: { trigger: section, start: "top 70%", once: true },
          }
        );
      }

      const copy = section.querySelectorAll<HTMLElement>(".about-copy");
      gsap.fromTo(
        copy,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 65%", once: true },
        }
      );

      const img = section.querySelector<HTMLElement>(".about-img");
      if (img) {
        gsap.fromTo(
          img,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1.3,
            ease: "power3.inOut",
            scrollTrigger: { trigger: img, start: "top 80%", once: true },
          }
        );
      }

      const profileRows =
        section.querySelectorAll<HTMLElement>(".about-profile-row");
      const profileList = section.querySelector<HTMLElement>(".about-profile");
      if (profileRows.length && profileList) {
        gsap.fromTo(
          profileRows,
          { opacity: 0, x: 24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: profileList,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      const imgInner = section.querySelector<HTMLElement>(".about-img img");
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
    <section ref={sectionRef} className="relative bg-background">
      <div className="container mx-auto px-4 py-14 md:py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* ═══════════════ Left: sticky image + caption ═══════════════ */}
          <div className="relative">
            <div className="lg:sticky lg:top-28">
              {/* Small editorial "tag" above image */}
              <div className="mb-4 flex items-center gap-3">
                <span className="block h-[2px] w-8 bg-primary" />
                <span className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">
                  Since 2020
                </span>
              </div>

              {/* Image frame */}
              <div
                className="about-img relative aspect-[16/10] overflow-hidden bg-secondary lg:aspect-[4/5]"
                style={{ clipPath: "inset(100% 0 0 0)" }}
              >
                <img
                  src={aboutPreviewImage}
                  alt="L C Sierra Builders and Construction Services Corporation construction project team"
                  className="h-full w-full scale-110 object-cover"
                />
              </div>

              {/* Photo caption — magazine style */}
              <div className="mt-4 flex items-center justify-between gap-4 text-foreground/55">
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  L C Sierra Builders and Construction Services Corporation · Cebu City
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] tabular-nums">
                  — 001
                </span>
              </div>
            </div>
          </div>

          {/* ═══════════════ Right: editorial copy + brand profile ═══════════════ */}
          <div>
            {/* Kicker */}
            <div className="about-copy mb-8 flex items-center gap-3" style={{ opacity: 0 }}>
              <span className="block h-[2px] w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                About L C Sierra Builders and Construction Services Corporation
              </span>
            </div>

            {/* Editorial headline */}
            <h2 className="about-headline mb-8 font-heading font-black uppercase leading-[0.95] tracking-tight text-foreground text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.5rem]">
              Commercial
              <br />
              General Construction
              <br />
              in <span className="text-primary">Cebu City.</span>
            </h2>

            {/* Body copy */}
            <div className="mb-12 max-w-xl space-y-4">
              <p
                className="about-copy text-sm md:text-base font-medium leading-relaxed text-foreground/70"
                style={{ opacity: 0 }}
              >
                L C Sierra Builders and Construction Services Corporation is a
                commercial construction company based in Cebu City since 2020.
              </p>
              <p
                className="about-copy text-sm md:text-base font-medium leading-relaxed text-foreground/70"
                style={{ opacity: 0 }}
              >
                The company provides general construction and structural
                strengthening services with practical coordination for
                commercial project needs.
              </p>
            </div>

            {/* Brand profile — spec-sheet style */}
            <div className="mb-12">
              <div className="mb-6 flex items-center gap-3">
                <span className="block h-[1px] w-6 bg-foreground/30" />
                <span className="text-foreground/45 text-xs font-semibold uppercase tracking-[0.3em]">
                  Brand Profile
                </span>
              </div>

              <dl className="about-profile border-t border-foreground/12">
                {brandProfile.map((item, i) => {
                  const idx = String(i + 1).padStart(2, "0");
                  return (
                    <div
                      key={item.label}
                      className="about-profile-row group flex items-start gap-5 border-b border-foreground/12 py-5 transition-colors hover:bg-accent/40"
                      style={{ opacity: 0 }}
                    >
                      <span className="shrink-0 pt-0.5 w-8 font-heading font-black text-primary text-sm tabular-nums">
                        {idx}
                      </span>
                      <div className="flex-1 min-w-0">
                        <dt className="mb-1 font-heading font-black uppercase tracking-tight text-foreground text-base md:text-lg">
                          {item.label}
                        </dt>
                        <dd className="text-sm font-medium leading-relaxed text-foreground/60">
                          {item.description}
                        </dd>
                      </div>
                      <span
                        aria-hidden="true"
                        className="mt-3 block h-[2px] w-6 shrink-0 bg-primary/30 transition-all duration-300 group-hover:w-12 group-hover:bg-primary"
                      />
                    </div>
                  );
                })}
              </dl>
            </div>

            {/* CTA */}
            <Link
              to="/about"
              className="about-copy group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:text-primary"
              style={{ opacity: 0 }}
            >
              <span className="border-b-2 border-foreground/25 pb-1 transition-colors group-hover:border-primary">
                Learn More About Us
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
