import { useEffect, useState, useRef } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  Check,
  ArrowRight,
  MessageSquare,
  Shield,
  Zap,
} from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

const Contact = () => {
  const mainRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  useEffect(() => {
    document.title = "Contact Us | Sona HVAC";
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    const info = infoRef.current;
    const formEl = formRef.current;
    const map = mapRef.current;
    const cta = ctaRef.current;

    if (!main) return;

    // Small delay to ensure DOM is ready and Lenis is initialized
    const initTimeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      // Info section animations
      if (info) {
        const infoElements = info.querySelectorAll(".animate-info");
        gsap.fromTo(
          infoElements,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: info,
              start: "top 75%",
              once: true,
            },
          }
        );

        // Info cards stagger
        const infoCards = info.querySelectorAll(".info-card");
        gsap.fromTo(
          infoCards,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: info,
              start: "top 70%",
              once: true,
            },
          }
        );
      }

      // Form animation
      if (formEl) {
        gsap.fromTo(
          formEl,
          { opacity: 0, clipPath: "inset(0 100% 0 0)" },
          {
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1,
            ease: "power3.inOut",
            scrollTrigger: {
              trigger: formEl,
              start: "top 70%",
              once: true,
            },
          }
        );
      }

      // CTA section
      if (cta) {
        const ctaContent = cta.querySelectorAll(".animate-cta");
        gsap.fromTo(
          ctaContent,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: cta,
              start: "top 75%",
              once: true,
            },
          }
        );
      }

      // Map animation
      if (map) {
        gsap.fromTo(
          map,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: map,
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, main);

    return () => {
      clearTimeout(initTimeout);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch for heating and cooling support"
        backgroundImage="/images/banners/contact-banner.jpg"
      />

      {/* Main Contact Section */}
      <section
        ref={mainRef}
        className="relative py-24 md:py-32 overflow-hidden bg-background"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
          <span className="absolute -right-20 top-1/2 -translate-y-1/2 text-[400px] font-heading font-black text-primary/[0.02] leading-none select-none">
            HI
          </span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Info - 5 cols */}
            <div ref={infoRef} className="lg:col-span-5">
              <div className="animate-info flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                  Get In Touch
                </span>
              </div>

              <h2 className="animate-info text-4xl md:text-5xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-6">
                Let's Talk About
                <br />
                <span className="text-primary">Your Comfort</span>
              </h2>

              <p className="animate-info text-muted-foreground text-lg leading-relaxed mb-10">
                Whether you need a quick repair, a new installation, or just
                have questions about your HVAC system, we're here to help. Reach
                out and let's discuss how we can keep you comfortable.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+18473126967"
                  className="info-card group relative flex items-center gap-4 p-5 bg-accent/30 hover:bg-accent/50 transition-all border-l-4 border-transparent hover:border-primary"
                >
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Call Us
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      (847) 312-6967
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="mailto:info@sonahvac.com"
                  className="info-card group relative flex items-center gap-4 p-5 bg-accent/30 hover:bg-accent/50 transition-all border-l-4 border-transparent hover:border-primary"
                >
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Email Us
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      info@sonahvac.com
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>

                <div className="info-card relative flex items-center gap-4 p-5 bg-accent/30 border-l-4 border-primary">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground">
                      1073 Florida Ln
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Elk Grove Village, IL 60007
                    </p>
                  </div>
                </div>

                <div className="info-card relative flex items-center gap-4 p-5 bg-accent/30 border-l-4 border-primary">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Availability
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground">
                      24/7 Emergency Service
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We're here when you need us
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="animate-info grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                {[
                  { icon: Zap, label: "Fast Response", value: "< 1hr" },
                  { icon: Shield, label: "Licensed", value: "Insured" },
                  { icon: MessageSquare, label: "Free", value: "Quotes" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-lg font-heading font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form - 7 cols */}
            <div className="lg:col-span-7">
              <div
                ref={formRef}
                className="relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.95) 100%)",
                }}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Form header */}
                <div className="relative z-10 p-6 md:p-8 border-b border-background/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary flex items-center justify-center">
                      <MessageSquare className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-background">
                        Send Us a Message
                      </h3>
                      <p className="text-sm text-background/60">
                        We'll get back to you within 24 hours
                      </p>
                    </div>
                  </div>
                </div>

                {/* Form content */}
                <div className="relative z-10 p-6 md:p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-primary-foreground" />
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-background mb-3">
                        Thank You!
                      </h3>
                      <p className="text-background/70 max-w-sm mx-auto">
                        We've received your message and will get back to you
                        shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Service Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-background mb-3">
                          What services are you interested in?
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {services.map((service) => {
                            const isSelected = selectedServices.includes(
                              service.id
                            );
                            return (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => toggleService(service.id)}
                                className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                                  isSelected
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-background/10 text-background hover:bg-background/20"
                                }`}
                              >
                                <service.icon className="w-4 h-4" />
                                <span>{service.shortTitle}</span>
                                {isSelected && (
                                  <Check className="w-3.5 h-3.5 ml-1" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                        <p className="text-xs text-background/50 mt-2">
                          Select all that apply (optional)
                        </p>
                      </div>

                      {/* Name & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-semibold text-background mb-2"
                          >
                            Name *
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            maxLength={100}
                            value={form.name}
                            onChange={(e) =>
                              setForm({ ...form, name: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:bg-background/15 transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-background mb-2"
                          >
                            Email *
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            maxLength={255}
                            value={form.email}
                            onChange={(e) =>
                              setForm({ ...form, email: e.target.value })
                            }
                            className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:bg-background/15 transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-background mb-2"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          maxLength={20}
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:bg-background/15 transition-all"
                          placeholder="(555) 555-5555"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-semibold text-background mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          required
                          maxLength={1000}
                          rows={4}
                          value={form.message}
                          onChange={(e) =>
                            setForm({ ...form, message: e.target.value })
                          }
                          className="w-full px-4 py-3 bg-background/10 border border-background/20 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:bg-background/15 transition-all resize-none"
                          placeholder="Tell us about your HVAC needs..."
                        />
                      </div>

                      {/* Consent */}
                      <div className="flex items-start gap-3">
                        <input
                          id="consent"
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-1 w-4 h-4 accent-primary"
                          required
                        />
                        <label
                          htmlFor="consent"
                          className="text-sm text-background/70 leading-relaxed"
                        >
                          I consent to Sona HVAC collecting and storing my
                          information to respond to this inquiry. *
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={!consent}
                        className="group w-full inline-flex items-center justify-center"
                      >
                        <span className="flex-1 py-4 px-6 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide group-hover:bg-primary/90 transition-all group-disabled:opacity-50 group-disabled:cursor-not-allowed flex items-center justify-center gap-2">
                          <span>Send Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <span className="w-14 h-14 bg-background text-foreground flex items-center justify-center group-hover:bg-background/90 transition-colors group-disabled:opacity-50">
                          <ArrowRight className="w-5 h-5" />
                        </span>
                      </button>
                    </form>
                  )}
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact CTA */}
      <section
        ref={ctaRef}
        className="relative py-20 md:py-24 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary) / 0.03) 0%, hsl(var(--background)) 50%, hsl(var(--accent) / 0.5) 100%)",
        }}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-cta flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Prefer to Call?
              </span>
              <div className="h-px w-12 bg-primary" />
            </div>

            <h2 className="animate-cta text-3xl md:text-4xl lg:text-5xl font-heading font-black uppercase text-foreground leading-[0.95] tracking-tight mb-6">
              Speak With Us
              <br />
              <span className="text-primary">Directly</span>
            </h2>

            <p className="animate-cta text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Sometimes it's easier to just pick up the phone. Our team is ready
              to answer your questions and help schedule your service.
            </p>

            <div className="animate-cta flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+18473126967"
                className="group inline-flex items-center gap-3"
              >
                <span className="px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide transition-all group-hover:bg-primary/90 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (847) 312-6967
                </span>
                <span className="w-12 h-12 bg-foreground text-background flex items-center justify-center group-hover:bg-foreground/90 transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="mailto:info@sonahvac.com"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-semibold text-sm uppercase tracking-wide hover:bg-accent/50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <div ref={mapRef} className="relative" style={{ height: "450px" }}>
        <iframe
          title="Sona HVAC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.1408444070144!2d-88.04963649999999!3d41.9936547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faf4ef8780785%3A0x1cfe9d6bd981b593!2ssonahvac%20haresh%20shah!5e1!3m2!1sen!2suk!4v1775622959688!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default Contact;
