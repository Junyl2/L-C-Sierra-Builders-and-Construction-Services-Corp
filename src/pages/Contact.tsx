import { useEffect, useState, useRef } from "react";
import { Phone, MapPin, Mail, Clock, Send, Check, Facebook, Youtube } from "lucide-react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";

const Contact = () => {
  const mainRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  useEffect(() => {
    document.title = "Contact Us | C&B Electric & A/C Services";
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    const map = mapRef.current;

    const initTimeout = setTimeout(() => ScrollTrigger.refresh(), 100);

    const ctx = gsap.context(() => {
      if (main) {
        const els = main.querySelectorAll(".anim");
        gsap.fromTo(els, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08,
          scrollTrigger: { trigger: main, start: "top 72%", once: true },
        });
      }

      if (map) {
        gsap.fromTo(map, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: map, start: "top 88%", once: true },
        });
      }
    });

    return () => { clearTimeout(initTimeout); ctx.revert(); };
  }, []);

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch for electrical and AC service"
        backgroundImage="/images/banners/contact-banner.jpg"
      />

      {/* ───── Main section: contact info LEFT + form RIGHT ───── */}
      <section ref={mainRef} className="bg-background py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:gap-16 xl:gap-24">

            {/* ── LEFT: Contact info ── */}
            <div className="lg:w-[40%] xl:w-[38%] flex-shrink-0 mb-16 lg:mb-0">
              <div className="anim flex items-center gap-3 mb-8">
                <span className="block w-10 h-[2px] bg-primary" />
                <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Get In Touch</span>
              </div>

              <h2 className="anim text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase leading-[0.92] tracking-tight text-foreground mb-6">
                Let's talk about<br />
                your <span className="text-primary">project.</span>
              </h2>

              <p className="anim text-muted-foreground text-base leading-relaxed mb-10 max-w-md">
                Whether you need electrical work, AC repair, or have questions about our services — we're here to help.
              </p>

              {/* Image */}
              <div className="anim relative aspect-[16/10] overflow-hidden mb-10">
                <img
                  src="/images/contact/contact-tools.jpg"
                  alt="Professional electrical tools and equipment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Contact rows */}
              <div className="border-t border-border">
                <a href="tel:+19567154379" className="anim group flex items-center gap-5 py-5 border-b border-border">
                  <span className="flex items-center justify-center w-12 h-12 bg-foreground group-hover:bg-primary transition-colors duration-300">
                    <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-0.5">Call Anytime</span>
                    <span className="block text-lg font-heading font-bold text-foreground group-hover:text-primary transition-colors">(956) 715-4379</span>
                  </span>
                </a>

                <a href="mailto:carloselectric1@yahoo.com" className="anim group flex items-center gap-5 py-5 border-b border-border">
                  <span className="flex items-center justify-center w-12 h-12 bg-foreground group-hover:bg-primary transition-colors duration-300">
                    <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-0.5">Email Us</span>
                    <span className="block text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">carloselectric1@yahoo.com</span>
                  </span>
                </a>

                <div className="anim flex items-center gap-5 py-5 border-b border-border">
                  <span className="flex items-center justify-center w-12 h-12 bg-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-0.5">Location</span>
                    <span className="block text-base font-semibold text-foreground">6024 S 23rd St, McAllen, TX 78501</span>
                  </span>
                </div>

                <div className="anim flex items-center gap-5 py-5 border-b border-border">
                  <span className="flex items-center justify-center w-12 h-12 bg-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-0.5">Hours</span>
                    <span className="block text-base font-semibold text-foreground">Open 24/7</span>
                  </span>
                </div>
              </div>

              {/* Social links */}
              <div className="anim flex items-center gap-3 mt-8">
                <a
                  href="https://www.facebook.com/carloselectric1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-foreground flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </a>
                <a
                  href="https://www.youtube.com/@cbelectricacservices986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-foreground flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* ── RIGHT: Contact form (dark) ── */}
            <div className="lg:flex-1">
              <div
                className="relative overflow-hidden p-6 sm:p-8 md:p-10 lg:p-12"
                style={{ background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)" }}
              >
                {/* Form header */}
                <div className="anim mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="block w-10 h-[2px] bg-primary" />
                    <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Send a Message</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-black uppercase text-background leading-[0.95] tracking-tight">
                    Request <span className="text-primary">Service</span>
                  </h3>
                </div>

                {submitted ? (
                  <div className="anim text-center py-16">
                    <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-8">
                      <Check className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-background mb-3">Thank You!</h3>
                    <p className="text-background/60 max-w-sm mx-auto">We've received your message and will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Service selection */}
                    <div className="anim mb-8">
                      <label className="block text-sm font-semibold text-background mb-3">
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
                              className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                                isSelected
                                  ? "bg-primary text-primary-foreground"
                                  : "border border-background/15 text-background/70 hover:border-primary/40 hover:text-background"
                              }`}
                            >
                              <service.icon className="w-4 h-4" />
                              <span>{service.shortTitle}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 ml-1" />}
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs text-background/40 mt-2">Select all that apply (optional)</p>
                    </div>

                    {/* Name + Email */}
                    <div className="anim grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-background mb-2">Name *</label>
                        <input
                          id="name" type="text" required maxLength={100}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-5 py-4 bg-transparent border border-background/15 text-background placeholder:text-background/30 focus:outline-none focus:border-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-background mb-2">Email *</label>
                        <input
                          id="email" type="email" required maxLength={255}
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-5 py-4 bg-transparent border border-background/15 text-background placeholder:text-background/30 focus:outline-none focus:border-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="anim mb-5">
                      <label htmlFor="phone" className="block text-sm font-semibold text-background mb-2">Phone</label>
                      <input
                        id="phone" type="tel" maxLength={20}
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-5 py-4 bg-transparent border border-background/15 text-background placeholder:text-background/30 focus:outline-none focus:border-primary transition-colors"
                        placeholder="(555) 555-5555"
                      />
                    </div>

                    {/* Message */}
                    <div className="anim mb-8">
                      <label htmlFor="message" className="block text-sm font-semibold text-background mb-2">Message *</label>
                      <textarea
                        id="message" required maxLength={1000} rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-5 py-4 bg-transparent border border-background/15 text-background placeholder:text-background/30 focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us about your electrical or AC needs..."
                      />
                    </div>

                    {/* Consent + Submit */}
                    <div className="anim space-y-6">
                      <div className="flex items-start gap-3">
                        <input
                          id="consent" type="checkbox" checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          className="mt-1 w-4 h-4 accent-primary flex-shrink-0"
                          required
                        />
                        <label htmlFor="consent" className="text-sm text-background/50 leading-relaxed">
                          I consent to C&B Electric & A/C Services collecting and storing my information to respond to this inquiry. *
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={!consent}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-10 py-5 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        Send Message
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───── Google Map — full width bottom ───── */}
      <div ref={mapRef} className="relative" style={{ height: "450px" }}>
        <iframe
          title="C&B Electric & A/C Services Location"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14620203.109348014!2d-99.3571293!3d30.5719527!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a72e27895ec7%3A0xc053aa4993fb2234!2sC%26B%20Electric%20%26%20A%2FC%20Services!5e1!3m2!1sen!2sph!4v1776397271828!5m2!1sen!2sph"
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
