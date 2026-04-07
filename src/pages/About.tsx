import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { gsap } from "@/lib/gsap";
import PageBanner from "@/components/PageBanner";

const About = () => {
  const introRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const values = [
    {
      icon: Shield,
      title: "Reliability",
      desc: "We show up when you need us and deliver consistent, dependable service.",
    },
    {
      icon: Heart,
      title: "Comfort",
      desc: "Your comfort is our priority — we ensure your HVAC system keeps your space just right.",
    },
    {
      icon: MessageSquare,
      title: "Honesty",
      desc: "Straightforward communication and transparent service you can count on.",
    },
  ];

  useEffect(() => {
    document.title = "About | Sona HVAC";
  }, []);

  useEffect(() => {
    const intro = introRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const values = valuesRef.current;
    const contact = contactRef.current;

    if (!intro || !image || !content || !values || !contact) return;

    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        image,
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Decorative elements
      const decorElements = image.querySelectorAll(".decor-element");
      gsap.fromTo(
        decorElements,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.5)",
          stagger: 0.15,
          delay: 0.3,
          scrollTrigger: {
            trigger: intro,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        content,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Values section header
      const valuesHeader = values.querySelector(".values-header");
      gsap.fromTo(
        valuesHeader,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: values,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Values cards
      const valueCards = values.querySelectorAll(".value-card");
      gsap.fromTo(
        valueCards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: values,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact section
      const contactImage = contact.querySelector(".contact-image");
      const contactContent = contact.querySelector(".contact-content");

      gsap.fromTo(
        contactImage,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contact,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        contactContent,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contact,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact items stagger
      const contactItems = contact.querySelectorAll(".contact-item");
      gsap.fromTo(
        contactItems,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: contact,
            start: "top 65%",
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
        title="About Us"
        subtitle="Local HVAC service you can trust"
        backgroundImage="/images/banners/about-banner.jpg"
      />

      {/* Introduction Section */}
      <section ref={introRef} className="py-24 md:py-32 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div ref={imageRef} className="relative opacity-0">
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded bg-secondary">
                  <img
                    src="/images/about/about-main.jpg"
                    alt="Sona HVAC service van"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="decor-element absolute -bottom-6 -right-4 md:-right-8 bg-primary text-primary-foreground p-5 md:p-6 rounded shadow-lg">
                  <p className="text-xs uppercase tracking-wider opacity-80">Serving</p>
                  <p className="text-lg md:text-xl font-heading font-bold">
                    Elk Grove Village
                  </p>
                  <p className="text-xs opacity-80 mt-1">& Nearby Areas</p>
                </div>

                {/* Corner accent */}
                <div className="decor-element absolute -top-4 -left-4 w-20 h-20 border-l-4 border-t-4 border-primary/40 rounded-tl" />
              </div>

              {/* Background shape */}
              <div className="absolute -z-10 top-8 left-8 w-full h-full bg-accent/50 rounded" />
            </div>

            {/* Content Side */}
            <div ref={contentRef} className="opacity-0">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Who We Are
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase text-foreground mt-3 mb-6">
                Your Local HVAC<br />
                <span className="text-primary">Partner</span>
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                <p>
                  Sona HVAC is a local heating and air conditioning business based
                  in Elk Grove Village, Illinois. We provide reliable HVAC support
                  for homeowners and businesses throughout the area.
                </p>
                <p>
                  The business is associated publicly with Haresh Shah and serves
                  the Elk Grove Village community. We focus on general HVAC work
                  including heating and cooling installations, repairs, and
                  maintenance.
                </p>
                <p>
                  We serve Elk Grove Village and nearby suburbs, providing
                  dependable heating and air conditioning support for homes and
                  local properties.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded hover:bg-primary/90 transition-colors"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold text-sm tracking-wide uppercase rounded hover:bg-secondary/90 transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="py-24 md:py-32 overflow-hidden"
        style={{ background: "hsl(var(--section-warm))" }}
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="values-header text-center mb-16 opacity-0">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase text-foreground mt-3">
              What Drives Us
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              The principles that guide our work and commitment to you.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, idx) => (
              <div
                key={value.title}
                className="value-card group relative p-8 md:p-10 bg-card border border-border rounded hover:border-primary/30 hover:shadow-xl transition-all duration-300 opacity-0"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded bg-accent flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-xl uppercase text-foreground mb-3 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>

                {/* Decorative number */}
                <span className="absolute top-6 right-6 text-6xl font-heading font-black text-border/50 group-hover:text-primary/10 transition-colors">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section ref={contactRef} className="py-24 md:py-32 bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image Side */}
            <div className="contact-image relative opacity-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded">
                <img
                  src="/images/about/contact-cta.jpg"
                  alt="Contact us - office phone and notepad"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 via-transparent to-transparent" />
              </div>

              {/* Floating element */}
              <div className="absolute -bottom-4 -right-4 md:-right-6 bg-primary text-primary-foreground px-6 py-4 rounded shadow-lg">
                <p className="text-2xl md:text-3xl font-heading font-bold">24/7</p>
                <p className="text-xs uppercase tracking-wider opacity-80">Support Available</p>
              </div>
            </div>

            {/* Content Side */}
            <div className="contact-content opacity-0">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Get in Touch
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold uppercase text-secondary-foreground mt-3 mb-6">
                Ready to Talk?<br />
                <span className="text-primary">We're Here</span>
              </h2>

              <p className="text-secondary-foreground/80 leading-relaxed text-base md:text-lg mb-8">
                Whether you need a new installation, repair, or just have questions
                about your HVAC system, our team is ready to help. Reach out today
                and let's discuss how we can keep you comfortable.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+18475555555"
                  className="contact-item group flex items-center gap-4 p-4 bg-secondary-foreground/5 rounded hover:bg-secondary-foreground/10 transition-colors opacity-0"
                >
                  <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-foreground/60 uppercase tracking-wider">
                      Call Us
                    </p>
                    <p className="text-secondary-foreground font-semibold">
                      (847) 555-5555
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@sonahvac.com"
                  className="contact-item group flex items-center gap-4 p-4 bg-secondary-foreground/5 rounded hover:bg-secondary-foreground/10 transition-colors opacity-0"
                >
                  <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-foreground/60 uppercase tracking-wider">
                      Email Us
                    </p>
                    <p className="text-secondary-foreground font-semibold">
                      info@sonahvac.com
                    </p>
                  </div>
                </a>

                <div className="contact-item group flex items-center gap-4 p-4 bg-secondary-foreground/5 rounded opacity-0">
                  <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-foreground/60 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-secondary-foreground font-semibold">
                      Elk Grove Village, IL
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold text-sm tracking-wide uppercase rounded hover:bg-primary/90 transition-colors"
              >
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
