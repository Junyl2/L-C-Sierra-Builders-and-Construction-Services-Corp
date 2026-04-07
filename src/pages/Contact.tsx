import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import PageBanner from "@/components/PageBanner";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us | Sona HVAC";
  }, []);

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get in touch for heating and cooling support" />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-heading font-extrabold uppercase text-foreground mb-6">
                Get In Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Call us to discuss your heating or cooling needs. On-site service is available in Elk Grove Village and nearby areas.
              </p>

              <div className="space-y-6">
                <a href="tel:+18473126967" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">(847) 312-6967</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-semibold text-foreground">
                      1073 Florida Ln<br />
                      Elk Grove Village, IL 60007
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {submitted ? (
                <div className="p-8 bg-accent rounded-lg text-center">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      required
                      maxLength={1000}
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 accent-primary"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-muted-foreground">
                      I consent to Sona HVAC collecting and storing my information to respond to this inquiry. *
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
                    disabled={!consent}
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="w-full" style={{ height: "385px" }}>
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
