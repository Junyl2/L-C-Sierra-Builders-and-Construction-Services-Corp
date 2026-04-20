import { Phone, MapPin } from "lucide-react";

interface TopbarProps {
  isScrolled: boolean;
  isHome: boolean;
}

const Topbar = ({ isScrolled, isHome }: TopbarProps) => {
  const textClass = isScrolled
    ? "bg-topbar-bg text-topbar-foreground"
    : isHome
    ? "bg-transparent text-white lg:text-foreground"
    : "bg-transparent text-white";

  return (
    <div
      className={`hidden md:block w-full z-50 text-sm transition-none ${textClass}`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-6">
          <a
            href="tel:+19864974822"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(986) 497-4822</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Boise, Idaho</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
