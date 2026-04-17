import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Shield, Heart, MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { gsap } from "@/lib/gsap";
import PageBanner from "@/components/PageBanner";

const About = () => {
  const introRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = "About | C&B Electric & A/C Services";
  }, []);

  useEffect(() => {
    const intro = introRef.current;
    const story = storyRef.current;
    const values = valuesRef.current;
    const cta = ctaRef.current;

    if (!intro || !story || !values || !cta) return;

    const ctx = gsap.context(() => {
      // --- Intro ---
      const introItems = intro.querySelectorAll(".anim");
      gsap.fromTo(introItems, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: intro, start: "top 72%", once: true },
      });

      const introImg = intro.querySelector(".intro-img");
      if (introImg) {
        gsap.fromTo(introImg, { clipPath: "inset(0 100% 0 0)" }, {
          clipPath: "inset(0 0% 0 0)", duration: 1.3, ease: "power3.inOut",
          scrollTrigger: { trigger: introImg, start: "top 78%", once: true },
        });
      }

      // Parallax on intro image
      const introImgInner = intro.querySelector(".intro-img img");
      if (introImgInner) {
        gsap.to(introImgInner, {
          y: -40, ease: "none",
          scrollTrigger: { trigger: intro, start: "top bottom", end: "bottom top", scrub: 1.5 },
        });
      }

      // --- Story timeline ---
      const storyItems = story.querySelectorAll(".anim");
      gsap.fromTo(storyItems, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: story, start: "top 72%", once: true },
      });

      const milestones = story.querySelectorAll(".milestone");
      gsap.fromTo(milestones, { opacity: 0, x: -30 }, {
        opacity: 1, x: 0, duration: 0.6, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: story.querySelector(".milestones"), start: "top 78%", once: true },
      });

      // --- Values ---
      const valuesItems = values.querySelectorAll(".anim");
      gsap.fromTo(valuesItems, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: values, start: "top 72%", once: true },
      });

      const valueRows = values.querySelectorAll(".value-row");
      gsap.fromTo(valueRows, { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.15,
        scrollTrigger: { trigger: values.querySelector(".values-list"), start: "top 78%", once: true },
      });

      // --- CTA ---
      const ctaItems = cta.querySelectorAll(".anim");
      gsap.fromTo(ctaItems, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.12,
        scrollTrigger: { trigger: cta, start: "top 72%", once: true },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageBanner
        title="About Us"
        subtitle="Professional electrical and AC service you can trust"
        backgroundImage="/images/banners/about-banner.jpg"
      />

      {/* ───────── SECTION 1: Introduction — Split editorial ───────── */}
      <section ref={introRef} className="relative overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:items-stretch min-h-[65vh]">
            {/* Text side */}
            <div className="lg:w-[55%] flex flex-col justify-center py-20 md:py-28 lg:py-36 lg:pr-16 xl:pr-24">
              <div className="anim flex items-center gap-3 mb-8">
                <span className="block w-10 h-[2px] bg-primary" />
                <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Who We Are</span>
              </div>

              <h2 className="anim text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] font-heading font-black uppercase leading-[0.92] tracking-tight text-foreground mb-10">
                Your local<br />
                <span className="text-primary">electric & AC</span> partner.
              </h2>

              <div className="md:flex md:gap-10 mb-12">
                <p className="anim text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 md:mb-0 md:flex-1">
                  C&B Electric & A/C Services provides professional electrical and air conditioning repair services for residential and commercial customers in McAllen, Texas and the Rio Grande Valley.
                </p>
                <p className="anim text-muted-foreground text-sm sm:text-base leading-relaxed md:flex-1">
                  We focus on delivering reliable, efficient, and cost-effective solutions tailored to each client's needs and budget. Our team is committed to high professional standards in every project.
                </p>
              </div>

              {/* Inline stats */}
              <div className="anim flex flex-wrap gap-x-10 gap-y-4 pt-8 border-t border-border">
                {[
                  { value: "24/7", label: "Availability" },
                  { value: "Residential", label: "& Commercial" },
                  { value: "McAllen, TX", label: "Based In" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl md:text-3xl font-heading font-black text-primary leading-none">{stat.value}</p>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image side — full height bleed */}
            <div className="lg:w-[45%] relative min-h-[50vh] lg:min-h-0">
              <div className="intro-img absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0 100% 0 0)" }}>
                <img
                  src="/images/about/about-main.jpg"
                  alt="Professional electrical installation"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 2: Our Story — Dark, timeline milestones ───────── */}
      <section
        ref={storyRef}
        className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)" }}
      >
        <div className="container mx-auto px-4">
          {/* Header — wide spread */}
          <div className="lg:flex lg:items-end lg:justify-between gap-8 mb-16 md:mb-24">
            <div className="max-w-xl mb-8 lg:mb-0">
              <div className="anim flex items-center gap-3 mb-6">
                <span className="block w-10 h-[2px] bg-primary" />
                <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Our Story</span>
              </div>
              <h2 className="anim text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-background leading-[0.92] tracking-tight">
                How We <span className="text-primary">Got Here</span>
              </h2>
            </div>
            <p className="anim text-background/50 text-base md:text-lg max-w-md lg:text-right leading-relaxed">
              From basic installations to a full-service electrical and HVAC operation.
            </p>
          </div>

          {/* Timeline milestones — horizontal on desktop */}
          <div className="milestones">
            <div className="lg:flex lg:gap-0">
              {[
                {
                  phase: "Foundation",
                  title: "Wire & Cable Installations",
                  desc: "The company started with basic wire and cable installations, building a foundation of hands-on electrical expertise and workmanship.",
                },
                {
                  phase: "Expansion",
                  title: "AC Repair & HVAC Maintenance",
                  desc: "As experience and capabilities grew, air conditioning repair and HVAC maintenance were added to serve a wider range of client needs.",
                },
                {
                  phase: "Growth",
                  title: "Commercial Refrigeration",
                  desc: "Commercial refrigeration services were introduced, extending our reach to restaurants, stores, and other businesses across the Valley.",
                },
                {
                  phase: "Today",
                  title: "Full-Service Operations",
                  desc: "Today we handle a wide range of electrical and HVAC-related projects, including urgent jobs and time-sensitive service requests.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`milestone flex-1 relative py-8 lg:py-0 lg:px-8 xl:px-10 ${
                    idx < 3 ? "border-b lg:border-b-0 lg:border-r border-background/10" : ""
                  }`}
                >
                  {/* Phase label */}
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-[0.2em] mb-4 block">
                    {String(idx + 1).padStart(2, "0")} — {item.phase}
                  </span>

                  <h3 className="font-heading font-bold text-lg md:text-xl text-background mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-background/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── SECTION 3: Values — Light, editorial lines ───────── */}
      <section ref={valuesRef} className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-2xl mb-16 md:mb-20">
            <div className="anim flex items-center gap-3 mb-6">
              <span className="block w-10 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Our Values</span>
            </div>
            <h2 className="anim text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase text-foreground leading-[0.92] tracking-tight mb-6">
              What <span className="text-primary">drives</span> us
            </h2>
            <p className="anim text-muted-foreground text-base md:text-lg leading-relaxed">
              The principles that guide every job, every interaction, and every solution we deliver.
            </p>
          </div>

          {/* Values — divider-separated rows, not cards */}
          <div className="values-list border-t border-border">
            {[
              {
                icon: Shield,
                title: "Reliability",
                desc: "We show up when you need us and deliver consistent, dependable service every time. Being available 24/7 means we're there for urgent situations and scheduled projects alike.",
              },
              {
                icon: Heart,
                title: "Integrity",
                desc: "Honest assessments, transparent pricing, and work we stand behind with confidence. We believe trust is built through straightforward communication and delivering on promises.",
              },
              {
                icon: MessageSquare,
                title: "Respect",
                desc: "We treat every client, property, and project with the highest level of professionalism and care. From residential homes to commercial facilities, every job receives our full attention.",
              },
            ].map((value, idx) => (
              <div
                key={value.title}
                className="value-row group border-b border-border py-10 md:py-14"
              >
                <div className="lg:flex lg:items-start lg:gap-16">
                  {/* Left — number + icon + title */}
                  <div className="flex items-center gap-5 mb-5 lg:mb-0 lg:w-[320px] lg:flex-shrink-0">
                    <span className="text-xs font-semibold text-muted-foreground tracking-widest tabular-nums">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="w-12 h-12 bg-foreground flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <value.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-bold text-xl uppercase text-foreground tracking-wide group-hover:text-primary transition-colors duration-300">
                      {value.title}
                    </h3>
                  </div>

                  {/* Right — description */}
                  <p className="text-muted-foreground text-base leading-relaxed lg:flex-1 lg:pt-1">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── SECTION 4: Contact CTA — Dark, editorial split with image ───────── */}
      <section
        ref={ctaRef}
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:items-stretch min-h-[70vh]">
            {/* Left — headline + contact details */}
            <div className="lg:w-[55%] flex flex-col justify-center py-24 md:py-32 lg:py-40 lg:pr-16 xl:pr-24">
              <div className="anim flex items-center gap-3 mb-8">
                <span className="block w-10 h-[2px] bg-primary" />
                <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Get In Touch</span>
              </div>

              <h2 className="anim text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-heading font-black uppercase text-background leading-[0.92] tracking-tight mb-8">
                Ready to start<br />
                your <span className="text-primary">project?</span>
              </h2>

              <p className="anim text-background/50 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                Whether it's electrical work, AC repair, or a full system installation — our team is available 24/7 to deliver reliable solutions across the Rio Grande Valley.
              </p>

              {/* Contact details — inline row */}
              <div className="anim flex flex-wrap gap-x-8 gap-y-4 mb-10 text-background/60 text-sm">
                <a href="tel:+19567154379" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  (956) 715-4379
                </a>
                <a href="mailto:carloselectric1@yahoo.com" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  carloselectric1@yahoo.com
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  McAllen, TX
                </span>
              </div>

              <div className="anim">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-5 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Schedule Service
                </Link>
              </div>
            </div>

            {/* Right — full-height image */}
            <div className="lg:w-[45%] relative min-h-[50vh] lg:min-h-0">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="/images/about/contact-cta.jpg"
                  alt="Electrical infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
      </section>
    </>
  );
};

export default About;
