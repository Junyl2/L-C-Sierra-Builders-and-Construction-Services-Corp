import { Phone, MapPin } from "lucide-react";

interface TopbarProps {
  isScrolled: boolean;
}

const Topbar = ({ isScrolled }: TopbarProps) => {
  return (
    <div
      className={`hidden md:block w-full z-50 text-sm transition-none ${
        isScrolled
          ? "bg-topbar-bg text-topbar-foreground"
          : "bg-transparent text-secondary-foreground"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-6">
          <a
            href="tel:+18473126967"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(847) 312-6967</span>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>Elk Grove Village, IL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
