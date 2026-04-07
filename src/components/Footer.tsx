import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <div className="mb-4">
              <span className="font-heading font-extrabold text-xl text-footer-heading">
                SONA <span className="text-primary">HVAC</span>
              </span>
              <p className="text-xs tracking-widest uppercase mt-1 text-footer-foreground/60">
                Heating & Air Conditioning
              </p>
            </div>
            <p className="text-sm leading-relaxed text-footer-foreground/80">
              Local heating and air conditioning service in Elk Grove Village, Illinois. Keeping homes and businesses comfortable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-footer-heading mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Service Area", path: "/service-area" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-footer-heading mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+18473126967"
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                (847) 312-6967
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>
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
        <div className="container mx-auto px-4 py-4 text-center text-xs text-footer-foreground/50">
          © 2026 Sona HVAC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
