import { Phone, MapPin, Facebook } from "lucide-react";

interface TopbarProps {
  isScrolled: boolean;
  isHome: boolean;
}

const facebookUrl = "https://web.facebook.com/build.sheracon/?_rdc=1&_rdr#";

const Topbar = ({ isScrolled, isHome }: TopbarProps) => {
  const textClass = isScrolled
    ? "bg-topbar-bg text-topbar-foreground"
    : isHome
    ? "bg-transparent text-white"
    : "bg-transparent text-white";

  return (
    <div
      className={`hidden md:block w-full z-50 text-sm transition-none ${textClass}`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Left — phone + location */}
        <div className="flex items-center gap-6">
          <a
            href="tel:+639176360922"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0917 636 0922</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Cebu City, Philippines</span>
          </div>
        </div>

        {/* Right — Facebook */}
        <div className="flex items-center gap-4">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 hover:text-primary transition-colors"
            aria-label="L C Sierra on Facebook"
          >
            <Facebook className="w-3.5 h-3.5" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em]">
              Facebook
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
