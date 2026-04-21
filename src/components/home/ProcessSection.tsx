import { useRef, useEffect } from "react";
import { PhoneCall, ClipboardCheck, Wrench, ThumbsUp } from "lucide-react";
import { gsap } from "@/lib/gsap";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    label: "Contact",
    desc: "Reach out by phone to tell us what you need. We listen and schedule a visit.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    label: "Diagnose",
    desc: "We inspect the heating or air system on-site and share a clear explanation of the issue.",
  },
  {
    icon: Wrench,
    number: "03",
    label: "Service",
    desc: "We handle the repair, installation, or HVAC maintenance with a straightforward approach.",
  },
  {
    icon: ThumbsUp,
    number: "04",
    label: "Follow Up",
    desc: "We check that the system is running as expected and answer any remaining questions.",
  },
];

// Per-step desktop staircase offsets (mt values). Step 01 lowest, Step 04 highest.
const stepOffsets = ["lg:mt-[120px]", "lg:mt-[80px]", "lg:mt-[40px]", "lg:mt-0"];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const header = section.querySelectorAll<HTMLElement>(".proc-header");
      gsap.fromTo(
        header,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
        }
      );

      const stepEls = section.querySelectorAll<HTMLElement>(".proc-step");
      gsap.fromTo(
        stepEls,
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: section.querySelector(".proc-steps"),
            start: "top 78%",
            once: true,
          },
        }
      );

      // Animate the ascending rail on desktop
      const rail = section.querySelector<HTMLElement>(".proc-rail");
      if (rail) {
        gsap.fromTo(
          rail,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: section.querySelector(".proc-steps"),
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-secondary py-16 md:py-24 lg:py-32"
    >
      {/* Top & bottom primary rules — editorial detail */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-24 bg-primary md:w-32"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[2px] w-24 bg-primary md:w-32"
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-20 flex flex-col gap-6 md:mb-28 md:flex-row md:items-end md:justify-between">
          <div>
            <div
              className="proc-header mb-5 flex items-center gap-3"
              style={{ opacity: 0 }}
            >
              <span className="block h-[2px] w-10 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                How It Works — 04 Steps
              </span>
            </div>
            <h2
              className="proc-header font-heading font-black uppercase leading-[0.92] tracking-tight text-white text-4xl md:text-5xl lg:text-6xl"
              style={{ opacity: 0 }}
            >
              From first call
              <br />
              to <span className="text-primary">follow up.</span>
            </h2>
          </div>
          <p
            className="proc-header max-w-sm text-base md:text-lg font-medium leading-relaxed text-white/65 md:text-right"
            style={{ opacity: 0 }}
          >
            A practical, straightforward approach — four clear steps that keep
            you informed from start to finish.
          </p>
        </div>

        {/* Staircase grid */}
        <div className="proc-steps relative">
          {/* Ascending rail — diagonal orange line behind cards on lg+ */}
          <div
            aria-hidden="true"
            className="pointer-events-none hidden lg:block absolute inset-x-6 top-[60px] z-0"
            style={{
              height: "120px",
            }}
          >
            <div
              className="proc-rail h-[2px] w-full origin-left bg-gradient-to-r from-primary/10 via-primary/60 to-primary"
              style={{
                transform: "translateY(60px) rotate(-7deg)",
                transformOrigin: "left center",
              }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 lg:items-start">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.label}
                  className={`proc-step group relative flex flex-col justify-between border border-white/10 bg-secondary/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-primary/70 md:p-8 lg:min-h-[340px] ${stepOffsets[i]}`}
                  style={{ opacity: 0 }}
                >
                  {/* Top row: number + icon */}
                  <div className="mb-6 flex items-start justify-between">
                    <span className="font-heading font-black text-primary leading-none tabular-nums tracking-tight text-6xl md:text-7xl">
                      {step.number}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center border border-white/15 bg-white/5 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/15">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                  </div>

                  {/* Body */}
                  <div>
                    <span className="mb-4 block h-[2px] w-8 bg-primary transition-all duration-500 group-hover:w-16" />

                    <span className="mb-2 block text-white/45 text-xs font-semibold uppercase tracking-[0.25em]">
                      Step {step.number}
                    </span>

                    <h3 className="mb-3 font-heading font-black uppercase leading-tight tracking-tight text-white text-xl md:text-2xl">
                      {step.label}
                    </h3>

                    <p className="text-sm md:text-[15px] font-medium leading-relaxed text-white/65">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom edge accent — grows on hover */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[3px] w-0 bg-primary transition-all duration-500 ease-out group-hover:w-full"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
