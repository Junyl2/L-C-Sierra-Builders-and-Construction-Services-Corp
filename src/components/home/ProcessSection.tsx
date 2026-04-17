import { useRef, useEffect } from "react";
import { PhoneCall, ClipboardCheck, Wrench, ThumbsUp } from "lucide-react";
import { gsap } from "@/lib/gsap";

const steps = [
  {
    icon: PhoneCall,
    number: "01",
    label: "Contact",
    desc: "Call us or request service online. We respond promptly to schedule your appointment.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    label: "Assess",
    desc: "Our technician inspects your system and provides a clear diagnosis and estimate.",
  },
  {
    icon: Wrench,
    number: "03",
    label: "Execute",
    desc: "We complete the repair, installation, or maintenance with professional precision.",
  },
  {
    icon: ThumbsUp,
    number: "04",
    label: "Deliver",
    desc: "Your system runs optimally. We ensure your satisfaction before the job is done.",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header
      const header = section.querySelectorAll(".proc-header");
      gsap.fromTo(header, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: section, start: "top 75%", once: true },
      });

      // Steps — stagger from left with a slight cascade
      const stepEls = section.querySelectorAll(".proc-step");
      gsap.fromTo(stepEls, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: section.querySelector(".proc-steps"), start: "top 78%", once: true },
      });

      // Connecting line
      const line = section.querySelector(".proc-line");
      if (line) {
        gsap.fromTo(line, { scaleX: 0 }, {
          scaleX: 1, duration: 1.2, ease: "power2.inOut",
          scrollTrigger: { trigger: section.querySelector(".proc-steps"), start: "top 70%", once: true },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-background">
      <div className="container mx-auto px-4">
        {/* Header — wide spread layout */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 md:mb-28">
          <div>
            <div className="proc-header flex items-center gap-3 mb-5">
              <span className="block w-10 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">How It Works</span>
            </div>
            <h2 className="proc-header text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-foreground leading-[0.92] tracking-tight">
              Our <span className="text-primary">Process</span>
            </h2>
          </div>
          <p className="proc-header text-muted-foreground text-base md:text-lg max-w-sm md:text-right leading-relaxed">
            A straightforward approach from first call to job completion.
          </p>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="proc-steps relative">
          {/* Connecting line (desktop) */}
          <div className="proc-line hidden lg:block absolute top-[52px] left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[1px] bg-border origin-left" style={{ transform: "scaleX(0)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-6">
            {steps.map((step, i) => (
              <div key={step.label} className="proc-step relative" style={{ opacity: 0 }}>
                {/* Step number + icon row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative z-10 w-[52px] h-[52px] bg-foreground flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 h-[1px] bg-border lg:hidden" />
                  <span className="text-xs font-semibold text-muted-foreground tracking-widest tabular-nums lg:hidden">
                    {step.number}
                  </span>
                </div>

                {/* Desktop number */}
                <span className="hidden lg:block text-[11px] font-semibold text-primary tracking-widest tabular-nums mb-3">
                  Step {step.number}
                </span>

                {/* Label */}
                <h3 className="font-heading font-bold text-lg uppercase text-foreground tracking-wide mb-3">
                  {step.label}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
