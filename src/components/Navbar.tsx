import { useState } from "react";
import gsLogo from "@/assets/gs-group-logo.png";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Location", href: "#location" },
  { label: "Offerings", href: "#offerings" },
  { label: "Inventory", href: "#inventory" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#enquiry" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-popover/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* GS Group Logo */}
          <a href="#" className="flex-shrink-0">
            <img src={gsLogo} alt="GS Group" className="h-20 sm:h-24 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:7420807577"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Phone className="w-4 h-4" />
              <span>7420807577</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-popover border-t border-border animate-fade-in-up">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-muted transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7420807577"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium sm:hidden"
            >
              <Phone className="w-4 h-4" />
              7420807577
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
