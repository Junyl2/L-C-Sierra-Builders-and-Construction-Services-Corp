import { useEffect, useState, useRef } from "react";
import { Phone, MapPin, Mail, Clock, Send, Check } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

const Contact = () => {
  const infoRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

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
    const info = infoRef.current;
    const formEl = formRef.current;
    const map = mapRef.current;

    if (!info || !formEl || !map) return;

    const ctx = gsap.context(() => {
      // Info section animations
      gsap.fromTo(
        info,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: info,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Info cards stagger
      const infoCards = info.querySelectorAll(".info-card");
      gsap.fromTo(
        infoCards,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: info,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formEl,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formEl,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Map animation
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
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch for heating and cooling support"
        backgroundImage="/images/banners/contact-banner.jpg"
      />

      {/* Main Contact Section */}
      <section className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div ref={infoRef} className="opacity-0">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Get In Touch
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase text-foreground mt-3 mb-6">
                Let's Talk About<br />
                <span className="text-primary">Your Comfort</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-10">
                Whether you need a quick repair, a new installation, or just have
                questions about your HVAC system, we're here to help. Reach out
                and let's discuss how we can keep you comfortable.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+18473126967"
                  className="info-card group flex items-center gap-4 p-5 bg-card border border-border rounded hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0"
                >
                  <div className="w-14 h-14 rounded bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Call Us
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      (847) 312-6967
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@sonahvac.com"
                  className="info-card group flex items-center gap-4 p-5 bg-card border border-border rounded hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0"
                >
                  <div className="w-14 h-14 rounded bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Email Us
                    </p>
                    <p className="text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                      info@sonahvac.com
                    </p>
                  </div>
                </a>

                <div className="info-card group flex items-center gap-4 p-5 bg-card border border-border rounded opacity-0">
                  <div className="w-14 h-14 rounded bg-accent flex items-center justify-center">
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

                <div className="info-card group flex items-center gap-4 p-5 bg-card border border-border rounded opacity-0">
                  <div className="w-14 h-14 rounded bg-accent flex items-center justify-center">
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
            </div>

            {/* Contact Form */}
            <div ref={formRef} className="opacity-0">
              <div className="bg-card border border-border rounded p-6 md:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
                      Thank You!
                    </h3>
                    <p className="text-muted-foreground max-w-sm mx-auto">
                      We've received your message and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">
                        What services are you interested in?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((service) => {
                          const isSelected = selectedServices.includes(service.id);
                          return (
                            <button
                              key={service.id}
                              type="button"
                              onClick={() => toggleService(service.id)}
                              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded border text-sm font-medium transition-all duration-200 ${
                                isSelected
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-accent"
                              }`}
                            >
                              <service.icon className="w-4 h-4" />
                              <span>{service.shortTitle}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 ml-1" />}
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Select all that apply (optional)
                      </p>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-semibold text-foreground mb-2"
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
                          className="w-full px-4 py-3 rounded border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-foreground mb-2"
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
                          className="w-full px-4 py-3 rounded border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-foreground mb-2"
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
                        className="w-full px-4 py-3 rounded border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                        placeholder="(555) 555-5555"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-foreground mb-2"
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
                        className="w-full px-4 py-3 rounded border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
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
                        className="mt-1 w-4 h-4 accent-primary rounded"
                        required
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        I consent to Sona HVAC collecting and storing my
                        information to respond to this inquiry. *
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!consent}
                      className="group w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <div
        ref={mapRef}
        className="relative opacity-0"
        style={{ height: "450px" }}
      >
        {/* Map header */}
        <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-secondary to-transparent h-24 pointer-events-none" />

        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-secondary text-secondary-foreground px-6 py-3 rounded shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-wider text-center">
            Find Us Here
          </p>
        </div>

        <iframe
          title="Sona HVAC Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2963.123!2d-87.987!3d42.007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAwJzI1LjIiTiA4N8KwNTknMTMuMiJX!5e0!3m2!1sen!2sus!4v1"
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
