import { Phone, MapPin } from "lucide-react";
import { Facebook, Youtube } from "lucide-react";

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
            href="tel:+19567154379"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(956) 715-4379</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>McAllen, TX 78501</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/carloselectric1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href="https://www.youtube.com/@cbelectricacservices986"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
