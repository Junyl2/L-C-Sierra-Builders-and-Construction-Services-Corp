import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg text-footer-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Company - spans 4 cols */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span className="font-heading font-extrabold text-2xl text-footer-heading">
                SONA <span className="text-primary">HVAC</span>
              </span>
              <p className="text-xs tracking-widest uppercase mt-1 text-footer-foreground/60">
                Heating & Air Conditioning
              </p>
            </div>
            <p className="text-sm leading-relaxed text-footer-foreground/70 mb-6 max-w-xs">
              Local heating and air conditioning service in Elk Grove Village, Illinois. Keeping homes and businesses comfortable.
            </p>
            {/* CTA */}
            <a
              href="tel:+18473126967"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              (847) 312-6967
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
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
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
                href="tel:+18473126967"
                className="flex items-center gap-3 text-sm text-footer-foreground/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-footer-foreground/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span>(847) 312-6967</span>
              </a>
              <a
                href="mailto:info@sonahvac.com"
                className="flex items-center gap-3 text-sm text-footer-foreground/70 hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 bg-footer-foreground/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>info@sonahvac.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-footer-foreground/70">
                <div className="w-10 h-10 bg-footer-foreground/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="pt-2.5">
                  1073 Florida Ln<br />
                  Elk Grove Village, IL 60007
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-footer-foreground/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-footer-foreground/50">
            <p>© {currentYear} Sona HVAC. All rights reserved.</p>
            <p>Serving Elk Grove Village & surrounding areas</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
