import { Link } from "react-router-dom";
import { Phone, Facebook, ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

const facebookUrl = "https://web.facebook.com/profile.php?id=61583999842870";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Service Area", path: "/service-area" },
  { label: "Contact", path: "/contact" },
];

const mastheadTerms = [
  "Komfort iQ HVAC",
  "Boise, Idaho",
  "43.6150° N",
  "116.2023° W",
  "Family-Owned",
];

const brandSpec = [
  { label: "Type", value: "Family-Owned HVAC" },
  { label: "Base", value: "Boise, Idaho" },
  { label: "Focus", value: "Heating · Air · HVAC" },
  { label: "Approach", value: "Practical Local Service" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-footer-bg text-footer-foreground">
      {/* Top primary gradient rule */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Corner editorial ticks */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-24 bg-primary md:w-32"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[2px] w-24 bg-primary md:w-32"
      />

      {/* ═══════ Masthead strip ═══════ */}
      <div className="border-b border-footer-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-footer-foreground/55 text-xs font-semibold uppercase tracking-[0.25em] md:justify-between md:gap-x-8">
            <li className="text-primary">— Contact Directory</li>
            {mastheadTerms.map((term, i) => (
              <li
                key={term}
                className={i >= 3 ? "hidden lg:block tabular-nums" : "tabular-nums"}
              >
                {term}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ═══════ Main content ═══════ */}
      <div className="container mx-auto px-4 py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-14">
          {/* ── Brand column — 5 ── */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="mb-8 inline-block"
              aria-label="Komfort iQ HVAC — Home"
            >
              <img
                src="/images/main-logo.png"
                alt="Komfort iQ HVAC"
                className="h-20 w-auto md:h-24"
              />
            </Link>

            <p className="mb-10 max-w-md text-base font-medium leading-relaxed text-footer-foreground/70">
              Komfort iQ HVAC is a family-owned heating and air company based
              in Boise, Idaho. We provide heating, air conditioning, and
              general HVAC support for homes and businesses in the Boise
              area.
            </p>

            {/* Brand spec — editorial data sheet */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="block h-[1px] w-6 bg-footer-foreground/40" />
                <span className="text-footer-foreground/55 text-xs font-semibold uppercase tracking-[0.3em]">
                  Brand Spec
                </span>
              </div>
              <dl className="grid max-w-md grid-cols-2 gap-5 border-t border-footer-foreground/15 pt-6">
                {brandSpec.map((item) => (
                  <div key={item.label}>
                    <dt className="mb-1.5 text-footer-foreground/50 text-xs font-semibold uppercase tracking-[0.25em]">
                      {item.label}
                    </dt>
                    <dd className="font-heading font-bold uppercase tracking-tight text-footer-heading text-sm">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* ── Index (nav) — 3 ── */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center gap-3">
              <span className="block h-[2px] w-6 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                Index — 05
              </span>
            </div>
            <nav className="border-y border-footer-foreground/10">
              {navLinks.map((link, i) => {
                const idx = String(i + 1).padStart(2, "0");
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center gap-4 border-b border-footer-foreground/10 py-3.5 last:border-b-0 transition-colors hover:bg-footer-foreground/5"
                  >
                    <span className="shrink-0 w-8 font-heading font-black text-primary text-xs tabular-nums">
                      {idx}
                    </span>
                    <span className="flex-1 text-sm font-semibold uppercase tracking-wider text-footer-foreground/85 transition-colors group-hover:text-primary">
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-footer-foreground/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* ── Services + Direct Contact — 4 ── */}
          <div className="lg:col-span-4">
            {/* Services */}
            <div className="mb-6 flex items-center gap-3">
              <span className="block h-[2px] w-6 bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                Services — 03
              </span>
            </div>
            <nav className="mb-10 border-y border-footer-foreground/10">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="group flex items-center gap-4 border-b border-footer-foreground/10 py-3.5 last:border-b-0 transition-colors hover:bg-footer-foreground/5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                    <span className="flex-1 text-sm font-semibold uppercase tracking-wider text-footer-foreground/85 transition-colors group-hover:text-primary">
                      {service.shortTitle}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-footer-foreground/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                );
              })}
            </nav>

            {/* Direct Contact */}
            <div className="mb-5 flex items-center gap-3">
              <span className="block h-[1px] w-6 bg-footer-foreground/40" />
              <span className="text-footer-foreground/55 text-xs font-semibold uppercase tracking-[0.3em]">
                Direct Line
              </span>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+19864974822"
                className="group flex items-center gap-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-footer-foreground/20 transition-all group-hover:border-primary group-hover:bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                <span className="block">
                  <span className="mb-0.5 block text-footer-foreground/45 text-xs font-semibold uppercase tracking-wider">
                    Call
                  </span>
                  <span className="block font-heading font-black text-footer-heading text-xl tabular-nums transition-colors group-hover:text-primary">
                    (986) 497-4822
                  </span>
                </span>
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
                aria-label="Komfort iQ HVAC on Facebook"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-footer-foreground/20 transition-all group-hover:border-primary group-hover:bg-primary/10">
                  <Facebook className="h-4 w-4 text-primary" />
                </span>
                <span className="block">
                  <span className="mb-0.5 block text-footer-foreground/45 text-xs font-semibold uppercase tracking-wider">
                    Facebook
                  </span>
                  <span className="block text-footer-heading text-sm font-semibold transition-colors group-hover:text-primary">
                    Komfort iQ HVAC
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ Bottom bar — copyright centered ═══════ */}
      <div className="border-t border-footer-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <p className="text-footer-foreground/55 text-xs font-semibold uppercase tracking-[0.25em]">
              © 2026 Komfort iQ HVAC. All rights reserved.
            </p>
            <p className="text-footer-foreground/35 text-xs font-medium uppercase tracking-[0.2em]">
              Komfort iQ Heating and Air LLC · Boise, Idaho
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
