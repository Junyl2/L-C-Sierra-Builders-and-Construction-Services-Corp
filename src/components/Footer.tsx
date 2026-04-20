import { Link } from "react-router-dom";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Company - spans 4 cols */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span className="font-heading font-extrabold text-2xl text-footer-heading">
                KOMFORT <span className="text-primary">iQ</span>
              </span>
              <p className="text-xs tracking-widest uppercase mt-1 text-footer-foreground/60">
                HVAC
              </p>
            </div>
            <p className="text-sm leading-relaxed text-footer-foreground/70 mb-6 max-w-xs">
              Komfort iQ HVAC is a family-owned heating and air company based in Boise, Idaho. We provide heating, air conditioning, and general HVAC support in the Boise area.
            </p>

            {/* Social mention (plain text — no URL provided) */}
            <p className="text-sm text-footer-foreground/70 mb-6">
              Facebook: Komfort IQ Heating and Air
            </p>

            {/* CTA */}
            <a
              href="tel:+19864974822"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (986) 497-4822
            </a>
          </div>

          {/* Navigation - spans 2 cols */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-footer-heading mb-5 text-xs uppercase tracking-widest">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About", path: "/about" },
                { label: "Service Area", path: "/service-area" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-footer-foreground/70 hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services - spans 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-footer-heading mb-5 text-xs uppercase tracking-widest">
              Services
            </h4>
            <nav className="flex flex-col gap-3">
              {services.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="text-sm text-footer-foreground/70 hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {service.shortTitle}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact - spans 3 cols */}
          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-footer-heading mb-5 text-xs uppercase tracking-widest">
              Contact Us
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+19864974822"
                className="flex items-center gap-3 text-sm text-footer-foreground/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-footer-foreground/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>(986) 497-4822</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-footer-foreground/70">
                <div className="w-10 h-10 bg-footer-foreground/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>Boise, Idaho</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-foreground/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-center text-xs text-footer-foreground/50">
            <p>&copy; 2026 Komfort iQ HVAC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
