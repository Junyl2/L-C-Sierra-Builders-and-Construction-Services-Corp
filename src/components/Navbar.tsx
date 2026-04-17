import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { useLenis } from "@/lib/lenis";

interface NavbarProps {
  isScrolled: boolean;
}

const navLinks = [
  { label: "HOME", path: "/" },
  { label: "SERVICES", path: "/services", hasDropdown: true },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICE AREA", path: "/service-area" },
  { label: "CONTACT US", path: "/contact" },
];

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { stop, start } = useLenis();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Stop/Start Lenis when mobile menu opens/closes
  useEffect(() => {
    if (mobileOpen) {
      stop();
    } else {
      start();
    }
  }, [mobileOpen, stop, start]);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const isServicePage = location.pathname.startsWith("/services");

  return (
    <>
      <nav
        className={`w-full z-50 transition-none ${
          isScrolled
            ? "bg-nav-solid text-nav-solid-foreground shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span className={`font-heading font-extrabold text-xl tracking-tight ${isScrolled ? "text-primary-foreground" : "text-white"}`}>
                C&B <span className="text-primary">ELECTRIC</span>
              </span>
              <span className={`text-[10px] tracking-widest uppercase ${isScrolled ? "text-nav-solid-foreground/70" : "text-white/70"}`}>
                & A/C Services
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.path}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={link.path}
                    className={`text-sm font-semibold tracking-wide relative py-1 transition-colors hover:text-primary flex items-center gap-1 ${
                      isServicePage
                        ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                        : ""
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                  </Link>

                  {/* Desktop Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-card rounded shadow-lg border border-border overflow-hidden transition-all duration-200 ${
                      servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      <Link
                        to="/services"
                        className="block px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-accent hover:text-primary transition-colors border-b border-border"
                      >
                        All Services
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.slug}`}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm text-foreground hover:bg-accent hover:text-primary transition-colors"
                        >
                          <service.icon className="w-4 h-4 text-primary" />
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:+19567154379"
            className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (956) 715-4379
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

      {/* Mobile menu - slides from right */}
      <div
        data-lenis-prevent
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-card shadow-xl transform transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Top - Logo + Close */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex flex-col leading-tight">
            <span className="font-heading font-extrabold text-lg">
              C&B <span className="text-primary">ELECTRIC</span>
            </span>
          </div>
          <button onClick={() => setMobileOpen(false)} className="p-2" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Middle - Nav links (scrollable with data-lenis-prevent) */}
        <div data-lenis-prevent className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link) => (
            link.hasDropdown ? (
              <div key={link.path}>
                {/* Services accordion header */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-6 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-accent ${
                    isServicePage ? "text-primary border-l-2 border-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Services accordion content */}
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    mobileServicesOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <Link
                    to="/services"
                    onClick={() => setMobileOpen(false)}
                    className="block px-10 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    All Services
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 px-10 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <service.icon className="w-4 h-4" />
                      {service.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
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
            )
          ))}
        </div>

        {/* Bottom - Contact info (sticky) */}
        <div className="border-t border-border p-4 space-y-3">
          <a href="tel:+19567154379" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
            <Phone className="w-4 h-4" />
            (956) 715-4379
          </a>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            McAllen, TX
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
