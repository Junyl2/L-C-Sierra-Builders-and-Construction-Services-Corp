import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { gsap } from "@/lib/gsap";

const ContactCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = section.querySelectorAll(".cta-animate");
      gsap.fromTo(items, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out", stagger: 0.1,
        scrollTrigger: { trigger: section, start: "top 70%", once: true },
      });

      const img = section.querySelector(".cta-img");
      if (img) {
        gsap.fromTo(img, { clipPath: "inset(100% 0 0 0)" }, {
          clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power3.inOut",
          scrollTrigger: { trigger: img, start: "top 80%", once: true },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground) / 0.97) 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-stretch min-h-[70vh]">

          {/* Left — text + contact info */}
          <div className="lg:w-[55%] flex flex-col justify-center py-24 md:py-32 lg:py-40 lg:pr-16 xl:pr-24">
            <div className="cta-animate flex items-center gap-3 mb-8">
              <span className="block w-10 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-xs uppercase tracking-[0.2em]">Get In Touch</span>
            </div>

            <h2 className="cta-animate text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] font-heading font-black uppercase text-background leading-[0.92] tracking-tight mb-8">
              Ready to start<br />
              your <span className="text-primary">project?</span>
            </h2>

            <p className="cta-animate text-background/50 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              Whether it's electrical work, AC repair, or a full system installation — our team is available 24/7 to deliver reliable, efficient solutions across the Rio Grande Valley.
            </p>

            {/* Contact details — rows */}
            <div className="border-t border-background/10 mb-10">
              <a href="tel:+19567154379" className="cta-animate group flex items-center gap-5 py-4 border-b border-background/10">
                <span className="flex items-center justify-center w-11 h-11 bg-background/10 group-hover:bg-primary transition-colors duration-300">
                  <Phone className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </span>
                <span className="flex-1">
                  <span className="block text-[11px] uppercase tracking-wider text-background/40 mb-0.5">Call Anytime</span>
                  <span className="block text-lg font-heading font-bold text-background group-hover:text-primary transition-colors">(956) 715-4379</span>
                </span>
              </a>

              <a href="mailto:carloselectric1@yahoo.com" className="cta-animate group flex items-center gap-5 py-4 border-b border-background/10">
                <span className="flex items-center justify-center w-11 h-11 bg-background/10 group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </span>
                <span className="flex-1">
                  <span className="block text-[11px] uppercase tracking-wider text-background/40 mb-0.5">Email Us</span>
                  <span className="block text-sm sm:text-base font-semibold text-background group-hover:text-primary transition-colors">carloselectric1@yahoo.com</span>
                </span>
              </a>

              <div className="cta-animate flex items-center gap-5 py-4">
                <span className="flex items-center justify-center w-11 h-11 bg-background/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </span>
                <span className="flex-1">
                  <span className="block text-[11px] uppercase tracking-wider text-background/40 mb-0.5">Location</span>
                  <span className="block text-base font-semibold text-background">6024 S 23rd St, McAllen, TX</span>
                </span>
              </div>
            </div>

            <div className="cta-animate">
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
            <div
              className="cta-img absolute inset-0 overflow-hidden"
              style={{ clipPath: "inset(100% 0 0 0)" }}
            >
              <img
                src="/images/about/contact-cta.jpg"
                alt="Electrical infrastructure and power systems"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/30 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </div>

      <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />
    </section>
  );
};

export default ContactCTA;
