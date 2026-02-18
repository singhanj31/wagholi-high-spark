import gsLogo from "@/assets/gs-group-logo.png";
import whsLogo from "@/assets/whs-logo.webp";
import { MapPin, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-popover border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <img src={gsLogo} alt="GS Group" className="h-14 w-auto" />
            <img src={whsLogo} alt="Wagholi High Street" className="h-12 w-auto" />
          </div>

          {/* Address */}
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
              <span>GS Wagholi High Street, Kesnand, Pune, 412207, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 flex-shrink-0 text-gold" />
              <a href="tel:7420807577" className="hover:text-foreground transition-colors">7420807577</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 flex-shrink-0 text-gold" />
              <a href="https://www.wagholihighstreet.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                www.wagholihighstreet.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-2">
            {["Overview", "Location", "Offerings", "Inventory", "Gallery", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 GS Group. All rights reserved. MAHA RERA: P52100079202
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
