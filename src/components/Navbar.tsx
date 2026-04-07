import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";

interface NavbarProps {
  isScrolled: boolean;
}

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "SERVICE AREA", path: "/service-area" },
  { label: "CONTACT US", path: "/contact" },
];

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav
        className={`w-full z-50 transition-none ${
          isScrolled
            ? "bg-nav-solid text-nav-solid-foreground shadow-md"
            : "bg-transparent text-foreground"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span className={`font-heading font-extrabold text-xl tracking-tight ${isScrolled ? "text-primary-foreground" : "text-foreground"}`}>
                SONA <span className="text-primary">HVAC</span>
              </span>
              <span className={`text-[10px] tracking-widest uppercase ${isScrolled ? "text-nav-solid-foreground/70" : "text-muted-foreground"}`}>
                Heating & Air Conditioning
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide relative py-1 transition-colors hover:text-primary ${
                  location.pathname === link.path
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:+18473126967"
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (847) 312-6967
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-foreground/30" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile menu - slides from right, not full width */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-card shadow-xl transform transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Top - Logo + Close */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-extrabold text-lg">
              SONA <span className="text-primary">HVAC</span>
            </span>
          </div>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Middle - Nav links */}
        <div className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-6 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-accent ${
                location.pathname === link.path ? "text-primary border-l-2 border-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Bottom - Contact info (sticky) */}
        <div className="border-t border-border p-4 space-y-3">
          <a href="tel:+18473126967" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Phone className="w-4 h-4" />
            (847) 312-6967
          </a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            Elk Grove Village, IL
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
