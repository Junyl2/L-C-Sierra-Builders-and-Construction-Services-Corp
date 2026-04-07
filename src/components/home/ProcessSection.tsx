import { useRef, useEffect } from "react";
import { PhoneCall, ClipboardCheck, Wrench, ThumbsUp, ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

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
    desc: "Your system runs optimally. We ensure your complete satisfaction before leaving.",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const stepsContainer = stepsRef.current;
    const progress = progressRef.current;

    if (!section || !header || !stepsContainer) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        header.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Progress bar animation (desktop)
      if (progress && window.innerWidth >= 1024) {
        gsap.fromTo(
          progress,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: stepsContainer,
              start: "top 65%",
              once: true,
            },
          }
        );
      }

      // Steps staggered animation with individual triggers
      const stepElements = stepsContainer.querySelectorAll(".process-step");
      stepElements.forEach((step, index) => {
        const card = step.querySelector(".step-card");
        const icon = step.querySelector(".step-icon");
        const number = step.querySelector(".step-number");
        const content = step.querySelector(".step-content");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            once: true,
          },
        });

        tl.fromTo(
          card,
          { opacity: 0, y: 80, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", delay: index * 0.1 }
        )
          .fromTo(
            icon,
            { scale: 0, rotation: -45 },
            { scale: 1, rotation: 0, duration: 0.5, ease: "back.out(2)" },
            "-=0.4"
          )
          .fromTo(
            number,
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
            "-=0.3"
          )
          .fromTo(
            content,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            "-=0.2"
          );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary) / 0.03) 0%, hsl(var(--background)) 50%, hsl(var(--accent) / 0.5) 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large faded number */}
        <span className="absolute -right-20 top-1/2 -translate-y-1/2 text-[400px] font-heading font-black text-primary/[0.02] leading-none select-none">
          04
        </span>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - split layout */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-foreground leading-[0.9] tracking-tight">
              How It
              <br />
              <span className="text-primary">Works</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-md lg:text-right lg:pb-2">
            A straightforward, professional approach from your first call to job completion.
          </p>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="relative">
          {/* Progress track (desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[calc(12.5%-8px)] right-[calc(12.5%-8px)] h-1 bg-border/50 rounded-full">
            <div
              ref={progressRef}
              className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/60 rounded-full origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <div key={step.label} className="process-step relative">
                {/* Card */}
                <div className="step-card relative h-full group">
                  {/* Timeline dot (desktop) */}
                  <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/20" />
                  </div>

                  {/* Main card */}
                  <div className="relative bg-background border border-border/60 p-8 pt-12 lg:pt-16 h-full overflow-hidden transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/5 group-hover:-translate-y-1">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Step number - large background */}
                    <span className="step-number absolute -top-4 -left-2 text-8xl lg:text-9xl font-heading font-black text-primary/[0.07] leading-none select-none">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div className="step-icon relative mb-6 inline-block">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      {/* Floating badge */}
                      <span className="absolute -bottom-2 -right-2 w-8 h-8 bg-foreground text-background text-sm font-bold flex items-center justify-center shadow-md">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="step-content relative z-10">
                      <h3 className="font-heading font-bold text-xl uppercase text-foreground mb-3 tracking-wide">
                        {step.label}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>

                {/* Connector arrow (mobile/tablet) */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-6">
                    <div className="flex flex-col items-center gap-1 text-primary/40">
                      <div className="w-px h-6 bg-current" />
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
